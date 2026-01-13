import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Clipboard from 'expo-clipboard';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import { useOnboardingContext } from '../context/OnboardingContext';
import AdBanner from '../components/AdBanner';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const CHAT_HISTORY_KEY = '@ai_chat_history';
const API_KEY_STORAGE = '@groq_api_key';

export default function AskAIScreen({ navigation }) {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [responseMode, setResponseMode] = useState('normal'); // short, normal, detailed
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [countdown, setCountdown] = useState(20);
  const scrollViewRef = useRef();
  const responseModeRef = useRef(null);
  const exampleRotationInterval = useRef(null);
  const countdownInterval = useRef(null);

  const { setScreenScrollRef, setOnboardingRefs } = useOnboardingContext();

  // All available examples that will rotate
  const allExamples = [
    { icon: '💡', text: 'Explain async/await in JavaScript' },
    { icon: '⚛️', text: 'How do I create a React component?' },
    { icon: '🐍', text: 'What are Python decorators?' },
    { icon: '☕', text: 'Explain Java interfaces vs abstract classes' },
    { icon: '🦀', text: 'What is ownership in Rust?' },
    { icon: '🎯', text: 'How do TypeScript generics work?' },
    { icon: '🔧', text: 'What is dependency injection?' },
    { icon: '🗄️', text: 'Explain SQL JOIN types with examples' },
    { icon: '🔐', text: 'How to implement JWT authentication?' },
    { icon: '⚙️', text: 'What are design patterns in software?' },
    { icon: '🌐', text: 'Explain RESTful API best practices' },
    { icon: '🎨', text: 'What is the difference between Grid and Flexbox?' },
    { icon: '📱', text: 'How to handle state in React Native?' },
    { icon: '🚀', text: 'What are React hooks and when to use them?' },
    { icon: '💾', text: 'Explain database normalization' },
    { icon: '🔄', text: 'What is the difference between Git merge and rebase?' },
    { icon: '🧪', text: 'How to write effective unit tests?' },
    { icon: '🏗️', text: 'What is microservices architecture?' },
    { icon: '⚡', text: 'How to optimize React app performance?' },
    { icon: '🔒', text: 'What is CORS and how to handle it?' },
    { icon: '📊', text: 'Explain time complexity in algorithms' },
    { icon: '🎭', text: 'What is polymorphism in OOP?' },
    { icon: '🌊', text: 'How do Promises work in JavaScript?' },
    { icon: '🔍', text: 'What is the difference between var, let, and const?' },
    { icon: '🧩', text: 'Explain middleware in Express.js' },
    { icon: '🎪', text: 'What are React context and props drilling?' },
    { icon: '🔮', text: 'How to use async generators in Python?' },
    { icon: '🎯', text: 'What is lazy loading and code splitting?' },
    { icon: '🛡️', text: 'How to prevent SQL injection attacks?' },
    { icon: '🎬', text: 'Explain the React component lifecycle' },
  ];

  // Get current set of 3 examples based on rotation index
  const getCurrentExamples = () => {
    const startIndex = currentExampleIndex * 3;
    return [
      allExamples[startIndex % allExamples.length],
      allExamples[(startIndex + 1) % allExamples.length],
      allExamples[(startIndex + 2) % allExamples.length],
    ];
  };

  useEffect(() => {
    loadChatHistory();
    loadApiKey();

    // Register scroll ref for onboarding
    setScreenScrollRef('AskAI', scrollViewRef);
    setOnboardingRefs('AskAI', {
      responseModes: responseModeRef,
    });

    // Start countdown timer (1 second intervals)
    countdownInterval.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          return 20; // Reset to 20 when it hits 0
        }
        return prev - 1;
      });
    }, 1000);

    // Start example rotation (20 second intervals)
    exampleRotationInterval.current = setInterval(() => {
      setCurrentExampleIndex((prevIndex) => (prevIndex + 1) % Math.ceil(allExamples.length / 3));
      setCountdown(20); // Reset countdown when rotating
    }, 20000); // Rotate every 20 seconds

    return () => {
      if (exampleRotationInterval.current) {
        clearInterval(exampleRotationInterval.current);
      }
      if (countdownInterval.current) {
        clearInterval(countdownInterval.current);
      }
    };
  }, [setScreenScrollRef, setOnboardingRefs]);

  // Reload API key when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadApiKey();
    }, [])
  );

  const loadApiKey = async () => {
    try {
      const key = await AsyncStorage.getItem(API_KEY_STORAGE);
      if (key) {
        setApiKey(key);
      }
    } catch (error) {
      console.log('Error loading API key:', error);
    }
  };

  const loadChatHistory = async () => {
    try {
      setIsLoadingHistory(true);
      const history = await AsyncStorage.getItem(CHAT_HISTORY_KEY);
      if (history) {
        setMessages(JSON.parse(history));
      }
    } catch (error) {
      console.log('Error loading chat history:', error);
    } finally {
      setIsLoadingHistory(false);
    }
  };

  const saveChatHistory = async (newMessages) => {
    try {
      await AsyncStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(newMessages));
    } catch (error) {
      console.log('Error saving chat history:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    if (!apiKey) {
      Alert.alert(
        t('askAI.noApiKey'),
        t('askAI.noApiKeyMessage'),
        [
          { text: t('common.cancel'), style: 'cancel' },
          { 
            text: t('askAI.goToSettings'), 
            onPress: () => navigation.navigate('Settings')
          }
        ]
      );
      return;
    }

    const userMessage = {
      role: 'user',
      content: inputText.trim(),
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // Create system prompt based on response mode
      let systemPrompt = '';
      let temperature = 0.7;
      let maxTokens = 2048;

      if (responseMode === 'short') {
        systemPrompt = `You are an expert programming assistant for Lib of Dev, a comprehensive developer learning app covering 20+ languages, AI/ML, IoT, DevOps, and more.

**Response style:** Ultra-concise. Answer in 2-3 sentences max or bullet points. Focus on the core solution without lengthy explanations.
**Code:** Only include code if absolutely essential (keep under 10 lines).
**Tone:** Direct, practical, no fluff.`;
        temperature = 0.3;
        maxTokens = 512;
      } else if (responseMode === 'detailed') {
        systemPrompt = `You are an expert programming assistant for Lib of Dev, a comprehensive developer learning app covering 20+ languages, AI/ML, IoT, DevOps, and more.

**Response style:** Comprehensive and educational. Provide detailed explanations, multiple examples, best practices, common pitfalls, and real-world use cases.
**Code:** Include complete, production-ready examples with comments.
**Structure:** Use clear headings, bullet points, and logical flow.
**Context:** Explain the "why" behind concepts, trade-offs, and alternatives.
**Tone:** Patient, thorough, educational.`;
        temperature = 0.7;
        maxTokens = 4096;
      } else {
        systemPrompt = `You are an expert programming assistant for Lib of Dev, a comprehensive developer learning app covering 20+ languages, AI/ML, IoT, DevOps, and more.

**Response style:** Balanced and practical. Provide clear explanations with working code examples.
**Code:** Include a concise, tested example (10-30 lines) when relevant.
**Structure:** Start with a brief answer, then provide code + explanation.
**Best practices:** Mention 1-2 key best practices or common mistakes.
**Tone:** Friendly, professional, helpful.`;
        temperature = 0.7;
        maxTokens = 2048;
      }

      const messagesWithSystem = [
        { role: 'system', content: systemPrompt },
        ...newMessages.map(msg => ({
          role: msg.role,
          content: msg.content,
        }))
      ];

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: messagesWithSystem,
          temperature: temperature,
          max_tokens: maxTokens,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      const updatedMessages = [...newMessages, assistantMessage];
      setMessages(updatedMessages);
      saveChatHistory(updatedMessages);
    } catch (error) {
      Alert.alert(t('common.error'), error.message || t('askAI.errorMessage'));
      // Remove the user message if request failed
      setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    Alert.alert(
      t('askAI.clearChat'),
      t('askAI.clearChatConfirm'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('askAI.clear'),
          style: 'destructive',
          onPress: async () => {
            setMessages([]);
            await AsyncStorage.removeItem(CHAT_HISTORY_KEY);
          },
        },
      ]
    );
  };

  const copyMessage = async (content) => {
    await Clipboard.setStringAsync(content);
    Alert.alert(t('common.success'), t('askAI.copiedToClipboard'));
  };

  const formatMarkdown = (text) => {
    // Convert **bold** to bold text with Text components
    const parts = [];
    const regex = /(\*\*.*?\*\*)/g;
    const matches = text.split(regex);
    
    return matches.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Bold text
        return (
          <Text key={index} style={styles.boldText}>
            {part.slice(2, -2)}
          </Text>
        );
      }
      return part;
    });
  };

  const renderMessage = (message, index) => {
    const isUser = message.role === 'user';
    
    return (
      <View
        key={index}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.assistantMessage,
        ]}
      >
        <View style={styles.messageHeader}>
          <Text style={styles.messageRole}>
            {isUser ? '👤 ' + t('askAI.you') : '🤖 ' + t('askAI.ai')}
          </Text>
          {!isUser && (
            <TouchableOpacity
              onPress={() => copyMessage(message.content)}
              style={styles.copyButton}
            >
              <Text style={styles.copyButtonText}>📋</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.messageContent}>
          {formatMarkdown(message.content)}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>🤖 {t('askAI.title')}</Text>
            <Text style={styles.headerSubtitle}>{t('askAI.subtitle')}</Text>
          </View>
          {messages.length > 0 && (
            <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>🗑️</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Response Mode Selector */}
        <View ref={responseModeRef} style={styles.modeContainer}>
          <TouchableOpacity
            style={[styles.modeButton, responseMode === 'short' && styles.modeButtonActive]}
            onPress={() => setResponseMode('short')}
          >
            <Text style={[styles.modeButtonText, responseMode === 'short' && styles.modeButtonTextActive]}>
              ⚡ {t('askAI.modeShort')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, responseMode === 'normal' && styles.modeButtonActive]}
            onPress={() => setResponseMode('normal')}
          >
            <Text style={[styles.modeButtonText, responseMode === 'normal' && styles.modeButtonTextActive]}>
              💬 {t('askAI.modeNormal')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, responseMode === 'detailed' && styles.modeButtonActive]}
            onPress={() => setResponseMode('detailed')}
          >
            <Text style={[styles.modeButtonText, responseMode === 'detailed' && styles.modeButtonTextActive]}>
              📖 {t('askAI.modeDetailed')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
        >
          {isLoadingHistory ? (
            <View style={styles.loadingState}>
              <ActivityIndicator color={colors.primary} size="large" />
              <Text style={styles.loadingText}>{t('common.loading')}</Text>
            </View>
          ) : messages.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>💬</Text>
              <Text style={styles.emptyTitle}>{t('askAI.emptyTitle')}</Text>
              <Text style={styles.emptyDescription}>
                {t('askAI.emptyDescription')}
              </Text>

              {/* AI Limitations Notice */}
              <View style={styles.limitationsCard}>
                <Text style={styles.limitationsIcon}>⚠️</Text>
                <Text style={styles.limitationsTitle}>{t('askAI.limitationsTitle')}</Text>
                <Text style={styles.limitationsText}>
                  {t('askAI.limitationsText')}
                </Text>
              </View>

              {/* Quick Actions */}
              <View style={styles.quickActionsContainer}>
                <Text style={styles.quickActionsTitle}>{t('askAI.quickActions')}</Text>
                <View style={styles.quickActionsGrid}>
                  <TouchableOpacity
                    style={styles.quickActionButton}
                    onPress={() => setInputText('Explain this code: [paste your code here]')}
                  >
                    <Text style={styles.quickActionIcon}>🔍</Text>
                    <Text style={styles.quickActionText}>{t('askAI.actionExplainCode')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.quickActionButton}
                    onPress={() => setInputText('Find bugs in: [paste your code here]')}
                  >
                    <Text style={styles.quickActionIcon}>🐛</Text>
                    <Text style={styles.quickActionText}>{t('askAI.actionFindBugs')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.quickActionButton}
                    onPress={() => setInputText('Optimize this code: [paste your code here]')}
                  >
                    <Text style={styles.quickActionIcon}>⚡</Text>
                    <Text style={styles.quickActionText}>{t('askAI.actionOptimize')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.quickActionButton}
                    onPress={() => setInputText('Convert this code to [language]: [paste code here]')}
                  >
                    <Text style={styles.quickActionIcon}>🔄</Text>
                    <Text style={styles.quickActionText}>{t('askAI.actionConvert')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.quickActionButton}
                    onPress={() => setInputText('Add comments to: [paste your code here]')}
                  >
                    <Text style={styles.quickActionIcon}>💬</Text>
                    <Text style={styles.quickActionText}>{t('askAI.actionAddComments')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.quickActionButton}
                    onPress={() => setInputText('Write unit tests for: [paste your code here]')}
                  >
                    <Text style={styles.quickActionIcon}>✅</Text>
                    <Text style={styles.quickActionText}>{t('askAI.actionWriteTests')}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.examplesContainer}>
                <View style={styles.examplesHeader}>
                  <Text style={styles.examplesTitle}>{t('askAI.examples')}</Text>
                  <View style={styles.countdownBadge}>
                    <Text style={styles.countdownIcon}>🔄</Text>
                    <Text style={styles.countdownText}>{countdown}s</Text>
                  </View>
                </View>
                {getCurrentExamples().map((example, index) => (
                  <TouchableOpacity
                    key={`${currentExampleIndex}-${index}`}
                    style={styles.exampleCard}
                    onPress={() => setInputText(example.text)}
                  >
                    <Text style={styles.exampleText}>{example.icon} {example.text}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : (
            messages.map((message, index) => renderMessage(message, index))
          )}
          {isLoading && (
            <View style={[styles.messageContainer, styles.assistantMessage]}>
              <Text style={styles.messageRole}>🤖 {t('askAI.ai')}</Text>
              <ActivityIndicator color={colors.primary} style={{ marginTop: 8 }} />
            </View>
          )}
        </ScrollView>

        {/* AdMob Banner */}
        <View style={styles.adContainer}>
          <AdBanner adUnitId="ca-app-pub-5526801232554836/8545682699" />
        </View>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder={t('askAI.placeholder')}
            placeholderTextColor={colors.textMuted}
            multiline
            maxLength={2000}
            editable={!isLoading}
          />
          <TouchableOpacity
            style={[styles.sendButton, (!inputText.trim() || isLoading) && styles.sendButtonDisabled]}
            onPress={sendMessage}
            disabled={!inputText.trim() || isLoading}
          >
            <Text style={styles.sendButtonText}>
              {isLoading ? '⏳' : '📤'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
  },
  clearButton: {
    padding: spacing.xs,
  },
  clearButtonText: {
    fontSize: 24,
  },
  modeContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.xs,
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modeButton: {
    flex: 1,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.backgroundCard,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  modeButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  modeButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  modeButtonTextActive: {
    color: colors.buttonText,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  loadingState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xxl,
  },
  loadingText: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.sm,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptyDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  examplesContainer: {
    width: '100%',
    marginTop: spacing.md,
  },
  examplesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  examplesTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  countdownBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryAlpha,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  countdownIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  countdownText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  exampleCard: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  exampleText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  limitationsCard: {
    backgroundColor: colors.backgroundCard,
    borderLeftWidth: 4,
    borderLeftColor: '#FFA500',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginVertical: spacing.md,
    width: '100%',
  },
  limitationsIcon: {
    fontSize: 20,
    marginBottom: spacing.xs,
  },
  limitationsTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  limitationsText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  quickActionsContainer: {
    width: '100%',
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  quickActionsTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  quickActionButton: {
    width: '48%',
    backgroundColor: colors.backgroundElevated,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    alignItems: 'center',
    ...shadows.small,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  quickActionText: {
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
  messageContainer: {
    marginBottom: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    maxWidth: '85%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary + '30',
    borderWidth: 1,
    borderColor: colors.primary + '50',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.backgroundElevated,
    borderWidth: 1,
    borderColor: colors.border,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  messageRole: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  copyButton: {
    padding: spacing.xs,
  },
  copyButtonText: {
    fontSize: 16,
  },
  messageContent: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.text,
  },
  adContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    backgroundColor: colors.backgroundElevated,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.md,
    backgroundColor: colors.backgroundElevated,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.sm,
    paddingTop: spacing.sm,
    color: colors.text,
    fontSize: 16,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.sm,
    ...shadows.small,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    fontSize: 20,
  },
});
