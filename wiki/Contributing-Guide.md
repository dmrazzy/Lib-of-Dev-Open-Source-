# 🤝 Contributing Guide

Thank you for your interest in contributing to Lib of Dev! This guide will help you get started.

## 🌟 Ways to Contribute

You can contribute in many ways:

### 💻 Code Contributions
- Fix bugs
- Add new features
- Improve performance
- Enhance UI/UX

### 📝 Content Contributions
- Add programming language examples
- Create tutorials
- Document certifications
- Add developer tools
- Contribute error solutions
- Write hints and tips

### 🌐 Translations
- Translate UI to new languages
- Improve existing translations
- Add localized content

### 📚 Documentation
- Improve README
- Write wiki pages
- Create tutorials
- Add code comments

### 🐛 Bug Reports
- Report issues
- Suggest improvements
- Test features

---

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on [GitHub](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-)

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/Lib-of-Dev-Open-Source-.git
cd Lib-of-Dev-Open-Source-
```

### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm start
```

See [Developer Guide](Developer-Guide.md) for detailed setup.

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
# or
git checkout -b docs/documentation-update
```

**Branch Naming Convention**:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `style/` - UI/styling changes
- `refactor/` - Code refactoring
- `test/` - Tests
- `chore/` - Maintenance

---

## 💻 Code Contributions

### Code Standards

#### JavaScript/React Native
```javascript
// Use functional components
export default function MyComponent({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);
  
  return (
    <View style={styles.container}>
      {/* Your code */}
    </View>
  );
}

// Use meaningful names
const handleButtonPress = () => {
  // Handle action
};

// Use constants for magic numbers
const MAX_ITEMS = 100;
const TIMEOUT_MS = 3000;
```

#### File Structure
```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 2. Constants
const DEFAULT_VALUE = 10;

// 3. Component
export default function MyComponent() {
  // 3a. State
  const [value, setValue] = useState(DEFAULT_VALUE);
  
  // 3b. Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // 3c. Handlers
  const handlePress = () => {
    // Handle action
  };
  
  // 3d. Render
  return (
    <View style={styles.container}>
      {/* JSX */}
    </View>
  );
}

// 4. Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

#### Styling
```javascript
// Use theme constants
import { colors, spacing, borderRadius } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
});
```

### Testing

Before submitting:

```bash
# Test on Android
npm run android

# Test on iOS (macOS only)
npm run ios

# Check for errors
npx expo-doctor
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format
<type>(<scope>): <description>

# Examples
feat(ai-chat): add response mode selector
fix(navigation): resolve back button issue
docs(readme): update installation steps
style(theme): improve dark mode colors
refactor(data): optimize language data structure
```

**Types**:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Styling
- `refactor` - Code refactoring
- `test` - Tests
- `chore` - Maintenance

---

## 📝 Content Contributions

### Adding Programming Languages

See [Adding Languages Guide](Adding-Languages.md) for detailed instructions.

**Quick Steps**:
1. Edit `src/data/languagesData.js`
2. Follow existing structure
3. Include examples, explanations, and categories
4. Test thoroughly

### Adding Tutorials

See [Adding Tutorials Guide](Adding-Tutorials.md) for details.

**Structure**:
```javascript
{
  id: 'tutorial-id',
  title: 'Tutorial Title',
  level: 'Beginner', // or Intermediate, Advanced
  duration: '5-6 hours',
  description: 'What students will learn',
  topics: ['Topic 1', 'Topic 2'],
  lessons: [
    {
      id: 'lesson-1',
      title: 'Lesson Title',
      duration: '45 min',
      content: `Lesson content in markdown`,
      code: `code examples`,
      exercises: [
        {
          question: 'Exercise question',
          solution: 'Solution code'
        }
      ]
    }
  ]
}
```

### Adding Certifications

See [Adding Certifications Guide](Adding-Certifications.md).

**Required Fields**:
```javascript
{
  id: 'cert-id',
  provider: 'Provider Name',
  name: 'Certification Name',
  description: 'What it covers',
  level: 'Beginner', // Intermediate, Advanced
  duration: '10-15 hours',
  url: 'https://official-link.com',
  topics: ['Topic 1', 'Topic 2'],
  free: true, // or false
  price: '$299', // if not free
  language: 'EN/DE'
}
```

### Adding Developer Tools

See [Adding Tools Guide](Adding-Tools.md).

### Adding Error Solutions

See [Adding Errors Guide](Adding-Errors.md).

---

## 🌐 Translation Contributions

### Adding a New Language

See [i18n Guide](i18n-Guide.md) for complete instructions.

**Quick Steps**:

1. **Create translation file**:
```bash
# Create new locale file
touch src/i18n/locales/fr.json
```

2. **Copy English file as template**:
```bash
cp src/i18n/locales/en.json src/i18n/locales/fr.json
```

3. **Translate all strings**:
```json
{
  "common": {
    "loading": "Chargement...",
    "error": "Erreur",
    "success": "Succès"
  }
}
```

4. **Register language**:
```javascript
// src/i18n/index.js
import fr from './locales/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr }, // Add here
  },
});
```

### Improving Translations

1. Find translation file in `src/i18n/locales/`
2. Edit JSON with better translations
3. Test in app
4. Submit PR

---

## 📚 Documentation Contributions

### Wiki Pages

1. Create new page in `wiki/` folder
2. Use meaningful filename: `Feature-Name.md`
3. Follow markdown formatting
4. Add links to related pages
5. Update `Home.md` with link to new page

### README Updates

1. Edit `README.md`
2. Keep formatting consistent
3. Update table of contents if needed
4. Add screenshots if relevant

### Code Comments

```javascript
/**
 * Component description
 * @param {Object} props - Component props
 * @param {string} props.title - Title to display
 * @param {Function} props.onPress - Callback function
 */
export default function MyComponent({ title, onPress }) {
  // Implementation
}
```

---

## 🐛 Bug Reports

### Before Reporting

1. **Search existing issues**: Check if already reported
2. **Try latest version**: Update and test again
3. **Reproduce**: Ensure you can reproduce consistently

### Issue Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- OS: [e.g. Android 12, iOS 16]
- App Version: [e.g. 2.0.0]
- Device: [e.g. Pixel 6, iPhone 13]

## Additional Context
Any other relevant information
```

---

## 🔄 Pull Request Process

### 1. Prepare Your PR

```bash
# Update your fork
git fetch upstream
git rebase upstream/main

# Push to your fork
git push origin feature/your-feature
```

### 2. Create Pull Request

1. Go to [GitHub Pull Requests](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/pulls)
2. Click "New Pull Request"
3. Select your branch
4. Fill in the template

### PR Template

```markdown
## Description
What does this PR do?

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2

## Testing Done
- [ ] Tested on Android
- [ ] Tested on iOS
- [ ] Added/updated tests

## Screenshots
If applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
```

### 3. Code Review

- Maintainers will review your PR
- Address feedback promptly
- Make requested changes
- Update PR with new commits

### 4. Merge

Once approved:
- PR will be merged by maintainer
- Your contribution is live! 🎉

---

## ✅ Checklist Before Submitting

### Code
- [ ] Follows code style guidelines
- [ ] No console.log or debugging code
- [ ] No commented-out code
- [ ] Proper error handling
- [ ] Works on Android and iOS

### Testing
- [ ] Tested on physical device
- [ ] Tested on emulator/simulator
- [ ] No new warnings or errors
- [ ] Performance is good

### Documentation
- [ ] Code comments added
- [ ] README updated if needed
- [ ] Wiki page created/updated if needed
- [ ] Changelog updated

### Git
- [ ] Meaningful commit messages
- [ ] Branch is up to date
- [ ] Conflicts resolved
- [ ] One logical change per commit

---

## 📖 Resources

### Documentation
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

### Community
- [GitHub Discussions](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions)
- [Instagram](https://www.instagram.com/lenfi_development)

### Related Wiki Pages
- [Developer Guide](Developer-Guide.md)
- [Project Architecture](Project-Architecture.md)
- [Data Structure](Data-Structure.md)
- [i18n Guide](i18n-Guide.md)

---

## 🎯 Good First Issues

Looking for something to work on? Check out issues labeled:
- `good first issue` - Easy for beginners
- `help wanted` - We need help here
- `documentation` - Improve docs
- `translation` - Add/improve translations

---

## 💬 Getting Help

Stuck? Need help?

- **Questions**: [GitHub Discussions](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions)
- **Chat**: Open an issue with your question
- **Email**: Contact through GitHub

---

## 🏆 Recognition

Contributors are recognized:
- Listed in README acknowledgments
- Mentioned in release notes
- Credit in commit history

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Every contribution helps make Lib of Dev better for developers worldwide. Thank you for being part of this community! ❤️

---

**Ready to contribute? Let's build something amazing together! 🚀**
