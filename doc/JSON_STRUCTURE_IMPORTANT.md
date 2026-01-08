# ⚠️ WICHTIG: JSON-Datei Struktur für Vercel

## Problem

Die Versionscodes haben **führende Nullen** (z.B. `080120263`), die in JSON **nicht als Zahlen** geschrieben werden dürfen!

❌ **FALSCH - Führt zu JSON Parse Error:**
```json
{
  "lib_of_dev": {
    "latestCode": 080120263,
    "minSupportedCode": 010120261
  }
}
```

**Fehler:** `JSON Parse error: Unexpected character in number: 8`

## ✅ Lösung

### Option 1: Als Strings speichern (EMPFOHLEN)

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
    "updateUrlAndroid": "https://play.google.com/store/apps/details?id=com.moving.planner",
    "updateUrliOS": "https://apps.apple.com/app/idXXXXXXXXX"
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

### Option 2: Ohne führende Null (Alternative)

```json
{
  "lib_of_dev": {
    "latestCode": 80120263,
    "minSupportedCode": 10120261
  }
}
```

**Achtung:** Bei dieser Option verlierst du die führende `0` im Datum!

## 📝 Empfehlung

**Nutze Strings** für die Versionscodes - das ist sauberer und erhält das Format `TagMonatJahrRevision` vollständig.

Das Service-File ([VersionUpdateManager.js](../src/services/VersionUpdateManager.js)) ist bereits so angepasst, dass es mit String-Versionscodes arbeitet:

```javascript
// Service konvertiert Strings zu Numbers für Vergleich
const currentCodeNum = parseInt(CURRENT_VERSION_CODE, 10);
const latestCodeNum = parseInt(latestCode, 10);
const minSupportedCodeNum = parseInt(minSupportedCode, 10);

if (currentCodeNum < minSupportedCodeNum) {
  // Force Update
}
```

## 🚀 Deployment auf Vercel

1. **Datei erstellen:**
   - Ordner: `public/`
   - Datei: `scr_appversionupdatemanager.json`

2. **Inhalt einfügen:**
   - Nutze die **String-Version** von oben
   - Update-URLs mit echten Store-Links ersetzen

3. **Committen und pushen:**
   ```bash
   git add public/scr_appversionupdatemanager.json
   git commit -m "Add version update manifest"
   git push
   ```

4. **Vercel deployt automatisch**

5. **Testen:**
   ```bash
   curl https://www.lenfi.uk/scr_appversionupdatemanager.json
   ```

   Erwartete Ausgabe: Gültiges JSON mit String-Versionscodes

## ✅ Checkliste

- [ ] JSON-Datei mit **String-Versionscodes** erstellt
- [ ] Alle `latestCode` und `minSupportedCode` als Strings
- [ ] Store-URLs eingefügt (Android & iOS)
- [ ] Auf Vercel deployed
- [ ] Mit `curl` getestet
- [ ] In der App getestet

## 🔍 JSON Validator

Teste deine JSON vor dem Deploy:
- **Online:** https://jsonlint.com/
- **VS Code:** JSON-Syntax wird automatisch geprüft

**Wichtig:** Kopiere die JSON nicht als JavaScript-Objekt - in JSON müssen alle Keys in **doppelten Anführungszeichen** stehen!

---

**Version:** 1.0  
**Erstellt:** 08.01.2026
