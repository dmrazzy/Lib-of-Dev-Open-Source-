import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Platform,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import howToGuides from '../data/howToData';

export default function HowToGuidesScreen({ navigation }) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCodeModal, setShowCodeModal] = useState(false);

  // Get all categories
  const categories = useMemo(() => {
    return Object.entries(howToGuides.categories).map(([key, category]) => ({
      id: key,
      ...category,
    }));
  }, []);

  // Filter items based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.technologies?.some((tech) =>
              tech.toLowerCase().includes(searchQuery.toLowerCase())
            )
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, searchQuery]);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setShowCodeModal(true);
  };

  const copyToClipboard = async () => {
    if (selectedItem?.code) {
      await Clipboard.setStringAsync(selectedItem.code);
      // Could add a toast notification here
    }
  };

  const shareCode = async () => {
    if (selectedItem?.code) {
      try {
        await Share.share({
          message: `${selectedItem.title}\n\n${selectedItem.code}`,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  const renderCategoryCard = (category) => (
    <TouchableOpacity
      key={category.id}
      style={styles.categoryCard}
      onPress={() => setSelectedCategory(category.id)}
      activeOpacity={0.7}
    >
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{category.name}</Text>
        <Text style={styles.itemCount}>{category.items.length} guides</Text>
      </View>
      {category.items.slice(0, 2).map((item, index) => (
        <View key={index} style={styles.previewItem}>
          <Text style={styles.previewTitle} numberOfLines={1}>
            {item.title}
          </Text>
          {item.technologies && (
            <View style={styles.techList}>
              {item.technologies.slice(0, 3).map((tech, i) => (
                <Text key={i} style={styles.techBadge}>
                  {tech}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </TouchableOpacity>
  );

  const renderItemCard = (item) => (
    <TouchableOpacity
      key={item.title}
      style={styles.itemCard}
      onPress={() => handleItemPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {item.estimatedTime && (
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={14} color={colors.textMuted} />
            <Text style={styles.timeText}>{item.estimatedTime}</Text>
          </View>
        )}
      </View>

      {item.description && (
        <Text style={styles.itemDescription} numberOfLines={2}>
          {item.description}
        </Text>
      )}

      {item.technologies && (
        <View style={styles.techContainer}>
          {item.technologies.map((tech, index) => (
            <View key={index} style={styles.techTag}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
      )}

      {item.bestPractices && (
        <View style={styles.practicesPreview}>
          <Ionicons name="checkmark-circle" size={16} color={colors.success} />
          <Text style={styles.practicesText}>
            {item.bestPractices.length} best practices
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderCategoryDetail = () => {
    const category = categories.find((cat) => cat.id === selectedCategory);
    if (!category) return null;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.detailHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedCategory(null)}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.detailTitle}>{category.name}</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {category.items.map((item) => renderItemCard(item))}
        </ScrollView>

        {/* Code Modal - moved inside category detail */}
        <Modal
          visible={showCodeModal}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowCodeModal(false)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity style={styles.modalBackButton} onPress={() => setShowCodeModal(false)}>
                <Ionicons name="close" size={28} color={colors.text} />
              </TouchableOpacity>
              <Text style={styles.modalTitle} numberOfLines={1}>
                {selectedItem?.title}
              </Text>
              <View style={styles.modalActions}>
                <TouchableOpacity style={styles.actionButton} onPress={copyToClipboard}>
                  <Ionicons name="copy-outline" size={24} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={shareCode}>
                  <Ionicons name="share-outline" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={styles.modalContent}>
              {selectedItem?.description && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Description</Text>
                  <Text style={styles.modalText}>{selectedItem.description}</Text>
                </View>
              )}

              {selectedItem?.code && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Code</Text>
                  <View style={styles.codeContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      <Text style={styles.codeText}>{selectedItem.code}</Text>
                    </ScrollView>
                  </View>
                </View>
              )}

              {selectedItem?.usage && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Usage</Text>
                  <Text style={styles.modalText}>{selectedItem.usage}</Text>
                </View>
              )}

              {selectedItem?.technologies && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Technologies</Text>
                  <View style={styles.techContainer}>
                    {selectedItem.technologies.map((tech, index) => (
                      <View key={index} style={styles.techTag}>
                        <Text style={styles.techText}>{tech}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {selectedItem?.bestPractices && selectedItem.bestPractices.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Best Practices</Text>
                  {selectedItem.bestPractices.map((practice, index) => (
                    <View key={index} style={styles.practiceItem}>
                      <Text style={styles.practiceText}>{practice}</Text>
                    </View>
                  ))}
                </View>
              )}

              {selectedItem?.troubleshooting && selectedItem.troubleshooting.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>🔧 Troubleshooting</Text>
                  {selectedItem.troubleshooting.map((item, index) => (
                    <View key={index} style={styles.troubleshootingItem}>
                      <Text style={styles.troubleshootingProblem}>Problem: {item.problem}</Text>
                      <Text style={styles.troubleshootingSolution}>✓ Lösung: {item.solution}</Text>
                    </View>
                  ))}
                </View>
              )}

              {selectedItem?.tips && selectedItem.tips.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>💡 Tipps</Text>
                  {selectedItem.tips.map((tip, index) => (
                    <View key={index} style={styles.tipItem}>
                      <Text style={styles.tipText}>{tip}</Text>
                    </View>
                  ))}
                </View>
              )}

              {selectedItem?.relatedTopics && selectedItem.relatedTopics.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Related Topics</Text>
                  <View style={styles.relatedContainer}>
                    {selectedItem.relatedTopics.map((topic, index) => (
                      <View key={index} style={styles.relatedTag}>
                        <Text style={styles.relatedText}>{topic}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {selectedItem?.commonIssues && selectedItem.commonIssues.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Common Issues</Text>
                  {selectedItem.commonIssues.map((issue, index) => (
                    <View key={index} style={styles.issueItem}>
                      <Ionicons name="alert-circle" size={20} color={colors.warning} />
                      <Text style={styles.issueText}>{issue}</Text>
                    </View>
                  ))}
                </View>
              )}

              {selectedItem?.relatedTopics && selectedItem.relatedTopics.length > 0 && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Related Topics</Text>
                  <View style={styles.relatedContainer}>
                    {selectedItem.relatedTopics.map((topic, index) => (
                      <View key={index} style={styles.relatedTag}>
                        <Text style={styles.relatedText}>{topic}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </ScrollView>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    );
  };

  if (selectedCategory) {
    return renderCategoryDetail();
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerIcon}>{howToGuides.icon}</Text>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>{howToGuides.name}</Text>
            <Text style={styles.headerSubtitle}>{howToGuides.description}</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search guides..."
            placeholderTextColor={colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Categories */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => renderCategoryCard(category))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={64} color={colors.textMuted} />
            <Text style={styles.emptyText}>No guides found</Text>
            <Text style={styles.emptySubtext}>Try a different search term</Text>
          </View>
        )}
      </ScrollView>

      {/* Code Modal */}
      <Modal
        visible={showCodeModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowCodeModal(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity style={styles.modalBackButton} onPress={() => setShowCodeModal(false)}>
              <Ionicons name="close" size={28} color={colors.text} />
            </TouchableOpacity>
            <Text style={styles.modalTitle} numberOfLines={1}>
              {selectedItem?.title}
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.actionButton} onPress={copyToClipboard}>
                <Ionicons name="copy-outline" size={24} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={shareCode}>
                <Ionicons name="share-outline" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.modalContent}>
            {selectedItem?.description && (
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Description</Text>
                <Text style={styles.modalSectionText}>{selectedItem.description}</Text>
              </View>
            )}

            {selectedItem?.usage && (
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Use Case</Text>
                <Text style={styles.modalSectionText}>{selectedItem.usage}</Text>
              </View>
            )}

            {selectedItem?.technologies && (
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Technologies</Text>
                <View style={styles.techContainer}>
                  {selectedItem.technologies.map((tech, index) => (
                    <View key={index} style={styles.techTag}>
                      <Text style={styles.techText}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {selectedItem?.bestPractices && (
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Best Practices</Text>
                {selectedItem.bestPractices.map((practice, index) => (
                  <Text key={index} style={styles.practiceItem}>
                    {practice}
                  </Text>
                ))}
              </View>
            )}

            {selectedItem?.code && (
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Guide</Text>
                <View style={styles.codeContainer}>
                  <Text style={styles.codeText}>{selectedItem.code}</Text>
                </View>
              </View>
            )}

            {selectedItem?.estimatedTime && (
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Estimated Time</Text>
                <Text style={styles.modalSectionText}>{selectedItem.estimatedTime}</Text>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  headerIcon: {
    fontSize: 48,
    marginRight: spacing.md,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchIcon: {
    marginRight: spacing.xs,
  },
  searchInput: {
    flex: 1,
    padding: spacing.sm,
    color: colors.text,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
  },
  categoryCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  itemCount: {
    fontSize: 14,
    color: colors.textMuted,
  },
  previewItem: {
    marginTop: spacing.sm,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  techBadge: {
    fontSize: 11,
    color: colors.textMuted,
    backgroundColor: colors.background,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  itemCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginRight: spacing.sm,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 12,
    color: colors.textMuted,
  },
  itemDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: spacing.xs,
  },
  techTag: {
    backgroundColor: colors.primaryAlpha,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  techText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  practicesPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.xs,
  },
  practicesText: {
    fontSize: 12,
    color: colors.textMuted,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundElevated,
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    marginRight: spacing.sm,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xl * 2,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.md,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundElevated,
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalBackButton: {
    marginRight: spacing.sm,
  },
  modalTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  modalActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionButton: {
    padding: spacing.xs,
  },
  modalContent: {
    flex: 1,
  },
  modalSection: {
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  modalText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  modalSectionText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  practiceItem: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
  practiceText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  troubleshootingItem: {
    backgroundColor: colors.backgroundCard,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: colors.warning,
  },
  troubleshootingProblem: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  troubleshootingSolution: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  tipItem: {
    backgroundColor: colors.backgroundCard,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.xs,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  tipText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  relatedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  relatedTag: {
    backgroundColor: colors.backgroundCard,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  relatedText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  codeContainer: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  codeText: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 12,
    color: colors.text,
    lineHeight: 18,
  },
});
