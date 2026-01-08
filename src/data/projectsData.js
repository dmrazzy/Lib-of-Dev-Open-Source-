// COMPREHENSIVE PROJECT TUTORIALS
// Step-by-step guides for building real-world projects

export const projectsData = [
  {
    id: 'website-fullstack',
    title: 'Build & Deploy a Full Website',
    icon: '🌐',
    difficulty: 'Intermediate',
    duration: '3-4 hours',
    description: 'Learn how to build a complete website from scratch, push to GitHub, deploy on Vercel, and connect a custom domain.',
    tags: ['Web Development', 'GitHub', 'Vercel', 'Domain'],
    steps: [
      {
        id: 'step-1',
        title: '1. Create Your Website Project',
        duration: '30 min',
        content: `Set up a modern website using React and Next.js.

**What You'll Learn:**
- Initialize a Next.js project
- Project structure and organization
- Basic React components
- Styling with CSS modules or Tailwind

**Commands to Run:**`,
        code: `# Create a new Next.js project
npx create-next-app@latest my-website

# Navigate to project
cd my-website

# Install additional dependencies (optional)
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development server
npm run dev`,
        tips: [
          'Choose TypeScript for better type safety',
          'Enable ESLint for code quality',
          'Use App Router (recommended) over Pages Router',
        ],
        resources: [
          { title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
          { title: 'React Documentation', url: 'https://react.dev' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Build Your Website Content',
        duration: '60 min',
        content: `Create pages, components, and content for your website.

**Key Components to Build:**
- Home page with hero section
- About page
- Contact form
- Navigation menu
- Footer

**Example Structure:**`,
        code: `// app/page.js - Home Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>Building amazing things with Next.js</p>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Built with Next.js for optimal performance</p>
        </div>
        <div className="feature-card">
          <h3>Modern</h3>
          <p>Using latest web technologies</p>
        </div>
        <div className="feature-card">
          <h3>Responsive</h3>
          <p>Works on all devices</p>
        </div>
      </section>
    </main>
  );
}

// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}`,
        tips: [
          'Keep components small and reusable',
          'Use semantic HTML for better SEO',
          'Test responsiveness on different screen sizes',
        ],
      },
      {
        id: 'step-3',
        title: '3. Set Up GitHub Repository',
        duration: '20 min',
        content: `Initialize Git, create a GitHub repository, and push your code.

**Steps:**
1. Initialize Git in your project
2. Create .gitignore file
3. Make initial commit
4. Create GitHub repository
5. Push to GitHub

**Commands:**`,
        code: `# Initialize Git (if not already done)
git init

# Create .gitignore
echo "node_modules
.next
.env.local
.DS_Store
*.log" > .gitignore

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Basic website setup"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/my-website.git
git branch -M main
git push -u origin main`,
        tips: [
          'Use meaningful commit messages',
          'Never commit sensitive data (.env files)',
          'Create a README.md with project description',
          'Add a LICENSE file if open-sourcing',
        ],
        resources: [
          { title: 'GitHub Docs', url: 'https://docs.github.com' },
          { title: 'Git Basics', url: 'https://git-scm.com/book/en/v2/Getting-Started-Git-Basics' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Deploy to Vercel',
        duration: '30 min',
        content: `Deploy your website to Vercel for free hosting with automatic CI/CD.

**Deployment Steps:**
1. Sign up for Vercel (use GitHub login)
2. Import your GitHub repository
3. Configure build settings
4. Deploy!

**How to Deploy:**`,
        code: `# Method 1: Using Vercel CLI
npm install -g vercel
vercel login
vercel

# Method 2: Using Vercel Dashboard
# 1. Go to https://vercel.com
# 2. Click "New Project"
# 3. Import from GitHub
# 4. Select your repository
# 5. Click "Deploy"

# Vercel Configuration (vercel.json) - Optional
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "env": {
    "NEXT_PUBLIC_API_URL": "@api-url"
  }
}`,
        tips: [
          'Vercel automatically detects Next.js projects',
          'Every push to main branch triggers a deployment',
          'Preview deployments for pull requests',
          'Free SSL certificates included',
          'Use environment variables for secrets',
        ],
        resources: [
          { title: 'Vercel Documentation', url: 'https://vercel.com/docs' },
          { title: 'Deployment Guide', url: 'https://nextjs.org/docs/deployment' },
        ],
      },
      {
        id: 'step-5',
        title: '5. Connect Custom Domain',
        duration: '30 min',
        content: `Purchase and connect a custom domain to your Vercel deployment.

**Steps to Connect Domain:**
1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. Add domain in Vercel dashboard
3. Configure DNS records
4. Wait for DNS propagation

**Domain Setup:**`,
        code: `# DNS Records to Add (at your domain registrar)

# For root domain (example.com):
Type: A
Name: @
Value: 76.76.21.21

# For www subdomain:
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Alternative: Point nameservers to Vercel
ns1.vercel-dns.com
ns2.vercel-dns.com

# After adding domain in Vercel:
# 1. Go to Project Settings
# 2. Click "Domains"
# 3. Add your domain
# 4. Follow the DNS instructions
# 5. Wait 24-48 hours for propagation`,
        tips: [
          'DNS changes can take up to 48 hours',
          'Use Vercel nameservers for easiest setup',
          'Always get SSL certificate (automatic with Vercel)',
          'Consider .com, .dev, or .io domains',
          'Use domain privacy protection',
        ],
        resources: [
          { title: 'Vercel Custom Domains', url: 'https://vercel.com/docs/concepts/projects/domains' },
          { title: 'Namecheap', url: 'https://www.namecheap.com' },
          { title: 'Google Domains', url: 'https://domains.google' },
        ],
      },
      {
        id: 'step-6',
        title: '6. Maintenance & Updates',
        duration: '30 min',
        content: `Learn how to maintain and update your deployed website.

**Ongoing Maintenance:**
- Regular updates
- Monitoring and analytics
- SEO optimization
- Performance monitoring

**Update Workflow:**`,
        code: `# Make changes locally
# Edit your files...

# Test locally
npm run dev

# Commit changes
git add .
git commit -m "Update: Add new features"

# Push to GitHub (auto-deploys to Vercel)
git push origin main

# Check deployment status on Vercel dashboard

# Adding Analytics (Vercel Analytics)
npm install @vercel/analytics

// app/layout.js
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

# Environment Variables on Vercel
# 1. Go to Project Settings
# 2. Click "Environment Variables"
# 3. Add your variables
# 4. Redeploy to apply changes`,
        tips: [
          'Monitor your Vercel deployment logs',
          'Set up Google Analytics or Vercel Analytics',
          'Use Lighthouse for performance audits',
          'Keep dependencies updated',
          'Use Git branches for testing new features',
        ],
      },
    ],
  },
  {
    id: 'expo-mobile-app',
    title: 'Create iOS & Android App with Expo',
    icon: '📱',
    difficulty: 'Intermediate',
    duration: '4-5 hours',
    description: 'Build a cross-platform mobile app using Expo, develop features, and publish to App Store and Google Play.',
    tags: ['Mobile', 'Expo', 'React Native', 'iOS', 'Android'],
    steps: [
      {
        id: 'step-1',
        title: '1. Set Up Expo Project',
        duration: '30 min',
        content: `Initialize an Expo project and understand the project structure.

**Prerequisites:**
- Node.js installed (v18 or later)
- Expo Go app on your phone
- Code editor (VS Code recommended)

**Project Setup:**`,
        code: `# Install Expo CLI
npm install -g expo-cli

# Create new Expo project
npx create-expo-app@latest my-mobile-app

# Navigate to project
cd my-mobile-app

# Start development server
npx expo start

# Alternative: Use npm
npm start

# Scan QR code with Expo Go app to preview

# Project Structure:
# my-mobile-app/
#   ├── App.js              # Main entry point
#   ├── app.json            # Expo configuration
#   ├── package.json        # Dependencies
#   ├── assets/             # Images, fonts, etc.
#   ├── components/         # Reusable components
#   └── screens/            # Screen components`,
        tips: [
          'Install Expo Go on your phone for live preview',
          'Use TypeScript for better development experience',
          'Choose between Managed or Bare workflow',
          'Expo Go is perfect for development and testing',
        ],
        resources: [
          { title: 'Expo Documentation', url: 'https://docs.expo.dev' },
          { title: 'React Native Docs', url: 'https://reactnative.dev' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Build App Features',
        duration: '120 min',
        content: `Create screens, navigation, and core functionality.

**Key Features to Implement:**
- Navigation between screens
- API data fetching
- Local storage
- User authentication (optional)

**Example App Structure:**`,
        code: `# Install navigation
npx expo install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

// App.js - Main Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Expo App</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
  },
});`,
        tips: [
          'Use React Navigation for screen navigation',
          'Implement proper error handling',
          'Test on both iOS and Android',
          'Use AsyncStorage for local data persistence',
        ],
      },
      {
        id: 'step-3',
        title: '3. Configure App Settings',
        duration: '30 min',
        content: `Configure app.json with metadata, icons, and splash screens.

**Important Configuration:**
- App name and slug
- Version numbers
- App icons
- Splash screen
- Permissions

**app.json Configuration:**`,
        code: `{
  "expo": {
    "name": "My Mobile App",
    "slug": "my-mobile-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.mymobileapp",
      "buildNumber": "1.0.0",
      "infoPlist": {
        "NSCameraUsageDescription": "This app uses the camera to..."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourcompany.mymobileapp",
      "versionCode": 1,
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "your-project-id"
      }
    }
  }
}

# Icon Requirements:
# - icon.png: 1024x1024px
# - adaptive-icon.png (Android): 1024x1024px
# - splash.png: 1284x2778px (iPhone 13 Pro Max)

# Generate icons automatically:
npx expo install expo-app-icon
# Place your icon at assets/icon.png
# Add to app.json: "plugins": ["expo-app-icon"]`,
        tips: [
          'Use unique bundle identifier (reverse domain)',
          'Prepare high-quality icons (1024x1024)',
          'Test splash screen on different devices',
          'Request only necessary permissions',
        ],
      },
      {
        id: 'step-4',
        title: '4. Set Up EAS (Expo Application Services)',
        duration: '30 min',
        content: `Configure EAS for building and submitting your app.

**EAS Setup:**
- Install EAS CLI
- Create Expo account
- Configure build profiles
- Build your first binary

**EAS Configuration:**`,
        code: `# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Initialize EAS in your project
eas build:configure

# This creates eas.json:
{
  "cli": {
    "version": ">= 5.2.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}

# Build for iOS (simulator for testing)
eas build --platform ios --profile preview

# Build for Android (APK for testing)
eas build --platform android --profile preview

# Production builds
eas build --platform ios --profile production
eas build --platform android --profile production

# Build for both platforms
eas build --platform all --profile production`,
        tips: [
          'Create an Expo account first',
          'Start with preview builds for testing',
          'Use development builds for debugging',
          'Production builds take longer (15-30 min)',
        ],
        resources: [
          { title: 'EAS Build', url: 'https://docs.expo.dev/build/introduction/' },
          { title: 'EAS Submit', url: 'https://docs.expo.dev/submit/introduction/' },
        ],
      },
      {
        id: 'step-5',
        title: '5. Submit to Apple App Store',
        duration: '60 min',
        content: `Submit your app to the Apple App Store.

**Prerequisites:**
- Apple Developer Account ($99/year)
- App icons and screenshots
- Privacy policy (required)
- App description and metadata

**Submission Process:**`,
        code: `# 1. Create App Store Connect account
# Go to: https://developer.apple.com
# Enroll in Apple Developer Program

# 2. Create App in App Store Connect
# - Go to https://appstoreconnect.apple.com
# - Click "My Apps" → "+" → "New App"
# - Fill in app information:
#   - Platform: iOS
#   - Name: Your App Name
#   - Primary Language: English
#   - Bundle ID: com.yourcompany.mymobileapp
#   - SKU: unique identifier

# 3. Prepare app metadata
# Required items:
# - App name (30 characters max)
# - Subtitle (30 characters max)
# - Description (4000 characters max)
# - Keywords (100 characters, comma-separated)
# - Screenshots (5.5" and 6.5" iPhone sizes)
# - App icon (1024x1024px)
# - Privacy policy URL
# - Support URL

# 4. Build with EAS
eas build --platform ios --profile production

# 5. Submit to App Store
eas submit --platform ios

# You'll be prompted for:
# - Apple ID
# - App-specific password
# - Bundle identifier

# Alternative manual upload:
# 1. Download .ipa from EAS dashboard
# 2. Use Transporter app (Mac)
# 3. Upload to App Store Connect`,
        tips: [
          'Prepare app screenshots in all required sizes',
          'Write clear, compelling app description',
          'Set appropriate age rating',
          'Review can take 1-3 days',
          'Test with TestFlight before release',
        ],
        resources: [
          { title: 'App Store Guidelines', url: 'https://developer.apple.com/app-store/review/guidelines/' },
          { title: 'App Store Connect', url: 'https://appstoreconnect.apple.com' },
        ],
      },
      {
        id: 'step-6',
        title: '6. Submit to Google Play Store',
        duration: '45 min',
        content: `Publish your app to Google Play Store.

**Prerequisites:**
- Google Play Console account ($25 one-time)
- App icons and screenshots
- Privacy policy
- Content rating questionnaire

**Submission Process:**`,
        code: `# 1. Create Google Play Console account
# Go to: https://play.google.com/console
# Pay one-time $25 registration fee

# 2. Create new app
# - Click "Create app"
# - Fill in app details:
#   - App name
#   - Default language
#   - App or game
#   - Free or paid
#   - Declarations (privacy, content policies)

# 3. Build with EAS
eas build --platform android --profile production

# 4. Submit to Play Store
eas submit --platform android

# You'll need:
# - Service account key (JSON file)
# - Or manual upload of AAB file

# Manual submission alternative:
# 1. Go to Play Console
# 2. Select your app
# 3. Production → Create new release
# 4. Upload AAB file
# 5. Fill in release details

# Required Store Listing info:
# - Short description (80 chars)
# - Full description (4000 chars)
# - App icon (512x512px)
# - Feature graphic (1024x500px)
# - Screenshots (2-8 per device type)
# - Privacy policy URL
# - Content rating
# - Target audience
# - App category

# Content Rating Questionnaire
# - Complete in Play Console
# - Answer questions about content
# - Receive rating (EVERYONE, TEEN, etc.)

# Release tracks:
# - Internal testing (100 users)
# - Closed testing (unlimited)
# - Open testing (public beta)
# - Production (live)`,
        tips: [
          'Start with internal testing track',
          'Upload at least 2 screenshots per device type',
          'Complete content rating questionnaire',
          'Review can take 1-7 days',
          'Use staged rollout for safer releases',
        ],
        resources: [
          { title: 'Play Console Help', url: 'https://support.google.com/googleplay/android-developer' },
          { title: 'Launch Checklist', url: 'https://developer.android.com/distribute/best-practices/launch/' },
        ],
      },
      {
        id: 'step-7',
        title: '7. App Updates & Maintenance',
        duration: '30 min',
        content: `Learn how to update and maintain your published app.

**Update Workflow:**
- Over-the-air (OTA) updates with Expo
- Binary updates for native changes
- Version management
- Analytics and crash reporting

**Update Strategy:**`,
        code: `# OTA Updates with Expo Updates
npx expo install expo-updates

# Configure in app.json
{
  "expo": {
    "updates": {
      "url": "https://u.expo.dev/[your-project-id]"
    }
  }
}

# Publish OTA update (JavaScript changes only)
eas update --branch production --message "Bug fixes"

# When you need a new binary:
# 1. Update version in app.json
{
  "expo": {
    "version": "1.1.0",
    "ios": {
      "buildNumber": "1.1.0"
    },
    "android": {
      "versionCode": 2
    }
  }
}

# 2. Build new version
eas build --platform all --profile production

# 3. Submit update
eas submit --platform ios
eas submit --platform android

# Analytics Setup (Expo)
npx expo install expo-analytics

# Crash Reporting (Sentry)
npm install @sentry/react-native
npx expo install sentry-expo

// App.js
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'your-sentry-dsn',
  enableInExpoDevelopment: true,
});

# Version Management Best Practices
# Semantic Versioning: MAJOR.MINOR.PATCH
# - MAJOR: Breaking changes
# - MINOR: New features (backward compatible)
# - PATCH: Bug fixes

# Update Checklist:
# ✓ Test on both platforms
# ✓ Update version numbers
# ✓ Write release notes
# ✓ Test on different devices
# ✓ Check app size
# ✓ Monitor crash reports`,
        tips: [
          'Use OTA updates for quick fixes',
          'Monitor app performance with analytics',
          'Set up crash reporting from day one',
          'Keep dependencies updated',
          'Test updates thoroughly before release',
          'Use staged rollouts on Android',
        ],
        resources: [
          { title: 'Expo Updates', url: 'https://docs.expo.dev/versions/latest/sdk/updates/' },
          { title: 'Sentry', url: 'https://sentry.io' },
        ],
      },
    ],
  },
  {
    id: 'github-mastery',
    title: 'GitHub Tips, Tricks & Best Practices',
    icon: '🐙',
    difficulty: 'Beginner to Advanced',
    duration: '2-3 hours',
    description: 'Master GitHub workflows, collaboration, automation, and advanced features for professional development.',
    tags: ['GitHub', 'Git', 'DevOps', 'Collaboration'],
    steps: [
      {
        id: 'step-1',
        title: '1. Git & GitHub Essentials',
        duration: '30 min',
        content: `Master the fundamental Git commands and GitHub workflows.

**Core Concepts:**
- Repository basics
- Commits and history
- Branches and merging
- Remote operations

**Essential Commands:**`,
        code: `# Initialize and Setup
git init                          # Initialize new repo
git clone <url>                   # Clone existing repo
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Basic Workflow
git status                        # Check status
git add <file>                    # Stage specific file
git add .                         # Stage all changes
git commit -m "message"           # Commit with message
git push origin main              # Push to remote

# Branching
git branch                        # List branches
git branch feature-name           # Create branch
git checkout feature-name         # Switch to branch
git checkout -b feature-name      # Create and switch
git merge feature-name            # Merge branch
git branch -d feature-name        # Delete branch

# Viewing History
git log                           # Show commit history
git log --oneline                 # Compact history
git log --graph --all             # Visual branch history
git show <commit-hash>            # Show specific commit

# Undoing Changes
git restore <file>                # Discard changes
git restore --staged <file>       # Unstage file
git reset --soft HEAD~1           # Undo last commit (keep changes)
git reset --hard HEAD~1           # Undo last commit (discard changes)
git revert <commit-hash>          # Create new commit that undoes

# Remote Operations
git remote -v                     # List remotes
git remote add origin <url>       # Add remote
git fetch origin                  # Fetch changes
git pull origin main              # Fetch and merge
git push -u origin feature        # Push new branch`,
        tips: [
          'Commit early and often with clear messages',
          'Use branches for every feature or fix',
          'Pull before you push to avoid conflicts',
          'Never force push to main/shared branches',
        ],
      },
      {
        id: 'step-2',
        title: '2. Advanced Git Techniques',
        duration: '45 min',
        content: `Level up with advanced Git operations and workflows.

**Advanced Operations:**
- Interactive rebase
- Cherry-picking commits
- Stashing work
- Conflict resolution
- Git hooks

**Advanced Commands:**`,
        code: `# Interactive Rebase (clean up history)
git rebase -i HEAD~3              # Rebase last 3 commits
# In editor: pick, squash, reword, edit, drop

# Example rebase workflow:
# pick abc1234 Add feature
# squash def5678 Fix typo
# squash ghi9012 Update docs
# Result: 3 commits become 1

# Cherry-pick (apply specific commit)
git cherry-pick <commit-hash>     # Apply commit to current branch
git cherry-pick abc123..def456    # Range of commits

# Stashing (save work temporarily)
git stash                         # Stash changes
git stash save "WIP: feature"     # Stash with message
git stash list                    # List stashes
git stash pop                     # Apply and remove stash
git stash apply stash@{0}         # Apply specific stash
git stash drop stash@{0}          # Delete stash
git stash clear                   # Clear all stashes

# Conflict Resolution
git merge feature-branch
# If conflicts occur:
# 1. Open conflicted files
# 2. Look for <<<<<<< ======= >>>>>>> markers
# 3. Edit to resolve
# 4. Remove markers
git add <resolved-file>
git commit                        # Complete merge

# Search in History
git log -S "function_name"        # Find commits with text
git log --grep="bug fix"          # Search commit messages
git blame <file>                  # See who changed each line

# Git Bisect (find bug-introducing commit)
git bisect start
git bisect bad                    # Current commit is bad
git bisect good <commit>          # Known good commit
# Git will check out commits for testing
git bisect good                   # Mark as good
git bisect bad                    # Mark as bad
git bisect reset                  # Exit bisect

# Aliases (shortcuts)
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --all --oneline'

# .gitconfig example:
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  unstage = reset HEAD --
  last = log -1 HEAD
  lg = log --graph --pretty=format:'%C(yellow)%h%Creset -%C(red)%d%Creset %s %C(green)(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit`,
        tips: [
          'Use interactive rebase to clean history before merging',
          'Stash frequently when switching contexts',
          'Create aliases for commands you use often',
          'Use git bisect to find bugs efficiently',
        ],
      },
      {
        id: 'step-3',
        title: '3. GitHub Collaboration Workflow',
        duration: '30 min',
        content: `Master professional GitHub collaboration practices.

**Pull Request Workflow:**
- Fork and clone
- Feature branches
- Pull requests
- Code review
- Merging strategies

**Professional Workflow:**`,
        code: `# Fork-based Collaboration (Open Source)
# 1. Fork repo on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/repo.git
cd repo

# 3. Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/repo.git

# 4. Create feature branch
git checkout -b feature/amazing-feature

# 5. Make changes and commit
git add .
git commit -m "feat: Add amazing feature"

# 6. Keep your fork updated
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# 7. Push your feature branch
git push origin feature/amazing-feature

# 8. Create Pull Request on GitHub
# Click "Compare & pull request" button

# 9. After PR is merged, cleanup
git checkout main
git pull upstream main
git branch -d feature/amazing-feature
git push origin --delete feature/amazing-feature

# Branch-based Collaboration (Team)
# 1. Clone repo
git clone https://github.com/TEAM/repo.git

# 2. Create feature branch
git checkout -b feature/user-authentication

# 3. Commit changes
git add .
git commit -m "feat: Implement JWT authentication"

# 4. Push branch
git push -u origin feature/user-authentication

# 5. Create Pull Request
# Use GitHub web interface

# 6. Request reviews
# Add reviewers in PR interface

# 7. Address feedback
# Make changes, commit, push (auto-updates PR)
git add .
git commit -m "refactor: Address review comments"
git push

# 8. Merge (after approval)
# Use GitHub "Merge" button
# Options: Merge commit, Squash, Rebase

# Commit Message Convention (Conventional Commits)
# Format: <type>(<scope>): <subject>

# Types:
# feat: New feature
# fix: Bug fix
# docs: Documentation
# style: Formatting
# refactor: Code restructuring
# test: Tests
# chore: Maintenance

# Examples:
git commit -m "feat(auth): Add Google OAuth login"
git commit -m "fix(api): Handle null response from server"
git commit -m "docs(readme): Update installation instructions"
git commit -m "refactor(utils): Simplify date formatting"`,
        tips: [
          'Always work in feature branches',
          'Keep PRs small and focused',
          'Write descriptive PR descriptions',
          'Use conventional commits for clarity',
          'Review others\' code thoughtfully',
        ],
      },
      {
        id: 'step-4',
        title: '4. GitHub Actions & CI/CD',
        duration: '45 min',
        content: `Automate testing, building, and deployment with GitHub Actions.

**CI/CD Pipeline:**
- Automated testing
- Build automation
- Deployment workflows
- Security scanning

**GitHub Actions Examples:**`,
        code: `# .github/workflows/ci.yml
# Continuous Integration Workflow
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run tests
      run: npm test
    
    - name: Build project
      run: npm run build

# .github/workflows/deploy.yml
# Deployment Workflow
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        NEXT_PUBLIC_API_URL: \${{ secrets.API_URL }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: \${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: \${{ secrets.ORG_ID }}
        vercel-project-id: \${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'

# .github/workflows/security.yml
# Security Scanning Workflow
name: Security Scan

on:
  schedule:
    - cron: '0 0 * * 1'  # Weekly on Monday
  push:
    branches: [ main ]

jobs:
  security:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run npm audit
      run: npm audit --audit-level=moderate
    
    - name: Run Snyk Security Scan
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}

# .github/workflows/release.yml
# Automated Release Workflow
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Create Release
      uses: actions/create-release@v1
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
      with:
        tag_name: \${{ github.ref }}
        release_name: Release \${{ github.ref }}
        draft: false
        prerelease: false

# Store secrets in repository settings:
# Settings → Secrets and variables → Actions → New repository secret`,
        tips: [
          'Start with simple CI workflow, add complexity gradually',
          'Test workflows in a separate branch first',
          'Use matrix builds to test multiple versions',
          'Store sensitive data in GitHub Secrets',
          'Monitor workflow runs and fix failures quickly',
        ],
        resources: [
          { title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions' },
          { title: 'Workflow Examples', url: 'https://github.com/actions/starter-workflows' },
        ],
      },
      {
        id: 'step-5',
        title: '5. GitHub Advanced Features',
        duration: '30 min',
        content: `Leverage powerful GitHub features for better collaboration.

**Advanced Features:**
- GitHub Issues and Projects
- GitHub Discussions
- GitHub Pages
- Security features
- Insights and analytics

**Feature Examples:**`,
        code: `# GitHub Issues Best Practices
# Template: .github/ISSUE_TEMPLATE/bug_report.md
---
name: Bug Report
about: Report a bug
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g., iOS]
 - Browser: [e.g., chrome, safari]
 - Version: [e.g., 22]

# Feature Request Template
# .github/ISSUE_TEMPLATE/feature_request.md
---
name: Feature Request
about: Suggest an idea
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

**Feature Description**
Clear description of the feature.

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives**
Other solutions you've considered.

# Pull Request Template
# .github/pull_request_template.md
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] Added tests
- [ ] All tests pass
- [ ] No new warnings

## Related Issues
Fixes #(issue number)

# GitHub Pages Deployment
# Deploy static site automatically

# 1. Create gh-pages branch
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages"
git push origin gh-pages

# 2. GitHub Actions workflow
# .github/workflows/pages.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist

# 3. Enable in Settings → Pages
# Source: Deploy from a branch
# Branch: gh-pages / (root)

# GitHub CLI (gh) - Command Line Power
# Install: https://cli.github.com

# Repository operations
gh repo create my-project --public
gh repo clone owner/repo
gh repo view
gh repo fork owner/repo

# Issues
gh issue list
gh issue create --title "Bug" --body "Description"
gh issue view 123
gh issue close 123

# Pull Requests
gh pr list
gh pr create --title "Feature" --body "Description"
gh pr view 456
gh pr checkout 456
gh pr review 456 --approve
gh pr merge 456

# Releases
gh release create v1.0.0
gh release list
gh release view v1.0.0

# Gists
gh gist create file.js
gh gist list`,
        tips: [
          'Use issue templates for consistent reporting',
          'Enable GitHub Discussions for community',
          'Use Projects for kanban-style task management',
          'Enable Dependabot for dependency updates',
          'Use GitHub CLI for faster workflows',
        ],
        resources: [
          { title: 'GitHub CLI', url: 'https://cli.github.com' },
          { title: 'GitHub Pages', url: 'https://pages.github.com' },
        ],
      },
      {
        id: 'step-6',
        title: '6. GitHub Pro Tips & Tricks',
        duration: '20 min',
        content: `Productivity hacks and lesser-known GitHub features.

**Power User Tips:**
- Keyboard shortcuts
- Search operators
- URL tricks
- Code navigation
- Hidden features

**Pro Tips:**`,
        code: `# Keyboard Shortcuts (press ? on GitHub to see all)
t         # File finder
s         # Focus search bar
/         # Focus search bar
.         # Open in github.dev (web VS Code)
>         # Open command palette
g i       # Go to Issues
g p       # Go to Pull Requests
g n       # Go to Notifications

# Advanced Search Operators
# In GitHub search bar:

# By author
author:username

# By language
language:javascript

# By file size
size:>1000  # Files larger than 1KB

# By file extension
extension:js

# By path
path:src/components

# By date
created:>2024-01-01
pushed:>2024-01-01

# Combination
user:microsoft language:typescript stars:>100

# Repository Search Examples
react router stars:>1000 language:javascript
machine learning forks:>50 language:python
blockchain topic:ethereum

# URL Tricks

# Add ?w=1 to hide whitespace in diffs
# https://github.com/user/repo/pull/123?w=1

# Add ?ts=2 to change tab size
# https://github.com/user/repo/blob/main/file.js?ts=2

# Link to specific lines
# https://github.com/user/repo/blob/main/file.js#L10
# https://github.com/user/repo/blob/main/file.js#L10-L20

# Compare branches
# https://github.com/user/repo/compare/branch1...branch2

# Compare with fork
# https://github.com/user/repo/compare/main...other-user:branch

# GitHub Dev (Web VS Code)
# Press . (period) on any repo page
# Or change .com to .dev in URL
# https://github.dev/user/repo

# Code Navigation
# Press 't' on repo page to search files
# Click line number to link to it
# Shift+click to select range
# Press 'b' to view blame
# Press 'l' to jump to line

# GitHub Badges (README.md)
# Build status
![Build](https://img.shields.io/github/workflow/status/user/repo/CI)

# Version
![Version](https://img.shields.io/github/v/release/user/repo)

# License
![License](https://img.shields.io/github/license/user/repo)

# Issues
![Issues](https://img.shields.io/github/issues/user/repo)

# Stars
![Stars](https://img.shields.io/github/stars/user/repo)

# .gitignore Best Practices
# Use GitHub's templates
# https://github.com/github/gitignore

# Node.js example
node_modules/
.env
.env.local
.DS_Store
*.log
dist/
build/
coverage/

# Always ignore
*.swp
*.swo
.DS_Store
Thumbs.db

# Git LFS (Large File Storage)
# For files > 100MB

# Install
git lfs install

# Track large files
git lfs track "*.psd"
git lfs track "*.zip"

# Commit .gitattributes
git add .gitattributes
git commit -m "Add Git LFS tracking"

# GitHub Emoji in Commits 🎉
# :tada: 🎉 Initial commit
# :sparkles: ✨ New feature
# :bug: 🐛 Bug fix
# :memo: 📝 Documentation
# :fire: 🔥 Remove code
# :lock: 🔒 Security fix
# :rocket: 🚀 Deploy
# :art: 🎨 Improve structure
# :zap: ⚡ Performance
# :white_check_mark: ✅ Tests

git commit -m ":sparkles: Add user authentication"`,
        tips: [
          'Learn keyboard shortcuts for 10x productivity',
          'Use github.dev for quick edits without cloning',
          'Master search operators to find any code',
          'Add badges to README for professional look',
          'Use Git LFS for large binary files',
        ],
        resources: [
          { title: 'GitHub Shortcuts', url: 'https://docs.github.com/en/get-started/using-github/keyboard-shortcuts' },
          { title: 'Search Syntax', url: 'https://docs.github.com/en/search-github/getting-started-with-searching-on-github' },
          { title: 'Shields.io Badges', url: 'https://shields.io' },
        ],
      },
    ],
  },
  {
    id: 'api-backend',
    title: 'Build a REST API with Node.js',
    icon: '⚡',
    difficulty: 'Intermediate',
    duration: '3-4 hours',
    description: 'Create a production-ready REST API with Node.js, Express, MongoDB, authentication, and deploy to the cloud.',
    tags: ['Backend', 'Node.js', 'API', 'MongoDB', 'Express'],
    steps: [
      {
        id: 'step-1',
        title: '1. Project Setup',
        duration: '20 min',
        content: `Initialize a Node.js API project with proper structure.`,
        code: `# Create project
mkdir my-api
cd my-api
npm init -y

# Install dependencies
npm install express mongoose dotenv cors helmet
npm install -D nodemon

# Project structure
my-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
├── .env
├── .gitignore
└── server.js`,
        tips: ['Use ES6 modules', 'Set up nodemon for auto-restart'],
      },
    ],
  },
];

// Get all projects
export const getAllProjects = () => projectsData;

// Get project by ID
export const getProjectById = (id) => projectsData.find(project => project.id === id);

// Get projects by tag
export const getProjectsByTag = (tag) => 
  projectsData.filter(project => project.tags.includes(tag));

// Get projects by difficulty
export const getProjectsByDifficulty = (difficulty) =>
  projectsData.filter(project => project.difficulty === difficulty);
