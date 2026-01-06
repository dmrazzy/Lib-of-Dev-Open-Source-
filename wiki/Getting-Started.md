# 🚀 Getting Started

This guide will help you get Lib of Dev up and running on your machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify: `node --version`
  
- **npm** (comes with Node.js) or **yarn** or **pnpm**
  - Verify: `npm --version`

### For Mobile Development
- **For Android**:
  - Android 7.0 (Nougat, API level 24) or higher
  - Android Studio (optional, for emulator)
  
- **For iOS** (macOS only):
  - iOS 13.4 or higher
  - Xcode 12 or higher

### Optional but Recommended
- **Expo CLI**: `npm install -g expo-cli`
- **EAS CLI** (for builds): `npm install -g eas-cli`
- **VS Code** with extensions:
  - React Native Tools
  - ESLint
  - Prettier

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-.git
cd Lib-of-Dev-Open-Source-
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

This will install all required dependencies including:
- React Native 0.81
- Expo 54
- React Navigation 7
- i18next
- AsyncStorage
- And more...

### 3. Verify Installation

Check if everything is installed correctly:

```bash
npx expo-doctor
```

This command checks for common issues and suggests fixes.

---

## 🏃 Running the App

### Start the Development Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

This will start the Expo development server and show a QR code.

### Run on Different Platforms

Once the server is running, you can:

#### On Your Physical Device
1. Install **Expo Go** from:
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
   - [Apple App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)
2. Scan the QR code with:
   - Android: Expo Go app
   - iOS: Camera app (opens in Expo Go)

#### On Android Emulator
```bash
# Press 'a' in terminal after starting dev server
# or
npm run android
```

#### On iOS Simulator (macOS only)
```bash
# Press 'i' in terminal after starting dev server
# or
npm run ios
```

#### In Web Browser
```bash
# Press 'w' in terminal after starting dev server
# or
npm run web
```

---

## ⚙️ Initial Configuration

### 1. First Launch
When you first open the app:
- Select your preferred language (English/German)
- Browse the home screen to familiarize yourself with features

### 2. Optional: Setup AI Chat
To use the AI Chat Assistant:
1. Go to **Settings** ⚙️
2. Tap on **🔑 Groq API Key**
3. Get a free API key from [console.groq.com](https://console.groq.com)
4. Paste your key and save

See [AI Chat Assistant Guide](AI-Chat-Assistant.md) for detailed setup.

### 3. Customize Your Experience
In Settings, you can:
- Select your interests (Web, Mobile, Backend, etc.)
- Choose favorite programming languages
- Switch language (EN/DE)

---

## 🔄 Updating the App

To get the latest changes:

```bash
# Pull latest code
git pull origin main

# Reinstall dependencies (if package.json changed)
npm install

# Clear cache and restart
npx expo start --clear
```

---

## 🛠️ Development Tools

### Recommended VS Code Extensions

```bash
# Install React Native Tools
code --install-extension msjsdiag.vscode-react-native

# Install ESLint
code --install-extension dbaeumer.vscode-eslint

# Install Prettier
code --install-extension esbenp.prettier-vscode
```

### Debugging

#### React Native Debugger
1. Install: [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
2. Open debugger before starting app
3. Press `Ctrl+D` (Android) or `Cmd+D` (iOS) in app
4. Select "Debug"

#### Chrome DevTools
1. In running app, shake device or press `Ctrl+M` (Android) / `Cmd+D` (iOS)
2. Select "Debug" or "Debug Remote JS"
3. Opens Chrome DevTools

### Performance Monitoring

```bash
# Check bundle size
npx expo export

# Analyze performance
npx expo start --no-dev --minify
```

---

## 📱 Building for Production

See [Deployment Guide](Deployment-Guide.md) for detailed instructions.

### Quick Build Commands

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios

# Build for both
eas build --platform all
```

---

## 🆘 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 8081
npx kill-port 8081

# Or use different port
npx expo start --port 8082
```

#### Metro Bundler Cache Issues
```bash
# Clear all caches
npx expo start --clear

# Or manually
rm -rf node_modules
rm -rf .expo
npm install
```

#### Dependencies Mismatch
```bash
# Check and fix dependencies
npx expo install --check
npx expo install --fix
```

#### Android Build Errors
```bash
# Clean Android build
cd android
./gradlew clean
cd ..
npx expo start --clear
```

See [Troubleshooting Guide](Troubleshooting.md) for more solutions.

---

## 📚 Next Steps

Now that you have the app running:

1. **Explore Features**: Check out [Features Overview](Features-Overview.md)
2. **Setup AI Chat**: Follow [AI Chat Assistant Guide](AI-Chat-Assistant.md)
3. **Contribute**: Read [Contributing Guide](Contributing-Guide.md)
4. **Customize**: See [Developer Guide](Developer-Guide.md)

---

## 💡 Tips

- **Hot Reload**: Changes to code automatically refresh the app
- **Fast Refresh**: Preserves component state during reload
- **Debug Menu**: Shake device or `Ctrl+M` (Android) / `Cmd+D` (iOS)
- **Logs**: View with `npx expo logs` or in browser console

---

## 🤝 Need Help?

- **Issues**: [GitHub Issues](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues)
- **Discussions**: [GitHub Discussions](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions)
- **Instagram**: [@lenfi_development](https://www.instagram.com/lenfi_development)

---

**Happy Coding! 🚀**
