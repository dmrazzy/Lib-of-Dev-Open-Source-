import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n';

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="light" />
    </>
  );
}
