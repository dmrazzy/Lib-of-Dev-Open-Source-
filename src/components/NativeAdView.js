import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { colors, spacing, borderRadius } from '../constants/theme';

// Try to import the AdMob module, but handle gracefully if not available
let NativeAd, NativeMediaView, AdBadge;
let isAdMobAvailable = false;

try {
  const GoogleMobileAds = require('react-native-google-mobile-ads');
  NativeAd = GoogleMobileAds.NativeAd;
  NativeMediaView = GoogleMobileAds.NativeMediaView;
  AdBadge = GoogleMobileAds.AdBadge;
  isAdMobAvailable = true;
} catch (error) {
  console.log('AdMob module not available - running in Expo Go or module not built');
}

export default function NativeAdView({ adUnitId }) {
  const nativeAdRef = useRef(null);

  // If running in Expo Go or AdMob is not available, show a placeholder
  if (!isAdMobAvailable) {
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>
          📱 Native Ad Space
        </Text>
        <Text style={styles.placeholderSubtext}>
          Build required for native ads
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NativeAd
        ref={nativeAdRef}
        unitId={adUnitId}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
      >
        <View style={styles.nativeAdContainer}>
          {/* Ad Badge (required by AdMob policies) */}
          <View style={styles.adBadgeContainer}>
            <AdBadge />
          </View>

          {/* Ad Content */}
          <View style={styles.adContent}>
            {/* Headline */}
            <View style={styles.headlineContainer}>
              <Text style={styles.headline} numberOfLines={2}>
                {/* Headline will be populated by AdMob */}
              </Text>
            </View>

            {/* Media View (Image/Video) */}
            <View style={styles.mediaContainer}>
              <NativeMediaView style={styles.mediaView} />
            </View>

            {/* Body Text */}
            <View style={styles.bodyContainer}>
              <Text style={styles.bodyText} numberOfLines={3}>
                {/* Body will be populated by AdMob */}
              </Text>
            </View>

            {/* Call to Action Button */}
            <View style={styles.ctaContainer}>
              <View style={styles.ctaButton}>
                <Text style={styles.ctaText}>
                  {/* CTA will be populated by AdMob */}
                </Text>
              </View>
            </View>

            {/* Advertiser Info */}
            <View style={styles.advertiserContainer}>
              <Text style={styles.advertiserText} numberOfLines={1}>
                {/* Advertiser will be populated by AdMob */}
              </Text>
            </View>
          </View>
        </View>
      </NativeAd>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  placeholderContainer: {
    minHeight: 320,
    backgroundColor: colors.backgroundElevated,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    padding: spacing.lg,
  },
  placeholderText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: colors.textMuted,
  },
  nativeAdContainer: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    minHeight: 320,
  },
  adBadgeContainer: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    zIndex: 10,
  },
  adContent: {
    padding: spacing.md,
  },
  headlineContainer: {
    marginBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 24,
  },
  mediaContainer: {
    width: '100%',
    height: 180,
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  mediaView: {
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    marginBottom: spacing.md,
  },
  bodyText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  ctaContainer: {
    marginBottom: spacing.sm,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  advertiserContainer: {
    marginTop: spacing.xs,
    paddingTop: spacing.xs,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  advertiserText: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
