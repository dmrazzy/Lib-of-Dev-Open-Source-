# 🔧 Troubleshooting Guide

Common issues and solutions for Lib of Dev. If you encounter a problem not listed here, please [open an issue](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues).

## 📋 Table of Contents

- [Installation Issues](#installation-issues)
- [Build & Runtime Errors](#build--runtime-errors)
- [Metro Bundler Issues](#metro-bundler-issues)
- [Device & Emulator Issues](#device--emulator-issues)
- [App Features Issues](#app-features-issues)
- [Performance Issues](#performance-issues)
- [Data & Storage Issues](#data--storage-issues)
- [API & Network Issues](#api--network-issues)

---

## 📥 Installation Issues

### Dependencies Not Installing

**Problem**: `npm install` fails or hangs

**Solutions**:

1. **Clear npm cache**:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

2. **Use different package manager**:
```bash
# Try yarn
yarn install

# Or pnpm
pnpm install
```

3. **Check Node.js version**:
```bash
node --version  # Should be v18.0 or higher
```

4. **Update npm**:
```bash
npm install -g npm@latest
```

### Peer Dependency Warnings

**Problem**: Warnings about peer dependencies during install

**Solution**:
```bash
# Usually safe to ignore, but to fix:
npm install --legacy-peer-deps

# Or use Expo's installer
npx expo install --fix
```

### "Cannot find module" Error

**Problem**: Module not found after installation

**Solutions**:

1. **Reinstall dependencies**:
```bash
rm -rf node_modules
npm install
```

2. **Check package.json**:
```bash
# Verify package is listed in dependencies
cat package.json | grep "package-name"
```

3. **Install specific package**:
```bash
npm install package-name
```

---

## 🏗️ Build & Runtime Errors

### "Metro bundler has encountered an error"

**Problem**: Metro crashes during startup

**Solutions**:

1. **Clear Metro cache**:
```bash
npx expo start --clear
# or
npx react-native start --reset-cache
```

2. **Delete cache folders**:
```bash
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*
```

3. **Restart with clean state**:
```bash
watchman watch-del-all  # If using watchman
npm start -- --reset-cache
```

### "Unable to resolve module"

**Problem**: Import statements fail

**Solutions**:

1. **Check file path**:
```javascript
// ✅ Correct
import MyComponent from '../components/MyComponent';

// ❌ Wrong
import MyComponent from '../components/MyComponent.js';  // Don't include extension
```

2. **Clear cache and reinstall**:
```bash
npx expo start --clear
```

3. **Check case sensitivity**:
```javascript
// File: MyComponent.js
import MyComponent from './mycomponent';  // ❌ Wrong case
import MyComponent from './MyComponent';  // ✅ Correct
```

### "Element type is invalid"

**Problem**: Component import/export mismatch

**Solutions**:

1. **Check export statement**:
```javascript
// ✅ Default export
export default function MyComponent() {}

// ✅ Named export
export function MyComponent() {}
```

2. **Match import with export**:
```javascript
// For default export
import MyComponent from './MyComponent';

// For named export
import { MyComponent } from './MyComponent';
```

### App Crashes on Launch

**Problem**: App crashes immediately after opening

**Solutions**:

1. **Check error logs**:
```bash
# Android
adb logcat

# iOS
xcrun simctl spawn booted log stream --level=debug
```

2. **Reinstall app**:
```bash
# Delete app from device
# Then rebuild
npm run android
# or
npm run ios
```

3. **Check for syntax errors**:
```bash
# Run ESLint
npx eslint src/
```

---

## 📦 Metro Bundler Issues

### Port Already in Use

**Problem**: "Port 8081 is already in use"

**Solutions**:

1. **Kill process on port 8081**:
```bash
# Windows
netstat -ano | findstr :8081
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:8081 | xargs kill -9

# Or use kill-port
npx kill-port 8081
```

2. **Use different port**:
```bash
npx expo start --port 8082
```

### Bundling Failed

**Problem**: Metro can't bundle JavaScript

**Solutions**:

1. **Clear all caches**:
```bash
# Clear Metro cache
rm -rf $TMPDIR/metro-*

# Clear npm cache
npm cache clean --force

# Clear Expo cache
rm -rf ~/.expo

# Clear watchman (if installed)
watchman watch-del-all
```

2. **Reset everything**:
```bash
rm -rf node_modules
rm package-lock.json
npm install
npx expo start --clear
```

### Slow Bundling

**Problem**: Metro takes forever to bundle

**Solutions**:

1. **Enable Fast Refresh**:
```bash
# Should be enabled by default in Expo
```

2. **Reduce bundle size**:
```javascript
// Use dynamic imports
const Component = lazy(() => import('./Component'));
```

3. **Close other apps**:
- Free up system resources
- Close other Metro instances

---

## 📱 Device & Emulator Issues

### App Won't Run on Android Device

**Problem**: Can't install or run on physical Android device

**Solutions**:

1. **Check Android version**:
- Minimum: Android 7.0 (API 24)
- Update device if needed

2. **Update Expo Go**:
- Open Google Play Store
- Update Expo Go app

3. **Check USB debugging**:
```bash
# Enable USB debugging on device
Settings → Developer Options → USB Debugging

# Verify connection
adb devices
```

4. **Restart everything**:
```bash
adb kill-server
adb start-server
npm start --clear
```

### App Won't Run on iOS Device

**Problem**: Can't install or run on physical iOS device

**Solutions**:

1. **Check iOS version**:
- Minimum: iOS 13.4
- Update device if needed

2. **Update Expo Go**:
- Open App Store
- Update Expo Go app

3. **Trust development app**:
- Settings → General → Device Management
- Trust developer certificate

### Android Emulator Not Starting

**Problem**: Android Studio emulator fails to start

**Solutions**:

1. **Check virtualization**:
- BIOS: Enable Intel VT-x or AMD-V
- Windows: Enable Hyper-V or disable it for other virtualization

2. **Allocate more resources**:
- AVD Manager → Edit emulator
- Increase RAM and CPU cores

3. **Use different emulator**:
```bash
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_5_API_30
```

### iOS Simulator Not Starting

**Problem**: Xcode simulator fails to start

**Solutions**:

1. **Restart simulator service**:
```bash
sudo killall -9 com.apple.CoreSimulator.CoreSimulatorService
```

2. **Reset simulator**:
- Device → Erase All Content and Settings

3. **Reinstall Xcode Command Line Tools**:
```bash
xcode-select --install
```

---

## 🎯 App Features Issues

### AI Chat Not Working

**Problem**: AI chat shows error or doesn't respond

**Solutions**:

1. **Check API key**:
- Settings → Groq API Key
- Verify key is correct
- Get new key from [console.groq.com](https://console.groq.com)

2. **Check internet connection**:
- AI chat requires network
- Try different network

3. **Check API limits**:
- Visit Groq Console
- Check usage limits
- Upgrade if needed

See [AI Chat Assistant Guide](AI-Chat-Assistant.md) for more details.

### Favorites Not Saving

**Problem**: Favorited items disappear after app restart

**Solutions**:

1. **Check storage permissions**:
```bash
# Android
Settings → Apps → Lib of Dev → Permissions → Storage
```

2. **Clear AsyncStorage and retry**:
```javascript
// In app, Settings → Clear Data (if available)
// Or reinstall app
```

3. **Check device storage**:
- Ensure sufficient free space
- Minimum 100MB recommended

### Language Switch Not Working

**Problem**: UI language doesn't change

**Solutions**:

1. **Restart app**:
- Close app completely
- Reopen

2. **Clear app cache**:
```bash
# Reinstall app
npm run android
```

3. **Check translation files**:
```bash
# Verify locale files exist
ls src/i18n/locales/
```

### Search Not Finding Results

**Problem**: Search returns no results

**Solutions**:

1. **Check search query**:
- Try different keywords
- Check spelling
- Use common terms

2. **Clear search filters**:
- Remove any active filters
- Try broad search first

3. **Reload data**:
- Close and reopen app
- Pull to refresh (if available)

---

## ⚡ Performance Issues

### App Feels Sluggish

**Problem**: UI is slow or unresponsive

**Solutions**:

1. **Close background apps**:
- Free up device memory
- Close unused apps

2. **Reduce animations**:
```javascript
// In device settings
Settings → Accessibility → Reduce Motion
```

3. **Clear app cache**:
```bash
# Reinstall app
npm run android
```

### High Memory Usage

**Problem**: App uses too much RAM

**Solutions**:

1. **Check for memory leaks**:
```bash
# Use React DevTools Profiler
# Monitor component renders
```

2. **Optimize images**:
- Use smaller image sizes
- Use appropriate formats (WebP)

3. **Limit list items**:
- Use pagination
- Implement virtual lists

### Slow Scrolling

**Problem**: Lists scroll slowly or stutter

**Solutions**:

1. **Use FlatList optimizations**:
```javascript
<FlatList
  data={items}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews={true}
/>
```

2. **Memoize components**:
```javascript
const Item = React.memo(({ item }) => (
  <View>{/* Item content */}</View>
));
```

3. **Reduce image quality**:
- Lower resolution images
- Use image caching

---

## 💾 Data & Storage Issues

### AsyncStorage Errors

**Problem**: "AsyncStorage is null" or similar

**Solutions**:

1. **Verify installation**:
```bash
npm install @react-native-async-storage/async-storage
```

2. **Rebuild app**:
```bash
# Android
cd android && ./gradlew clean && cd ..
npm run android

# iOS
cd ios && pod install && cd ..
npm run ios
```

3. **Check permissions**:
- Ensure storage permissions granted

### Data Not Persisting

**Problem**: Settings/favorites lost on restart

**Solutions**:

1. **Check AsyncStorage writes**:
```javascript
// Verify save function is called
console.log('Saving to AsyncStorage');
await AsyncStorage.setItem(key, value);
```

2. **Check for errors**:
```javascript
try {
  await AsyncStorage.setItem(key, value);
} catch (error) {
  console.error('Save failed:', error);
}
```

3. **Test storage**:
```javascript
// In app, test storage
await AsyncStorage.setItem('test', 'value');
const result = await AsyncStorage.getItem('test');
console.log('Test result:', result);
```

### Storage Full

**Problem**: "Storage quota exceeded"

**Solutions**:

1. **Clear app data**:
```bash
# Android
Settings → Apps → Lib of Dev → Storage → Clear Data

# iOS
Delete and reinstall app
```

2. **Free device storage**:
- Delete unused apps
- Clear other app caches
- Remove old photos/videos

---

## 🌐 API & Network Issues

### Network Request Failed

**Problem**: API calls fail with network error

**Solutions**:

1. **Check internet connection**:
- Verify WiFi/mobile data
- Try different network
- Check firewall settings

2. **Check API endpoint**:
```javascript
// Verify URL is correct
console.log('API URL:', API_URL);
```

3. **Check timeouts**:
```javascript
// Increase timeout
const response = await fetch(url, {
  timeout: 30000, // 30 seconds
});
```

### CORS Errors (Web)

**Problem**: Cross-origin request blocked

**Solutions**:

1. **Use proxy**:
```javascript
// In development
// Add proxy to package.json
"proxy": "https://api.example.com"
```

2. **Backend configuration**:
- Configure CORS headers on server
- Allow origin domain

### SSL/TLS Errors

**Problem**: "SSL certificate error"

**Solutions**:

1. **Update device date/time**:
- Ensure correct date and time
- Enable automatic time sync

2. **Trust certificate** (development only):
```bash
# NOT for production
# Trust development certificates
```

3. **Check API certificate**:
- Ensure API has valid SSL certificate
- Contact API provider

---

## 🔄 Update Issues

### Git Pull Conflicts

**Problem**: Merge conflicts after pulling updates

**Solutions**:

1. **Stash changes first**:
```bash
git stash
git pull origin main
git stash pop
```

2. **Resolve conflicts**:
```bash
# Open conflicted files
# Look for <<<<<<< HEAD markers
# Resolve conflicts manually
git add .
git commit -m "Resolved conflicts"
```

3. **Reset if needed**:
```bash
# WARNING: Loses local changes
git reset --hard origin/main
```

### Package Version Conflicts

**Problem**: Dependency version mismatches

**Solutions**:

1. **Use Expo's installer**:
```bash
npx expo install --fix
```

2. **Match versions**:
```bash
# Check package.json for version mismatches
# Update to compatible versions
npm install package@version
```

3. **Clear and reinstall**:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🐛 Debug Tools

### Enable Debug Mode

**Android**:
```bash
# Shake device or
adb shell input keyevent 82

# Select "Debug"
```

**iOS**:
```bash
# Shake device or
# Hardware → Shake Gesture in simulator

# Select "Debug"
```

### View Logs

**Android**:
```bash
# All logs
adb logcat

# React Native logs only
adb logcat *:S ReactNative:V ReactNativeJS:V

# Save to file
adb logcat > android-logs.txt
```

**iOS**:
```bash
# Simulator logs
xcrun simctl spawn booted log stream --level=debug

# Physical device
idevicesyslog

# Save to file
xcrun simctl spawn booted log stream > ios-logs.txt
```

### React DevTools

```bash
# Install globally
npm install -g react-devtools

# Run
react-devtools

# Then open app and connect
```

---

## 📞 Getting Help

### Before Asking for Help

1. **Check this guide** - Your issue might be listed
2. **Search existing issues** - Someone may have solved it
3. **Try clean install** - Many issues fixed by fresh install
4. **Gather information**:
   - Error messages (full text)
   - Steps to reproduce
   - Device/OS version
   - App version

### Where to Get Help

- **GitHub Issues**: [Report bugs](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues)
- **GitHub Discussions**: [Ask questions](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions)
- **Instagram**: [@lenfi_development](https://www.instagram.com/lenfi_development)

### Creating a Good Bug Report

Include:
1. **Clear title**: Describe the problem
2. **Description**: What you expected vs what happened
3. **Steps to reproduce**: Numbered steps
4. **Environment**:
   - OS: Android 12 / iOS 16
   - Device: Pixel 6 / iPhone 13
   - App version: 2.0.0
5. **Error messages**: Full error text
6. **Screenshots**: If applicable
7. **Code**: Relevant code snippets

---

## 🔄 Common Fixes Checklist

Try these in order:

- [ ] Close and reopen app
- [ ] Clear Metro cache: `npx expo start --clear`
- [ ] Restart development server
- [ ] Clear app data and cache
- [ ] Reinstall node_modules: `rm -rf node_modules && npm install`
- [ ] Restart device/emulator
- [ ] Reinstall app
- [ ] Update dependencies: `npx expo install --fix`
- [ ] Check for app updates
- [ ] Reboot computer

---

## 📚 Related Documentation

- [Getting Started](Getting-Started.md) - Installation guide
- [Developer Guide](Developer-Guide.md) - Development setup
- [AI Chat Assistant](AI-Chat-Assistant.md) - AI feature troubleshooting
- [Contributing Guide](Contributing-Guide.md) - How to contribute fixes

---

## 💡 Pro Tips

### Keep System Updated
- Update Node.js regularly
- Update Expo CLI: `npm install -g expo-cli`
- Update Android Studio and Xcode
- Update device OS when possible

### Preventive Maintenance
```bash
# Weekly cleanup (optional)
npm cache clean --force
watchman watch-del-all
rm -rf $TMPDIR/metro-*
```

### Learn Debugging
- Master React DevTools
- Learn to read stack traces
- Use console.log strategically
- Understand error messages

---

**Still having issues? [Open an issue](https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues) and we'll help! 🚀**
