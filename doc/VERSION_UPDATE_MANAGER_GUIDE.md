# App Version Update Manager - Implementierungsleitfaden

## Übersicht

Das App Version Update Management System ermöglicht die zentrale Steuerung von App-Updates über eine JSON-Datei auf einem Server. Das System unterstützt sowohl optionale als auch erzwungene Updates.

## 🏗️ Architektur

### Komponenten

1. **VersionUpdateManager.js** - Service für Versionsprüfung
2. **ForceUpdateScreen.js** - Vollbild-Screen für Pflicht-Updates
3. **OptionalUpdateModal.js** - Modal für optionale Updates
4. **App.js** - Integration beim App-Start

## 📋 Versionscode-Format

**Format:** `TagMonatJahrRevision`

**Beispiele:**
- `080120263` = 08.01.2026, Revision 3
- `150220261` = 15.02.2026, Revision 1
- `311220264` = 31.12.2026, Revision 4

Das Format ermöglicht einfache numerische Vergleiche ohne komplexe Parsing-Logik.

## 🌐 Server-Setup

### JSON-Datei auf Vercel

**URL:** `https://www.lenfi.uk/scr_appversionupdatemanager.json`

**Struktur:**
```json
{
  "lib_of_dev": {
    "latestCode": "080120263",
    "minSupportedCode": "010120261",
    "forceUpdate": false,
    "info": "Neue Features und Verbesserungen.",
    "updateUrlAndroid": "https://play.google.com/store/apps/details?id=com.example.libofdev",
    "updateUrliOS": "https://apps.apple.com/app/id123456789"
  },
  "moving_planner": {
    "latestCode": "080120262",
    "minSupportedCode": "010120261",
    "forceUpdate": true,
    "info": "Wichtiges Sicherheitsupdate.",
    "updateUrlAndroid": "",
    "updateUrliOS": ""
  },
  "ffw_einsatzapp": {
    "latestCode": "080120261",
    "minSupportedCode": "080120261",
    "forceUpdate": false,
    "info": "Einsatzdaten aktualisiert.",
    "updateUrlAndroid": "",
    "updateUrliOS": ""
  }
}
```

### Felder-Erklärung

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `latestCode` | String | Neuester verfügbarer Versionscode (als String wegen führender Null) |
| `minSupportedCode` | String | Minimal unterstützter Versionscode (als String wegen führender Null) |
| `forceUpdate` | Boolean | Erzwingt Update auch wenn Version > minSupportedCode |
| `info` | String | Info-Text für Benutzer (Was ist neu?) |
| `updateUrlAndroid` | String | Play Store Link für Android |
| `updateUrliOS` | String | App Store Link für iOS |

## 🔧 Konfiguration

### 1. Versionscode in VersionUpdateManager.js anpassen

```javascript
const CURRENT_VERSION_CODE = '080120263'; // Deine aktuelle Version (als String)
const APP_KEY = 'lib_of_dev';             // Dein App-Key in der JSON
```

### 2. Update-URLs konfigurieren

Die URLs in der JSON-Datei auf dem Server müssen auf die Store-Links zeigen:

**Android (Play Store):**
```
https://play.google.com/store/apps/details?id=com.deinpaket.name
```

**iOS (App Store):**
```
https://apps.apple.com/app/id[DEINE_APP_ID]
```

## 🎯 Update-Logik

### Entscheidungsbaum

```
App startet
    ↓
Versionsprüfung (checkAppVersion)
    ↓
┌─────────────────────────────┐
│ currentCode < minSupported? │
└─────────────────────────────┘
    ↓ JA                    ↓ NEIN
FORCE UPDATE         ┌──────────────────────┐
                     │ currentCode < latest?│
                     └──────────────────────┘
                         ↓ JA           ↓ NEIN
                     ┌──────────┐    UP TO DATE
                     │forceUpdate?│
                     └──────────┘
                      ↓ JA   ↓ NEIN
                  FORCE  OPTIONAL
                  UPDATE UPDATE
```

### Update-Typen

#### 1. **Force Update (Pflicht-Update)**
- Vollbild-Screen
- Keine Möglichkeit zu schließen
- Hardware-Back-Button deaktiviert
- Blockiert die komplette App
- Wird ausgelöst wenn:
  - `currentCode < minSupportedCode`
  - ODER `currentCode < latestCode && forceUpdate === true`

#### 2. **Optional Update (Soft Update)**
- Modal/Popup
- "Später" und "Jetzt aktualisieren" Buttons
- Kann geschlossen werden
- App funktioniert weiter
- Wird ausgelöst wenn:
  - `currentCode < latestCode && forceUpdate === false`

#### 3. **Up to Date**
- Keine Anzeige
- App startet normal

## 📱 Verwendung

### Automatischer Check beim App-Start

Das System ist bereits in [App.js](../App.js) integriert und prüft automatisch beim App-Start:

```javascript
useEffect(() => {
  checkVersion();
}, []);
```

### Manueller Check

Falls du an anderer Stelle einen Check durchführen möchtest:

```javascript
import { checkAppVersion, UpdateStatus } from './services/VersionUpdateManager';

const manualCheck = async () => {
  const versionInfo = await checkAppVersion();
  
  switch(versionInfo.status) {
    case UpdateStatus.FORCE_UPDATE:
      // Zeige Force Update Screen
      break;
    case UpdateStatus.OPTIONAL_UPDATE:
      // Zeige Optional Update Modal
      break;
    case UpdateStatus.UP_TO_DATE:
      // Alles aktuell
      break;
    case UpdateStatus.ERROR:
      // Fehler behandeln
      break;
  }
};
```

## 🎨 UI-Anpassungen

### Farben ändern

Die Komponenten verwenden hartcodierte Farben. Um sie anzupassen:

**ForceUpdateScreen.js:**
```javascript
backgroundColor: '#1a1a2e',  // Haupt-Hintergrund
backgroundColor: '#16213e',  // Karten/Boxen
borderLeftColor: '#4a90e2', // Akzentfarbe
```

**OptionalUpdateModal.js:**
```javascript
backgroundColor: '#1a1a2e',  // Modal-Hintergrund
backgroundColor: '#16213e',  // Karten/Boxen
borderLeftColor: '#50c878', // Akzentfarbe (Grün)
```

### Texte anpassen

Texte können direkt in den Komponenten geändert werden oder über i18n internationalisiert werden.

## 🚀 Deployment-Workflow

### Schritt 1: Version hochzählen

Neues Update vorbereiten:
```javascript
// In VersionUpdateManager.js
const CURRENT_VERSION_CODE = '090120261'; // Neue Version (als String)
```

### Schritt 2: App bauen und testen

```bash
# Für Android
npm run android

# Für iOS
npm run ios
```

### Schritt 3: App in Stores hochladen

- Android: Play Console
- iOS: App Store Connect

### Schritt 4: JSON-Datei auf Server aktualisieren

Aktualisiere `scr_appversionupdatemanager.json` auf Vercel:

```json
{
  "lib_of_dev": {
    "latestCode": "090120261",        // Neue Version
    "minSupportedCode": "010120261",  // Älteste unterstützte Version
    "forceUpdate": false,              // true = Pflicht, false = optional
    "info": "Bug-Fixes und Performance-Verbesserungen.",
    "updateUrlAndroid": "https://play.google.com/...",
    "updateUrliOS": "https://apps.apple.com/..."
  }
}
```

### Schritt 5: Testen

1. Installiere alte Version auf Test-Gerät
2. Starte App
3. Prüfe ob Update-Dialog erscheint
4. Teste Update-Flow

## 🧪 Testing-Szenarien

### Szenario 1: Optionales Update
```json
{
  "latestCode": "100120261",
  "minSupportedCode": "010120261",
  "forceUpdate": false
}
```
Mit `CURRENT_VERSION_CODE = '080120261'` → Optional Update Modal

### Szenario 2: Force Update (zu alte Version)
```json
{
  "latestCode": "100120261",
  "minSupportedCode": "090120261",
  "forceUpdate": false
}
```
Mit `CURRENT_VERSION_CODE = '080120261'` → Force Update Screen

### Szenario 3: Force Update (erzwungen)
```json
{
  "latestCode": "100120261",
  "minSupportedCode": "010120261",
  "forceUpdate": true
}
```
Mit `CURRENT_VERSION_CODE = '080120261'` → Force Update Screen

### Szenario 4: Aktuell
```json
{
  "latestCode": "080120261",
  "minSupportedCode": "010120261",
  "forceUpdate": false
}
```
Mit `CURRENT_VERSION_CODE = '080120261'` → Keine Anzeige

## 🔒 Best Practices

### 1. Versionsverwaltung
- **Immer hochzählen:** Versionscodes müssen strikt monoton steigend sein
- **Revisions-Nummerierung:** Nutze Revisionen für Bugfix-Updates am selben Tag
- **Dokumentation:** Halte eine Liste mit allen Versionscodes und Änderungen

### 2. minSupportedCode setzen
- **Konservativ:** Nur hochsetzen bei Breaking Changes
- **Kommunikation:** Warne Benutzer im Voraus über Mindestversion-Änderungen
- **Testing:** Teste gründlich mit alten Versionen

### 3. forceUpdate verwenden
- **Sparsam einsetzen:** Nur bei kritischen Bugs/Sicherheitslücken
- **Zeitlich begrenzen:** Nach einigen Tagen auf `false` setzen
- **Alternative:** Besser `minSupportedCode` erhöhen

### 4. Info-Texte
- **Kurz und klar:** 1-2 Sätze reichen
- **Mehrsprachig:** Nutze JSON-Struktur für verschiedene Sprachen
- **Vorteil kommunizieren:** Was bringt das Update?

### 5. Update-URLs
- **Immer testen:** URLs vor Deploy prüfen
- **Store-URLs nutzen:** Keine direkten APK/IPA-Links
- **Fallback:** Prüfe ob URL leer ist und handle entsprechend

## 🐛 Troubleshooting

### Problem: Update-Check schlägt fehl

**Ursache:** Server nicht erreichbar oder JSON fehlerhaft

**Lösung:**
```javascript
// In VersionUpdateManager.js wird ERROR-Status zurückgegeben
// App startet trotzdem normal
```

### Problem: Update-URLs funktionieren nicht

**Ursache:** Falsche URL oder App nicht im Store

**Lösung:**
- URLs im Browser testen
- Store-IDs prüfen
- Linking-Permissions in app.json prüfen

### Problem: Force Update lässt sich nicht schließen

**Das ist korrekt!** Force Update soll die App blockieren.

**Ausnahme für Testing:**
```javascript
// Temporär für Testing:
BackHandler.addEventListener('hardwareBackPress', () => false);
```

### Problem: Version wird nicht erkannt

**Ursache:** APP_KEY stimmt nicht mit JSON überein

**Lösung:**
```javascript
// In VersionUpdateManager.js:
const APP_KEY = 'lib_of_dev'; // Muss exakt mit JSON-Key übereinstimmen
```

## 📊 Monitoring

### Empfohlene Metriken

1. **Update-Check-Erfolgsrate**
   - Wie viele Checks waren erfolgreich?
   
2. **Update-Adoption**
   - Wie viele Benutzer aktualisieren?
   - Wie schnell nach Release?

3. **Force-Update-Häufigkeit**
   - Wie oft wird Force Update ausgelöst?

### Analytics-Integration

```javascript
// In checkAppVersion() ergänzen:
import analytics from './analytics';

const versionInfo = await checkAppVersion();
analytics.track('version_check', {
  status: versionInfo.status,
  currentCode: versionInfo.currentCode,
  latestCode: versionInfo.latestCode,
});
```

## 📚 Weitere Apps integrieren

### Neue App hinzufügen

1. **JSON erweitern:**
```json
{
  "meine_neue_app": {
    "latestCode": "080120261",
    "minSupportedCode": "080120261",
    "forceUpdate": false,
    "info": "Erste Version!",
    "updateUrlAndroid": "",
    "updateUrliOS": ""
  }
}
```

2. **App-Konfiguration:**
```javascript
// In neuer App: VersionUpdateManager.js
const APP_KEY = 'meine_neue_app';
const CURRENT_VERSION_CODE = '080120261'; // Als String
```

3. **Komponenten kopieren:**
- VersionUpdateManager.js
- ForceUpdateScreen.js
- OptionalUpdateModal.js
- App.js Integration

## 🔄 Migration von alten Versionen

Falls du bereits ein anderes Versionsformat nutzt:

```javascript
// Konvertierungs-Funktion
const convertOldVersion = (oldVersion) => {
  // Beispiel: "2.3.1" -> 080120261
  const date = new Date();
  const tag = String(date.getDate()).padStart(2, '0');
  const monat = String(date.getMonth() + 1).padStart(2, '0');
  const jahr = date.getFullYear();
  const revision = 1;
  
  return parseInt(`${tag}${monat}${jahr}${revision}`);
};
```

## 📞 Support

Bei Fragen oder Problemen:
- Siehe [Troubleshooting](#-troubleshooting)
- Prüfe [Best Practices](#-best-practices)
- Teste mit verschiedenen Szenarien

---

**Version:** 1.0.0  
**Erstellt:** 08.01.2026  
**App:** Lib of Dev - Library of Development
