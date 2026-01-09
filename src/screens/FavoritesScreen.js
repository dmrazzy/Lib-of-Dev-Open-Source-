import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/theme';
import { languages, getAllLanguages } from '../data/languagesData';
import { projectsData } from '../data/projectsData';

export default function FavoritesScreen({ navigation }) {
  const { t } = useTranslation();
  const [personalizedContent, setPersonalizedContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [interests, setInterests] = useState({});
  const [selectedLanguages, setSelectedLanguages] = useState({});

  // Reload when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadPersonalizedContent();
    }, [])
  );

  useEffect(() => {
    loadPersonalizedContent();
  }, []);

  const loadPersonalizedContent = async () => {
    try {
      setLoading(true);
      
      // Load user preferences
      const savedInterests = await AsyncStorage.getItem('userInterests');
      const savedLanguages = await AsyncStorage.getItem('userLanguages');
      
      const userInterests = savedInterests ? JSON.parse(savedInterests) : {};
      const userLanguages = savedLanguages ? JSON.parse(savedLanguages) : {};
      
      setInterests(userInterests);
      setSelectedLanguages(userLanguages);
      
      const sections = [];
      
      // 1. Filter Projects based on Interests with relevance scoring
      const activeInterests = Object.keys(userInterests).filter(key => userInterests[key]);
      if (activeInterests.length > 0 && projectsData && Array.isArray(projectsData)) {
        const matchingProjects = [];
        
        // Map interests to project tags/keywords
        const interestToKeywords = {
          web: ['web', 'website', 'fullstack', 'frontend', 'next.js', 'react', 'html', 'css', 'javascript'],
          mobile: ['mobile', 'app', 'react-native', 'expo', 'ios', 'android', 'flutter', 'cross-platform'],
          backend: ['backend', 'api', 'server', 'node', 'rest', 'graphql', 'express', 'fastapi'],
          frontend: ['frontend', 'react', 'vue', 'angular', 'ui', 'ux', 'responsive', 'spa'],
          database: ['database', 'sql', 'mongodb', 'postgres', 'firebase', 'mysql', 'nosql', 'prisma'],
          devops: ['devops', 'deployment', 'docker', 'ci/cd', 'vercel', 'deploy', 'kubernetes', 'github actions'],
          ai: ['ai', 'machine-learning', 'chatbot', 'openai', 'automation', 'gpt', 'ml', 'neural'],
          blockchain: ['blockchain', 'web3', 'crypto', 'smart-contract', 'ethereum', 'solidity', 'nft'],
          iot: ['iot', 'hardware', 'embedded', 'sensor', 'arduino', 'raspberry', 'mqtt'],
          gamedev: ['game', 'unity', 'graphics', '3d', 'gaming', 'unreal', 'godot', 'physics'],
          security: ['security', 'authentication', 'auth', 'jwt', 'encryption', 'oauth', 'bcrypt', 'https'],
          cloud: ['cloud', 'aws', 'serverless', 'azure', 'gcp', 'lambda', 's3', 'hosting']
        };
        
        projectsData.forEach(project => {
          let relevanceScore = 0;
          let matchedInterests = [];
          
          // Calculate relevance score
          activeInterests.forEach(interest => {
            const keywords = interestToKeywords[interest] || [];
            keywords.forEach(keyword => {
              const lowerKeyword = keyword.toLowerCase();
              
              // Title match = 3 points
              if (project.title?.toLowerCase().includes(lowerKeyword)) {
                relevanceScore += 3;
                if (!matchedInterests.includes(interest)) matchedInterests.push(interest);
              }
              
              // Tag match = 2 points
              if (project.tags?.some(tag => tag.toLowerCase().includes(lowerKeyword))) {
                relevanceScore += 2;
                if (!matchedInterests.includes(interest)) matchedInterests.push(interest);
              }
              
              // Description match = 1 point
              if (project.description?.toLowerCase().includes(lowerKeyword)) {
                relevanceScore += 1;
                if (!matchedInterests.includes(interest)) matchedInterests.push(interest);
              }
            });
          });
          
          // Only include if score >= 2 (at least one meaningful match)
          if (relevanceScore >= 2) {
            matchingProjects.push({
              id: project.id,
              type: 'project',
              relevanceScore,
              matchedInterests,
              ...project
            });
          }
        });
        
        if (matchingProjects.length > 0) {
          // Sort by relevance score (highest first)
          matchingProjects.sort((a, b) => b.relevanceScore - a.relevanceScore);
          
          sections.push({
            title: '🚀 Recommended Projects',
            data: matchingProjects.slice(0, 12) // Top 12 most relevant
          });
        }
      }
      
      // 2. Filter Language Topics based on Selected Languages
      const activeLanguages = Object.keys(userLanguages).filter(key => userLanguages[key]);
      if (activeLanguages.length > 0) {
        // Limit to first 3 languages for better UX
        const languagesToShow = activeLanguages.slice(0, 3);
        
        languagesToShow.forEach(langKey => {
          const language = languages[langKey];
          if (language && language.categories) {
            const topicItems = [];
            const categoryKeys = Object.keys(language.categories);
            
            // Priority categories to show first
            const priorityCategories = ['basics', 'fundamentals', 'arrays', 'functions', 'oop'];
            const orderedCategories = [
              ...categoryKeys.filter(key => priorityCategories.includes(key)),
              ...categoryKeys.filter(key => !priorityCategories.includes(key))
            ];
            
            // Get diverse topics from multiple categories
            const categoriesToShow = orderedCategories.slice(0, 4); // Up to 4 categories
            
            categoriesToShow.forEach(categoryKey => {
              const category = language.categories[categoryKey];
              if (category?.items && category.items.length > 0) {
                // Take 2-3 items per category for better variety
                const itemsToTake = Math.min(3, category.items.length);
                category.items.slice(0, itemsToTake).forEach((item, index) => {
                  topicItems.push({
                    id: `${langKey}_${categoryKey}_${index}`,
                    type: 'topic',
                    languageId: langKey,
                    languageName: language.name,
                    languageIcon: language.icon,
                    categoryId: categoryKey,
                    categoryName: category.name,
                    itemIndex: index,
                    title: item.title,
                    description: item.description
                  });
                });
              }
            });
            
            if (topicItems.length > 0) {
              sections.push({
                title: `${language.icon} ${language.name} Essentials`,
                data: topicItems.slice(0, 10) // Max 10 topics per language
              });
            }
          }
        });
        
        // Show hint if user has more languages selected
        if (activeLanguages.length > 3) {
          // Could add a "View More Languages" section here
        }
      }
      
      setPersonalizedContent(sections);
    } catch (error) {
      console.error('Error loading personalized content:', error);
      setPersonalizedContent([]);
    } finally {
      setLoading(false);
    }
  };

  const navigateToProject = (project) => {
    navigation.navigate('ProjectDetail', {
      projectId: project.id
    });
  };

  const navigateToTopic = (topic) => {
    navigation.navigate('CodeDetail', {
      languageId: topic.languageId,
      categoryId: topic.categoryId,
      itemIndex: topic.itemIndex,
      languageName: topic.languageName,
      categories: languages[topic.languageId]?.categories
    });
  };

  const renderItem = ({ item }) => {
    if (item.type === 'project') {
      return (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateToProject(item)}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🚀</Text>
            <Text style={styles.cardType}>Project</Text>
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription} numberOfLines={2}>
            {item.description}
          </Text>
          {item.difficulty && (
            <Text style={styles.cardMeta}>
              {item.difficulty} • {item.duration || 'Time varies'}
            </Text>
          )}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateToTopic(item)}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{item.languageIcon}</Text>
            <Text style={styles.cardType}>{item.languageName} › {item.categoryName}</Text>
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          {item.description && (
            <Text style={styles.cardDescription} numberOfLines={2}>
              {item.description}
            </Text>
          )}
        </TouchableOpacity>
      );
    }
  };

  const hasActivePreferences = () => {
    const hasInterests = Object.values(interests).some(v => v);
    const hasLanguages = Object.values(selectedLanguages).some(v => v);
    return hasInterests || hasLanguages;
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t('favorites.title')}</Text>
          <Text style={styles.headerSubtitle}>Personalized for You</Text>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('favorites.title')}</Text>
        <Text style={styles.headerSubtitle}>
          {personalizedContent.length > 0 
            ? `${personalizedContent.reduce((sum, section) => sum + section.data.length, 0)} personalized items`
            : 'Based on Your Interests & Languages'
          }
        </Text>
      </View>
      {!hasActivePreferences() ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>⚙️</Text>
          <Text style={styles.emptyTitle}>Personalize Your Feed</Text>
          <Text style={styles.emptyDescription}>
            Select your interests (Web, Mobile, AI, etc.) and favorite languages (JavaScript, Python, etc.) in Settings.{' '}
            {"\n\n"}We'll curate relevant projects and code examples just for you!
          </Text>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.settingsButtonText}>⚙️ Configure Preferences</Text>
          </TouchableOpacity>
        </View>
      ) : personalizedContent.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>🎯</Text>
          <Text style={styles.emptyTitle}>Hmm, No Perfect Matches</Text>
          <Text style={styles.emptyDescription}>
            We couldn't find content matching your current preferences.{' '}
            {"\n\n"}Try selecting additional interests or languages in Settings, or explore other sections of the app!
          </Text>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.settingsButtonText}>⚙️ Adjust Preferences</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <SectionList
          sections={personalizedContent}
          renderItem={renderItem}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionCount}>{section.data.length} items</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />
      )}
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  listContent: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  sectionCount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  cardType: {
    fontSize: 12,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  cardMeta: {
    fontSize: 12,
    color: colors.primary,
    marginTop: 8,
    fontWeight: '600',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  settingsButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  settingsButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
