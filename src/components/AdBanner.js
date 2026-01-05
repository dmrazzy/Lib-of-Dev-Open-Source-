import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { colors, spacing } from '../constants/theme';

// Try to import the AdMob module, but handle gracefully if not available
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
  // If running in Expo Go or AdMob is not available, show a placeholder
  if (!isAdMobAvailable) {
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>
          📱 Ad Space - Build required for ads
        </Text>
      </View>
    );
  }

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
