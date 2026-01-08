import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Linking,
  BackHandler,
  Platform,
} from 'react-native';
import { formatVersionCode, getPlatformUpdateUrl } from '../services/VersionUpdateManager';

/**
 * Force Update Screen
 * 
 * Vollbild-Screen für Pflicht-Updates (Hard Update).
 * Kein "Zurück"-Button, keine Möglichkeit zu schließen.
 * Blockiert die App komplett bis Update durchgeführt wird.
 */
const ForceUpdateScreen = ({ visible, updateInfo }) => {
  React.useEffect(() => {
    if (visible) {
      // Verhindere Hardware-Back-Button auf Android
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
      return () => backHandler.remove();
    }
  }, [visible]);

  const handleUpdate = async () => {
    const updateUrl = getPlatformUpdateUrl(
      updateInfo.updateUrlAndroid,
      updateInfo.updateUrliOS
    );

    if (updateUrl) {
      try {
        const supported = await Linking.canOpenURL(updateUrl);
        if (supported) {
          await Linking.openURL(updateUrl);
        } else {
          console.error('Update-URL kann nicht geöffnet werden:', updateUrl);
        }
      } catch (error) {
        console.error('Fehler beim Öffnen der Update-URL:', error);
      }
    }
  };

  if (!visible || !updateInfo) return null;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={false}
      onRequestClose={() => {}} // Verhindert Schließen
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Icon/Symbol */}
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🔄</Text>
          </View>

          {/* Titel */}
          <Text style={styles.title}>Update erforderlich</Text>

          {/* Beschreibung */}
          <Text style={styles.description}>
            Um die App weiter nutzen zu können, musst du auf die neueste Version aktualisieren.
          </Text>

          {/* Info vom Server */}
          {updateInfo.info ? (
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>{updateInfo.info}</Text>
            </View>
          ) : null}

          {/* Versions-Informationen */}
          <View style={styles.versionInfo}>
            <View style={styles.versionRow}>
              <Text style={styles.versionLabel}>Aktuelle Version:</Text>
              <Text style={styles.versionValue}>
                {formatVersionCode(updateInfo.currentCode)}
              </Text>
            </View>
            <View style={styles.versionRow}>
              <Text style={styles.versionLabel}>Neue Version:</Text>
              <Text style={styles.versionValueHighlight}>
                {formatVersionCode(updateInfo.latestCode)}
              </Text>
            </View>
          </View>

          {/* Update-Button */}
          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdate}
            activeOpacity={0.8}
          >
            <Text style={styles.updateButtonText}>Jetzt aktualisieren</Text>
          </TouchableOpacity>

          {/* Hinweis */}
          <Text style={styles.hint}>
            Die App kann erst nach dem Update wieder verwendet werden.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconText: {
    fontSize: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  infoBox: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#4a90e2',
  },
  infoText: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
  },
  versionInfo: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  versionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  versionLabel: {
    fontSize: 14,
    color: '#b0b0b0',
  },
  versionValue: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
  },
  versionValueHighlight: {
    fontSize: 14,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  updateButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 12,
    color: '#808080',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default ForceUpdateScreen;
