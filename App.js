import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator, View, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import ErrorBoundary from './src/components/ErrorBoundary';
import ForceUpdateScreen from './src/components/ForceUpdateScreen';
import OptionalUpdateModal from './src/components/OptionalUpdateModal';
import { checkAppVersion, UpdateStatus } from './src/services/VersionUpdateManager';
import './src/i18n';

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

  // Während der Versionsprüfung: Loading Screen
  if (isCheckingVersion) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <ExpoStatusBar style="light" />
      </View>
    );
  }

  // Force Update: Zeige Force Update Screen (blockiert die App)
  if (updateInfo?.status === UpdateStatus.FORCE_UPDATE) {
    return (
      <>
        <ForceUpdateScreen visible={true} updateInfo={updateInfo} />
        <ExpoStatusBar style="light" />
      </>
    );
  }

  // Normale App mit optionalem Update Modal
  return (
    <ErrorBoundary>
      <AppNavigator />
      <OptionalUpdateModal
        visible={showOptionalUpdate}
        updateInfo={updateInfo}
        onDismiss={() => setShowOptionalUpdate(false)}
      />
      <ExpoStatusBar style="light" />
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
