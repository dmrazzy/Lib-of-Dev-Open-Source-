import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import { getAllPlatforms } from '../data/platformsData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function PlatformsScreen({ navigation }) {
  const platforms = getAllPlatforms();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Platforms & Tools 🚀</Text>
          <Text style={styles.headerSubtitle}>
            Learn about deployment platforms, hosting services, and development tools
          </Text>
        </View>

        <View style={styles.content}>
          {platforms.map((platform) => (
            <TouchableOpacity
              key={platform.id}
              style={styles.platformCard}
              onPress={() => navigation.navigate('PlatformDetail', { platformId: platform.id })}
            >
              <View style={styles.platformHeader}>
                <View style={[styles.iconContainer, { backgroundColor: platform.color + '20' }]}>
                  <Text style={styles.icon}>{platform.icon}</Text>
                </View>
                <View style={styles.platformInfo}>
                  <Text style={styles.platformName}>{platform.name}</Text>
                  <Text style={styles.platformCategory}>{platform.category}</Text>
                </View>
                <Text style={styles.arrow}>›</Text>
              </View>
              
              <Text style={styles.platformDescription}>
                {platform.description}
              </Text>

              {platform.features && (
                <View style={styles.featuresContainer}>
                  {platform.features.slice(0, 3).map((feature, index) => (
                    <View key={index} style={styles.featureTag}>
                      <Text style={styles.featureText}>✓ {feature}</Text>
                    </View>
                  ))}
                </View>
              )}

              {platform.links && (
                <View style={styles.linksContainer}>
                  <TouchableOpacity
                    style={styles.linkButton}
                    onPress={(e) => {
                      e.stopPropagation();
                      openLink(platform.links.website);
                    }}
                  >
                    <Text style={styles.linkButtonText}>🌐 Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.linkButton}
                    onPress={(e) => {
                      e.stopPropagation();
                      openLink(platform.links.docs);
                    }}
                  >
                    <Text style={styles.linkButtonText}>📚 Docs</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>💡 Why Learn About Platforms?</Text>
          <Text style={styles.infoText}>
            Understanding deployment platforms and development tools helps you:
          </Text>
          <View style={styles.benefitsList}>
            <Text style={styles.benefitItem}>• Deploy applications efficiently</Text>
            <Text style={styles.benefitItem}>• Choose the right tools for your project</Text>
            <Text style={styles.benefitItem}>• Scale your applications globally</Text>
            <Text style={styles.benefitItem}>• Improve development workflow</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  content: {
    padding: spacing.md,
  },
  platformCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  platformHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  icon: {
    fontSize: 24,
  },
  platformInfo: {
    flex: 1,
  },
  platformName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  platformCategory: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  arrow: {
    fontSize: 24,
    color: colors.textMuted,
  },
  platformDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  featuresContainer: {
    marginBottom: spacing.sm,
  },
  featureTag: {
    paddingVertical: 4,
  },
  featureText: {
    fontSize: 13,
    color: colors.success,
  },
  linksContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  linkButton: {
    backgroundColor: colors.primary + '20',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  linkButtonText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: colors.backgroundCard,
    margin: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  benefitsList: {
    marginLeft: spacing.sm,
  },
  benefitItem: {
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.xs,
    lineHeight: 20,
  },
});
