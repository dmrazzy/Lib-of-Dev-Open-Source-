# Update Handling Implementation Guide

**Letzte Aktualisierung:** 08.01.2026  
**Version:** 2.0  
**Autor:** LenFi Development

---

## Inhaltsverzeichnis

1. [Überblick](#überblick)
2. [Architektur](#architektur)
3. [Versionscode-Format](#versionscode-format)
4. [Server-Konfiguration](#server-konfiguration)
5. [Core-Service: VersionUpdateManager](#core-service-versionupdatemanager)
6. [UI-Komponenten](#ui-komponenten)
7. [App-Integration](#app-integration)
8. [Update-Flow-Diagramme](#update-flow-diagramme)
9. [Testing & Debugging](#testing--debugging)
10. [Deployment](#deployment)
11. [Best Practices](#best-practices)

---

## Überblick

Das Update-Handling-System ermöglicht zentrale Versionskontrolle für React Native Apps über einen Remote-Server. Es unterstützt:

- ✅ **Force Updates** (Pflicht-Updates) - Blockiert die App komplett
- ✅ **Optional Updates** (Soft Updates) - User kann ablehnen
- ✅ **Minimale Version** - Automatisches Force Update bei zu alter Version
- ✅ **Multi-App-Support** - Ein Server für mehrere Apps
- ✅ **Plattform-spezifisch** - Separate URLs für Android/iOS
- ✅ **Serverbasiert** - Keine App-Updates für Konfigurationsänderungen nötig

### Hauptkomponenten

```
┌─────────────────────────────────────────────────┐
│             Remote Server (JSON)                │
│  https://www.lenfi.uk/scr_appversion...json     │
└───────────────┬─────────────────────────────────┘
                │
                │ fetch()
                ↓
┌─────────────────────────────────────────────────┐
│        VersionUpdateManager.js                  │
│    (Vergleich & Entscheidungslogik)             │
└───────────────┬─────────────────────────────────┘
                │
                ├─── UP_TO_DATE ────────→ Normale App
                │
                ├─── OPTIONAL_UPDATE ──→ OptionalUpdateModal
                │
                └─── FORCE_UPDATE ─────→ ForceUpdateScreen
                                           (blockiert App)
```

---

## Architektur

### Systemdesign

```
┌────────────────────────────────────────────────────────────┐
│                        App.js                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  useEffect(() => { checkVersion(); })                │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                         │
│                   ↓                                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │       VersionUpdateManager.checkAppVersion()         │  │
│  │  • Fetch JSON vom Server                             │  │
│  │  • Parse Versionscodes                                │  │
│  │  • Vergleiche mit App-Version                         │  │
│  │  • Return Status + Info                               │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                         │
│       ┌───────────┴──────────┬──────────────┐              │
│       ↓                      ↓              ↓              │
│  UP_TO_DATE          OPTIONAL_UPDATE   FORCE_UPDATE        │
│       │                      │              │              │
│       ↓                      ↓              ↓              │
│  [AppNavigator]    [OptionalUpdateModal]  [ForceUpdateScreen] │
│  (Normale App)     (kann schließen)     (blockiert)       │
└────────────────────────────────────────────────────────────┘
```

### Dateistruktur

```
src/
├── services/
│   └── VersionUpdateManager.js      # Core-Logik
├── components/
│   ├── ForceUpdateScreen.js         # Vollbild für Force Update
│   └── OptionalUpdateModal.js       # Popup für Optional Update
└── App.js                            # Integration & Lifecycle

public/
└── scr_appversionupdatemanager.json  # Server-Config (Beispiel)

Remote Server:
└── https://www.lenfi.uk/scr_appversionupdatemanager.json
```

---

## Versionscode-Format

### Format-Definition

```
TagMonatJahrRevision
DDMMYYYYR

Beispiel: 080120263
         ││││││││└─ Revision (3)
         │││││││└── Revision (6)
         ││││││└─── Revision (2)
         │││││└──── Jahr (2026)
         ││││└───── Jahr (0)
         │││└────── Jahr (2)
         ││└─────── Jahr (1)
         │└──────── Monat (01)
         └───────── Tag (08)

→ Bedeutung: 08.01.2026, Revision 263
```

### Warum String und nicht Number?

```javascript
// ❌ FALSCH - Führende Nullen gehen verloren!
{
  "latestCode": 080120263  // → wird zu 80120263 geparst
}

// ✅ RICHTIG - Als String speichern
{
  "latestCode": "080120263"  // → bleibt 080120263
}
```

### Revisionsnummer-Bedeutung

| Revision | Bedeutung |
|----------|-----------|
| 1        | Erste Version des Tages |
| 2, 3, ... | Bugfixes/Patches am selben Tag |
| 0        | ⚠️ Vermeiden! Kann zu Parsing-Problemen führen |

**Best Practice:** Starte bei 1, inkrementiere für jeden Build am selben Tag.

---

## Server-Konfiguration

### JSON-Struktur

**Datei:** `scr_appversionupdatemanager.json`

```json
{
  "app_key_1": {
    "latestCode": "080120263",
    "minSupportedCode": "010120261",
    "forceUpdate": false,
    "info": "Neue Features und Verbesserungen!",
    "updateUrlAndroid": "https://play.google.com/store/apps/details?id=com.example.app",
    "updateUrliOS": "https://apps.apple.com/app/id123456789"
  },
  "app_key_2": {
    "latestCode": "080120261",
    "minSupportedCode": "010120261",
    "forceUpdate": true,
    "info": "Kritisches Sicherheits-Update erforderlich!",
    "updateUrlAndroid": "https://play.google.com/store/apps/details?id=com.example.app2",
    "updateUrliOS": "https://apps.apple.com/app/id987654321"
  }
}
```

### Feld-Beschreibungen

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| `latestCode` | String | ✅ | Neueste verfügbare Version (Format: DDMMYYYYR) |
| `minSupportedCode` | String | ✅ | Minimale unterstützte Version (ältere = Force Update) |
| `forceUpdate` | Boolean | ✅ | Erzwingt Update auch wenn > minSupportedCode |
| `info` | String | ❌ | Info-Text für User (Changelog, Hinweise) |
| `updateUrlAndroid` | String | ❌ | Play Store URL (wird zu `market://` konvertiert) |
| `updateUrliOS` | String | ❌ | App Store URL |

### App-Key Konfiguration

Im Code (`VersionUpdateManager.js`):

```javascript
const APP_KEY = 'lib_of_dev';  // Muss mit JSON-Key übereinstimmen!
```

**Multi-App-Unterstützung:**
- Ein Server-JSON kann mehrere Apps verwalten
- Jede App hat einen eindeutigen Key
- Apps können unterschiedliche Update-Strategien haben

### Update-Szenarien

#### Szenario 1: Optional Update
```json
{
  "latestCode": "080120263",
  "minSupportedCode": "010120261",
  "forceUpdate": false
}
```
**Wenn App = 050120262:**
- ✅ App >= minSupported (01.01.2026)
- ✅ App < latest (08.01.2026)
- ✅ forceUpdate = false
- **→ Ergebnis: OPTIONAL_UPDATE**

#### Szenario 2: Force Update (zu alt)
```json
{
  "latestCode": "080120263",
  "minSupportedCode": "010120261",
  "forceUpdate": false
}
```
**Wenn App = 151220251:**
- ❌ App < minSupported (15.12.2025 < 01.01.2026)
- **→ Ergebnis: FORCE_UPDATE**

#### Szenario 3: Force Update (erzwungen)
```json
{
  "latestCode": "080120263",
  "minSupportedCode": "010120261",
  "forceUpdate": true  // ← Erzwingt Update!
}
```
**Wenn App = 050120262:**
- ✅ App >= minSupported
- ✅ App < latest
- ⚠️ forceUpdate = true
- **→ Ergebnis: FORCE_UPDATE**

---

## Core-Service: VersionUpdateManager

### Hauptfunktionen

#### 1. checkAppVersion()

```javascript
export const checkAppVersion = async () => {
  // 1. Fetch JSON vom Server
  const response = await fetch(VERSION_CHECK_URL);
  const data = await response.json();
  
  // 2. Extrahiere App-Daten
  const appData = data[APP_KEY];
  
  // 3. Parse Versionscodes
  const currentParsed = parseVersionCode(CURRENT_VERSION_CODE);
  const latestParsed = parseVersionCode(appData.latestCode);
  const minSupportedParsed = parseVersionCode(appData.minSupportedCode);
  
  // 4. Vergleiche Versionen
  const comparedToMin = compareVersionCodes(CURRENT_VERSION_CODE, appData.minSupportedCode);
  const comparedToLatest = compareVersionCodes(CURRENT_VERSION_CODE, appData.latestCode);
  
  // 5. Entscheide Status
  if (comparedToMin < 0) {
    return { status: UpdateStatus.FORCE_UPDATE, /* ... */ };
  } else if (comparedToLatest < 0) {
    if (appData.forceUpdate) {
      return { status: UpdateStatus.FORCE_UPDATE, /* ... */ };
    }
    return { status: UpdateStatus.OPTIONAL_UPDATE, /* ... */ };
  }
  
  return { status: UpdateStatus.UP_TO_DATE, /* ... */ };
};
```

**Rückgabe-Objekt:**
```javascript
{
  status: 'up_to_date' | 'optional_update' | 'force_update' | 'error',
  currentCode: 80120263,
  latestCode: 80120263,
  minSupportedCode: 70120261,
  forceUpdate: false,
  info: 'Neue Features verfügbar!',
  updateUrlAndroid: 'https://play.google.com/...',
  updateUrliOS: 'https://apps.apple.com/...',
  error?: 'Fehlermeldung bei ERROR-Status'
}
```

#### 2. parseVersionCode()

```javascript
const parseVersionCode = (code) => {
  const codeStr = code.toString().padStart(9, '0');
  
  const day = parseInt(codeStr.substring(0, 2), 10);
  const month = parseInt(codeStr.substring(2, 4), 10) - 1; // 0-basiert!
  const year = parseInt(codeStr.substring(4, 8), 10);
  const revision = parseInt(codeStr.substring(8), 10);
  
  return {
    date: new Date(year, month, day),
    revision,
    numericCode: parseInt(code, 10)
  };
};
```

**Wichtig:** Monat ist 0-basiert (0=Januar, 11=Dezember) für `Date`-Objekt.

#### 3. compareVersionCodes()

```javascript
const compareVersionCodes = (code1, code2) => {
  const v1 = parseVersionCode(code1);
  const v2 = parseVersionCode(code2);
  
  // 1. Vergleiche Datum (Jahr → Monat → Tag)
  if (v1.date < v2.date) return -1;
  if (v1.date > v2.date) return 1;
  
  // 2. Bei gleichem Datum: Vergleiche Revision
  if (v1.revision < v2.revision) return -1;
  if (v1.revision > v2.revision) return 1;
  
  return 0; // Identisch
};
```

**Vergleichslogik:**
- Primär: Datum-Vergleich
- Sekundär: Revision-Vergleich (nur bei gleichem Datum)
- Return: -1 (kleiner), 0 (gleich), 1 (größer)

#### 4. formatVersionCode()

```javascript
export const formatVersionCode = (code) => {
  const codeStr = code.toString().padStart(9, '0');
  const tag = codeStr.substring(0, 2);
  const monat = codeStr.substring(2, 4);
  const jahr = codeStr.substring(4, 8);
  const revision = codeStr.substring(8);
  
  return `${tag}.${monat}.${jahr} (Rev. ${parseInt(revision)})`;
};

// Beispiel: 080120263 → "08.01.2026 (Rev. 263)"
```

#### 5. getPlatformUpdateUrl()

```javascript
export const getPlatformUpdateUrl = (androidUrl, iosUrl) => {
  const { Platform } = require('react-native');
  
  if (Platform.OS === 'ios') {
    return iosUrl;
  }
  
  // Android: Konvertiere zu market:// für direkte App-Öffnung
  if (androidUrl) {
    const match = androidUrl.match(/id=([^&]+)/);
    if (match && match[1]) {
      return `market://details?id=${match[1]}`;
    }
  }
  
  return androidUrl;
};

// Play Store URL → market:// URI
// https://play.google.com/store/apps/details?id=com.example.app
// → market://details?id=com.example.app
```

---

## UI-Komponenten

### 1. ForceUpdateScreen.js

**Zweck:** Vollbild-Screen für Pflicht-Updates (Hard Update)

**Verhalten:**
- ✅ Blockiert die App komplett
- ✅ Kein "Zurück"-Button
- ✅ Verhindert Hardware-Back-Button (Android)
- ✅ Kann nicht geschlossen werden
- ✅ Einzige Aktion: "Jetzt aktualisieren"

**Implementation:**

```javascript
const ForceUpdateScreen = ({ visible, updateInfo }) => {
  // Verhindere Back-Button
  React.useEffect(() => {
    if (visible) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => true  // Return true = blockiert
      );
      return () => backHandler.remove();
    }
  }, [visible]);

  const handleUpdate = async () => {
    const url = getPlatformUpdateUrl(
      updateInfo.updateUrlAndroid,
      updateInfo.updateUrliOS
    );
    await Linking.openURL(url);
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={false}
      onRequestClose={() => {}}  // Leere Funktion = nicht schließbar
    >
      <View style={styles.container}>
        <Text style={styles.title}>Update erforderlich</Text>
        <Text style={styles.description}>
          Um die App weiter nutzen zu können, musst du auf die neueste 
          Version aktualisieren.
        </Text>
        <TouchableOpacity onPress={handleUpdate}>
          <Text>Jetzt aktualisieren</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
```

**Key-Features:**
- Modal mit `transparent={false}` (Vollbild)
- `onRequestClose={() => {}}` verhindert Schließen
- BackHandler blockiert Hardware-Button
- Öffnet Store direkt via `Linking.openURL()`

### 2. OptionalUpdateModal.js

**Zweck:** Popup/Modal für optionale Updates (Soft Update)

**Verhalten:**
- ✅ Kann vom User geschlossen werden
- ✅ "Später"-Button vorhanden
- ✅ "Jetzt aktualisieren"-Button
- ✅ Zeigt Versions-Informationen
- ✅ Zeigt Changelog (info-Feld)

**Implementation:**

```javascript
const OptionalUpdateModal = ({ visible, updateInfo, onDismiss }) => {
  const handleUpdate = async () => {
    const url = getPlatformUpdateUrl(
      updateInfo.updateUrlAndroid,
      updateInfo.updateUrliOS
    );
    await Linking.openURL(url);
    onDismiss?.();  // Schließe Modal nach Öffnen des Stores
  };

  const handleLater = () => {
    onDismiss?.();  // User hat abgelehnt
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}  // Overlay-Stil
      onRequestClose={handleLater}  // Erlaubt Schließen
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Update verfügbar</Text>
          
          {/* Versions-Info */}
          <Text>
            Aktuell: {formatVersionCode(updateInfo.currentCode)}
          </Text>
          <Text>
            Neueste: {formatVersionCode(updateInfo.latestCode)}
          </Text>
          
          {/* Changelog */}
          {updateInfo.info && <Text>{updateInfo.info}</Text>}
          
          {/* Buttons */}
          <TouchableOpacity onPress={handleUpdate}>
            <Text>Jetzt aktualisieren</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLater}>
            <Text>Später</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
```

**Key-Features:**
- Modal mit `transparent={true}` (Overlay)
- `onRequestClose={handleLater}` erlaubt Schließen
- Zwei Buttons: "Update" und "Später"
- Zeigt formatierte Versions-Informationen
- Callback `onDismiss` für State-Management

---

## App-Integration

### App.js - Komplette Implementation

```javascript
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import ForceUpdateScreen from './src/components/ForceUpdateScreen';
import OptionalUpdateModal from './src/components/OptionalUpdateModal';
import { checkAppVersion, UpdateStatus } from './src/services/VersionUpdateManager';

export default function App() {
  const [isCheckingVersion, setIsCheckingVersion] = useState(true);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [showOptionalUpdate, setShowOptionalUpdate] = useState(false);

  useEffect(() => {
    checkVersion();
  }, []);

  const checkVersion = async () => {
    try {
      const versionInfo = await checkAppVersion();
      setUpdateInfo(versionInfo);

      // Optional Update Modal nur einmal beim Start zeigen
      if (versionInfo.status === UpdateStatus.OPTIONAL_UPDATE) {
        setShowOptionalUpdate(true);
      }
    } catch (error) {
      console.error('Fehler bei Versionsprüfung:', error);
    } finally {
      setIsCheckingVersion(false);
    }
  };

  // Phase 1: Loading während Versionsprüfung
  if (isCheckingVersion) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  // Phase 2: Force Update (blockiert App komplett)
  if (updateInfo?.status === UpdateStatus.FORCE_UPDATE) {
    return <ForceUpdateScreen visible={true} updateInfo={updateInfo} />;
  }

  // Phase 3: Normale App mit optionalem Update Modal
  return (
    <>
      <AppNavigator />
      <OptionalUpdateModal
        visible={showOptionalUpdate}
        updateInfo={updateInfo}
        onDismiss={() => setShowOptionalUpdate(false)}
      />
    </>
  );
}
```

### Lifecycle-Phasen

```
App-Start
   ↓
[isCheckingVersion = true]
   ↓
<ActivityIndicator />  ← Loading-Screen
   ↓
checkAppVersion()
   ↓
┌──────────────────────┐
│  Status-Entscheidung │
└──────────────────────┘
   │
   ├─→ FORCE_UPDATE ────→ <ForceUpdateScreen /> (blockiert)
   │
   ├─→ OPTIONAL_UPDATE ─→ <AppNavigator />
   │                      + <OptionalUpdateModal visible />
   │
   └─→ UP_TO_DATE ──────→ <AppNavigator /> (normal)
```

### State-Management

```javascript
// State-Variablen
const [isCheckingVersion, setIsCheckingVersion] = useState(true);
// → true während API-Call, false danach

const [updateInfo, setUpdateInfo] = useState(null);
// → Enthält komplettes versionInfo-Objekt vom Server

const [showOptionalUpdate, setShowOptionalUpdate] = useState(false);
// → Kontrolliert Sichtbarkeit des OptionalUpdateModal
// → Wird nur bei OPTIONAL_UPDATE auf true gesetzt
```

### Warum nur beim Start prüfen?

```javascript
useEffect(() => {
  checkVersion();  // Nur einmal beim Mount
}, []);  // Leeres Dependency-Array!
```

**Gründe:**
1. **Performance:** Keine wiederholten API-Calls
2. **UX:** Keine Unterbrechungen während Nutzung
3. **Server-Last:** Reduziert Anfragen
4. **Best Practice:** Updates werden bei App-Start installiert

**Optionale Erweiterung:**
```javascript
useEffect(() => {
  checkVersion();
  
  // Optional: Prüfe alle 24 Stunden
  const interval = setInterval(checkVersion, 24 * 60 * 60 * 1000);
  return () => clearInterval(interval);
}, []);
```

---

## Update-Flow-Diagramme

### Flow 1: Optional Update

```
┌─────────────────┐
│   App-Start     │
└────────┬────────┘
         │
         ↓
┌─────────────────────────┐
│ checkAppVersion()       │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────┐
│ Status: OPTIONAL_UPDATE │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────┐
│ showOptionalUpdate=true │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────────────┐
│   <AppNavigator />              │
│      +                          │
│   <OptionalUpdateModal />       │
│   ┌──────────────────────┐      │
│   │ ✨ Update verfügbar  │      │
│   │                      │      │
│   │ [Jetzt aktualisieren]│      │
│   │ [Später]             │      │
│   └──────────────────────┘      │
└─────────┬───────────┬───────────┘
          │           │
   User klickt:    User klickt:
   "Aktualisieren"  "Später"
          │           │
          ↓           ↓
   ┌───────────┐  ┌─────────────┐
   │ Öffne     │  │ Modal       │
   │ Store     │  │ schließen   │
   └───────────┘  └──────┬──────┘
                         │
                         ↓
                  ┌─────────────┐
                  │ App normal  │
                  │ nutzbar     │
                  └─────────────┘
```

### Flow 2: Force Update

```
┌─────────────────┐
│   App-Start     │
└────────┬────────┘
         │
         ↓
┌─────────────────────────┐
│ checkAppVersion()       │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────┐
│ Status: FORCE_UPDATE    │
│ (App < minSupported     │
│  ODER forceUpdate=true) │
└────────┬────────────────┘
         │
         ↓
┌──────────────────────────────────┐
│   <ForceUpdateScreen />          │
│   ┌────────────────────────┐     │
│   │ 🔄 Update erforderlich │     │
│   │                        │     │
│   │ Um die App weiter      │     │
│   │ nutzen zu können...    │     │
│   │                        │     │
│   │ [Jetzt aktualisieren]  │     │
│   └────────────────────────┘     │
│                                  │
│   • Kein "Zurück"-Button         │
│   • Hardware-Back blockiert      │
│   • Kann nicht geschlossen werden│
└──────────────┬───────────────────┘
               │
               ↓ User klickt "Aktualisieren"
         ┌───────────┐
         │ Öffne     │
         │ Store     │
         └─────┬─────┘
               │
               ↓
         ┌───────────┐
         │ User geht │
         │ zum Store │
         │ und       │
         │ updated   │
         └─────┬─────┘
               │
               ↓
         ┌───────────┐
         │ User      │
         │ startet   │
         │ App neu   │
         └─────┬─────┘
               │
               ↓
         ┌───────────┐
         │ Version   │
         │ aktuell   │
         │ → Normal  │
         └───────────┘
```

### Flow 3: Error Handling

```
┌─────────────────┐
│   App-Start     │
└────────┬────────┘
         │
         ↓
┌─────────────────────────┐
│ checkAppVersion()       │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────┐
│ try { fetch() }         │
└────────┬────────────────┘
         │
    Fehler? (Netzwerk, JSON, etc.)
         │
         ↓ YES
┌─────────────────────────┐
│ catch (error)           │
│ console.error()         │
│ return {                │
│   status: 'error',      │
│   error: message        │
│ }                       │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────┐
│ Status: ERROR           │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────┐
│ App läuft normal        │
│ (fail-safe)             │
│                         │
│ → Keine Blockierung     │
│ → Log error for debug   │
└─────────────────────────┘
```

**Wichtig:** Bei Fehlern wird die App **nicht** blockiert (Fail-Safe-Prinzip).

---

## Testing & Debugging

### Lokales Testen

#### 1. Temporäre Anpassung der App-Version

```javascript
// In VersionUpdateManager.js
const CURRENT_VERSION_CODE = '010120261';  // ← Setze alte Version zum Testen
```

**Test-Szenarien:**

| Test | App Version | Server Latest | Server Min | Erwartetes Ergebnis |
|------|-------------|---------------|------------|---------------------|
| 1    | 010120261   | 080120263     | 010120261  | OPTIONAL_UPDATE     |
| 2    | 151220251   | 080120263     | 010120261  | FORCE_UPDATE (zu alt) |
| 3    | 080120263   | 080120263     | 010120261  | UP_TO_DATE          |
| 4    | 050120262   | 080120263 + forceUpdate:true | 010120261 | FORCE_UPDATE (erzwungen) |

#### 2. Lokale JSON-Datei (Development)

```javascript
// Temporär für lokales Testen
const VERSION_CHECK_URL = 'http://localhost:3000/test-version.json';
// oder
const VERSION_CHECK_URL = require('./test-data.json');  // Import direkt
```

#### 3. Console-Logging nutzen

Das System loggt umfangreich:

```javascript
console.log('🔍 Prüfe App-Version...');
console.log('📡 URL:', VERSION_CHECK_URL);
console.log('📄 Server-Response erhalten...');
console.log('✅ App-Daten gefunden:', appData);
console.log('🔢 Version-Vergleich:');
console.log('  - Aktuell:', currentCodeNum);
console.log('  - Neueste:', latestCodeNum);
console.log('  - Min. unterstützt:', minSupportedCodeNum);
console.log('⚠️ FORCE UPDATE: Version zu alt');
console.log('ℹ️ OPTIONAL UPDATE: Neuere Version verfügbar');
console.log('✅ UP TO DATE: App ist aktuell');
```

**Im Metro Bundler Terminal:**
```bash
npm start
# Logs erscheinen hier
```

### Debug-Modus

Füge zusätzliche Debug-Informationen hinzu:

```javascript
const DEBUG_MODE = __DEV__;  // true in Development

if (DEBUG_MODE) {
  console.log('🐛 DEBUG: Parsed Versions:', {
    current: currentParsed,
    latest: latestParsed,
    minSupported: minSupportedParsed,
    comparedToMin,
    comparedToLatest
  });
}
```

### Test-Checklist

- [ ] **Optional Update anzeigen:** App < latest, forceUpdate=false
- [ ] **Optional Update ablehnen:** "Später"-Button funktioniert
- [ ] **Optional Update akzeptieren:** Store öffnet sich
- [ ] **Force Update (zu alt):** App < minSupported → blockiert
- [ ] **Force Update (erzwungen):** forceUpdate=true → blockiert
- [ ] **Force Update Back-Button:** Hardware-Back funktioniert nicht
- [ ] **Up-to-date:** App = latest → keine Meldung
- [ ] **Neuere App-Version:** App > latest → keine Meldung
- [ ] **Netzwerkfehler:** App läuft trotzdem (nicht blockiert)
- [ ] **Ungültiges JSON:** Error-Handling funktioniert
- [ ] **Fehlender App-Key:** Error-Handling funktioniert

### Häufige Probleme

#### Problem 1: JSON Parse Error

```
❌ JSON Parse Fehler: Unexpected number in JSON at position 42
```

**Ursache:** Versionscodes als Number statt String

**Lösung:**
```json
// ❌ FALSCH
{ "latestCode": 080120263 }

// ✅ RICHTIG
{ "latestCode": "080120263" }
```

#### Problem 2: App-Key nicht gefunden

```
❌ App-Daten für "lib_of_dev" nicht gefunden in JSON
```

**Ursache:** APP_KEY stimmt nicht mit JSON überein

**Lösung:**
```javascript
// Code
const APP_KEY = 'lib_of_dev';

// JSON - Key muss exakt übereinstimmen!
{
  "lib_of_dev": { /* ... */ }
}
```

#### Problem 3: Store öffnet nicht

```
❌ Update-URL kann nicht geöffnet werden
```

**Ursache:** Ungültige Store-URL oder fehlende Permissions

**Lösung:**
- Prüfe URL-Format
- Android: `LSApplicationQueriesSchemes` in Info.plist (iOS)
- Android: Market-URI wird automatisch konvertiert

---

## Deployment

### Schritt 1: App-Version aktualisieren

```javascript
// src/services/VersionUpdateManager.js
const CURRENT_VERSION_CODE = '080120263';  // ← Aktualisiere bei jedem Build!
```

**Wichtig:** Diese Version muss **vor** dem Build gesetzt werden!

### Schritt 2: Build erstellen

```bash
# Android
eas build --platform android --profile production

# iOS
eas build --platform ios --profile production

# Beide
eas build --platform all --profile production
```

### Schritt 3: Server-JSON aktualisieren

**Vor** der Store-Veröffentlichung:

```json
{
  "lib_of_dev": {
    "latestCode": "080120263",  // ← Neue Version
    "minSupportedCode": "010120261",
    "forceUpdate": false,
    "info": "• Neue Features\n• Bugfixes\n• Performance-Verbesserungen",
    "updateUrlAndroid": "https://play.google.com/store/apps/details?id=com.lenfi.libofdev",
    "updateUrliOS": "https://apps.apple.com/app/id123456789"
  }
}
```

**Upload zu:**
```
https://www.lenfi.uk/scr_appversionupdatemanager.json
```

### Schritt 4: Store-Veröffentlichung

1. Upload Build zu Play Store / App Store
2. Warte auf Review-Approval
3. Veröffentliche App

### Schritt 5: Force Update aktivieren (optional)

**Wenn kritischer Bugfix nötig:**

```json
{
  "lib_of_dev": {
    "latestCode": "080120263",
    "minSupportedCode": "080120263",  // ← Auf neueste Version setzen
    "forceUpdate": true,              // ← Aktiviere Force Update
    "info": "Kritisches Sicherheits-Update erforderlich!",
    "updateUrlAndroid": "...",
    "updateUrliOS": "..."
  }
}
```

**Alle User mit Version < 080120263 bekommen jetzt Force Update!**

### Deployment-Timeline

```
Tag 1: Entwicklung
├─ Code-Änderungen
├─ CURRENT_VERSION_CODE = "080120263"
└─ Lokales Testing

Tag 2: Build
├─ eas build (Android/iOS)
└─ APK/IPA erstellt

Tag 3: Server-Update
├─ JSON aktualisieren (latestCode = "080120263")
└─ Upload zu Server

Tag 4: Store-Submission
├─ Upload zu Play Store
├─ Upload zu App Store
└─ Warte auf Review

Tag 5-7: Review-Prozess
└─ Store-Review läuft

Tag 8: Veröffentlichung
├─ App live im Store
└─ User bekommen Update-Benachrichtigung

Optional - Tag 9: Force Update
├─ Wenn nötig: minSupportedCode hochsetzen
└─ forceUpdate = true aktivieren
```

---

## Best Practices

### 1. Versionscodes generieren

**Automatisches Script:**

```javascript
// scripts/generateVersionCode.js
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

// Revision manuell inkrementieren oder aus Git-Commits
const revision = 1;

const versionCode = `${day}${month}${year}${revision}`;
console.log(`Next version: ${versionCode}`);
```

**In package.json:**
```json
{
  "scripts": {
    "version:next": "node scripts/generateVersionCode.js"
  }
}
```

### 2. Versionscode in app.json synchron halten

```json
{
  "expo": {
    "version": "1.0.263",
    "android": {
      "versionCode": 80120263
    },
    "ios": {
      "buildNumber": "080120263"
    }
  }
}
```

### 3. Changelog im info-Feld

```json
{
  "info": "Version 1.0.263\n\n✨ Neue Features:\n• Dark Mode Support\n• Offline-Modus\n\n🐛 Bugfixes:\n• Performance-Verbesserungen\n• Stabilitätsverbesserungen"
}
```

**Formatierung:**
- `\n` für Zeilenumbrüche
- Emojis für visuelle Struktur
- Kurz und prägnant

### 4. Gestaffelte Rollouts

```json
// Phase 1: Optional Update (Tag 1-3)
{
  "latestCode": "080120263",
  "minSupportedCode": "010120261",
  "forceUpdate": false
}

// Phase 2: Force für alte Versionen (Tag 4-7)
{
  "latestCode": "080120263",
  "minSupportedCode": "050120262",  // ← Erhöht
  "forceUpdate": false
}

// Phase 3: Force für alle (Tag 8+)
{
  "latestCode": "080120263",
  "minSupportedCode": "080120263",  // ← Alle müssen updaten
  "forceUpdate": true
}
```

### 5. Error-Monitoring

```javascript
export const checkAppVersion = async () => {
  try {
    // ... existing code ...
  } catch (error) {
    // In Production: Sende zu Error-Tracking-Service
    if (!__DEV__) {
      Sentry.captureException(error);
      // oder
      Analytics.logError('version_check_failed', { error: error.message });
    }
    
    return {
      status: UpdateStatus.ERROR,
      // ...
    };
  }
};
```

### 6. Cache-Strategie (Optional)

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY = 'version_check_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 Stunde

export const checkAppVersion = async () => {
  // Prüfe Cache
  const cached = await AsyncStorage.getItem(CACHE_KEY);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;  // Return cached data
    }
  }
  
  // Fetch from server
  const data = await fetchFromServer();
  
  // Save to cache
  await AsyncStorage.setItem(CACHE_KEY, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
  
  return data;
};
```

### 7. Analytics einbauen

```javascript
export const checkAppVersion = async () => {
  const versionInfo = await checkAppVersion();
  
  // Log Update-Status
  Analytics.logEvent('version_check_completed', {
    status: versionInfo.status,
    currentVersion: versionInfo.currentCode,
    latestVersion: versionInfo.latestCode,
    updateAvailable: versionInfo.status !== UpdateStatus.UP_TO_DATE
  });
  
  return versionInfo;
};
```

### 8. Testing-Umgebung

```javascript
// config.js
const ENV = {
  development: {
    versionCheckUrl: 'http://localhost:3000/test-version.json',
    appKey: 'lib_of_dev_test'
  },
  production: {
    versionCheckUrl: 'https://www.lenfi.uk/scr_appversionupdatemanager.json',
    appKey: 'lib_of_dev'
  }
};

export default ENV[__DEV__ ? 'development' : 'production'];
```

---

## Zusammenfassung

### System-Vorteile

✅ **Serverbasiert** - Keine App-Updates für Konfig-Änderungen  
✅ **Flexibel** - Force/Optional Updates nach Bedarf  
✅ **Multi-App** - Ein Server für mehrere Apps  
✅ **Plattform-agnostisch** - Android & iOS Support  
✅ **Fail-Safe** - App läuft auch bei Errors  
✅ **User-Friendly** - Klare UI und Kommunikation  

### Implementierungs-Checklist

- [ ] VersionUpdateManager.js implementiert
- [ ] ForceUpdateScreen.js erstellt
- [ ] OptionalUpdateModal.js erstellt
- [ ] App.js integriert
- [ ] Server-JSON konfiguriert
- [ ] Store-URLs eingetragen
- [ ] Lokal getestet (alle Szenarien)
- [ ] Build erstellt mit korrekter Version
- [ ] Server-JSON deployed
- [ ] Store-Submission durchgeführt
- [ ] Production-Test nach Veröffentlichung

### Maintenance

**Bei jedem neuen Release:**
1. CURRENT_VERSION_CODE in Code aktualisieren
2. Build erstellen
3. Server-JSON aktualisieren (latestCode)
4. Store-Submission
5. Optional: Force Update nach einigen Tagen

**Bei kritischen Bugs:**
1. Hotfix-Build erstellen (neue Version)
2. Server-JSON: minSupportedCode auf neue Version
3. Server-JSON: forceUpdate = true
4. Alle alten Versionen werden geblockt

---

**Dokumentation Version:** 2.0  
**Letztes Update:** 08.01.2026  
**Autor:** LenFi Development  
**Status:** ✅ Produktionsbereit
