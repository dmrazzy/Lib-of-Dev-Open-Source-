import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getLanguageById } from '../data/languagesData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function CategoryScreen({ route, navigation }) {
  const { t } = useTranslation();
  const { languageId, categoryId, languageName, categories } = route.params;
  
  // If no categoryId is provided, show category list (for Specialized Topics)
  if (!categoryId && categories) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.breadcrumb}>{languageName}</Text>
          </View>
          
          <View style={styles.itemsContainer}>
            {Object.entries(categories).map(([catId, cat]) => (
              <TouchableOpacity
                key={catId}
                style={styles.categoryCard}
                onPress={() =>
                  navigation.push('Category', {
                    languageId,
                    categoryId: catId,
                    languageName,
                    categories,
                  })
                }
              >
                <Text style={styles.categoryTitle}>{cat.name}</Text>
                <Text style={styles.categoryCount}>
                  {cat.items?.length || 0} {t('common.items')}
                </Text>
                <Text style={styles.itemArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  // Check if categories are passed directly (from Specialized Topics)
  let category;
  if (categories && categories[categoryId]) {
    category = categories[categoryId];
  } else {
    // Otherwise, get from languagesData
    const language = getLanguageById(languageId);
    if (!language || !language.categories[categoryId]) {
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.errorText}>{t('common.notFound')}</Text>
        </SafeAreaView>
      );
    }
    category = language.categories[categoryId];
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.breadcrumb}>
            {languageName} › {category.name}
          </Text>
        </View>

        <View style={styles.itemsContainer}>
          {category.items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemCard}
              onPress={() =>
                navigation.navigate('CodeDetail', {
                  languageId,
                  categoryId,
                  itemIndex: index,
                  itemTitle: item.title,
                  languageName,
                  categories, // Pass categories forward
                })
              }
            >
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemArrow}>›</Text>
              </View>
              <Text style={styles.itemDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <View style={styles.codePreview}>
                <Text style={styles.codePreviewText} numberOfLines={3}>
                  {item.code}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
    padding: spacing.md,
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  breadcrumb: {
    fontSize: 14,
    color: colors.textMuted,
  },
  itemsContainer: {
    padding: spacing.md,
    gap: spacing.md,
  },
  categoryCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  categoryCount: {
    fontSize: 14,
    color: colors.textMuted,
    marginRight: spacing.sm,
  },
  itemCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  itemArrow: {
    fontSize: 24,
    color: colors.textMuted,
    fontWeight: '300',
  },
  itemDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  codePreview: {
    backgroundColor: colors.codeBackground,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  codePreviewText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.codeText,
  },
  errorText: {
    fontSize: 18,
    color: colors.error,
    textAlign: 'center',
    marginTop: 40,
  },
});
