import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import AdBanner from '../components/AdBanner';

export default function ProjectDetailScreen({ route, navigation }) {
  const { project } = route.params;
  const [expandedSteps, setExpandedSteps] = useState([0]); // First step expanded by default

  const toggleStep = (index) => {
    if (expandedSteps.includes(index)) {
      setExpandedSteps(expandedSteps.filter(i => i !== index));
    } else {
      setExpandedSteps([...expandedSteps, index]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return '#4CAF50';
      case 'Intermediate':
        return '#FF9800';
      case 'Advanced':
        return '#F44336';
      default:
        return colors.primary;
    }
  };

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Project Header */}
        <View style={styles.header}>
          <Text style={styles.icon}>{project.icon}</Text>
          <Text style={styles.title}>{project.title}</Text>
          
          <View style={styles.metaContainer}>
            <View
              style={[
                styles.difficultyBadge,
                { backgroundColor: getDifficultyColor(project.difficulty) + '20' },
              ]}
            >
              <Text
                style={[
                  styles.difficultyText,
                  { color: getDifficultyColor(project.difficulty) },
                ]}
              >
                {project.difficulty}
              </Text>
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>⏱️ {project.duration}</Text>
            </View>
          </View>

          <Text style={styles.description}>{project.description}</Text>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            {project.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Ad Banner */}
        <AdBanner />

        {/* Progress Info */}
        <View style={styles.progressCard}>
          <Text style={styles.progressIcon}>📋</Text>
          <View style={styles.progressContent}>
            <Text style={styles.progressTitle}>
              {project.steps.length} Steps to Complete
            </Text>
            <Text style={styles.progressText}>
              Follow each step carefully. Tap to expand details, code, and tips.
            </Text>
          </View>
        </View>

        {/* Steps */}
        <View style={styles.stepsContainer}>
          {project.steps.map((step, index) => {
            const isExpanded = expandedSteps.includes(index);
            const isCompleted = false; // You can add state management for completion

            return (
              <View key={step.id} style={styles.stepCard}>
                {/* Step Header */}
                <TouchableOpacity
                  style={styles.stepHeader}
                  onPress={() => toggleStep(index)}
                  activeOpacity={0.7}
                >
                  <View style={styles.stepHeaderLeft}>
                    <View
                      style={[
                        styles.stepNumber,
                        isCompleted && styles.stepNumberCompleted,
                      ]}
                    >
                      <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <View style={styles.stepHeaderText}>
                      <Text style={styles.stepTitle}>{step.title}</Text>
                      <Text style={styles.stepDuration}>⏱️ {step.duration}</Text>
                    </View>
                  </View>
                  <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
                </TouchableOpacity>

                {/* Step Content */}
                {isExpanded && (
                  <View style={styles.stepContent}>
                    {/* Description */}
                    <Text style={styles.contentText}>{step.content}</Text>

                    {/* Code Block */}
                    {step.code && (
                      <View style={styles.codeContainer}>
                        <View style={styles.codeHeader}>
                          <Text style={styles.codeTitle}>💻 Code</Text>
                        </View>
                        <ScrollView
                          horizontal
                          showsHorizontalScrollIndicator={true}
                          style={styles.codeScrollView}
                        >
                          <Text style={styles.codeText}>{step.code}</Text>
                        </ScrollView>
                      </View>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <View style={styles.tipsContainer}>
                        <Text style={styles.sectionTitle}>💡 Tips</Text>
                        {step.tips.map((tip, tipIndex) => (
                          <View key={tipIndex} style={styles.tipItem}>
                            <Text style={styles.tipBullet}>•</Text>
                            <Text style={styles.tipText}>{tip}</Text>
                          </View>
                        ))}
                      </View>
                    )}

                    {/* Resources */}
                    {step.resources && step.resources.length > 0 && (
                      <View style={styles.resourcesContainer}>
                        <Text style={styles.sectionTitle}>🔗 Resources</Text>
                        {step.resources.map((resource, resIndex) => (
                          <TouchableOpacity
                            key={resIndex}
                            style={styles.resourceItem}
                            onPress={() => openURL(resource.url)}
                          >
                            <Text style={styles.resourceTitle}>{resource.title}</Text>
                            <Text style={styles.resourceUrl}>→</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Completion Card */}
        <View style={styles.completionCard}>
          <Text style={styles.completionIcon}>🎉</Text>
          <Text style={styles.completionTitle}>Ready to Build?</Text>
          <Text style={styles.completionText}>
            Follow these steps to create your own project. Don't hesitate to experiment and make it your own!
          </Text>
        </View>

        <View style={{ height: 20 }} />
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
    padding: spacing.lg,
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  icon: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  difficultyBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '700',
  },
  durationBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
  },
  durationText: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  tag: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.md,
  },
  tagText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  progressCard: {
    flexDirection: 'row',
    backgroundColor: colors.primary + '20',
    margin: spacing.lg,
    padding: spacing.lg,
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: colors.primary + '40',
    gap: spacing.md,
  },
  progressIcon: {
    fontSize: 32,
  },
  progressContent: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  progressText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  stepsContainer: {
    padding: spacing.lg,
    paddingTop: 0,
  },
  stepCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    ...shadows.sm,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
  },
  stepHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: spacing.md,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberCompleted: {
    backgroundColor: '#4CAF50',
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  stepHeaderText: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  stepDuration: {
    fontSize: 14,
    color: colors.textMuted,
  },
  expandIcon: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: spacing.sm,
  },
  stepContent: {
    padding: spacing.lg,
    paddingTop: 0,
  },
  contentText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  codeContainer: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  codeHeader: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  codeScrollView: {
    maxHeight: 400,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: colors.text,
    padding: spacing.md,
    lineHeight: 20,
  },
  tipsContainer: {
    backgroundColor: colors.primary + '15',
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  tipBullet: {
    fontSize: 16,
    color: colors.primary,
    marginRight: spacing.sm,
    fontWeight: 'bold',
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  resourcesContainer: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  resourceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  resourceTitle: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    flex: 1,
  },
  resourceUrl: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
  completionCard: {
    backgroundColor: colors.backgroundElevated,
    margin: spacing.lg,
    padding: spacing.lg,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  completionIcon: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  completionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  completionText: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
