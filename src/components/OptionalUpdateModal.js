import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { formatVersionCode, getPlatformUpdateUrl } from '../services/VersionUpdateManager';

/**
 * Optional Update Modal
 * 
 * Modal/Popup für optionale Updates (Soft Update).
 * Benutzer kann "Später" wählen oder direkt aktualisieren.
 */
const OptionalUpdateModal = ({ visible, updateInfo, onDismiss }) => {
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
          onDismiss?.();
        } else {
          console.error('Update-URL kann nicht geöffnet werden:', updateUrl);
        }
      } catch (error) {
        console.error('Fehler beim Öffnen der Update-URL:', error);
      }
    } else {
      onDismiss?.();
    }
  };

  const handleLater = () => {
    onDismiss?.();
  };

  if (!visible || !updateInfo) return null;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={handleLater}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>✨</Text>
          </View>

          {/* Titel */}
          <Text style={styles.title}>Update verfügbar</Text>

          {/* Beschreibung */}
          <Text style={styles.description}>
            Eine neue Version ist verfügbar. Wir empfehlen, auf die neueste Version zu aktualisieren.
          </Text>

          {/* Info vom Server */}
          {updateInfo.info ? (
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Was ist neu:</Text>
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

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            {/* Update Button */}
            <TouchableOpacity
              style={styles.updateButton}
              onPress={handleUpdate}
              activeOpacity={0.8}
            >
              <Text style={styles.updateButtonText}>Jetzt aktualisieren</Text>
            </TouchableOpacity>

            {/* Später Button */}
            <TouchableOpacity
              style={styles.laterButton}
              onPress={handleLater}
              activeOpacity={0.8}
            >
              <Text style={styles.laterButtonText}>Später</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  infoBox: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#50c878',
  },
  infoLabel: {
    fontSize: 12,
    color: '#50c878',
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
    marginBottom: 24,
  },
  versionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  versionLabel: {
    fontSize: 13,
    color: '#b0b0b0',
  },
  versionValue: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '500',
  },
  versionValueHighlight: {
    fontSize: 13,
    color: '#50c878',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  updateButton: {
    backgroundColor: '#50c878',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#50c878',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  updateButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  laterButton: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3a3a52',
  },
  laterButtonText: {
    color: '#b0b0b0',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OptionalUpdateModal;
