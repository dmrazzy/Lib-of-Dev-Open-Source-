# 👨‍💻 Developer Guide

Complete guide for developers who want to contribute code, understand the architecture, or extend functionality.

## 📋 Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Architecture Overview](#architecture-overview)
- [Key Technologies](#key-technologies)
- [Development Workflow](#development-workflow)
- [Debugging](#debugging)
- [Testing](#testing)
- [Best Practices](#best-practices)

---

## 🚀 Development Setup

### Prerequisites

- **Node.js** v18.0+
- **npm**, **yarn**, or **pnpm**
- **Git**
- **VS Code** (recommended)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Initial Setup

```bash
# Clone repository
git clone https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-.git
cd Lib-of-Dev-Open-Source-

# Install dependencies
npm install

# Start development server
npm start
```

### VS Code Setup

#### Recommended Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "msjsdiag.vscode-react-native",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss"
  ]
}
```

#### Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## 📁 Project Structure

```
Lib-of-Dev-Open-Source-/
├── App.js                  # Main app component
├── index.js                # Entry point
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── eas.json                # EAS Build configuration
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Badge.js
│   │   ├── Alert.js
│   │   ├── Field.js
│   │   ├── FormControls.js
│   │   ├── UIComponents.js
│   │   ├── CardComponents.js
│   │   ├── AdvancedComponents.js
│   │   ├── ComplexComponents.js
│   │   ├── ComponentShowcase.js
│   │   ├── ErrorBoundary.js
│   │   └── AdBanner.js
│   │
│   ├── constants/          # App-wide constants
│   │   ├── theme.js        # Design tokens
│   │   └── config.js       # Configuration
│   │
│   ├── data/              # Static content data
│   │   ├── languagesData.js       # 5,000+ LOC
│   │   ├── tutorialsData.js       # 3,251 LOC
│   │   ├── certificationsData.js  # 850 LOC
│   │   ├── toolsData.js           # 3,145 LOC
│   │   ├── errorsData.js          # 1,709 LOC
│   │   ├── developerHintsData.js
│   │   ├── specializedTopicsData.js
│   │   ├── resourceLinksData.js
│   │   ├── platformsData.js
│   │   ├── uiFrameworksData.js
│   │   ├── designPatternsData.js
│   │   ├── learningPathsData.js
│   │   └── learningResourcesData.js
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useAppTranslation.js
│   │   └── usePerformance.js
│   │
│   ├── i18n/              # Internationalization
│   │   ├── index.js
│   │   └── locales/
│   │       ├── en.json
│   │       └── de.json
│   │
│   ├── navigation/        # Navigation configuration
│   │   └── AppNavigator.js
│   │
│   ├── screens/           # App screens (24 total)
│   │   ├── HomeScreen.js
│   │   ├── AskAIScreen.js
│   │   ├── LanguageScreen.js
│   │   ├── CategoryScreen.js
│   │   ├── CodeDetailScreen.js
│   │   ├── TutorialsScreen.js
│   │   ├── TutorialDetailScreen.js
│   │   ├── CertificationsScreen.js
│   │   ├── ToolsScreen.js
│   │   ├── ToolDetailScreen.js
│   │   ├── ErrorSolutionsScreen.js
│   │   ├── ComponentsScreen.js
│   │   ├── AdvancedComponentsScreen.js
│   │   ├── FieldDemoScreen.js
│   │   ├── SearchScreen.js
│   │   ├── FavoritesScreen.js
│   │   ├── SettingsScreen.js
│   │   ├── HintsScreen.js
│   │   ├── SpecializedTopicsScreen.js
│   │   ├── ResourcesScreen.js
│   │   ├── PlatformsScreen.js
│   │   ├── UIFrameworksScreen.js
│   │   ├── LearningScreen.js
│   │   └── LanguageLearningPathScreen.js
│   │
│   └── services/          # External service integrations
│
├── assets/                # Images, fonts, icons
│
├── doc/                   # Documentation files
│
└── wiki/                  # Wiki documentation
```

---

## 🏗️ Architecture Overview

### App Flow

```
App.js (Root)
  ↓
ErrorBoundary (Error handling)
  ↓
AppNavigator (Navigation)
  ↓
Bottom Tab Navigator
  ├── Home Stack
  ├── Learning Stack
  ├── Ask AI Stack
  ├── Favorites Stack
  └── Settings Stack
```

### Navigation Structure

```javascript
// Bottom Tabs
- Home
  ├── Language Detail
  ├── Category View
  └── Code Detail
  
- Learning
  ├── Tutorials
  ├── Certifications
  ├── Tools
  └── Error Solutions
  
- Ask AI
  └── Chat Interface
  
- Favorites
  └── Saved Items
  
- Settings
  └── Preferences
```

### Data Flow

1. **Static Data**: Imported from `/src/data/` files
2. **User Data**: Stored in AsyncStorage
3. **API Data**: Fetched from Groq API
4. **State Management**: React Hooks (useState, useEffect)

---

## 🔑 Key Technologies

### Core
- **React Native 0.81** - Mobile framework
- **Expo 54** - Development platform
- **React 19** - UI library

### Navigation
- **React Navigation 7**
  - Stack Navigator
  - Bottom Tabs Navigator
  - Custom navigation patterns

### State & Storage
- **React Hooks** - Local state management
- **AsyncStorage** - Persistent storage
- **Context API** - Global state (i18n)

### Internationalization
- **i18next** - Translation framework
- **react-i18next** - React bindings

### UI & Styling
- **React Native StyleSheet**
- **Custom Design System** (shadcn/ui inspired)
- **Theme Constants**

### External Services
- **Groq API** - AI chat assistant
- **AdMob** - Monetization
- **Expo Clipboard** - Copy functionality

---

## 💻 Development Workflow

### Daily Development

```bash
# Start dev server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Clear cache if needed
npm start -- --clear
```

### Making Changes

1. **Create Feature Branch**
```bash
git checkout -b feature/your-feature
```

2. **Make Changes**
- Edit code
- Test frequently
- Keep changes focused

3. **Test Thoroughly**
```bash
# Test on Android
npm run android

# Test on iOS
npm run ios

# Check for issues
npx expo-doctor
```

4. **Commit Changes**
```bash
git add .
git commit -m "feat: add new feature"
```

5. **Push & Create PR**
```bash
git push origin feature/your-feature
# Then create PR on GitHub
```

---

## 🐛 Debugging

### React Native Debugger

#### Setup
```bash
# Download React Native Debugger
# https://github.com/jhen0409/react-native-debugger
```

#### Usage
1. Open debugger before starting app
2. In app: `Ctrl+M` (Android) or `Cmd+D` (iOS)
3. Select "Debug"
4. Use Chrome DevTools

### Console Logging

```javascript
// Basic logging
console.log('Debug message');

// Structured logging
console.log('User data:', { name, email });

// Warning
console.warn('Deprecated function used');

// Error
console.error('Error occurred:', error);
```

### Debug Menu

#### Android
- Shake device OR
- `Ctrl+M` in terminal OR
- `adb shell input keyevent 82`

#### iOS
- Shake device OR
- `Cmd+D` in simulator OR
- Hardware → Shake Gesture

### Debugging Tools

```javascript
// React DevTools
npm install -g react-devtools
react-devtools

// Network requests
// Enable in Debug menu → Debug → Open Chrome DevTools

// Performance
// Debug menu → Show Performance Monitor
```

---

## 🧪 Testing

### Manual Testing Checklist

#### Before Each Commit
- [ ] App launches successfully
- [ ] No console errors
- [ ] Navigation works
- [ ] Core features functional
- [ ] Styling intact

#### Before Each PR
- [ ] Test on Android
- [ ] Test on iOS (if possible)
- [ ] Test on physical device
- [ ] Test edge cases
- [ ] Test error scenarios

### Testing Specific Features

#### Navigation
```javascript
// Test all navigation paths
// From Home → Language → Category → Code Detail
// Test back buttons
// Test bottom tabs
```

#### AsyncStorage
```javascript
// Test save
// Close app
// Reopen app
// Verify data persists
```

#### AI Chat
```javascript
// Test with API key
// Test without API key
// Test error handling
// Test chat history
```

---

## 📝 Best Practices

### Code Style

#### Component Structure
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function MyComponent({ title, onPress }) {
  // 1. State
  const [isLoading, setIsLoading] = useState(false);
  
  // 2. Effects
  useEffect(() => {
    loadData();
  }, []);
  
  // 3. Handlers
  const handlePress = () => {
    onPress();
  };
  
  const loadData = async () => {
    setIsLoading(true);
    try {
      // Load data
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // 4. Render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// 5. Styles
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 18,
    color: colors.text,
  },
});
```

#### Use Theme Constants
```javascript
// ✅ Good
import { colors, spacing, borderRadius } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
  },
});

// ❌ Avoid
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000000',
    borderRadius: 8,
  },
});
```

#### Error Handling
```javascript
// ✅ Good
const loadData = async () => {
  try {
    const data = await fetchData();
    setData(data);
  } catch (error) {
    console.error('Failed to load data:', error);
    Alert.alert('Error', 'Failed to load data');
  }
};

// ❌ Avoid
const loadData = async () => {
  const data = await fetchData(); // No error handling
  setData(data);
};
```

### Performance

#### Optimize Lists
```javascript
// Use FlatList for long lists
<FlatList
  data={items}
  renderItem={({ item }) => <Item data={item} />}
  keyExtractor={item => item.id}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
/>
```

#### Memoize Expensive Calculations
```javascript
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);
```

#### Avoid Inline Functions
```javascript
// ✅ Good
const handlePress = useCallback(() => {
  doSomething();
}, []);

<Button onPress={handlePress} />

// ❌ Avoid
<Button onPress={() => doSomething()} />
```

### Accessibility

```javascript
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Save button"
  accessibilityHint="Saves your changes"
  accessibilityRole="button"
  onPress={handleSave}
>
  <Text>Save</Text>
</TouchableOpacity>
```

---

## 🔧 Common Tasks

### Adding a New Screen

1. **Create screen file**:
```javascript
// src/screens/NewScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>New Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

2. **Add to navigation**:
```javascript
// src/navigation/AppNavigator.js
import NewScreen from '../screens/NewScreen';

// Add to stack
<Stack.Screen name="New" component={NewScreen} />
```

### Adding Translation

1. **Add to locale files**:
```json
// src/i18n/locales/en.json
{
  "newFeature": {
    "title": "New Feature",
    "description": "Description here"
  }
}
```

2. **Use in component**:
```javascript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<Text>{t('newFeature.title')}</Text>
```

### Adding Content Data

See specific guides:
- [Adding Languages](Adding-Languages.md)
- [Adding Tutorials](Adding-Tutorials.md)
- [Adding Certifications](Adding-Certifications.md)

---

## 📚 Resources

- [Project Architecture](Project-Architecture.md)
- [Contributing Guide](Contributing-Guide.md)
- [Data Structure](Data-Structure.md)
- [i18n Guide](i18n-Guide.md)

---

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues)
- **Discussions**: [GitHub Discussions](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions)

---

**Happy Coding! 🚀**
