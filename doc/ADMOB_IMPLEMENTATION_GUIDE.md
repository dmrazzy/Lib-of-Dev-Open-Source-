# AdMob Werbung Implementation Guide

## Übersicht
Diese Dokumentation erklärt die vollständige Implementation von Google AdMob in einer React Native / Expo App. Die Lösung funktioniert sowohl in Expo Go (mit Placeholder) als auch in Production Builds.

## Problemstellung
Bei der Integration von AdMob in React Native Apps treten häufig folgende Fehler auf:
- `MODULE_NOT_FOUND` - AdMob Modul nicht verfügbar
- `DUPLICATE_META_DATA` - Doppelte AndroidManifest Einträge
- App stürzt in Expo Go ab
- Fehlende Berechtigungen im Android Manifest
- AdMob Application ID Konflikte

## Die Lösung: 4-Komponenten-Ansatz

### 1. Package Installation

**package.json:**
```json
{
  "dependencies": {
    "react-native-google-mobile-ads": "^16.0.1"
  }
}
```

Installation:
```bash
npm install react-native-google-mobile-ads
```

---

### 2. AdBanner Komponente mit Fallback

**Datei: src/components/AdBanner.js**

**Kernkonzept:** Graceful Degradation - Die App funktioniert auch ohne AdMob.

```javascript
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { colors, spacing } from '../constants/theme';

// Dynamischer Import mit Try-Catch
let BannerAd, BannerAdSize;
let isAdMobAvailable = false;

try {
  const GoogleMobileAds = require('react-native-google-mobile-ads');
  BannerAd = GoogleMobileAds.BannerAd;
  BannerAdSize = GoogleMobileAds.BannerAdSize;
  isAdMobAvailable = true;
} catch (error) {
  console.log('AdMob module not available - running in Expo Go or module not built');
}

export default function AdBanner({ adUnitId }) {
  // Fallback für Expo Go / Dev Mode
  if (!isAdMobAvailable) {
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>
          📱 Ad Space - Build required for ads
        </Text>
      </View>
    );
  }

  // Production AdMob Banner
  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderContainer: {
    height: 50,
    backgroundColor: colors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
```

**Warum funktioniert das?**
- ✅ Try-Catch verhindert App-Crash wenn Modul fehlt
- ✅ Placeholder zeigt Entwicklern wo Werbung erscheinen wird
- ✅ Keine Abhängigkeit von Native Builds in Dev Mode
- ✅ Sauber und wartbar

---

### 3. Config Plugin für Android Manifest

**Datei: app.plugin.js**

**Kernproblem:** AdMob benötigt Einträge im AndroidManifest.xml, die konfliktieren können.

```javascript
const { AndroidConfig, withAndroidManifest } = require('@expo/config-plugins');

const withGoogleMobileAds = (config) => {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(androidManifest);

    // 1. Tools Namespace hinzufügen (für tools:replace)
    if (!androidManifest.manifest.$) {
      androidManifest.manifest.$ = {};
    }
    androidManifest.manifest.$['xmlns:tools'] = 'http://schemas.android.com/tools';

    // 2. AD_ID Permission hinzufügen
    if (!androidManifest.manifest['uses-permission']) {
      androidManifest.manifest['uses-permission'] = [];
    }
    
    const hasAdIdPermission = androidManifest.manifest['uses-permission'].some(
      (perm) => perm.$['android:name'] === 'com.google.android.gms.permission.AD_ID'
    );
    
    if (!hasAdIdPermission) {
      androidManifest.manifest['uses-permission'].push({
        $: {
          'android:name': 'com.google.android.gms.permission.AD_ID',
        },
      });
    }

    // 3. Meta-Data Array erstellen falls nicht vorhanden
    if (!mainApplication['meta-data']) {
      mainApplication['meta-data'] = [];
    }

    // 4. KRITISCH: Alte Einträge entfernen um Duplikate zu vermeiden
    mainApplication['meta-data'] = mainApplication['meta-data'].filter(
      (item) =>
        item.$['android:name'] !== 'com.google.android.gms.ads.APPLICATION_ID' &&
        item.$['android:name'] !== 'com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT'
    );

    // 5. Neue Einträge mit tools:replace hinzufügen
    mainApplication['meta-data'].push({
      $: {
        'android:name': 'com.google.android.gms.ads.APPLICATION_ID',
        'android:value': 'ca-app-pub-5526801232554836~6275754332',
        'tools:replace': 'android:value', // Löst Konflikte
      },
    });

    mainApplication['meta-data'].push({
      $: {
        'android:name': 'com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT',
        'android:value': 'true',
        'tools:replace': 'android:value', // Löst Konflikte
      },
    });

    return config;
  });
};

module.exports = withGoogleMobileAds;
```

**Warum ist tools:replace wichtig?**
- Verhindert `DUPLICATE_META_DATA` Fehler
- Erlaubt Überschreiben von existierenden Einträgen
- Build schlägt nicht fehl bei Konflikten

---

### 4. App Konfiguration

**Datei: app.json**

```json
{
  "expo": {
    "name": "Lib of Dev (Open Source)",
    "slug": "lib-of-dev",
    "version": "2.0.4",
    "ios": {
      "bundleIdentifier": "com.lenfi.libofdev",
      "config": {
        "googleMobileAdsAppId": "ca-app-pub-5526801232554836~6275754332"
      }
    },
    "android": {
      "package": "com.lenfi.libofdev",
      "permissions": [
        "INTERNET"
      ]
    },
    "plugins": [
      "expo-asset",
      "./app.plugin.js"  // Unser Custom Plugin!
    ]
  }
}
```

**WICHTIG:** Plugin muss registriert sein!

---

### 5. app-ads.txt für Publishers

**Datei: app-ads.txt**

```
google.com, pub-5526801232554836, DIRECT, f08c47fec0942fa0
```

Diese Datei muss:
- Im Root Verzeichnis des Webservers liegen
- Für Play Store Verifizierung genutzt werden
- Publisher ID verifizieren

---

## Verwendung in Screens

**Beispiel: HomeScreen.js**

```javascript
import React from 'react';
import { View, ScrollView } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* Screen Content */}
      
      {/* AdMob Banner am Ende */}
      <AdBanner adUnitId="ca-app-pub-5526801232554836/5282576179" />
    </ScrollView>
  );
}
```

**Ad Unit IDs in diesem Projekt:**
- HomeScreen: `ca-app-pub-5526801232554836/5282576179`
- LanguageScreen: `ca-app-pub-5526801232554836/8967466472`
- ToolsScreen: `ca-app-pub-5526801232554836/7375183205`
- CertificationsScreen: `ca-app-pub-5526801232554836/7251399431`
- AskAIScreen: `ca-app-pub-5526801232554836/8545682699`

---

## Build Prozess

### Expo Development Build:
```bash
# Android
eas build --profile development --platform android

# iOS
eas build --profile development --platform ios
```

### Production Build:
```bash
# Android APK
eas build --profile preview --platform android

# iOS
eas build --profile production --platform ios
```

**WICHTIG:** Native Modules wie AdMob benötigen einen Development/Production Build. Sie funktionieren NICHT in Expo Go!

---

## Interstitial Ads (Optional)

Falls Fullscreen-Ads benötigt werden (z.B. SettingsScreen):

```javascript
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

const adUnitId = Platform.select({
  ios: 'ca-app-pub-xxxxx/xxxxx',
  android: 'ca-app-pub-xxxxx/xxxxx',
});

const interstitial = InterstitialAd.createForAdRequest(adUnitId);

// Laden
interstitial.load();

// Event Listener
interstitial.addAdEventListener(AdEventType.LOADED, () => {
  interstitial.show();
});

// Anzeigen
if (interstitial.loaded) {
  interstitial.show();
}
```

---

## Testing

### Test Ad Unit IDs (für Development):

**Android:**
- Banner: `ca-app-pub-3940256099942544/6300978111`
- Interstitial: `ca-app-pub-3940256099942544/1033173712`

**iOS:**
- Banner: `ca-app-pub-3940256099942544/2934735716`
- Interstitial: `ca-app-pub-3940256099942544/4411468910`

Verwende Test-IDs während der Entwicklung, um Account-Sperrungen zu vermeiden!

---

## Häufige Fehler & Lösungen

### 1. MODULE_NOT_FOUND Error
**Problem:** `Can't find variable: BannerAd`
**Lösung:** Try-Catch um require() wie in AdBanner.js gezeigt

### 2. DUPLICATE_META_DATA Error
**Problem:** `Duplicate meta-data entry for com.google.android.gms.ads.APPLICATION_ID`
**Lösung:** 
- Filter in app.plugin.js verwenden (alte Einträge entfernen)
- `tools:replace` Attribut hinzufügen

### 3. App Crashes in Expo Go
**Problem:** Native Module nicht verfügbar
**Lösung:** isAdMobAvailable Check und Placeholder zeigen

### 4. Ads werden nicht angezeigt
**Mögliche Ursachen:**
- Test-IDs verwenden während Development
- AdMob Account noch nicht freigeschaltet (kann 24h dauern)
- App nicht verifiziert in AdMob Console
- Falscher Bundle Identifier / Package Name
- Keine Internetverbindung

### 5. Build schlägt fehl
**Problem:** AndroidManifest Konflikte
**Lösung:**
```bash
# Cache löschen
rm -rf android/.gradle
rm -rf android/build

# Neu bauen
eas build --clear-cache
```

---

## Best Practices

### ✅ DO's:
- Verwende Try-Catch für alle Native Module Imports
- Zeige Placeholders in Development
- Trenne Test und Production Ad Unit IDs
- Verwende `tools:replace` für Manifest Einträge
- Entferne alte Meta-Data Einträge vor dem Hinzufügen neuer
- Halte Ad Unit IDs in Konstanten-Datei

### ❌ DON'Ts:
- Keine Hardcoded Production Ad Unit IDs im Dev Mode
- Nicht auf AdMob Module verlassen ohne Availability Check
- Keine redundanten Manifest Einträge
- Nicht zu viele Ads (max. 3 pro Screen)
- Keine Ads in sensiblen Screens (Login, Zahlungen)

---

## Checkliste für neue Projekte

- [ ] `react-native-google-mobile-ads` installieren
- [ ] AdBanner Komponente mit Try-Catch erstellen
- [ ] app.plugin.js mit Manifest Modifier erstellen
- [ ] Plugin in app.json registrieren
- [ ] Application ID in app.json eintragen (iOS & Android)
- [ ] Ad Unit IDs von AdMob Console holen
- [ ] app-ads.txt für Domain erstellen
- [ ] Test-IDs für Development verwenden
- [ ] Development Build erstellen
- [ ] Production Build testen
- [ ] AdMob App in Console verifizieren
- [ ] 24h warten auf AdMob Freischaltung

---

## Debugging

### Console Logs checken:
```javascript
// In AdBanner.js hinzufügen:
console.log('AdMob Available:', isAdMobAvailable);
console.log('Ad Unit ID:', adUnitId);
```

### AdMob Console checken:
1. https://apps.admob.com
2. Apps → Deine App
3. Status überprüfen
4. Zahlungsinformationen verifizieren

### Android Manifest inspizieren:
```bash
cd android/app/src/main
cat AndroidManifest.xml
```

---

## Zusammenfassung

Diese Implementation löst alle gängigen AdMob-Probleme:

1. ✅ **Expo Go Kompatibilität** durch Try-Catch und Fallback
2. ✅ **Manifest Konflikte** durch Filter + tools:replace
3. ✅ **Fehlende Permissions** durch Config Plugin
4. ✅ **Wartbarkeit** durch separate Komponente
5. ✅ **Testbarkeit** durch Availability Check

Die Lösung ist production-ready, skalierbar und wartbar. Sie funktioniert sowohl in Development als auch in Production ohne Code-Änderungen.

---

## Kontakt & Support

Bei Fragen zur Implementation:
- GitHub: https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-
- Issues: https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues

## Version
- Dokumentiert am: 2026-01-07
- App Version: 2.0.4
- react-native-google-mobile-ads: ^16.0.1
