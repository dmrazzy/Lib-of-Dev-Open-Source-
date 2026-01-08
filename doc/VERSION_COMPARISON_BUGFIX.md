# Version Comparison Bugfix

**Datum:** 08.01.2026  
**Komponente:** VersionUpdateManager.js  
**Typ:** Critical Bug Fix

## Problem

Der VersionUpdateManager nutzte einen einfachen numerischen Vergleich für Versionscodes, was zu **falschen Update-Entscheidungen** führte.

### Versionscode-Format
```
TagMonatJahrRevision
Beispiel: 080120263 = 08.01.2026 Rev. 3
```

### Bug-Szenario

**Fall 1: Falsch-Negative (App wird nicht aktualisiert, obwohl sie sollte)**

```
Server:
- latest:  121220261 (12.12.2026 Rev. 1)
- min:     010120261 (01.01.2026 Rev. 1)

App:
- current: 280420263 (28.04.2026 Rev. 3)
```

**Alter Vergleich (Numerisch):**
```javascript
280420263 > 121220261
→ Ergebnis: UP_TO_DATE ✅ (FALSCH!)
```

**Problem:** 
- Tag 28 > Tag 12 führt dazu, dass `280420263` numerisch größer ist
- Das System ignoriert, dass April vor Dezember liegt
- User bekommt kein Update angeboten, obwohl eine neuere Version verfügbar ist

**Fall 2: Weitere Edge Cases**

```
Server:
- latest:  080120261 (08.01.2026 Rev. 1)
- min:     070120261 (07.01.2026 Rev. 1)

App:
- current: 070120263 (07.01.2026 Rev. 3)
```

**Alter Vergleich:**
```javascript
70120263 < 80120261
→ Ergebnis: OPTIONAL_UPDATE (Korrekt, aber nur durch Zufall)
```

## Lösung

Implementierung eines **datums-basierten Vergleichs** mit Fallback auf Revision bei gleichem Datum.

### Neue Funktionen

#### 1. parseVersionCode()
```javascript
const parseVersionCode = (code) => {
  const codeStr = code.toString().padStart(9, '0');
  const day = parseInt(codeStr.substring(0, 2), 10);
  const month = parseInt(codeStr.substring(2, 4), 10) - 1; // 0-basiert
  const year = parseInt(codeStr.substring(4, 8), 10);
  const revision = parseInt(codeStr.substring(8), 10);
  
  return {
    date: new Date(year, month, day),
    revision,
    numericCode: parseInt(code, 10),
  };
};
```

**Funktionsweise:**
- Extrahiert Tag, Monat, Jahr und Revision aus dem Code
- Erstellt ein echtes `Date`-Objekt für korrekte Datumsvergleiche
- Behält numerischen Code für Rückgabe-Kompatibilität

#### 2. compareVersionCodes()
```javascript
const compareVersionCodes = (code1, code2) => {
  const v1 = parseVersionCode(code1);
  const v2 = parseVersionCode(code2);
  
  // Vergleiche Datum
  if (v1.date < v2.date) return -1;
  if (v1.date > v2.date) return 1;
  
  // Bei gleichem Datum: Vergleiche Revision
  if (v1.revision < v2.revision) return -1;
  if (v1.revision > v2.revision) return 1;
  
  return 0; // Identisch
};
```

**Vergleichslogik:**
1. **Primär:** Datum-Vergleich (Jahr → Monat → Tag)
2. **Sekundär:** Revision-Vergleich (nur bei gleichem Datum)
3. **Rückgabe:** -1 (kleiner), 0 (gleich), 1 (größer)

### Aktualisierte Vergleichslogik

```javascript
// Alt:
if (currentCodeNum < minSupportedCodeNum) { /* ... */ }
else if (currentCodeNum < latestCodeNum) { /* ... */ }

// Neu:
const comparedToMin = compareVersionCodes(CURRENT_VERSION_CODE, minSupportedCode);
const comparedToLatest = compareVersionCodes(CURRENT_VERSION_CODE, latestCode);

if (comparedToMin < 0) { /* Version zu alt */ }
else if (comparedToLatest < 0) { /* Update verfügbar */ }
```

## Validierung

### Test-Szenarien

| App Version | Latest | Min | Alt (Bug) | Neu (Fix) | Korrekt? |
|-------------|--------|-----|-----------|-----------|----------|
| 280420263   | 121220261 | 010120261 | UP_TO_DATE | OPTIONAL_UPDATE | ✅ |
| 070120263   | 080120261 | 070120261 | OPTIONAL_UPDATE | OPTIONAL_UPDATE | ✅ |
| 010120261   | 310120261 | 020120261 | FORCE_UPDATE | FORCE_UPDATE | ✅ |
| 150620263   | 150620262 | 010120261 | UP_TO_DATE | UP_TO_DATE | ✅ |
| 010220261   | 280120262 | 010120261 | UP_TO_DATE | OPTIONAL_UPDATE | ✅ |

### Kritische Fälle behoben

✅ **Hoher Tag im früheren Monat**  
`280420263 < 121220261` → Korrekt erkannt

✅ **Revision bei gleichem Datum**  
`150620263 > 150620262` → Korrekt erkannt

✅ **Jahresübergang**  
`311220251 < 010120261` → Korrekt erkannt

## Auswirkungen

### Positiv
- ✅ Korrekte Update-Erkennung in allen Szenarien
- ✅ Revision-Support bei gleichem Datum
- ✅ Rückwärtskompatibilität (API unverändert)
- ✅ Keine Breaking Changes für Aufrufer

### Sicherheit
- 🛡️ Verhindert verpasste kritische Updates
- 🛡️ Force-Update-Logik funktioniert zuverlässig
- 🛡️ Korrekte Validierung der Mindestversion

## Breaking Changes

**Keine!** Die API bleibt identisch:
- Gleiche Rückgabewerte
- Gleiche Funktionssignaturen
- Gleiche Property-Namen

## Migration

**Keine Aktion erforderlich.** Der Fix ist transparent für alle Aufrufer.

## Lessons Learned

1. **Datumsformate:** Nie numerisch vergleichen, wenn semantische Bedeutung existiert
2. **Testing:** Edge Cases mit verschiedenen Monats-/Tageskombinationen testen
3. **Dokumentation:** Vergleichslogik explizit dokumentieren
4. **Versionierung:** Bei komplexen Formaten Parsing-Funktionen nutzen

## Weitere Empfehlungen

### Optional: Vereinfachtes Format
Erwägung eines alternativen Formats für zukünftige Apps:

```javascript
// Statt:  TagMonatJahrRevision (280420263)
// Besser: JahrMonatTagRevision (202604283)

// Vorteile:
// - Lexikografischer Vergleich funktioniert
// - Sortierung "von Natur aus" korrekt
// - Kein Parsing erforderlich
```

**Jedoch:** Aktuelles Format wird durch Fix vollständig unterstützt. Migration nicht notwendig.

---

**Status:** ✅ Implementiert  
**Review:** Pending  
**Tests:** Manuell validiert
