import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import * as Clipboard from 'expo-clipboard';
import { getLanguageById } from '../data/languagesData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function CodeDetailScreen({ route }) {
  const { t } = useTranslation();
  const { languageId, categoryId, itemIndex, languageName } = route.params;
  const language = getLanguageById(languageId);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!language || !language.categories[categoryId]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{t('common.notFound')}</Text>
      </SafeAreaView>
    );
  }

  const category = language.categories[categoryId];
  
  if (!category.items || !category.items[itemIndex]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{t('common.notFound')}</Text>
      </SafeAreaView>
    );
  }
  
  const item = category.items[itemIndex];

  const copyToClipboard = () => {
    Clipboard.setString(item.code);
    Alert.alert(t('codeDetail.copied'), t('codeDetail.copiedMessage'));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Alert.alert(
      isFavorite ? t('codeDetail.removedFromFavorites') : t('codeDetail.addedToFavorites'),
      isFavorite ? t('codeDetail.removedMessage') : t('codeDetail.addedMessage')
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.breadcrumb}>
                {languageName} › {category.name}
              </Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={toggleFavorite}
            >
              <Text style={styles.favoriteIcon}>
                {isFavorite ? '⭐' : '☆'}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{t('codeDetail.codeExample')}</Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={copyToClipboard}
            >
              <Text style={styles.copyButtonText}>📋 {t('codeDetail.copy')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.codeBlock}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Text style={styles.codeText}>{item.code}</Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('codeDetail.usage')}</Text>
          <View style={styles.usageBox}>
            <Text style={styles.usageText}>{item.usage}</Text>
          </View>
        </View>

        {/* Best Practices */}
        {item.bestPractices && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✨ {t('codeDetail.bestPractices')}</Text>
            <View style={styles.tipsBox}>
              {item.bestPractices.map((practice, index) => (
                <View key={index} style={styles.tipItem}>
                  <Text style={styles.tipBullet}>✓</Text>
                  <Text style={styles.tipText}>{practice}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Common Mistakes */}
        {item.commonMistakes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⚠️ {t('codeDetail.commonMistakes')}</Text>
            <View style={styles.mistakesBox}>
              {item.commonMistakes.map((mistake, index) => (
                <View key={index} style={styles.mistakeItem}>
                  <Text style={styles.mistakeBullet}>✗</Text>
                  <Text style={styles.mistakeText}>{mistake}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Performance Tips */}
        {item.performanceTips && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⚡ {t('codeDetail.performanceTips')}</Text>
            <View style={styles.performanceBox}>
              {item.performanceTips.map((tip, index) => (
                <View key={index} style={styles.performanceItem}>
                  <Text style={styles.performanceBullet}>⚡</Text>
                  <Text style={styles.performanceText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Related Topics */}
        {item.relatedTopics && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔗 {t('codeDetail.relatedTopics')}</Text>
            <View style={styles.relatedBox}>
              {item.relatedTopics.map((topic, index) => (
                <View key={index} style={styles.relatedTag}>
                  <Text style={styles.relatedText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Try It Yourself */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 {t('codeDetail.tryItYourself')}</Text>
          <View style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>{t('codeDetail.challenge')}</Text>
            <Text style={styles.challengeText}>
              {item.challenge || t('codeDetail.defaultChallenge', { title: item.title })}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('codeDetail.keyPoints')}</Text>
          <View style={styles.keyPointsBox}>
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>
                {t('codeDetail.keyPoint1')}
              </Text>
            </View>
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>
                {t('codeDetail.keyPoint2')}
              </Text>
            </View>
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>
                {t('codeDetail.keyPoint3')}
              </Text>
            </View>
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
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  breadcrumb: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  favoriteButton: {
    padding: spacing.xs,
  },
  favoriteIcon: {
    fontSize: 28,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  section: {
    padding: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  copyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },
  copyButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  codeBlock: {
    backgroundColor: colors.codeBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: colors.codeText,
    lineHeight: 20,
  },
  usageBox: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
    borderWidth: 1,
    borderColor: colors.border,
  },
  usageText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  keyPointsBox: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  keyPoint: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  keyPointBullet: {
    fontSize: 20,
    color: colors.primary,
    marginRight: spacing.sm,
    marginTop: -2,
  },
  keyPointText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  tipsBox: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  tipBullet: {
    color: colors.success,
    marginRight: spacing.sm,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  mistakesBox: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
  },
  mistakeItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  mistakeBullet: {
    color: colors.error,
    marginRight: spacing.sm,
    fontSize: 16,
    fontWeight: 'bold',
  },
  mistakeText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  performanceBox: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
  },
  performanceItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  performanceBullet: {
    color: colors.warning,
    marginRight: spacing.sm,
    fontSize: 16,
  },
  performanceText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  relatedBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  relatedTag: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.primary + '40',
  },
  relatedText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '500',
  },
  challengeBox: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'dashed',
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  challengeText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  errorText: {
    fontSize: 18,
    color: colors.error,
    textAlign: 'center',
    marginTop: 40,
  },
});
