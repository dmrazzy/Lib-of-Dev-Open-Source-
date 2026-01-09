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
    id: 'api-backend',
    title: 'Build a REST API with Node.js',
    icon: '⚡',
    difficulty: 'Intermediate',
    duration: '4-5 hours',
    description: 'Create a production-ready REST API with Node.js, Express, MongoDB, JWT authentication, and deploy to the cloud.',
    tags: ['Backend', 'Node.js', 'API', 'MongoDB', 'Express'],
    steps: [
      {
        id: 'step-1',
        title: '1. Project Setup & Structure',
        duration: '30 min',
        content: `Initialize a professional Node.js API project with clean architecture.

**What You'll Build:**
- Express.js REST API
- MongoDB database connection
- User authentication with JWT
- Protected routes
- Error handling

**Project Structure:**`,
        code: `# Create project directory
mkdir task-api
cd task-api

# Initialize npm project
npm init -y

# Install core dependencies
npm install express mongoose dotenv cors helmet morgan
npm install bcryptjs jsonwebtoken express-validator

# Install dev dependencies
npm install -D nodemon

# Create project structure
mkdir -p src/models src/routes src/controllers src/middleware src/config

# Create main files
touch src/server.js
touch src/config/db.js
touch .env .gitignore

# Project structure result:
# task-api/
# ├── src/
# │   ├── server.js          # Main entry point
# │   ├── config/
# │   │   └── db.js          # Database connection
# │   ├── models/
# │   │   ├── User.js        # User model
# │   │   └── Task.js        # Task model
# │   ├── controllers/
# │   │   ├── authController.js
# │   │   └── taskController.js
# │   ├── routes/
# │   │   ├── auth.js
# │   │   └── tasks.js
# │   └── middleware/
# │       ├── auth.js        # JWT verification
# │       └── errorHandler.js
# ├── .env                   # Environment variables
# ├── .gitignore
# └── package.json`,
        tips: [
          'Use meaningful naming conventions',
          'Separate concerns (MVC pattern)',
          'Keep sensitive data in .env file',
          'Add .env to .gitignore immediately',
        ],
        resources: [
          { title: 'Express.js Docs', url: 'https://expressjs.com' },
          { title: 'Mongoose Docs', url: 'https://mongoosejs.com' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Database Setup & Models',
        duration: '40 min',
        content: `Set up MongoDB connection and create data models.

**What You'll Learn:**
- MongoDB Atlas setup
- Mongoose schemas
- Model relationships
- Data validation

**Implementation:**`,
        code: `// .env - Environment variables
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskapi
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development

// src/config/db.js - Database connection
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// src/models/User.js - User model with password hashing
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false, // Don't return password by default
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

// src/models/Task.js - Task model with user reference
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp on save
taskSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Task', taskSchema);`,
        tips: [
          'Get MongoDB Atlas free tier at mongodb.com/cloud/atlas',
          'Never commit .env file to Git',
          'Use strong passwords and keep JWT_SECRET secure',
          'Mongoose automatically pluralizes collection names',
          'Use bcrypt rounds of 10-12 for good security/performance balance',
        ],
        resources: [
          { title: 'MongoDB Atlas', url: 'https://www.mongodb.com/cloud/atlas' },
          { title: 'Mongoose Schemas', url: 'https://mongoosejs.com/docs/guide.html' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Authentication Middleware & JWT',
        duration: '35 min',
        content: `Implement JWT-based authentication and authorization.

**What You'll Learn:**
- JSON Web Tokens (JWT)
- Password encryption
- Protected routes
- Authorization middleware

**Implementation:**`,
        code: `// src/middleware/auth.js - JWT verification middleware
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in Authorization header
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route',
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach user to request
      req.user = await User.findById(decoded.id);
      
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User no longer exists',
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }
  } catch (error) {
    next(error);
  }
};

// Role-based authorization
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: \`User role '\${req.user.role}' is not authorized\`,
      });
    }
    next();
  };
};

// src/middleware/errorHandler.js - Global error handling
exports.errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for dev
  if (process.env.NODE_ENV === 'development') {
    console.error(err);
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error.message = 'Resource not found';
    error.statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    error.message = 'Duplicate field value entered';
    error.statusCode = 400;
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(e => e.message);
    error.message = message.join(', ');
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
  });
};

// Utility: Generate JWT token
exports.generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expires in 30 days
  });
};`,
        tips: [
          'Store tokens securely on client (httpOnly cookies or secure storage)',
          'Use strong JWT secrets (at least 32 characters)',
          'Implement token refresh for better UX',
          'Add rate limiting for auth endpoints',
          'Consider using refresh tokens for enhanced security',
        ],
        resources: [
          { title: 'JWT.io', url: 'https://jwt.io' },
          { title: 'JWT Best Practices', url: 'https://tools.ietf.org/html/rfc8725' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Controllers & Business Logic',
        duration: '45 min',
        content: `Create controllers to handle API logic and data operations.

**What You'll Learn:**
- Controller pattern
- CRUD operations
- Error handling
- Response formatting

**Implementation:**`,
        code: `// src/controllers/authController.js - Authentication logic
const User = require('../models/User');
const { generateToken } = require('../middleware/auth');

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    // Create user
    const user = await User.create({ name, email, password });

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // Check for user (include password)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// src/controllers/taskController.js - Task CRUD operations
const Task = require('../models/Task');

// @desc    Get all tasks for logged-in user
// @route   GET /api/tasks
// @access  Private
exports.getTasks = async (req, res, next) => {
  try {
    const { status, priority, sort } = req.query;
    
    // Build query
    let query = { user: req.user.id };
    if (status) query.status = status;
    if (priority) query.priority = priority;

    // Execute query with sorting
    let tasks = Task.find(query);
    if (sort) {
      const sortBy = sort.split(',').join(' ');
      tasks = tasks.sort(sortBy);
    } else {
      tasks = tasks.sort('-createdAt');
    }

    const result = await tasks;

    res.json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this task',
      });
    }

    res.json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new task
// @route   POST /api/tasks
// @access  Private
exports.createTask = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
exports.updateTask = async (req, res, next) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this task',
      });
    }

    task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this task',
      });
    }

    await task.deleteOne();

    res.json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};`,
        tips: [
          'Always validate user input',
          'Check resource ownership before modifications',
          'Use consistent response format across API',
          'Implement proper HTTP status codes',
          'Add JSDoc comments for API documentation',
        ],
        resources: [
          { title: 'REST API Best Practices', url: 'https://restfulapi.net' },
          { title: 'HTTP Status Codes', url: 'https://httpstatuses.com' },
        ],
      },
      {
        id: 'step-5',
        title: '5. Routes & Server Setup',
        duration: '30 min',
        content: `Set up Express routes and configure the server.

**What You'll Learn:**
- Express routing
- Middleware setup
- CORS configuration
- Security best practices

**Implementation:**`,
        code: `// src/routes/auth.js - Authentication routes
const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;

// src/routes/tasks.js - Task routes
const express = require('express');
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;

// src/server.js - Main server file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(\`Unhandled Rejection: \${err.message}\`);
  server.close(() => process.exit(1));
});

// package.json - Scripts
{
  "name": "task-api",
  "version": "1.0.0",
  "description": "Task Management API with JWT Auth",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
  "keywords": ["api", "rest", "node", "express", "mongodb"],
  "author": "Your Name",
  "license": "MIT"
}

// .gitignore
node_modules/
.env
.DS_Store
*.log
coverage/
dist/`,
        tips: [
          'Use morgan for request logging in development',
          'Helmet adds important security headers',
          'Enable CORS only for trusted origins in production',
          'Create separate route files for better organization',
          'Use environment-specific configs for dev/prod',
        ],
        resources: [
          { title: 'Express Routing', url: 'https://expressjs.com/en/guide/routing.html' },
          { title: 'Helmet.js', url: 'https://helmetjs.github.io' },
        ],
      },
      {
        id: 'step-6',
        title: '6. Testing & Deployment',
        duration: '40 min',
        content: `Test your API and deploy to production.

**What You'll Learn:**
- API testing with Postman/Thunder Client
- Environment configuration
- Deployment to Render/Railway
- Production best practices

**Testing with Postman:**`,
        code: `# Test Authentication Endpoints

## 1. Register User
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

## 2. Login
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

# Copy the token from response

## 3. Get Current User
GET http://localhost:5000/api/auth/me
Authorization: Bearer YOUR_TOKEN_HERE

# Test Task Endpoints (All require Authorization header)

## 4. Create Task
POST http://localhost:5000/api/tasks
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "title": "Complete API project",
  "description": "Build and deploy REST API",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2026-01-15"
}

## 5. Get All Tasks
GET http://localhost:5000/api/tasks
Authorization: Bearer YOUR_TOKEN_HERE

## 6. Get Task by ID
GET http://localhost:5000/api/tasks/TASK_ID
Authorization: Bearer YOUR_TOKEN_HERE

## 7. Update Task
PUT http://localhost:5000/api/tasks/TASK_ID
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "status": "completed"
}

## 8. Delete Task
DELETE http://localhost:5000/api/tasks/TASK_ID
Authorization: Bearer YOUR_TOKEN_HERE

# Deployment to Render

## 1. Push to GitHub
git init
git add .
git commit -m "Initial commit: Task API"
git remote add origin https://github.com/YOUR_USERNAME/task-api.git
git push -u origin main

## 2. Create render.yaml (optional)
services:
  - type: web
    name: task-api
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        generateValue: true

## 3. Deploy on Render
# 1. Go to render.com and sign up
# 2. Click "New +" → "Web Service"
# 3. Connect your GitHub repository
# 4. Configure:
#    - Name: task-api
#    - Environment: Node
#    - Build Command: npm install
#    - Start Command: npm start
# 5. Add Environment Variables:
#    - MONGODB_URI (from MongoDB Atlas)
#    - JWT_SECRET (generate strong secret)
#    - NODE_ENV=production
# 6. Click "Create Web Service"

# Alternative: Deploy to Railway
# 1. Go to railway.app
# 2. Click "Start a New Project"
# 3. Select "Deploy from GitHub repo"
# 4. Choose your repository
# 5. Add environment variables
# 6. Railway auto-detects Node.js and deploys

# Production Environment Variables
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskapi
JWT_SECRET=super_long_random_secret_key_for_production_use
CORS_ORIGIN=https://your-frontend-domain.com`,
        tips: [
          'Test all endpoints before deployment',
          'Use environment variables for all secrets',
          'Enable MongoDB Atlas IP whitelist for production',
          'Set up proper CORS for your frontend domain',
          'Monitor API with logging service (e.g., LogRocket)',
          'Implement rate limiting for production',
          'Use PM2 for process management if deploying to VPS',
        ],
        resources: [
          { title: 'Render Docs', url: 'https://render.com/docs' },
          { title: 'Railway Docs', url: 'https://docs.railway.app' },
          { title: 'Postman', url: 'https://www.postman.com' },
        ],
      },
    ],
  },
  {
    id: 'chrome-extension',
    title: 'Build a Chrome Extension',
    icon: '🧩',
    difficulty: 'Beginner',
    duration: '2-3 hours',
    description: 'Create a useful Chrome extension with popup, background scripts, and content scripts. Publish to Chrome Web Store.',
    tags: ['Browser Extension', 'JavaScript', 'Chrome', 'Web'],
    steps: [
      {
        id: 'step-1',
        title: '1. Extension Setup & Manifest',
        duration: '25 min',
        content: `Create the basic structure and manifest file for your Chrome extension.

**What is a Chrome Extension?**
- Small programs that customize browsing experience
- Built with HTML, CSS, and JavaScript
- Can interact with web pages and browser APIs

**Project Setup:**`,
        code: `# Create project folder
mkdir my-chrome-extension
cd my-chrome-extension

# Create file structure
mkdir -p src/popup src/content src/background icons

# Create files
touch manifest.json
touch src/popup/popup.html src/popup/popup.js src/popup/popup.css
touch src/content/content.js
touch src/background/background.js

# Project Structure:
# my-chrome-extension/
#   ├── manifest.json        # Extension configuration
#   ├── icons/              # Extension icons
#   │   ├── icon16.png
#   │   ├── icon48.png
#   │   └── icon128.png
#   └── src/
#       ├── popup/          # Popup UI
#       │   ├── popup.html
#       │   ├── popup.js
#       │   └── popup.css
#       ├── content/        # Content scripts
#       │   └── content.js
#       └── background/     # Background scripts
#           └── background.js

# manifest.json - Extension Configuration (Manifest V3)
{
  "manifest_version": 3,
  "name": "My Awesome Extension",
  "version": "1.0.0",
  "description": "A helpful Chrome extension",
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  },
  "action": {
    "default_popup": "src/popup/popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "background": {
    "service_worker": "src/background/background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["src/content/content.js"]
    }
  ],
  "permissions": [
    "storage",
    "activeTab"
  ],
  "host_permissions": [
    "https://*/*"
  ]
}`,
        tips: [
          'Use Manifest V3 (latest version)',
          'Create icons in 16x16, 48x48, and 128x128 sizes',
          'Use https://www.favicon-generator.org for icon creation',
          'Limit permissions to only what you need',
        ],
        resources: [
          { title: 'Chrome Extension Docs', url: 'https://developer.chrome.com/docs/extensions/' },
          { title: 'Manifest V3', url: 'https://developer.chrome.com/docs/extensions/mv3/intro/' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Build Popup Interface',
        duration: '35 min',
        content: `Create the popup UI that appears when users click your extension icon.

**Popup Features:**
- Display information
- User interactions (buttons, forms)
- Store user preferences
- Communicate with content/background scripts

**Implementation:**`,
        code: `<!-- src/popup/popup.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Extension</title>
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <div class="container">
    <h1>🚀 My Extension</h1>
    
    <div class="stats">
      <div class="stat-card">
        <span class="stat-number" id="visitCount">0</span>
        <span class="stat-label">Visits</span>
      </div>
    </div>

    <div class="actions">
      <button id="highlightBtn" class="btn btn-primary">
        Highlight Text
      </button>
      <button id="clearBtn" class="btn btn-secondary">
        Clear
      </button>
    </div>

    <div class="settings">
      <label>
        <input type="checkbox" id="autoHighlight">
        Auto-highlight on load
      </label>
    </div>

    <div class="footer">
      <a href="#" id="options">Settings</a>
    </div>
  </div>

  <script src="popup.js"></script>
</body>
</html>

/* src/popup/popup.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 300px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
}

.container {
  padding: 20px;
}

h1 {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.stats {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.stat-card {
  background: white;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: bold;
  color: #4285f4;
}

.stat-label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.btn {
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background: #4285f4;
  color: white;
}

.btn-primary:hover {
  background: #357ae8;
}

.btn-secondary {
  background: #e0e0e0;
  color: #333;
}

.btn-secondary:hover {
  background: #d0d0d0;
}

.settings {
  padding: 15px;
  background: white;
  border-radius: 6px;
  margin-bottom: 15px;
}

.settings label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
}

.footer {
  text-align: center;
}

.footer a {
  color: #4285f4;
  text-decoration: none;
  font-size: 12px;
}

// src/popup/popup.js
document.addEventListener('DOMContentLoaded', async () => {
  // Get stored visit count
  const { visitCount = 0 } = await chrome.storage.local.get('visitCount');
  document.getElementById('visitCount').textContent = visitCount;

  // Get auto-highlight setting
  const { autoHighlight = false } = await chrome.storage.local.get('autoHighlight');
  document.getElementById('autoHighlight').checked = autoHighlight;

  // Highlight button click
  document.getElementById('highlightBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.tabs.sendMessage(tab.id, { action: 'highlight' });
  });

  // Clear button click
  document.getElementById('clearBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.tabs.sendMessage(tab.id, { action: 'clear' });
  });

  // Auto-highlight toggle
  document.getElementById('autoHighlight').addEventListener('change', (e) => {
    chrome.storage.local.set({ autoHighlight: e.target.checked });
  });

  // Increment visit count
  await chrome.storage.local.set({ visitCount: visitCount + 1 });
});`,
        tips: [
          'Keep popup simple and focused',
          'Popup closes when user clicks outside',
          'Use chrome.storage for persisting data',
          'Popup loads fresh every time it opens',
        ],
        resources: [
          { title: 'Chrome Storage API', url: 'https://developer.chrome.com/docs/extensions/reference/storage/' },
          { title: 'Popup Best Practices', url: 'https://developer.chrome.com/docs/extensions/mv3/user_interface/' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Content Scripts',
        duration: '30 min',
        content: `Create content scripts that interact with web pages.

**What are Content Scripts?**
- Run in the context of web pages
- Can read and modify DOM
- Access to limited Chrome APIs
- Isolated from page scripts

**Implementation:**`,
        code: `// src/content/content.js
console.log('Extension content script loaded!');

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'highlight') {
    highlightText();
    sendResponse({ success: true });
  }
  
  if (request.action === 'clear') {
    clearHighlights();
    sendResponse({ success: true });
  }
  
  return true; // Keep message channel open
});

// Highlight all paragraphs on the page
function highlightText() {
  const paragraphs = document.querySelectorAll('p');
  
  paragraphs.forEach(p => {
    if (!p.classList.contains('extension-highlighted')) {
      p.classList.add('extension-highlighted');
      p.style.backgroundColor = 'yellow';
      p.style.padding = '4px';
      p.style.borderRadius = '3px';
    }
  });
  
  // Show notification
  showNotification('Highlighted ' + paragraphs.length + ' paragraphs!');
}

// Clear all highlights
function clearHighlights() {
  const highlighted = document.querySelectorAll('.extension-highlighted');
  
  highlighted.forEach(el => {
    el.classList.remove('extension-highlighted');
    el.style.backgroundColor = '';
    el.style.padding = '';
    el.style.borderRadius = '';
  });
  
  showNotification('Highlights cleared!');
}

// Show toast notification
function showNotification(message) {
  // Remove existing notification
  const existing = document.getElementById('extension-notification');
  if (existing) existing.remove();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.id = 'extension-notification';
  notification.textContent = message;
  
  // Style notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#4285f4',
    color: 'white',
    padding: '15px 25px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: '999999',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    animation: 'slideIn 0.3s ease-out',
  });
  
  // Add to page
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = \`
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
\`;
document.head.appendChild(style);

// Check for auto-highlight setting
chrome.storage.local.get('autoHighlight', ({ autoHighlight }) => {
  if (autoHighlight) {
    setTimeout(highlightText, 1000); // Wait for page to load
  }
});`,
        tips: [
          'Content scripts have separate JavaScript context from page',
          'Use unique class names to avoid conflicts',
          'Be careful with page performance',
          'Test on different websites',
        ],
        resources: [
          { title: 'Content Scripts', url: 'https://developer.chrome.com/docs/extensions/mv3/content_scripts/' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Background Service Worker',
        duration: '25 min',
        content: `Implement background scripts for persistent functionality.

**Background Service Worker:**
- Runs in the background
- Handles events (installation, messages, etc.)
- Manages extension lifecycle
- Can make network requests

**Implementation:**`,
        code: `// src/background/background.js

// Extension installed/updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed!');
    
    // Set default settings
    chrome.storage.local.set({
      visitCount: 0,
      autoHighlight: false,
    });
    
    // Open welcome page
    chrome.tabs.create({
      url: 'https://your-extension-website.com/welcome'
    });
  }
  
  if (details.reason === 'update') {
    console.log('Extension updated to version', chrome.runtime.getManifest().version);
  }
});

// Listen for messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background received message:', request);
  
  if (request.action === 'getData') {
    // Fetch data from API
    fetchDataFromAPI()
      .then(data => sendResponse({ success: true, data }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    
    return true; // Keep channel open for async response
  }
});

// Context menu (right-click menu)
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'highlightSelection',
    title: 'Highlight Selected Text',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'highlightSelection') {
    chrome.tabs.sendMessage(tab.id, {
      action: 'highlightSelection',
      text: info.selectionText
    });
  }
});

// Badge (icon badge)
function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: '#4285f4' });
}

// Example API fetch
async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Alarm (scheduled tasks)
chrome.alarms.create('dailyCheck', {
  delayInMinutes: 1,
  periodInMinutes: 1440, // 24 hours
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'dailyCheck') {
    console.log('Running daily check...');
    // Perform daily tasks
  }
});

// Track active tab
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  console.log('Active tab:', tab.url);
});

// Keyboard shortcut (defined in manifest.json)
chrome.commands.onCommand.addListener((command) => {
  if (command === 'highlight-text') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'highlight' });
    });
  }
});

console.log('Background service worker initialized');`,
        tips: [
          'Service workers are event-driven',
          'They terminate when idle',
          'Use chrome.storage instead of localStorage',
          'Be mindful of permissions',
        ],
        resources: [
          { title: 'Service Workers', url: 'https://developer.chrome.com/docs/extensions/mv3/service_workers/' },
        ],
      },
      {
        id: 'step-5',
        title: '5. Testing & Debugging',
        duration: '20 min',
        content: `Test your extension and fix bugs before publishing.

**Testing Steps:**
1. Load unpacked extension
2. Test all features
3. Check console for errors
4. Test on different websites

**How to Test:**`,
        code: `# Load Extension in Chrome
# 1. Open Chrome and go to: chrome://extensions/
# 2. Enable "Developer mode" (top right toggle)
# 3. Click "Load unpacked"
# 4. Select your extension folder
# 5. Extension is now loaded!

# Debugging Tips:

## Popup Debugging:
# 1. Right-click extension icon
# 2. Click "Inspect popup"
# 3. DevTools opens for popup

## Content Script Debugging:
# 1. Open DevTools on any webpage (F12)
# 2. Go to Sources tab
# 3. Find Content Scripts section
# 4. Your content.js will be there

## Background Script Debugging:
# 1. Go to chrome://extensions/
# 2. Find your extension
# 3. Click "Service worker" link
# 4. DevTools opens for background script

## Common Issues & Solutions:

# Issue: Content script not running
# Solution: Check manifest.json matches patterns
{
  "content_scripts": [{
    "matches": ["<all_urls>"],  // or specific: ["https://*.google.com/*"]
    "js": ["src/content/content.js"]
  }]
}

# Issue: Permissions error
# Solution: Add required permission to manifest.json
{
  "permissions": [
    "storage",
    "activeTab",
    "contextMenus"  // Add this
  ]
}

# Issue: Can't access external API
# Solution: Add host permission
{
  "host_permissions": [
    "https://api.example.com/*"
  ]
}

# Testing Checklist:
# ✅ Extension installs without errors
# ✅ Popup opens and displays correctly
# ✅ All buttons/interactions work
# ✅ Content script runs on target pages
# ✅ Background script handles events
# ✅ Settings persist after browser restart
# ✅ No console errors
# ✅ Works on different websites
# ✅ Icon displays correctly
# ✅ Performance is good (no lag)`,
        tips: [
          'Test on fresh Chrome profile',
          'Check for memory leaks',
          'Test with slow network conditions',
          'Verify all permissions are necessary',
        ],
        resources: [
          { title: 'Debugging Extensions', url: 'https://developer.chrome.com/docs/extensions/mv3/tut_debugging/' },
        ],
      },
      {
        id: 'step-6',
        title: '6. Publish to Chrome Web Store',
        duration: '30 min',
        content: `Package and publish your extension to Chrome Web Store.

**Publishing Requirements:**
- Developer account ($5 one-time fee)
- Privacy policy (if collecting data)
- Store listing assets (icons, screenshots)
- Detailed description

**Publishing Steps:**`,
        code: `# 1. Prepare Extension Package

## Create icons (required sizes):
# - 16x16, 48x48, 128x128 (in manifest)
# - 128x128 (store icon)
# - 440x280, 920x680, 1400x560 (screenshots)
# - 1280x800 (promotional tiles - optional)

## Update manifest.json:
{
  "name": "My Awesome Extension",
  "version": "1.0.0",
  "description": "Short description (max 132 characters)",
  "author": "Your Name",
  "homepage_url": "https://your-website.com"
}

## Create ZIP file:
# Include all extension files EXCEPT:
# - .git/
# - node_modules/
# - any dev files

# On Windows:
# Select all files → Right-click → Send to → Compressed folder

# On Mac/Linux:
zip -r my-extension.zip . -x "*.git*" "node_modules/*"

# 2. Chrome Web Store Developer Dashboard
# Go to: https://chrome.google.com/webstore/devconsole

## First-time setup:
# 1. Pay $5 developer registration fee
# 2. Verify email address
# 3. Accept Developer Agreement

## Upload Extension:
# 1. Click "New Item"
# 2. Upload your ZIP file
# 3. Fill out Store Listing

# 3. Store Listing Information

## Required fields:
{
  "detailed_description": "Full description (min 132 chars)",
  "category": "Select appropriate category",
  "language": "Primary language",
  "small_icon": "128x128 PNG",
  "screenshots": "At least 1, max 5 (1280x800 or 640x400)",
  "small_promo_tile": "440x280 PNG (optional)",
  "large_promo_tile": "920x680 PNG (optional)",
  "marquee_promo_tile": "1400x560 PNG (optional)"
}

## Privacy practices:
# - Declare if you collect user data
# - Provide privacy policy URL (required if collecting data)
# - Explain permission usage

## Example Privacy Policy:
{
  "data_collection": "None - extension doesn't collect any user data",
  "permissions_justification": {
    "storage": "Save user preferences locally",
    "activeTab": "Interact with current webpage",
    "contextMenus": "Add right-click menu option"
  }
}

# 4. Submit for Review
# 1. Click "Submit for review"
# 2. Review takes 1-3 business days (sometimes hours)
# 3. You'll receive email notification

# 5. Post-Publication

## Update extension:
# 1. Increment version number in manifest.json
# 2. Create new ZIP file
# 3. Upload to Developer Dashboard
# 4. Submit for review

## Monitor performance:
# - Check user reviews
# - Monitor stats (installs, ratings)
# - Respond to user feedback

## Promotional strategies:
# - Create landing page
# - Post on ProductHunt, Reddit
# - Share on social media
# - Add to your portfolio`,
        tips: [
          'Good screenshots increase installs significantly',
          'Clear description with bullet points works best',
          'Respond to user reviews promptly',
          'Update regularly to fix bugs and add features',
          'Highlight key features in store listing',
        ],
        resources: [
          { title: 'Chrome Web Store', url: 'https://chrome.google.com/webstore/devconsole' },
          { title: 'Publishing Guidelines', url: 'https://developer.chrome.com/docs/webstore/publish/' },
          { title: 'Best Practices', url: 'https://developer.chrome.com/docs/webstore/best_practices/' },
        ],
      },
    ],
  },
  {
    id: 'discord-bot',
    title: 'Create a Discord Bot',
    icon: '🤖',
    difficulty: 'Intermediate',
    duration: '3-4 hours',
    description: 'Build an interactive Discord bot with commands, events, and deploy it 24/7 to the cloud.',
    tags: ['Bot', 'Discord', 'Node.js', 'API'],
    steps: [
      {
        id: 'step-1',
        title: '1. Discord Bot Setup',
        duration: '30 min',
        content: `Create a Discord bot application and get your bot token.

**What You'll Build:**
- Command handler bot
- Slash commands
- Event listeners
- Interactive responses

**Discord Developer Portal Setup:**`,
        code: `# 1. Create Bot Application
# Go to: https://discord.com/developers/applications

## Steps:
# 1. Click "New Application"
# 2. Name your bot (e.g., "My Awesome Bot")
# 3. Go to "Bot" tab
# 4. Click "Add Bot"
# 5. Copy bot token (KEEP THIS SECRET!)

## Configure Bot Settings:
# - PUBLIC BOT: Off (if you want only your servers)
# - REQUIRES OAUTH2 CODE GRANT: Off
# - PRESENCE INTENT: On
# - SERVER MEMBERS INTENT: On
# - MESSAGE CONTENT INTENT: On

# 2. Bot Permissions
# Go to "OAuth2" → "URL Generator"

## Select Scopes:
# ✅ bot
# ✅ applications.commands

## Select Bot Permissions:
# ✅ Send Messages
# ✅ Send Messages in Threads
# ✅ Embed Links
# ✅ Attach Files
# ✅ Read Message History
# ✅ Add Reactions
# ✅ Use Slash Commands

## Copy generated URL and invite bot to your server

# 3. Initialize Project
mkdir discord-bot
cd discord-bot

npm init -y

# Install discord.js library
npm install discord.js dotenv

# Install dev dependencies
npm install -D nodemon

# Create project structure
mkdir -p src/commands src/events

# Create files
touch .env
touch src/index.js
touch src/commands/ping.js
touch src/events/ready.js
touch src/events/interactionCreate.js

# Project Structure:
# discord-bot/
#   ├── src/
#   │   ├── index.js            # Main bot file
#   │   ├── commands/            # Slash commands
#   │   │   ├── ping.js
#   │   │   ├── help.js
#   │   │   └── info.js
#   │   └── events/              # Event handlers
#   │       ├── ready.js
#   │       └── interactionCreate.js
#   ├── .env                     # Bot token
#   ├── package.json
#   └── .gitignore`,
        tips: [
          'NEVER share your bot token publicly',
          'Add .env to .gitignore immediately',
          'Use environment variables for sensitive data',
          'Enable required intents in Developer Portal',
        ],
        resources: [
          { title: 'Discord Developer Portal', url: 'https://discord.com/developers/applications' },
          { title: 'discord.js Guide', url: 'https://discordjs.guide' },
          { title: 'Discord.js Docs', url: 'https://discord.js.org' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Bot Core & Command Handler',
        duration: '45 min',
        content: `Set up the bot's main file and command handling system.

**Bot Architecture:**
- Main client setup
- Command collection
- Event loading
- Error handling

**Implementation:**`,
        code: `// .env - Store bot token securely
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_test_server_id_here

// .gitignore
node_modules/
.env
.DS_Store
*.log

// src/index.js - Main bot file
require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Create client with intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// Command collection
client.commands = new Collection();

// Load commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
    console.log(\`✅ Loaded command: \${command.data.name}\`);
  } else {
    console.warn(\`⚠️  Command at \${filePath} is missing "data" or "execute"\`);
  }
}

// Load events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
  console.log(\`✅ Loaded event: \${event.name}\`);
}

// Error handling
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);

// src/events/ready.js - Bot ready event
module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(\`🤖 \${client.user.tag} is online!\`);
    console.log(\`📊 Serving \${client.guilds.cache.size} servers\`);
    
    // Set bot status
    client.user.setPresence({
      activities: [{ name: '/help for commands', type: 3 }], // Type 3 = Watching
      status: 'online',
    });
  },
};

// src/events/interactionCreate.js - Handle slash commands
module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    // Handle slash commands
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) {
        console.error(\`No command matching \${interaction.commandName} was found.\`);
        return;
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        const errorMessage = 'There was an error executing this command!';
        
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({ content: errorMessage, ephemeral: true });
        } else {
          await interaction.reply({ content: errorMessage, ephemeral: true });
        }
      }
    }
    
    // Handle button interactions
    if (interaction.isButton()) {
      await interaction.reply({ content: \`You clicked: \${interaction.customId}\`, ephemeral: true });
    }
    
    // Handle select menu interactions
    if (interaction.isStringSelectMenu()) {
      await interaction.reply({ content: \`You selected: \${interaction.values[0]}\`, ephemeral: true });
    }
  },
};`,
        tips: [
          'Use Collections for efficient command storage',
          'Separate commands and events into different files',
          'Always handle errors gracefully',
          'Use ephemeral: true for private responses',
        ],
        resources: [
          { title: 'Client Intents', url: 'https://discord.js.org/#/docs/discord.js/main/class/Client' },
          { title: 'Gateway Intents', url: 'https://discord.com/developers/docs/topics/gateway#gateway-intents' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Create Slash Commands',
        duration: '50 min',
        content: `Build interactive slash commands for your bot.

**Slash Commands:**
- Modern Discord command system
- Auto-complete support
- Built-in validation
- Better UX than prefix commands

**Implementation:**`,
        code: `// src/commands/ping.js - Simple ping command
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = Math.round(interaction.client.ws.ping);
    
    await interaction.editReply(\`🏓 Pong! Latency: \${latency}ms | API: \${apiLatency}ms\`);
  },
};

// src/commands/userinfo.js - User information command
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Get information about a user')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('The user to get information about')
        .setRequired(false)
    ),
  
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(\`User Information: \${user.tag}\`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'ID', value: user.id, inline: true },
        { name: 'Bot', value: user.bot ? 'Yes' : 'No', inline: true },
        { name: 'Account Created', value: \`<t:\${Math.floor(user.createdTimestamp / 1000)}:R>\`, inline: true },
      )
      .setTimestamp();

    if (member) {
      embed.addFields(
        { name: 'Joined Server', value: \`<t:\${Math.floor(member.joinedTimestamp / 1000)}:R>\`, inline: true },
        { name: 'Roles', value: member.roles.cache.map(role => role.name).slice(0, 5).join(', ') || 'None', inline: false }
      );
    }

    await interaction.reply({ embeds: [embed] });
  },
};

// src/commands/poll.js - Create a poll command
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Create a poll')
    .addStringOption(option =>
      option
        .setName('question')
        .setDescription('The poll question')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('option1')
        .setDescription('First option')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('option2')
        .setDescription('Second option')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('option3')
        .setDescription('Third option')
        .setRequired(false)
    )
    .addStringOption(option =>
      option
        .setName('option4')
        .setDescription('Fourth option')
        .setRequired(false)
    ),
  
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const options = [
      interaction.options.getString('option1'),
      interaction.options.getString('option2'),
      interaction.options.getString('option3'),
      interaction.options.getString('option4'),
    ].filter(option => option !== null);

    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'];
    
    const optionsText = options
      .map((option, index) => \`\${emojis[index]} \${option}\`)
      .join('\\n\\n');

    const embed = new EmbedBuilder()
      .setColor('#ffcc00')
      .setTitle(\`📊 \${question}\`)
      .setDescription(optionsText)
      .setFooter({ text: \`Poll by \${interaction.user.tag}\` })
      .setTimestamp();

    const message = await interaction.reply({ embeds: [embed], fetchReply: true });

    // Add reactions
    for (let i = 0; i < options.length; i++) {
      await message.react(emojis[i]);
    }
  },
};

// src/commands/help.js - Help command with buttons
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get help with bot commands'),
  
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('🤖 Bot Help')
      .setDescription('Here are all available commands:')
      .addFields(
        { name: '/ping', value: 'Check bot latency', inline: false },
        { name: '/userinfo', value: 'Get user information', inline: false },
        { name: '/poll', value: 'Create a poll', inline: false },
        { name: '/help', value: 'Show this help message', inline: false },
      )
      .setFooter({ text: 'Created with Discord.js' })
      .setTimestamp();

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('Invite Bot')
          .setStyle(ButtonStyle.Link)
          .setURL('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands'),
        new ButtonBuilder()
          .setLabel('Support Server')
          .setStyle(ButtonStyle.Link)
          .setURL('https://discord.gg/your-invite'),
        new ButtonBuilder()
          .setCustomId('refresh')
          .setLabel('Refresh')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('🔄'),
      );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};

// deploy-commands.js - Register slash commands globally
require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

const commands = [];
const commandsPath = path.join(__dirname, 'src/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log(\`Started refreshing \${commands.length} application (/) commands.\`);

    // For guild-based commands (faster for testing):
    const data = await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    // For global commands (takes up to 1 hour to update):
    // const data = await rest.put(
    //   Routes.applicationCommands(process.env.CLIENT_ID),
    //   { body: commands },
    // );

    console.log(\`✅ Successfully reloaded \${data.length} application (/) commands.\`);
  } catch (error) {
    console.error(error);
  }
})();`,
        tips: [
          'Test commands in a private server first',
          'Use guild commands for faster testing',
          'Add input validation for user options',
          'Keep command descriptions clear and concise',
        ],
        resources: [
          { title: 'Slash Commands', url: 'https://discordjs.guide/interactions/slash-commands.html' },
          { title: 'Command Options', url: 'https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Deploy Bot 24/7',
        duration: '35 min',
        content: `Deploy your bot to run continuously on a cloud platform.

**Deployment Options:**
- Heroku (Free tier ending)
- Railway (Free tier)
- Replit (Free tier)
- DigitalOcean ($5/month)
- AWS/Google Cloud

**Deploy to Railway:**`,
        code: `# 1. Prepare for Deployment

## Update package.json scripts:
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "deploy": "node deploy-commands.js"
  }
}

## Create Procfile (for some platforms):
worker: node src/index.js

## Create .dockerignore (optional):
node_modules
.env
.git
*.log

# 2. Push to GitHub
git init
git add .
git commit -m "Initial Discord bot"
git remote add origin https://github.com/YOUR_USERNAME/discord-bot.git
git push -u origin main

# 3. Deploy to Railway

## Steps:
# 1. Go to https://railway.app
# 2. Sign up with GitHub
# 3. Click "New Project"
# 4. Select "Deploy from GitHub repo"
# 5. Choose your bot repository
# 6. Railway auto-detects Node.js

## Add Environment Variables:
# In Railway dashboard:
# Settings → Environment → Add Variables
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id
GUILD_ID=your_guild_id

# 7. Deploy Commands
# After first deployment, run in Railway shell:
npm run deploy

# Or locally:
node deploy-commands.js

# 4. Alternative: Deploy to Replit

## Steps:
# 1. Go to https://replit.com
# 2. Create new Repl → Import from GitHub
# 3. Paste your repo URL
# 4. Replit auto-detects dependencies

## Add Secrets (Environment Variables):
# In Replit sidebar → Secrets (lock icon):
# Add: DISCORD_TOKEN, CLIENT_ID, GUILD_ID

## Keep bot alive (Replit only):
# Install UptimeRobot
# Add your Replit URL to UptimeRobot
# It pings every 5 minutes to keep bot alive

# 5. Monitoring

## Add logging:
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

## Check bot status:
# Railway: Check logs in dashboard
# Use uptime monitoring: uptimerobot.com

## Database (if needed):
# Railway provides PostgreSQL, MySQL, Redis
# Add from Railway dashboard → New → Database`,
        tips: [
          'Always use environment variables for tokens',
          'Monitor bot uptime and errors',
          'Set up proper logging',
          'Use PM2 for process management on VPS',
          'Keep bot code updated regularly',
        ],
        resources: [
          { title: 'Railway', url: 'https://railway.app' },
          { title: 'Replit', url: 'https://replit.com' },
          { title: 'DigitalOcean', url: 'https://www.digitalocean.com' },
        ],
      },
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Build a Developer Portfolio',
    icon: '💼',
    difficulty: 'Beginner',
    duration: '2-3 hours',
    description: 'Create a stunning portfolio website to showcase your projects, skills, and experience.',
    tags: ['Portfolio', 'Web', 'React', 'Design'],
    steps: [
      {
        id: 'step-1',
        title: '1. Planning & Design',
        duration: '30 min',
        content: `Plan your portfolio structure and design before coding.

**Essential Sections:**
- Hero/Landing section
- About me
- Skills & technologies
- Projects showcase
- Contact form
- Resume/CV download

**Design Tips:**`,
        code: `# Portfolio Structure Planning

## Must-Have Sections:
1. Hero Section
   - Your name and title (e.g., "Full-Stack Developer")
   - Brief tagline (1-2 sentences)
   - Call-to-action button
   - Professional photo (optional)

2. About Section
   - Your story (2-3 paragraphs)
   - What you do
   - What you're passionate about
   - Personal interests

3. Skills Section
   - Programming languages
   - Frameworks & libraries
   - Tools & platforms
   - Soft skills

4. Projects Section (Most Important!)
   - 3-6 best projects
   - Project title & description
   - Technologies used
   - Live demo link
   - GitHub repository link
   - Screenshots/GIFs

5. Experience/Education (Optional)
   - Work experience
   - Education background
   - Certifications

6. Contact Section
   - Email
   - Social links (GitHub, LinkedIn, Twitter)
   - Contact form

# Design Inspiration:
# - https://brittanychiang.com
# - https://v4.brittanychiang.com
# - https://jacekjeznach.com
# - https://caferati.me
# - https://bruno-simon.com

# Color Scheme Ideas:
# Modern Dark: #0a192f, #172a45, #64ffda
# Professional: #2d3748, #4a5568, #3182ce
# Minimalist: #ffffff, #000000, #f7fafc
# Vibrant: #667eea, #764ba2, #f093fb`,
        tips: [
          'Keep it simple and clean - less is more',
          'Make your projects the star of the show',
          'Use a consistent color scheme (2-3 colors max)',
          'Ensure mobile responsiveness',
          'Add smooth scroll animations',
        ],
        resources: [
          { title: 'Awwwards Portfolio', url: 'https://www.awwwards.com/websites/portfolio/' },
          { title: 'Dribbble Portfolios', url: 'https://dribbble.com/tags/portfolio' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Setup Next.js Project',
        duration: '20 min',
        content: `Initialize your portfolio project with Next.js and Tailwind CSS.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

**Setup:**`,
        code: `# Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app

cd portfolio

# Install additional packages
npm install framer-motion
npm install react-icons
npm install react-type-animation
npm install react-scroll

# Project structure:
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Navbar.tsx
├── public/
│   ├── images/
│   ├── projects/
│   └── resume.pdf
└── tailwind.config.js

# Configure Tailwind (tailwind.config.js)
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#0a192f',
        accent: '#233554',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

# Update app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

* {
  scroll-behavior: smooth;
}

body {
  @apply bg-secondary text-gray-100;
}`,
        tips: [
          'Use TypeScript for better code quality',
          'Tailwind CSS speeds up styling significantly',
          'Framer Motion adds professional animations',
          'Keep dependencies minimal',
        ],
        resources: [
          { title: 'Next.js Docs', url: 'https://nextjs.org/docs' },
          { title: 'Tailwind CSS', url: 'https://tailwindcss.com' },
          { title: 'Framer Motion', url: 'https://www.framer.com/motion/' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Build Hero Section',
        duration: '35 min',
        content: `Create an impressive hero section that captures attention.

**Features:**
- Animated typing effect
- Call-to-action buttons
- Social links
- Scroll indicator

**Implementation:**`,
        code: `// app/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-lg mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-100 mb-4"
        >
          John Doe
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-gray-400 mb-6"
        >
          <TypeAnimation
            sequence={[
              'I build web applications',
              2000,
              'I create mobile apps',
              2000,
              'I design user experiences',
              2000,
              'I solve problems with code',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
        >
          I'm a full-stack developer specializing in building exceptional digital
          experiences. Currently focused on building accessible, human-centered products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-secondary transition"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-6 justify-center mb-16"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition text-2xl"
          >
            <FaTwitter />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="animate-bounce"
        >
          <HiArrowDown className="text-primary text-3xl mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}`,
        tips: [
          'Keep hero text concise and impactful',
          'Use animations sparingly for professional look',
          'Make CTA buttons prominent',
          'Test typing animation speed',
          'Ensure hero looks good on mobile',
        ],
        resources: [
          { title: 'React Type Animation', url: 'https://www.npmjs.com/package/react-type-animation' },
          { title: 'React Icons', url: 'https://react-icons.github.io/react-icons/' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Projects Showcase',
        duration: '45 min',
        content: `Create an impressive project showcase section.

**Project Card Features:**
- Project image/screenshot
- Title and description
- Technologies used
- Live demo and GitHub links
- Hover effects

**Implementation:**`,
        code: `// app/components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.png',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    image: '/projects/taskapp.png',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/taskapp',
    demo: 'https://taskapp-demo.vercel.app',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with forecasts, maps, and location search.',
    image: '/projects/weather.png',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/yourusername/weather',
    demo: 'https://weather-demo.vercel.app',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono mb-2">03. What I've Built</p>
          <h2 className="text-4xl font-bold text-gray-100">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={\`grid md:grid-cols-2 gap-8 items-center \${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }\`}
            >
              {/* Project Image */}
              <div
                className={\`relative group overflow-hidden rounded-lg \${
                  index % 2 === 1 ? 'md:order-2' : ''
                }\`}
              >
                <div className="relative aspect-video bg-accent">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={\`\${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}\`}>
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>
                <div className="bg-accent p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-gray-300">{project.description}</p>
                </div>

                {/* Technologies */}
                <div
                  className={\`flex flex-wrap gap-3 mb-4 \${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }\`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className={\`flex gap-4 \${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }\`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition text-xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition text-xl"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
        tips: [
          'Use high-quality project screenshots',
          'Write clear, concise project descriptions',
          'Highlight your best 3-6 projects',
          'Include both frontend and backend projects',
          'Add GitHub and live demo links',
        ],
        resources: [
          { title: 'Next.js Image', url: 'https://nextjs.org/docs/api-reference/next/image' },
        ],
      },
      {
        id: 'step-5',
        title: '5. Deploy & Domain',
        duration: '30 min',
        content: `Deploy your portfolio and connect a custom domain.

**Deployment Steps:**
1. Push to GitHub
2. Deploy on Vercel
3. Connect custom domain
4. Add analytics

**Deployment:**`,
        code: `# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 2. Deploy to Vercel
# Option 1: Using Vercel Dashboard
# - Go to https://vercel.com
# - Click "New Project"
# - Import your GitHub repository
# - Click "Deploy"

# Option 2: Using Vercel CLI
npm install -g vercel
vercel login
vercel

# 3. Add Vercel Analytics
npm install @vercel/analytics

// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

# 4. Custom Domain Setup
# In Vercel Dashboard:
# Project Settings → Domains → Add Domain

# DNS Configuration (at your domain registrar):
# Add these records:

# For root domain:
Type: A
Name: @
Value: 76.76.21.21

# For www:
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# 5. SEO Optimization
// app/layout.tsx
export const metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Portfolio of John Doe, a full-stack developer specializing in React, Node.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'react', 'next.js', 'full-stack'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe - Full Stack Developer',
    description: 'Portfolio of John Doe',
    url: 'https://yourdomain.com',
    siteName: 'John Doe Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Developer',
    description: 'Portfolio of John Doe',
    images: ['https://yourdomain.com/og-image.png'],
  },
};

# 6. Add Google Analytics (Optional)
# Get tracking ID from: https://analytics.google.com

// app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: \`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    \`,
  }}
/>`,
        tips: [
          'Use your name as domain (firstname-lastname.com)',
          'Add meta tags for better SEO',
          'Create custom 404 page',
          'Test on multiple devices',
          'Share on LinkedIn and Twitter',
        ],
        resources: [
          { title: 'Vercel Deployment', url: 'https://vercel.com/docs' },
          { title: 'SEO Best Practices', url: 'https://nextjs.org/learn/seo/introduction-to-seo' },
        ],
      },
    ],
  },
  {
    id: 'cli-tool',
    title: 'Build a CLI Tool with Node.js',
    icon: '⌨️',
    difficulty: 'Intermediate',
    duration: '3-4 hours',
    description: 'Create a command-line interface tool with Node.js that can be published to npm and used globally.',
    tags: ['CLI', 'Node.js', 'NPM', 'Tools'],
    steps: [
      {
        id: 'step-1',
        title: '1. Project Setup',
        duration: '25 min',
        content: `Initialize a Node.js CLI project with proper structure.

**What You'll Build:**
- Interactive CLI tool
- Command-line arguments parsing
- File operations
- Progress indicators
- Color output

**Setup:**`,
        code: `# Create project directory
mkdir my-cli-tool
cd my-cli-tool

# Initialize npm project
npm init -y

# Install dependencies
npm install commander chalk inquirer ora boxen figlet
npm install -D @types/node

# Create project structure
mkdir -p src/commands src/utils
touch src/index.js src/commands/create.js src/commands/list.js
touch src/utils/logger.js src/utils/helpers.js

# Project Structure:
my-cli-tool/
├── src/
│   ├── index.js           # CLI entry point
│   ├── commands/          # Command handlers
│   │   ├── create.js
│   │   ├── list.js
│   │   └── delete.js
│   └── utils/             # Helper functions
│       ├── logger.js
│       └── helpers.js
├── bin/
│   └── cli.js            # Executable
├── package.json
└── README.md

# Update package.json
{
  "name": "my-awesome-cli",
  "version": "1.0.0",
  "description": "An awesome CLI tool",
  "main": "src/index.js",
  "bin": {
    "my-cli": "./bin/cli.js"
  },
  "scripts": {
    "start": "node bin/cli.js",
    "dev": "nodemon bin/cli.js"
  },
  "keywords": ["cli", "tool", "command-line"],
  "author": "Your Name",
  "license": "MIT"
}

# Create bin/cli.js
#!/usr/bin/env node

require('../src/index.js');`,
        tips: [
          'Use shebang (#!/usr/bin/env node) for executables',
          'Keep CLI commands simple and intuitive',
          'Provide helpful error messages',
          'Add --help and --version flags',
        ],
        resources: [
          { title: 'Commander.js', url: 'https://github.com/tj/commander.js' },
          { title: 'Inquirer.js', url: 'https://github.com/SBoudrias/Inquirer.js' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Command Structure',
        duration: '40 min',
        content: `Build the CLI command structure with Commander.js.

**Features:**
- Multiple commands
- Options and flags
- Help documentation
- Version info

**Implementation:**`,
        code: `// src/index.js - Main CLI setup
const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
const packageJson = require('../package.json');

// Display banner
console.log(
  chalk.cyan(
    figlet.textSync('My CLI', { horizontalLayout: 'full' })
  )
);

// Configure CLI
program
  .name('my-cli')
  .description('An awesome CLI tool for developers')
  .version(packageJson.version);

// Create command
program
  .command('create <name>')
  .description('Create a new project')
  .option('-t, --template <type>', 'Project template', 'basic')
  .option('-d, --dir <directory>', 'Target directory', '.')
  .action(require('./commands/create'));

// List command
program
  .command('list')
  .description('List all projects')
  .option('-a, --all', 'Show all projects')
  .action(require('./commands/list'));

// Config command
program
  .command('config')
  .description('Manage configuration')
  .option('-s, --set <key> <value>', 'Set configuration value')
  .option('-g, --get <key>', 'Get configuration value')
  .action(require('./commands/config'));

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// src/commands/create.js - Create command
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const inquirer = require('inquirer');

module.exports = async (name, options) => {
  console.log(chalk.blue('\\nCreating new project...\\n'));

  // Ask for additional info
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Choose a template:',
      choices: ['basic', 'react', 'node', 'express'],
      default: options.template,
    },
    {
      type: 'confirm',
      name: 'git',
      message: 'Initialize git repository?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'install',
      message: 'Install dependencies?',
      default: true,
    },
  ]);

  const spinner = ora('Creating project structure...').start();

  try {
    const projectPath = path.join(options.dir, name);

    // Check if directory exists
    if (fs.existsSync(projectPath)) {
      spinner.fail('Directory already exists!');
      return;
    }

    // Create project directory
    fs.mkdirSync(projectPath, { recursive: true });
    
    // Create template files
    await createTemplateFiles(projectPath, answers.template);
    
    spinner.succeed('Project structure created!');

    // Initialize git
    if (answers.git) {
      const gitSpinner = ora('Initializing git...').start();
      await initGit(projectPath);
      gitSpinner.succeed('Git initialized!');
    }

    // Install dependencies
    if (answers.install) {
      const installSpinner = ora('Installing dependencies...').start();
      await installDependencies(projectPath);
      installSpinner.succeed('Dependencies installed!');
    }

    console.log(chalk.green('\\n✅ Project created successfully!\\n'));
    console.log(chalk.cyan('Next steps:'));
    console.log(chalk.white(\`  cd \${name}\`));
    console.log(chalk.white('  npm start\\n'));

  } catch (error) {
    spinner.fail('Failed to create project');
    console.error(chalk.red(error.message));
  }
};

async function createTemplateFiles(projectPath, template) {
  const templates = {
    basic: {
      'package.json': JSON.stringify({
        name: path.basename(projectPath),
        version: '1.0.0',
        description: '',
        main: 'index.js',
        scripts: {
          start: 'node index.js'
        }
      }, null, 2),
      'index.js': 'console.log("Hello World!");',
      'README.md': \`# \${path.basename(projectPath)}\\n\\nDescription here.\`,
    },
    react: {
      // React template files
    },
    node: {
      // Node.js template files
    },
    express: {
      // Express template files
    },
  };

  const files = templates[template] || templates.basic;

  for (const [filename, content] of Object.entries(files)) {
    const filePath = path.join(projectPath, filename);
    await fs.writeFile(filePath, content);
  }
}

async function initGit(projectPath) {
  const { execSync } = require('child_process');
  execSync('git init', { cwd: projectPath, stdio: 'ignore' });
  
  // Create .gitignore
  const gitignore = 'node_modules/\\n.env\\n.DS_Store\\n*.log';
  await fs.writeFile(path.join(projectPath, '.gitignore'), gitignore);
}

async function installDependencies(projectPath) {
  const { execSync } = require('child_process');
  execSync('npm install', { cwd: projectPath, stdio: 'ignore' });
}

// src/commands/list.js - List command
const chalk = require('chalk');
const boxen = require('boxen');

module.exports = async (options) => {
  console.log(chalk.blue('\\nListing projects...\\n'));

  const projects = [
    { name: 'project-1', type: 'React', created: '2024-01-15' },
    { name: 'project-2', type: 'Node.js', created: '2024-01-20' },
    { name: 'project-3', type: 'Express', created: '2024-02-01' },
  ];

  if (projects.length === 0) {
    console.log(chalk.yellow('No projects found.'));
    return;
  }

  projects.forEach((project, index) => {
    const content = \`
\${chalk.bold('Name:')} \${project.name}
\${chalk.bold('Type:')} \${project.type}
\${chalk.bold('Created:')} \${project.created}
    \`.trim();

    console.log(
      boxen(content, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
      })
    );
  });
};

// src/utils/logger.js - Logger utility
const chalk = require('chalk');

module.exports = {
  info: (message) => console.log(chalk.blue('ℹ'), message),
  success: (message) => console.log(chalk.green('✔'), message),
  warning: (message) => console.log(chalk.yellow('⚠'), message),
  error: (message) => console.log(chalk.red('✖'), message),
  log: (message) => console.log(message),
};`,
        tips: [
          'Use descriptive command names',
          'Add helpful descriptions for each command',
          'Implement --help for all commands',
          'Handle errors gracefully',
          'Use spinners for long operations',
        ],
        resources: [
          { title: 'Chalk', url: 'https://github.com/chalk/chalk' },
          { title: 'Ora', url: 'https://github.com/sindresorhus/ora' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Testing & Publishing',
        duration: '35 min',
        content: `Test your CLI locally and publish to npm.

**Testing:**
- Local testing with npm link
- Test all commands
- Test error handling

**Publishing:**`,
        code: `# 1. Test Locally
# In your CLI project directory:
npm link

# Now you can use your CLI globally:
my-cli --help
my-cli create test-project
my-cli list

# Unlink when done testing:
npm unlink -g my-cli

# 2. Prepare for Publishing

# Make executable (Unix/Mac):
chmod +x bin/cli.js

# Add files to package.json:
{
  "files": [
    "src/",
    "bin/",
    "README.md"
  ]
}

# Create comprehensive README.md:
# My Awesome CLI

A powerful CLI tool for developers.

## Installation

\\\`\\\`\\\`bash
npm install -g my-awesome-cli
\\\`\\\`\\\`

## Usage

\\\`\\\`\\\`bash
# Create new project
my-cli create my-project

# List projects
my-cli list

# Show help
my-cli --help
\\\`\\\`\\\`

## Commands

### create <name>
Create a new project

Options:
- \`-t, --template <type>\` - Project template (basic, react, node, express)
- \`-d, --dir <directory>\` - Target directory

Example:
\\\`\\\`\\\`bash
my-cli create my-app -t react
\\\`\\\`\\\`

### list
List all projects

Options:
- \`-a, --all\` - Show all projects

### config
Manage configuration

Options:
- \`-s, --set <key> <value>\` - Set configuration
- \`-g, --get <key>\` - Get configuration

## License

MIT

# 3. Publish to npm

# Login to npm (first time):
npm login

# Check what will be published:
npm pack
# This creates a .tgz file - inspect it

# Publish:
npm publish

# For scoped packages:
npm publish --access public

# 4. Update Version
# When making updates:
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

npm publish

# 5. Add Badge to README
# Add npm version badge:
![npm](https://img.shields.io/npm/v/my-awesome-cli)
![downloads](https://img.shields.io/npm/dm/my-awesome-cli)
![license](https://img.shields.io/npm/l/my-awesome-cli)

# 6. Test Installation
# In a different directory:
npm install -g my-awesome-cli
my-cli --version
my-cli --help

# 7. GitHub Actions for Auto-Publish
# .github/workflows/publish.yml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: \${{secrets.NPM_TOKEN}}`,
        tips: [
          'Test thoroughly before publishing',
          'Use semantic versioning',
          'Write comprehensive documentation',
          'Add usage examples',
          'Respond to issues on npm',
        ],
        resources: [
          { title: 'Publishing npm packages', url: 'https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry' },
          { title: 'npm version', url: 'https://docs.npmjs.com/cli/v8/commands/npm-version' },
        ],
      },
    ],
  },
  {
    id: 'pwa-app',
    title: 'Build a Progressive Web App (PWA)',
    icon: '📲',
    difficulty: 'Intermediate',
    duration: '3-4 hours',
    description: 'Create a Progressive Web App that works offline, can be installed, and provides native-like experience.',
    tags: ['PWA', 'Web', 'Offline', 'Mobile'],
    steps: [
      {
        id: 'step-1',
        title: '1. Setup PWA Project',
        duration: '30 min',
        content: `Initialize a Progressive Web App with all necessary configurations.

**PWA Features:**
- Installable on devices
- Offline functionality
- Push notifications
- Native-like experience
- Fast loading

**Setup:**`,
        code: `# Create React app with PWA template
npx create-react-app my-pwa --template cra-template-pwa

cd my-pwa

# Install additional PWA tools
npm install workbox-webpack-plugin
npm install workbox-window

# Or use Vite with PWA plugin
npm create vite@latest my-pwa -- --template react
cd my-pwa
npm install vite-plugin-pwa -D

# Project Structure:
my-pwa/
├── public/
│   ├── manifest.json       # App manifest
│   ├── icons/             # App icons
│   │   ├── icon-72x72.png
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   └── icon-512x512.png
│   └── sw.js              # Service Worker
├── src/
│   ├── App.jsx
│   ├── sw-register.js
│   └── components/
└── vite.config.js

# public/manifest.json - Web App Manifest
{
  "name": "My Awesome PWA",
  "short_name": "PWA",
  "description": "An awesome Progressive Web App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0a192f",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/home.png",
      "sizes": "540x720",
      "type": "image/png"
    }
  ]
}

# Update index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- PWA Meta Tags -->
  <meta name="theme-color" content="#0a192f">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="My PWA">
  
  <!-- Icons -->
  <link rel="manifest" href="/manifest.json">
  <link rel="icon" href="/icons/icon-192x192.png">
  <link rel="apple-touch-icon" href="/icons/icon-192x192.png">
  
  <title>My Awesome PWA</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`,
        tips: [
          'Generate icons in all required sizes',
          'Use proper theme colors',
          'Test manifest with Lighthouse',
          'Icons should be square and simple',
        ],
        resources: [
          { title: 'PWA Builder', url: 'https://www.pwabuilder.com' },
          { title: 'Web App Manifest', url: 'https://web.dev/add-manifest/' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Service Worker Implementation',
        duration: '50 min',
        content: `Implement service worker for offline functionality and caching.

**Service Worker Features:**
- Cache static assets
- Offline fallback
- Background sync
- Push notifications

**Implementation:**`,
        code: `// vite.config.js - Vite PWA Configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png'],
      manifest: {
        name: 'My Awesome PWA',
        short_name: 'PWA',
        description: 'An awesome Progressive Web App',
        theme_color: '#0a192f',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\\/\\/api\\.example\\.com\\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\\/\\/fonts\\.googleapis\\.com\\/.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /\\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      }
    })
  ]
});

// src/App.jsx - Main App with PWA features
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Online/Offline detection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Install prompt handler
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallButton(false);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return (
    <div className="App">
      {/* Online/Offline Indicator */}
      <div className={\`status-bar \${isOnline ? 'online' : 'offline'}\`}>
        {isOnline ? '🟢 Online' : '🔴 Offline'}
      </div>

      {/* Install Button */}
      {showInstallButton && (
        <div className="install-banner">
          <p>Install app for better experience</p>
          <button onClick={handleInstallClick}>
            Install
          </button>
        </div>
      )}

      {/* App Content */}
      <header className="App-header">
        <h1>My Awesome PWA</h1>
        <p>Works offline and can be installed!</p>
      </header>

      <main>
        <TaskList />
      </main>
    </div>
  );
}

// src/components/TaskList.jsx - Example with offline support
import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      synced: navigator.onLine
    };

    setTasks([...tasks, task]);
    setNewTask('');

    // Sync with server when online
    if (navigator.onLine) {
      syncTaskWithServer(task);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-list">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            {!task.synced && <span className="sync-icon">⏳</span>}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function syncTaskWithServer(task) {
  try {
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

export default App;`,
        tips: [
          'Test offline functionality thoroughly',
          'Use IndexedDB for complex data',
          'Implement background sync',
          'Handle cache updates properly',
        ],
        resources: [
          { title: 'Workbox', url: 'https://developers.google.com/web/tools/workbox' },
          { title: 'Service Workers', url: 'https://web.dev/service-workers/' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Deploy & Test PWA',
        duration: '30 min',
        content: `Deploy your PWA and test all features.

**Deployment:**
- HTTPS is required for PWA
- Test install prompt
- Verify offline functionality
- Check Lighthouse score

**Steps:**`,
        code: `# 1. Build for Production
npm run build

# 2. Test Locally with HTTPS
# Install http-server with SSL
npm install -g http-server

# Serve with SSL
http-server dist -S -C cert.pem -K key.pem

# Or use Vite preview
npm run preview

# 3. Deploy to Vercel
npm install -g vercel
vercel

# Or deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod

# 4. Test PWA Features

## Desktop (Chrome)
# 1. Open your deployed PWA
# 2. Open DevTools → Application tab
# 3. Check:
#    - Manifest tab (all fields correct)
#    - Service Workers tab (registered and running)
#    - Cache Storage tab (assets cached)
# 4. Go offline (DevTools → Network → Offline)
# 5. Refresh page (should still work)
# 6. Click install icon in address bar

## Mobile Testing
# 1. Open on mobile browser
# 2. Menu → "Add to Home Screen"
# 3. Check app opens in standalone mode
# 4. Test offline functionality
# 5. Check app updates properly

# 5. Run Lighthouse Audit
# In Chrome DevTools:
# Lighthouse tab → Generate report

# PWA Checklist:
# ✅ HTTPS enabled
# ✅ Registers a service worker
# ✅ Responds with 200 when offline
# ✅ Has a web app manifest
# ✅ Icons are provided
# ✅ Theme color is set
# ✅ Page load is fast
# ✅ Works on mobile and desktop
# ✅ Install prompt appears
# ✅ Splash screen configured

# 6. Push Notifications (Optional)
// src/utils/notifications.js
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('Notifications not supported');
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

export function sendNotification(title, options) {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, {
        body: options.body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        vibrate: [200, 100, 200],
        tag: options.tag || 'default',
        ...options
      });
    });
  }
}

// Usage in App.jsx
import { requestNotificationPermission, sendNotification } from './utils/notifications';

// Request permission on mount
useEffect(() => {
  requestNotificationPermission();
}, []);

// Send notification
const handleNotify = () => {
  sendNotification('Hello!', {
    body: 'This is a PWA notification',
    tag: 'greeting'
  });
};

# 7. Update Strategy
// vite.config.js
VitePWA({
  registerType: 'prompt',
  workbox: {
    skipWaiting: false,
    clientsClaim: false
  }
})

// src/main.jsx
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New version available! Update now?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
});`,
        tips: [
          'Always test on real devices',
          'HTTPS is mandatory for PWAs',
          'Test on different networks (3G, 4G, WiFi)',
          'Monitor service worker updates',
          'Keep app size small for faster loads',
        ],
        resources: [
          { title: 'Lighthouse PWA', url: 'https://web.dev/lighthouse-pwa/' },
          { title: 'PWA Checklist', url: 'https://web.dev/pwa-checklist/' },
          { title: 'Web.dev PWA', url: 'https://web.dev/progressive-web-apps/' },
        ],
      },
    ],
  },
  {
    id: 'realtime-messenger',
    title: 'Build a Real-Time Messenger App',
    icon: '💬',
    difficulty: 'Advanced',
    duration: '5-6 hours',
    description: 'Create a full-featured real-time chat application with Socket.io, user authentication, and message history.',
    tags: ['Chat', 'Real-Time', 'Socket.io', 'Full-Stack'],
    steps: [
      {
        id: 'step-1',
        title: '1. Project Setup - Frontend & Backend',
        duration: '40 min',
        content: `Set up a full-stack messenger application with React and Node.js.

**Tech Stack:**
- Frontend: React + Vite + Tailwind
- Backend: Node.js + Express + Socket.io
- Database: MongoDB
- Auth: JWT

**Setup:**`,
        code: `# Create project structure
mkdir realtime-messenger
cd realtime-messenger

# Create backend
mkdir server
cd server
npm init -y

# Install backend dependencies
npm install express socket.io mongoose cors dotenv bcryptjs jsonwebtoken
npm install -D nodemon

# Create frontend
cd ..
npm create vite@latest client -- --template react
cd client
npm install
npm install socket.io-client axios react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Project Structure:
realtime-messenger/
├── server/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Message.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   └── messages.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── socket/
│   │   │   └── socketHandler.js
│   │   └── server.js
│   ├── .env
│   └── package.json
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Chat.jsx
    │   │   ├── MessageList.jsx
    │   │   ├── MessageInput.jsx
    │   │   ├── UserList.jsx
    │   │   └── Login.jsx
    │   ├── context/
    │   │   └── SocketContext.jsx
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

# server/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/messenger
JWT_SECRET=your_super_secret_jwt_key_change_this
NODE_ENV=development

# server/package.json - Add scripts
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}`,
        tips: [
          'Use separate terminals for client and server',
          'Keep socket events organized',
          'Implement proper error handling',
          'Use environment variables for secrets',
        ],
        resources: [
          { title: 'Socket.io Docs', url: 'https://socket.io/docs/' },
          { title: 'React + Socket.io', url: 'https://socket.io/how-to/use-with-react' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Backend - Socket.io Server',
        duration: '60 min',
        content: `Create the real-time messaging server with Socket.io.

**Features:**
- WebSocket connections
- Real-time message broadcasting
- User online status
- Typing indicators
- Message history

**Implementation:**`,
        code: `// server/src/server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/messages', require('./routes/messages'));

// Socket.io connection
const onlineUsers = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User joins
  socket.on('user:join', (userId) => {
    onlineUsers.set(userId, socket.id);
    socket.userId = userId;
    
    // Broadcast online users
    io.emit('users:online', Array.from(onlineUsers.keys()));
    console.log(\`User \${userId} joined. Online users: \${onlineUsers.size}\`);
  });

  // Send message
  socket.on('message:send', async (data) => {
    try {
      const { from, to, text } = data;
      
      // Save message to database
      const Message = require('./models/Message');
      const message = await Message.create({
        from,
        to,
        text,
        timestamp: new Date(),
      });

      // Send to recipient if online
      const recipientSocketId = onlineUsers.get(to);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('message:receive', {
          _id: message._id,
          from,
          text,
          timestamp: message.timestamp,
        });
      }

      // Confirm to sender
      socket.emit('message:sent', {
        _id: message._id,
        to,
        text,
        timestamp: message.timestamp,
      });
    } catch (error) {
      socket.emit('message:error', { error: error.message });
    }
  });

  // Typing indicator
  socket.on('typing:start', (data) => {
    const recipientSocketId = onlineUsers.get(data.to);
    if (recipientSocketId) {
      io.to(recipientSocketId).emit('typing:display', {
        from: data.from,
        isTyping: true,
      });
    }
  });

  socket.on('typing:stop', (data) => {
    const recipientSocketId = onlineUsers.get(data.to);
    if (recipientSocketId) {
      io.to(recipientSocketId).emit('typing:display', {
        from: data.from,
        isTyping: false,
      });
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    if (socket.userId) {
      onlineUsers.delete(socket.userId);
      io.emit('users:online', Array.from(onlineUsers.keys()));
      console.log(\`User \${socket.userId} disconnected\`);
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});

// server/src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'https://ui-avatars.com/api/?background=random',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

// server/src/models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Message', messageSchema);

// server/src/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({ username, email, password });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;`,
        tips: [
          'Use rooms for private conversations',
          'Implement message acknowledgment',
          'Add reconnection logic',
          'Store socket.userId for easy lookup',
        ],
        resources: [
          { title: 'Socket.io Emit Cheatsheet', url: 'https://socket.io/docs/v4/emit-cheatsheet/' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Frontend - React Chat Interface',
        duration: '70 min',
        content: `Build the chat interface with React and Socket.io client.

**UI Components:**
- Chat list
- Message display
- Input field
- User status
- Typing indicator

**Implementation:**`,
        code: `// client/src/context/SocketContext.jsx
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempt, setReconnectAttempt] = useState(0);
  const reconnectTimeoutRef = useRef(null);
  const messageQueueRef = useRef([]);

  useEffect(() => {
    // Socket.io with advanced reconnection configuration
    const newSocket = io('http://localhost:5000', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
      timeout: 20000,
      transports: ['websocket', 'polling'],
    });

    // Connection event handlers
    newSocket.on('connect', () => {
      console.log('✅ Socket connected:', newSocket.id);
      setIsConnected(true);
      setReconnectAttempt(0);
      
      // Send queued messages after reconnection
      if (messageQueueRef.current.length > 0) {
        console.log('📤 Sending queued messages:', messageQueueRef.current.length);
        messageQueueRef.current.forEach(msg => {
          newSocket.emit(msg.event, msg.data);
        });
        messageQueueRef.current = [];
      }
    });

    newSocket.on('disconnect', (reason) => {
      console.log('❌ Socket disconnected:', reason);
      setIsConnected(false);
      
      // Auto-reconnect logic with exponential backoff
      if (reason === 'io server disconnect') {
        // Server initiated disconnect, manually reconnect
        const delay = Math.min(1000 * Math.pow(2, reconnectAttempt), 30000);
        reconnectTimeoutRef.current = setTimeout(() => {
          console.log('🔄 Attempting reconnection...');
          setReconnectAttempt(prev => prev + 1);
          newSocket.connect();
        }, delay);
      }
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error.message);
      setIsConnected(false);
    });

    newSocket.on('users:online', (users) => {
      setOnlineUsers(users);
    });

    setSocket(newSocket);

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      newSocket.close();
    };
  }, []);

  // Queue messages when offline
  const emitWithQueue = (event, data) => {
    if (isConnected && socket) {
      socket.emit(event, data);
    } else {
      console.log('📥 Queuing message for later:', event);
      messageQueueRef.current.push({ event, data });
    }
  };

  return (
    <SocketContext.Provider value={{ 
      socket, 
      onlineUsers, 
      isConnected, 
      reconnectAttempt,
      emitWithQueue 
    }}>
      {children}
    </SocketContext.Provider>
  );
};

// client/src/components/Chat.jsx
import { useState, useEffect, useRef } from 'react';
import { useSocket } from '../context/SocketContext';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function Chat({ currentUser, selectedUser }) {
  const { socket } = useSocket();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    if (!socket || !selectedUser) return;

    // Load message history
    loadMessages();

    // Listen for new messages
    socket.on('message:receive', (message) => {
      if (message.from === selectedUser.id) {
        setMessages(prev => [...prev, message]);
      }
    });

    socket.on('message:sent', (message) => {
      if (message.to === selectedUser.id) {
        setMessages(prev => [...prev, { ...message, from: currentUser.id }]);
      }
    });

    // Typing indicator
    socket.on('typing:display', ({ from, isTyping }) => {
      if (from === selectedUser.id) {
        setIsTyping(isTyping);
        if (isTyping) {
          clearTimeout(typingTimeoutRef.current);
          typingTimeoutRef.current = setTimeout(() => {
            setIsTyping(false);
          }, 3000);
        }
      }
    });

    return () => {
      socket.off('message:receive');
      socket.off('message:sent');
      socket.off('typing:display');
    };
  }, [socket, selectedUser, currentUser]);

  const loadMessages = async () => {
    try {
      const response = await fetch(
        \`http://localhost:5000/api/messages?user1=\${currentUser.id}&user2=\${selectedUser.id}\`,
        {
          headers: {
            Authorization: \`Bearer \${localStorage.getItem('token')}\`,
          },
        }
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const sendMessage = (text) => {
    if (!text.trim() || !socket) return;

    socket.emit('message:send', {
      from: currentUser.id,
      to: selectedUser.id,
      text,
    });
  };

  const handleTyping = (isTyping) => {
    if (!socket) return;

    if (isTyping) {
      socket.emit('typing:start', {
        from: currentUser.id,
        to: selectedUser.id,
      });
    } else {
      socket.emit('typing:stop', {
        from: currentUser.id,
        to: selectedUser.id,
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.username}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-white">{selectedUser.username}</h3>
            <p className="text-sm text-gray-400">
              {selectedUser.online ? '🟢 Online' : '⚫ Offline'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <MessageList
        messages={messages}
        currentUserId={currentUser.id}
        isTyping={isTyping}
      />

      {/* Input */}
      <MessageInput
        onSend={sendMessage}
        onTyping={handleTyping}
      />
    </div>
  );
}

// client/src/components/MessageList.jsx
import { useEffect, useRef } from 'react';

export default function MessageList({ messages, currentUserId, isTyping }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isOwn = message.from === currentUserId;
        return (
          <div
            key={message._id}
            className={\`flex \${isOwn ? 'justify-end' : 'justify-start'}\`}
          >
            <div
              className={\`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl \${
                isOwn
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }\`}
            >
              <p className="break-words">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        );
      })}

      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-gray-700 px-4 py-2 rounded-2xl">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}

// client/src/components/MessageInput.jsx
import { useState, useRef } from 'react';

export default function MessageInput({ onSend, onTyping }) {
  const [text, setText] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);

    // Typing indicator
    onTyping(true);
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      onTyping(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSend(text);
    setText('');
    onTyping(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 border-t border-gray-700">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Send
        </button>
      </div>
    </form>
  );
}`,
        tips: [
          'Implement auto-scroll to latest message',
          'Show message delivery status',
          'Add emoji picker for better UX',
          'Cache messages in localStorage',
        ],
        resources: [
          { title: 'React Hooks', url: 'https://react.dev/reference/react' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Features & Deployment',
        duration: '50 min',
        content: `Add advanced features and deploy the messenger.

**Advanced Features:**
- Message read receipts
- File/image sharing
- Group chats
- Voice messages
- Search functionality

**Deployment:**`,
        code: `# Additional Features Implementation

// Message Read Receipts
// server/src/server.js
socket.on('message:read', async (messageId) => {
  const Message = require('./models/Message');
  await Message.findByIdAndUpdate(messageId, { read: true });
  
  const message = await Message.findById(messageId);
  const senderSocketId = onlineUsers.get(message.from.toString());
  
  if (senderSocketId) {
    io.to(senderSocketId).emit('message:read:confirm', messageId);
  }
});

// Image Upload
npm install multer cloudinary

// server/src/routes/upload.js
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: 'messenger' },
      (error, result) => {
        if (error) throw error;
        res.json({ url: result.secure_url });
      }
    ).end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deployment - Docker Configuration
# Dockerfile (server)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["node", "src/server.js"]

# Dockerfile (client)
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker-compose.yml
version: '3.8'

services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  server:
    build: ./server
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/messenger
      - JWT_SECRET=your_secret_key
    depends_on:
      - mongodb

  client:
    build: ./client
    ports:
      - "80:80"
    depends_on:
      - server

volumes:
  mongodb_data:

# Deploy to Railway/Render
# 1. Push to GitHub
git init
git add .
git commit -m "Initial messenger app"
git push origin main

# 2. Deploy on Railway
# - Go to railway.app
# - New Project → Deploy from GitHub
# - Add MongoDB service
# - Set environment variables
# - Deploy

# 3. Deploy on Render
# Create render.yaml:
services:
  - type: web
    name: messenger-server
    env: node
    buildCommand: cd server && npm install
    startCommand: cd server && npm start
    envVars:
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        generateValue: true

  - type: web
    name: messenger-client
    env: static
    buildCommand: cd client && npm install && npm run build
    staticPublishPath: client/dist

# Production Optimizations
// Add rate limiting
npm install express-rate-limit

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// Add helmet for security
npm install helmet

const helmet = require('helmet');
app.use(helmet());

// Add compression
npm install compression

const compression = require('compression');
app.use(compression());`,
        tips: [
          'Use Redis for socket scaling',
          'Implement message pagination',
          'Add proper error boundaries',
          'Monitor socket connections',
          'Use CDN for static assets',
        ],
        resources: [
          { title: 'Railway Deployment', url: 'https://railway.app' },
          { title: 'Socket.io with Redis', url: 'https://socket.io/docs/v4/redis-adapter/' },
          { title: 'Docker Compose', url: 'https://docs.docker.com/compose/' },
        ],
      },
    ],
  },
  {
    id: 'multiplayer-tictactoe',
    title: 'Multiplayer Tic-Tac-Toe Game',
    icon: '🎮',
    difficulty: 'Intermediate',
    duration: '3-4 hours',
    description: 'Build a real-time multiplayer Tic-Tac-Toe game with lobbies, game rooms, and spectator mode.',
    tags: ['Game', 'WebSockets', 'Multiplayer', 'Real-Time'],
    steps: [
      {
        id: 'step-1',
        title: '1. Setup Game Server',
        duration: '45 min',
        content: `Create the multiplayer game server with WebSocket support.

**Game Features:**
- Room system
- Player matching
- Real-time moves
- Spectator mode
- Game state management

**Setup:**`,
        code: `# Create project
mkdir multiplayer-tictactoe
cd multiplayer-tictactoe

# Backend setup
mkdir server
cd server
npm init -y
npm install express socket.io cors uuid

# Frontend setup
cd ..
npm create vite@latest client -- --template react
cd client
npm install
npm install socket.io-client

# Project Structure:
multiplayer-tictactoe/
├── server/
│   ├── src/
│   │   ├── game/
│   │   │   ├── GameRoom.js
│   │   │   ├── GameLogic.js
│   │   │   └── RoomManager.js
│   │   └── server.js
│   └── package.json
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Game.jsx
    │   │   ├── Board.jsx
    │   │   ├── Lobby.jsx
    │   │   └── Cell.jsx
    │   ├── hooks/
    │   │   └── useGame.js
    │   └── App.jsx
    └── package.json

// server/src/game/GameLogic.js
class GameLogic {
  static checkWinner(board) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6],             // diagonals
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line: [a, b, c] };
      }
    }

    if (board.every(cell => cell !== null)) {
      return { winner: 'draw', line: [] };
    }

    return null;
  }

  static isValidMove(board, position) {
    return position >= 0 && position < 9 && board[position] === null;
  }
}

module.exports = GameLogic;

// server/src/game/GameRoom.js
const { v4: uuidv4 } = require('uuid');
const GameLogic = require('./GameLogic');

class GameRoom {
  constructor(roomId, creator) {
    this.id = roomId || uuidv4();
    this.players = [
      { id: creator.id, name: creator.name, symbol: 'X', socketId: creator.socketId }
    ];
    this.spectators = [];
    this.board = Array(9).fill(null);
    this.currentTurn = 'X';
    this.status = 'waiting'; // waiting, playing, finished
    this.winner = null;
    this.winningLine = [];
    this.createdAt = Date.now();
  }

  addPlayer(player) {
    if (this.players.length >= 2) {
      this.spectators.push(player);
      return false;
    }

    this.players.push({
      id: player.id,
      name: player.name,
      symbol: 'O',
      socketId: player.socketId
    });

    if (this.players.length === 2) {
      this.status = 'playing';
    }

    return true;
  }

  removePlayer(socketId) {
    const playerIndex = this.players.findIndex(p => p.socketId === socketId);
    
    if (playerIndex !== -1) {
      this.players.splice(playerIndex, 1);
      
      if (this.players.length < 2 && this.status === 'playing') {
        this.status = 'abandoned';
      }
      
      return true;
    }

    this.spectators = this.spectators.filter(s => s.socketId !== socketId);
    return false;
  }

  makeMove(socketId, position, moveId = null) {
    const player = this.players.find(p => p.socketId === socketId);
    
    if (!player || this.status !== 'playing') {
      return { success: false, error: 'Invalid game state' };
    }

    if (player.symbol !== this.currentTurn) {
      return { success: false, error: 'Not your turn' };
    }

    if (!GameLogic.isValidMove(this.board, position)) {
      return { success: false, error: 'Invalid move' };
    }

    // Advanced: Track move history for conflict resolution
    if (!this.moveHistory) this.moveHistory = [];
    
    const move = {
      id: moveId || Date.now(),
      player: player.symbol,
      position,
      timestamp: Date.now(),
      boardState: [...this.board],
    };

    // Check for simultaneous moves (race condition)
    const recentMoves = this.moveHistory.filter(
      m => Math.abs(m.timestamp - move.timestamp) < 100
    );
    
    if (recentMoves.length > 0) {
      console.warn('⚠️ Conflict detected: Simultaneous moves');
      // Use timestamp as tiebreaker
      const earliestMove = recentMoves.reduce((prev, curr) => 
        prev.timestamp < curr.timestamp ? prev : curr
      );
      
      if (earliestMove.id !== move.id) {
        return { 
          success: false, 
          error: 'Move conflict - other player moved first',
          shouldSync: true 
        };
      }
    }

    this.board[position] = player.symbol;
    this.moveHistory.push(move);
    
    const result = GameLogic.checkWinner(this.board);
    
    if (result) {
      this.status = 'finished';
      this.winner = result.winner;
      this.winningLine = result.line;
    } else {
      this.currentTurn = this.currentTurn === 'X' ? 'O' : 'X';
    }

    return { success: true, result, move };
  }

  // Verify game state integrity
  verifyGameState(clientState) {
    const serverState = this.getState();
    
    // Check if boards match
    const boardsMatch = JSON.stringify(serverState.board) === 
                       JSON.stringify(clientState.board);
    
    if (!boardsMatch) {
      console.error('❌ Game state mismatch detected!');
      return { valid: false, serverState };
    }
    
    return { valid: true };
  }

  reset() {
    this.board = Array(9).fill(null);
    this.currentTurn = 'X';
    this.status = this.players.length === 2 ? 'playing' : 'waiting';
    this.winner = null;
    this.winningLine = [];
  }

  getState() {
    return {
      id: this.id,
      players: this.players.map(p => ({ id: p.id, name: p.name, symbol: p.symbol })),
      spectatorCount: this.spectators.length,
      board: this.board,
      currentTurn: this.currentTurn,
      status: this.status,
      winner: this.winner,
      winningLine: this.winningLine,
    };
  }
}

module.exports = GameRoom;

// server/src/game/RoomManager.js
const GameRoom = require('./GameRoom');

class RoomManager {
  constructor() {
    this.rooms = new Map();
  }

  createRoom(creator) {
    const room = new GameRoom(null, creator);
    this.rooms.set(room.id, room);
    return room;
  }

  getRoom(roomId) {
    return this.rooms.get(roomId);
  }

  getAllRooms() {
    return Array.from(this.rooms.values()).map(room => ({
      id: room.id,
      players: room.players.length,
      status: room.status,
      spectators: room.spectators.length,
    }));
  }

  deleteRoom(roomId) {
    this.rooms.delete(roomId);
  }

  findAvailableRoom() {
    for (let room of this.rooms.values()) {
      if (room.status === 'waiting' && room.players.length < 2) {
        return room;
      }
    }
    return null;
  }
}

module.exports = RoomManager;`,
        tips: [
          'Use unique room IDs',
          'Validate all moves server-side',
          'Handle player disconnections gracefully',
          'Implement game timeout logic',
        ],
        resources: [
          { title: 'Game Logic Patterns', url: 'https://gameprogrammingpatterns.com/' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Socket.io Server Implementation',
        duration: '50 min',
        content: `Implement the real-time multiplayer server logic.

**Server Events:**
- Room creation/joining
- Move broadcasting
- Player disconnect handling
- Game state sync

**Implementation:**`,
        code: `// server/src/server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const RoomManager = require('./game/RoomManager');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

const roomManager = new RoomManager();
const players = new Map(); // socketId -> player info

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // Player sets their name
  socket.on('player:setName', (name) => {
    players.set(socket.id, {
      id: socket.id,
      name: name || \`Player \${socket.id.substr(0, 4)}\`,
      socketId: socket.id,
    });

    socket.emit('player:registered', players.get(socket.id));
  });

  // Create new room
  socket.on('room:create', () => {
    const player = players.get(socket.id);
    if (!player) return socket.emit('error', 'Set your name first');

    const room = roomManager.createRoom(player);
    socket.join(room.id);
    
    socket.emit('room:created', room.getState());
    io.emit('rooms:update', roomManager.getAllRooms());
  });

  // Join room
  socket.on('room:join', (roomId) => {
    const player = players.get(socket.id);
    const room = roomManager.getRoom(roomId);

    if (!player) return socket.emit('error', 'Set your name first');
    if (!room) return socket.emit('error', 'Room not found');

    const joined = room.addPlayer(player);
    socket.join(roomId);

    if (joined) {
      io.to(roomId).emit('room:updated', room.getState());
      io.emit('rooms:update', roomManager.getAllRooms());
      
      if (room.status === 'playing') {
        io.to(roomId).emit('game:start', room.getState());
      }
    } else {
      socket.emit('room:joined:spectator', room.getState());
    }
  });

  // Quick match (find/create room)
  socket.on('room:quickMatch', () => {
    const player = players.get(socket.id);
    if (!player) return socket.emit('error', 'Set your name first');

    let room = roomManager.findAvailableRoom();
    
    if (!room) {
      room = roomManager.createRoom(player);
      socket.join(room.id);
      socket.emit('room:created', room.getState());
    } else {
      room.addPlayer(player);
      socket.join(room.id);
      io.to(room.id).emit('room:updated', room.getState());
      
      if (room.status === 'playing') {
        io.to(room.id).emit('game:start', room.getState());
      }
    }

    io.emit('rooms:update', roomManager.getAllRooms());
  });

  // Make move
  socket.on('game:move', ({ roomId, position }) => {
    const room = roomManager.getRoom(roomId);
    if (!room) return socket.emit('error', 'Room not found');

    const result = room.makeMove(socket.id, position);

    if (result.success) {
      io.to(roomId).emit('game:moved', {
        position,
        symbol: room.board[position],
        state: room.getState(),
      });

      if (result.result) {
        io.to(roomId).emit('game:end', {
          winner: room.winner,
          winningLine: room.winningLine,
          state: room.getState(),
        });
      }
    } else {
      socket.emit('error', result.error);
    }
  });

  // Reset game
  socket.on('game:reset', (roomId) => {
    const room = roomManager.getRoom(roomId);
    if (!room) return;

    const player = room.players.find(p => p.socketId === socket.id);
    if (!player) return;

    room.reset();
    io.to(roomId).emit('game:reset', room.getState());
  });

  // Get all rooms
  socket.on('rooms:list', () => {
    socket.emit('rooms:update', roomManager.getAllRooms());
  });

  // Leave room
  socket.on('room:leave', (roomId) => {
    const room = roomManager.getRoom(roomId);
    if (room) {
      room.removePlayer(socket.id);
      socket.leave(roomId);
      
      if (room.players.length === 0) {
        roomManager.deleteRoom(roomId);
      } else {
        io.to(roomId).emit('room:updated', room.getState());
      }
      
      io.emit('rooms:update', roomManager.getAllRooms());
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    
    // Remove from all rooms
    for (let [roomId, room] of roomManager.rooms) {
      if (room.removePlayer(socket.id)) {
        if (room.players.length === 0 && room.spectators.length === 0) {
          roomManager.deleteRoom(roomId);
        } else {
          io.to(roomId).emit('player:disconnected', {
            message: 'A player disconnected',
            state: room.getState(),
          });
        }
      }
    }
    
    players.delete(socket.id);
    io.emit('rooms:update', roomManager.getAllRooms());
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(\`🎮 Game server running on port \${PORT}\`);
});`,
        tips: [
          'Add room cleanup for empty rooms',
          'Implement reconnection logic',
          'Add anti-cheat validation',
          'Log game analytics',
        ],
        resources: [
          { title: 'Socket.io Rooms', url: 'https://socket.io/docs/v4/rooms/' },
        ],
      },
      {
        id: 'step-3',
        title: '3. React Game Client',
        duration: '60 min',
        content: `Build the game interface with React.

**UI Features:**
- Lobby system
- Game board
- Player info
- Game status
- Animations

**Implementation:**`,
        code: `// client/src/hooks/useGame.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3001';

export const useGame = () => {
  const [socket, setSocket] = useState(null);
  const [player, setPlayer] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    newSocket.on('player:registered', (playerData) => {
      setPlayer(playerData);
    });

    newSocket.on('room:created', (state) => {
      setGameState(state);
    });

    newSocket.on('room:updated', (state) => {
      setGameState(state);
    });

    newSocket.on('game:start', (state) => {
      setGameState(state);
    });

    newSocket.on('game:moved', ({ state }) => {
      setGameState(state);
    });

    newSocket.on('game:end', ({ state }) => {
      setGameState(state);
    });

    newSocket.on('game:reset', (state) => {
      setGameState(state);
    });

    newSocket.on('rooms:update', (roomsList) => {
      setRooms(roomsList);
    });

    newSocket.on('player:disconnected', ({ message, state }) => {
      setError(message);
      setGameState(state);
    });

    newSocket.on('error', (msg) => {
      setError(msg);
    });

    return () => newSocket.close();
  }, []);

  const setName = (name) => {
    socket?.emit('player:setName', name);
  };

  const createRoom = () => {
    socket?.emit('room:create');
  };

  const joinRoom = (roomId) => {
    socket?.emit('room:join', roomId);
  };

  const quickMatch = () => {
    socket?.emit('room:quickMatch');
  };

  const makeMove = (position) => {
    if (!gameState) return;
    socket?.emit('game:move', { roomId: gameState.id, position });
  };

  const resetGame = () => {
    if (!gameState) return;
    socket?.emit('game:reset', gameState.id);
  };

  const leaveRoom = () => {
    if (!gameState) return;
    socket?.emit('room:leave', gameState.id);
    setGameState(null);
  };

  const loadRooms = () => {
    socket?.emit('rooms:list');
  };

  return {
    player,
    gameState,
    rooms,
    error,
    setName,
    createRoom,
    joinRoom,
    quickMatch,
    makeMove,
    resetGame,
    leaveRoom,
    loadRooms,
  };
};

// client/src/components/Board.jsx
export default function Board({ board, onCellClick, winningLine, currentTurn, disabled }) {
  return (
    <div className="grid grid-cols-3 gap-2 w-80 h-80 mx-auto">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => onCellClick(index)}
          disabled={disabled || cell !== null}
          className={\`
            bg-gray-800 hover:bg-gray-700 rounded-lg text-6xl font-bold
            transition-all duration-200 transform hover:scale-105
            \${winningLine.includes(index) ? 'bg-green-600 animate-pulse' : ''}
            \${cell === 'X' ? 'text-blue-400' : 'text-red-400'}
            disabled:cursor-not-allowed disabled:hover:scale-100
          \`}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}

// client/src/components/Game.jsx
import Board from './Board';

export default function Game({ gameState, player, onMove, onReset, onLeave }) {
  if (!gameState) return null;

  const isMyTurn = () => {
    const myPlayer = gameState.players.find(p => p.id === player?.id);
    return myPlayer?.symbol === gameState.currentTurn;
  };

  const getStatusMessage = () => {
    if (gameState.status === 'waiting') {
      return '⏳ Waiting for opponent...';
    }
    
    if (gameState.status === 'finished') {
      if (gameState.winner === 'draw') {
        return '🤝 It\'s a draw!';
      }
      const winner = gameState.players.find(p => p.symbol === gameState.winner);
      return \`🏆 \${winner?.name} wins!\`;
    }

    const currentPlayer = gameState.players.find(p => p.symbol === gameState.currentTurn);
    return isMyTurn() 
      ? '🎯 Your turn!' 
      : \`⏳ \${currentPlayer?.name}'s turn\`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Tic-Tac-Toe</h1>
          <p className="text-xl text-gray-400">Room: {gameState.id.substr(0, 8)}</p>
        </div>

        {/* Players */}
        <div className="flex justify-between mb-8">
          {gameState.players.map((p, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 flex-1 mx-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{p.name}</span>
                <span className={\`text-3xl \${p.symbol === 'X' ? 'text-blue-400' : 'text-red-400'}\`}>
                  {p.symbol}
                </span>
              </div>
              {p.symbol === gameState.currentTurn && gameState.status === 'playing' && (
                <div className="mt-2 text-green-400 text-sm">● Active</div>
              )}
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="text-center mb-6 text-2xl font-semibold">
          {getStatusMessage()}
        </div>

        {/* Board */}
        <Board
          board={gameState.board}
          onCellClick={onMove}
          winningLine={gameState.winningLine}
          currentTurn={gameState.currentTurn}
          disabled={!isMyTurn() || gameState.status !== 'playing'}
        />

        {/* Controls */}
        <div className="flex gap-4 justify-center mt-8">
          {gameState.status === 'finished' && (
            <button
              onClick={onReset}
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold"
            >
              🔄 Play Again
            </button>
          )}
          <button
            onClick={onLeave}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold"
          >
            🚪 Leave Room
          </button>
        </div>

        {/* Spectators */}
        {gameState.spectatorCount > 0 && (
          <div className="text-center mt-4 text-gray-400">
            👥 {gameState.spectatorCount} spectator(s) watching
          </div>
        )}
      </div>
    </div>
  );
}

// client/src/components/Lobby.jsx
export default function Lobby({ player, rooms, onCreateRoom, onJoinRoom, onQuickMatch, onLoadRooms }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-2">🎮 Multiplayer Tic-Tac-Toe</h1>
        <p className="text-center text-gray-400 mb-8">
          Welcome, {player?.name}!
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={onQuickMatch}
            className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg text-xl font-semibold"
          >
            ⚡ Quick Match
          </button>
          <button
            onClick={onCreateRoom}
            className="bg-green-600 hover:bg-green-700 p-6 rounded-lg text-xl font-semibold"
          >
            ➕ Create Room
          </button>
        </div>

        {/* Room List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Available Rooms</h2>
            <button
              onClick={onLoadRooms}
              className="text-blue-400 hover:text-blue-300"
            >
              🔄 Refresh
            </button>
          </div>

          <div className="space-y-3">
            {rooms.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                No rooms available. Create one!
              </div>
            ) : (
              rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold">Room {room.id.substr(0, 8)}</div>
                    <div className="text-sm text-gray-400">
                      {room.players}/2 players • {room.status}
                      {room.spectators > 0 && \` • \${room.spectators} watching\`}
                    </div>
                  </div>
                  <button
                    onClick={() => onJoinRoom(room.id)}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
                  >
                    Join
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// client/src/App.jsx
import { useState, useEffect } from 'react';
import { useGame } from './hooks/useGame';
import Lobby from './components/Lobby';
import Game from './components/Game';

export default function App() {
  const [name, setName] = useState('');
  const [nameSet, setNameSet] = useState(false);
  
  const {
    player,
    gameState,
    rooms,
    error,
    setName: submitName,
    createRoom,
    joinRoom,
    quickMatch,
    makeMove,
    resetGame,
    leaveRoom,
    loadRooms,
  } = useGame();

  useEffect(() => {
    if (player) setNameSet(true);
  }, [player]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  if (!nameSet) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            className="w-full bg-gray-700 px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && name.trim()) {
                submitName(name);
              }
            }}
          />
          <button
            onClick={() => name.trim() && submitName(name)}
            disabled={!name.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 py-2 rounded font-semibold"
          >
            Start Playing
          </button>
        </div>
      </div>
    );
  }

  if (gameState) {
    return (
      <Game
        gameState={gameState}
        player={player}
        onMove={makeMove}
        onReset={resetGame}
        onLeave={leaveRoom}
      />
    );
  }

  return (
    <Lobby
      player={player}
      rooms={rooms}
      onCreateRoom={createRoom}
      onJoinRoom={joinRoom}
      onQuickMatch={quickMatch}
      onLoadRooms={loadRooms}
    />
  );
}`,
        tips: [
          'Add sound effects for moves',
          'Implement move history',
          'Add chat between players',
          'Show connection status',
        ],
        resources: [
          { title: 'React Game Development', url: 'https://react.dev/' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Deployment & Extensions',
        duration: '40 min',
        content: `Deploy the game and add advanced features.

**Extensions:**
- Different board sizes
- AI opponent
- Leaderboards
- Tournament mode

**Deployment:**`,
        code: `# Deploy to Render/Railway

# package.json (add to both client and server)
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}

# Deploy server to Railway
railway login
railway init
railway add
railway up

# Deploy client to Vercel
cd client
npm run build
vercel --prod

# Or use Docker
# Dockerfile (server)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["node", "src/server.js"]

# docker-compose.yml
version: '3.8'
services:
  server:
    build: ./server
    ports:
      - "3001:3001"
  
  client:
    build: ./client
    ports:
      - "5173:5173"
    depends_on:
      - server

# Advanced Features

// AI Opponent (Minimax Algorithm)
// server/src/game/AI.js
class AI {
  static getBestMove(board, symbol) {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = symbol;
        const score = this.minimax(board, 0, false, symbol);
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  }

  static minimax(board, depth, isMaximizing, symbol) {
    const opponent = symbol === 'X' ? 'O' : 'X';
    const result = GameLogic.checkWinner(board);

    if (result) {
      if (result.winner === symbol) return 10 - depth;
      if (result.winner === opponent) return depth - 10;
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = symbol;
          const score = this.minimax(board, depth + 1, false, symbol);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = opponent;
          const score = this.minimax(board, depth + 1, true, symbol);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }
}

// Leaderboard with MongoDB
npm install mongoose

// server/src/models/Player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  draws: { type: Number, default: 0 },
  rating: { type: Number, default: 1000 },
});

module.exports = mongoose.model('Player', playerSchema);

// Update game end to save stats
socket.on('game:end', async ({ winner, roomId }) => {
  const room = roomManager.getRoom(roomId);
  
  if (winner !== 'draw') {
    const winnerPlayer = await Player.findOneAndUpdate(
      { name: room.players.find(p => p.symbol === winner).name },
      { $inc: { wins: 1, rating: 25 } },
      { new: true, upsert: true }
    );

    const loser = room.players.find(p => p.symbol !== winner);
    await Player.findOneAndUpdate(
      { name: loser.name },
      { $inc: { losses: 1, rating: -15 } },
      { new: true, upsert: true }
    );
  } else {
    for (let player of room.players) {
      await Player.findOneAndUpdate(
        { name: player.name },
        { $inc: { draws: 1 } },
        { upsert: true }
      );
    }
  }
});

// Get leaderboard endpoint
app.get('/leaderboard', async (req, res) => {
  const players = await Player.find()
    .sort({ rating: -1 })
    .limit(10);
  res.json(players);
});

# Production Tips
- Add rate limiting
- Implement anti-cheat measures
- Use Redis for session storage in production
- Add monitoring (Sentry, LogRocket)
- Implement proper error handling
- Add HTTPS for secure WebSocket connections`,
        tips: [
          'Scale with Redis adapter for Socket.io',
          'Add matchmaking with ELO rating',
          'Implement replay system',
          'Add different game modes',
          'Mobile-responsive design',
        ],
        resources: [
          { title: 'Railway Docs', url: 'https://docs.railway.app/' },
          { title: 'Socket.io Scaling', url: 'https://socket.io/docs/v4/using-multiple-nodes/' },
          { title: 'Minimax Algorithm', url: 'https://en.wikipedia.org/wiki/Minimax' },
        ],
      },
    ],
  },
  {
    id: 'home-server',
    title: 'Self-Hosted Home Server',
    icon: '🖥️',
    difficulty: 'Advanced',
    duration: '6-8 hours',
    description: 'Build your own home server with Docker, running services like Nextcloud, Plex, Pi-hole, and more with reverse proxy and SSL.',
    tags: ['Docker', 'Linux', 'DevOps', 'Self-Hosting'],
    steps: [
      {
        id: 'step-1',
        title: '1. Server Setup - Ubuntu & Docker',
        duration: '60 min',
        content: `Set up a Linux server with Docker for self-hosting applications.

**Hardware Requirements:**
- Raspberry Pi 4 (4GB+) or old PC/laptop
- 32GB+ SD card or SSD
- Static IP address
- Ethernet connection recommended

**Software Stack:**
- Ubuntu Server 22.04 LTS
- Docker & Docker Compose
- Portainer (container management)
- Nginx Proxy Manager

**Installation:**`,
        code: `# 1. Install Ubuntu Server 22.04
# Download from: https://ubuntu.com/download/server
# Flash to SD/USB with Balena Etcher or Rufus

# 2. Initial Ubuntu Setup (via SSH)
ssh username@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Set static IP (optional but recommended)
sudo nano /etc/netplan/00-installer-config.yaml

# Add:
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:  # or your interface name
      dhcp4: no
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]

# Apply network config
sudo netplan apply

# 3. Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose
sudo apt install docker-compose -y

# Verify installation
docker --version
docker-compose --version

# 4. Create directory structure
mkdir -p ~/homeserver/{portainer,nginx-proxy,nextcloud,plex,pihole,jellyfin}
cd ~/homeserver

# 5. Install Portainer (Web UI for Docker)
docker volume create portainer_data

docker run -d \\
  --name=portainer \\
  --restart=always \\
  -p 9000:9000 \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v portainer_data:/data \\
  portainer/portainer-ce:latest

echo "✅ Portainer installed! Access at http://your-server-ip:9000"

# 6. Set up firewall
sudo apt install ufw -y
sudo ufw allow 22/tcp      # SSH
sudo ufw allow 80/tcp      # HTTP
sudo ufw allow 443/tcp     # HTTPS
sudo ufw allow 9000/tcp    # Portainer
sudo ufw enable

# 7. Create main docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  # Nginx Proxy Manager - Reverse Proxy with SSL
  nginx-proxy:
    image: 'jc21/nginx-proxy-manager:latest'
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - '80:80'      # HTTP
      - '81:81'      # Admin UI
      - '443:443'    # HTTPS
    volumes:
      - ./nginx-proxy/data:/data
      - ./nginx-proxy/letsencrypt:/etc/letsencrypt
    environment:
      DB_SQLITE_FILE: "/data/database.sqlite"

  # Watchtower - Auto-update containers
  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_SCHEDULE=0 0 4 * * *  # 4 AM daily

networks:
  default:
    name: homeserver
EOF

# Start base services
docker-compose up -d

echo "
🎉 Base server setup complete!

Next steps:
1. Access Portainer: http://your-server-ip:9000
2. Access Nginx Proxy Manager: http://your-server-ip:81
   Default credentials: admin@example.com / changeme
3. Configure your domain/subdomain DNS to point to your server
"`,
        tips: [
          'Use SSD instead of SD card for better performance',
          'Enable automatic security updates',
          'Document your setup for future reference',
          'Keep regular backups of configuration files',
        ],
        resources: [
          { title: 'Ubuntu Server Guide', url: 'https://ubuntu.com/server/docs' },
          { title: 'Docker Docs', url: 'https://docs.docker.com/' },
          { title: 'Portainer Docs', url: 'https://docs.portainer.io/' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Core Services - Cloud Storage & Media',
        duration: '90 min',
        content: `Deploy Nextcloud for file storage and Jellyfin for media streaming.

**Services:**
- Nextcloud (Dropbox alternative)
- Jellyfin (Plex alternative - fully open source)
- MariaDB (Database)

**Implementation:**`,
        code: `# Navigate to homeserver directory
cd ~/homeserver

# Create docker-compose for core services
cat > docker-compose-services.yml << 'EOF'
version: '3.8'

services:
  # MariaDB - Database for Nextcloud
  mariadb:
    image: mariadb:10
    container_name: mariadb
    restart: unless-stopped
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    volumes:
      - ./mariadb:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=super_secure_root_password_change_this
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=secure_nextcloud_password_change_this

  # Nextcloud - Self-hosted cloud storage
  nextcloud:
    image: nextcloud:latest
    container_name: nextcloud
    restart: unless-stopped
    ports:
      - 8080:80
    volumes:
      - ./nextcloud/html:/var/www/html
      - ./nextcloud/data:/var/www/html/data
    environment:
      - MYSQL_HOST=mariadb
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=secure_nextcloud_password_change_this
      - NEXTCLOUD_ADMIN_USER=admin
      - NEXTCLOUD_ADMIN_PASSWORD=admin_password_change_this
      - NEXTCLOUD_TRUSTED_DOMAINS=your-domain.com cloud.your-domain.com
      - OVERWRITEPROTOCOL=https
    depends_on:
      - mariadb

  # Jellyfin - Media streaming server
  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    ports:
      - 8096:8096
    volumes:
      - ./jellyfin/config:/config
      - ./jellyfin/cache:/cache
      - /path/to/your/movies:/media/movies:ro
      - /path/to/your/tv:/media/tv:ro
      - /path/to/your/music:/media/music:ro
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Berlin

  # Pi-hole - Network-wide ad blocking
  pihole:
    image: pihole/pihole:latest
    container_name: pihole
    restart: unless-stopped
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "8089:80/tcp"
    environment:
      TZ: 'Europe/Berlin'
      WEBPASSWORD: 'pihole_admin_password'
    volumes:
      - './pihole/etc-pihole:/etc/pihole'
      - './pihole/etc-dnsmasq.d:/etc/dnsmasq.d'
    cap_add:
      - NET_ADMIN
    dns:
      - 127.0.0.1
      - 1.1.1.1

  # Vaultwarden - Password manager (Bitwarden compatible)
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: unless-stopped
    ports:
      - 8081:80
    volumes:
      - ./vaultwarden:/data
    environment:
      - DOMAIN=https://vault.your-domain.com
      - SIGNUPS_ALLOWED=false  # Disable after first registration
      - ADMIN_TOKEN=generate_secure_token_here

  # Home Assistant - Smart home automation
  homeassistant:
    image: homeassistant/home-assistant:latest
    container_name: homeassistant
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./homeassistant:/config
      - /etc/localtime:/etc/localtime:ro
    privileged: true

networks:
  default:
    name: homeserver
    external: true
EOF

# Start all services
docker-compose -f docker-compose-services.yml up -d

# Wait for services to start
echo "Waiting for services to initialize..."
sleep 30

# Check status
docker ps

# Create media directories
sudo mkdir -p /srv/media/{movies,tv,music,photos}
sudo chown -R $USER:$USER /srv/media

# Nextcloud optimization
docker exec -u www-data nextcloud php occ db:add-missing-indices
docker exec -u www-data nextcloud php occ db:convert-filecache-bigint

echo "
✅ Core services installed!

Access your services:
- Nextcloud: http://your-server-ip:8080
- Jellyfin: http://your-server-ip:8096
- Pi-hole Admin: http://your-server-ip:8089/admin
- Vaultwarden: http://your-server-ip:8081
- Home Assistant: http://your-server-ip:8123

Next: Configure Nginx Proxy Manager for SSL and custom domains
"`,
        tips: [
          'Use external storage for media files',
          'Configure regular database backups',
          'Enable Nextcloud caching with Redis',
          'Set up automated media organization with Sonarr/Radarr',
        ],
        resources: [
          { title: 'Nextcloud Admin Manual', url: 'https://docs.nextcloud.com/server/latest/admin_manual/' },
          { title: 'Jellyfin Docs', url: 'https://jellyfin.org/docs/' },
          { title: 'Pi-hole Documentation', url: 'https://docs.pi-hole.net/' },
        ],
      },
      {
        id: 'step-3',
        title: '3. SSL & Domain Configuration',
        duration: '60 min',
        content: `Set up secure HTTPS access with Let's Encrypt and configure domains.

**Configuration:**
- Free SSL certificates
- Reverse proxy setup
- Subdomain routing
- Auto-renewal

**Implementation:**`,
        code: `# Prerequisites:
# 1. Own a domain name
# 2. Point DNS A records to your server's public IP:
#    - nextcloud.yourdomain.com → your-public-ip
#    - jellyfin.yourdomain.com → your-public-ip
#    - vault.yourdomain.com → your-public-ip
#    etc.

# Configure Router Port Forwarding:
# Forward these ports from router to your server:
# - Port 80 (HTTP) → Server IP:80
# - Port 443 (HTTPS) → Server IP:443

# Access Nginx Proxy Manager
# Go to: http://your-server-ip:81
# Login: admin@example.com / changeme
# Change password immediately!

# Add SSL Certificate (via NPM Web UI):
# 1. Go to "SSL Certificates" → "Add SSL Certificate"
# 2. Select "Let's Encrypt"
# 3. Add domains: *.yourdomain.com, yourdomain.com
# 4. Enter email address
# 5. Enable "Use a DNS Challenge"
# 6. Select your DNS provider (Cloudflare, etc.)
# 7. Enter API credentials
# 8. Save

# Add Proxy Hosts (via NPM Web UI):

# Nextcloud:
# Domain Names: cloud.yourdomain.com
# Forward Hostname/IP: nextcloud (container name)
# Forward Port: 80
# SSL Certificate: Select your wildcard cert
# Enable: Force SSL, HTTP/2, HSTS

# Jellyfin:
# Domain Names: media.yourdomain.com
# Forward Hostname/IP: jellyfin
# Forward Port: 8096
# SSL: Same as above

# Vaultwarden:
# Domain Names: vault.yourdomain.com
# Forward Hostname/IP: vaultwarden
# Forward Port: 80
# SSL: Same as above

# Alternatively: Configure via CLI with custom Nginx configs

# Create advanced config for Nextcloud
mkdir -p ~/homeserver/nginx-proxy/custom-configs

cat > ~/homeserver/nginx-proxy/custom-configs/nextcloud.conf << 'EOF'
# Nextcloud optimizations
client_max_body_size 10G;
client_body_timeout 300s;
fastcgi_buffers 64 4K;

location = /.well-known/carddav {
    return 301 \$scheme://\$host/remote.php/dav;
}

location = /.well-known/caldav {
    return 301 \$scheme://\$host/remote.php/dav;
}

location = /.well-known/webfinger {
    return 301 \$scheme://\$host/index.php/.well-known/webfinger;
}

location = /.well-known/nodeinfo {
    return 301 \$scheme://\$host/index.php/.well-known/nodeinfo;
}
EOF

# Update Nextcloud trusted domains
docker exec -u www-data nextcloud php occ config:system:set trusted_domains 0 --value=cloud.yourdomain.com
docker exec -u www-data nextcloud php occ config:system:set overwrite.cli.url --value=https://cloud.yourdomain.com
docker exec -u www-data nextcloud php occ config:system:set overwriteprotocol --value=https

# Test SSL certificate auto-renewal
docker exec nginx-proxy certbot renew --dry-run

# Set up DuckDNS for dynamic IP (if you don't have static IP)
cat > ~/homeserver/duckdns-update.sh << 'EOF'
#!/bin/bash
# Get DuckDNS token from duckdns.org
echo url="https://www.duckdns.org/update?domains=yourdomain&token=your-token&ip=" | curl -k -o ~/duckdns.log -K -
EOF

chmod +x ~/homeserver/duckdns-update.sh

# Add to crontab for auto-update every 5 minutes
(crontab -l 2>/dev/null; echo "*/5 * * * * ~/homeserver/duckdns-update.sh >/dev/null 2>&1") | crontab -

# Alternative: Cloudflare Dynamic DNS
cat > ~/homeserver/cloudflare-ddns.sh << 'EOF'
#!/bin/bash

# Cloudflare credentials
ZONE_ID="your_zone_id"
API_TOKEN="your_api_token"
RECORD_NAME="yourdomain.com"

# Get current public IP
PUBLIC_IP=\$(curl -s https://api.ipify.org)

# Get Cloudflare DNS record
RECORD_ID=\$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/\${ZONE_ID}/dns_records?name=\${RECORD_NAME}" \\
  -H "Authorization: Bearer \${API_TOKEN}" \\
  -H "Content-Type: application/json" | jq -r '.result[0].id')

# Update DNS record
curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/\${ZONE_ID}/dns_records/\${RECORD_ID}" \\
  -H "Authorization: Bearer \${API_TOKEN}" \\
  -H "Content-Type: application/json" \\
  --data "{\\"type\\":\\"A\\",\\"name\\":\\"@\\",\\"content\\":\\"\${PUBLIC_IP}\\",\\"proxied\\":true}"
EOF

chmod +x ~/homeserver/cloudflare-ddns.sh

# Monitor SSL expiry
cat > ~/homeserver/check-ssl.sh << 'EOF'
#!/bin/bash
DOMAINS=("cloud.yourdomain.com" "media.yourdomain.com" "vault.yourdomain.com")

for DOMAIN in "\${DOMAINS[@]}"; do
  EXPIRY=\$(echo | openssl s_client -servername \$DOMAIN -connect \$DOMAIN:443 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)
  echo "\$DOMAIN expires on: \$EXPIRY"
done
EOF

chmod +x ~/homeserver/check-ssl.sh

# Run weekly via cron
(crontab -l 2>/dev/null; echo "0 8 * * 0 ~/homeserver/check-ssl.sh | mail -s 'SSL Status' your@email.com") | crontab -

echo "
✅ SSL and domain configuration complete!

Your services are now accessible via:
- https://cloud.yourdomain.com
- https://media.yourdomain.com
- https://vault.yourdomain.com

SSL certificates will auto-renew via Let's Encrypt!
"`,
        tips: [
          'Use Cloudflare for additional DDoS protection',
          'Enable 2FA on Nginx Proxy Manager',
          'Set up monitoring with Uptime Kuma',
          'Test SSL configuration with ssllabs.com',
        ],
        resources: [
          { title: 'Nginx Proxy Manager', url: 'https://nginxproxymanager.com/' },
          { title: "Let's Encrypt", url: 'https://letsencrypt.org/' },
          { title: 'DuckDNS', url: 'https://www.duckdns.org/' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Backup, Monitoring & Maintenance',
        duration: '70 min',
        content: `Implement automated backups, monitoring, and maintenance procedures.

**Tools:**
- Duplicati (backups)
- Uptime Kuma (monitoring)
- Glances (system monitoring)
- Grafana + Prometheus (metrics)

**Implementation:**`,
        code: `# Add monitoring and backup services to docker-compose

cat > ~/homeserver/docker-compose-monitoring.yml << 'EOF'
version: '3.8'

services:
  # Uptime Kuma - Uptime monitoring
  uptime-kuma:
    image: louislam/uptime-kuma:latest
    container_name: uptime-kuma
    restart: unless-stopped
    ports:
      - 3001:3001
    volumes:
      - ./uptime-kuma:/app/data

  # Duplicati - Backup solution
  duplicati:
    image: linuxserver/duplicati:latest
    container_name: duplicati
    restart: unless-stopped
    ports:
      - 8200:8200
    volumes:
      - ./duplicati/config:/config
      - ./nextcloud/data:/source/nextcloud:ro
      - ./jellyfin:/source/jellyfin:ro
      - ./vaultwarden:/source/vaultwarden:ro
      - ./backups:/backups
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Berlin

  # Glances - System monitoring
  glances:
    image: nicolargo/glances:latest
    container_name: glances
    restart: unless-stopped
    ports:
      - 61208:61208
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    environment:
      - GLANCES_OPT=-w
    pid: host

  # Prometheus - Metrics collection
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    restart: unless-stopped
    ports:
      - 9090:9090
    volumes:
      - ./prometheus/config:/etc/prometheus
      - ./prometheus/data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'

  # Grafana - Metrics visualization
  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    restart: unless-stopped
    ports:
      - 3000:3000
    volumes:
      - ./grafana/data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin_password_change_this
      - GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource

networks:
  default:
    name: homeserver
    external: true
EOF

# Create Prometheus config
mkdir -p ~/homeserver/prometheus/config

cat > ~/homeserver/prometheus/config/prometheus.yml << 'EOF'
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'docker'
    static_configs:
      - targets: ['cadvisor:8080']
EOF

# Start monitoring services
docker-compose -f docker-compose-monitoring.yml up -d

# Configure Duplicati Backup (via Web UI at port 8200):
# 1. Add backup destination (Google Drive, AWS S3, local, etc.)
# 2. Select source folders (Nextcloud data, databases, configs)
# 3. Set encryption password
# 4. Schedule: Daily at 3 AM

# Automated backup script
cat > ~/homeserver/backup.sh << 'EOF'
#!/bin/bash

BACKUP_DIR="/srv/backups"
DATE=\$(date +%Y-%m-%d)

# Create backup directory
mkdir -p \$BACKUP_DIR/\$DATE

# Backup Docker volumes
echo "Backing up Docker volumes..."
docker run --rm \\
  -v homeserver_nextcloud_data:/source:ro \\
  -v \$BACKUP_DIR/\$DATE:/backup \\
  alpine tar czf /backup/nextcloud-\$DATE.tar.gz -C /source .

# Backup databases
echo "Backing up databases..."
docker exec mariadb mysqldump -u root -pROOT_PASSWORD --all-databases | gzip > \$BACKUP_DIR/\$DATE/mariadb-\$DATE.sql.gz

# Backup Docker Compose configs
echo "Backing up configurations..."
tar czf \$BACKUP_DIR/\$DATE/docker-configs-\$DATE.tar.gz ~/homeserver/*.yml

# Remove backups older than 30 days
find \$BACKUP_DIR -type d -mtime +30 -exec rm -rf {} \\;

# Upload to cloud (example with rclone)
# rclone copy \$BACKUP_DIR/\$DATE remote:backups/homeserver/\$DATE

echo "✅ Backup completed: \$BACKUP_DIR/\$DATE"
EOF

chmod +x ~/homeserver/backup.sh

# Add to crontab (daily at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * ~/homeserver/backup.sh >> ~/homeserver/backup.log 2>&1") | crontab -

# Monitoring script
cat > ~/homeserver/monitor.sh << 'EOF'
#!/bin/bash

# Check disk space
DISK_USAGE=\$(df -h / | awk 'NR==2 {print \$5}' | sed 's/%//')
if [ \$DISK_USAGE -gt 85 ]; then
  echo "⚠️ WARNING: Disk usage at \${DISK_USAGE}%"
fi

# Check container health
echo "🐳 Container Status:"
docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"

# Check memory usage
echo -e "\\n💾 Memory Usage:"
free -h

# Check CPU load
echo -e "\\n🔧 CPU Load:"
uptime

# Check failed services
echo -e "\\n❌ Failed Systemd Services:"
systemctl --failed

# Docker container logs (errors only)
echo -e "\\n📋 Recent Container Errors:"
for container in \$(docker ps --format "{{.Names}}"); do
  ERRORS=\$(docker logs --since 24h \$container 2>&1 | grep -i "error" | wc -l)
  if [ \$ERRORS -gt 0 ]; then
    echo "\$container: \$ERRORS errors in last 24h"
  fi
done
EOF

chmod +x ~/homeserver/monitor.sh

# Run monitoring hourly
(crontab -l 2>/dev/null; echo "0 * * * * ~/homeserver/monitor.sh >> ~/homeserver/monitor.log 2>&1") | crontab -

# Maintenance script
cat > ~/homeserver/maintenance.sh << 'EOF'
#!/bin/bash

echo "🧹 Running system maintenance..."

# Update packages
sudo apt update && sudo apt upgrade -y

# Docker cleanup
docker system prune -af --volumes
docker image prune -af

# Clear logs older than 7 days
sudo journalctl --vacuum-time=7d

# Optimize databases
docker exec mariadb mysqlcheck -u root -pROOT_PASSWORD --auto-repair --optimize --all-databases

# Nextcloud maintenance
docker exec -u www-data nextcloud php occ maintenance:mode --on
docker exec -u www-data nextcloud php occ db:add-missing-indices
docker exec -u www-data nextcloud php occ db:convert-filecache-bigint
docker exec -u www-data nextcloud php occ files:scan --all
docker exec -u www-data nextcloud php occ maintenance:mode --off

echo "✅ Maintenance complete!"
EOF

chmod +x ~/homeserver/maintenance.sh

# Run weekly maintenance (Sunday at 4 AM)
(crontab -l 2>/dev/null; echo "0 4 * * 0 ~/homeserver/maintenance.sh >> ~/homeserver/maintenance.log 2>&1") | crontab -

# Email notifications setup (optional)
sudo apt install mailutils ssmtp -y

# Configure ssmtp for Gmail (or other SMTP)
sudo cat > /etc/ssmtp/ssmtp.conf << 'EOF'
root=your-email@gmail.com
mailhub=smtp.gmail.com:587
AuthUser=your-email@gmail.com
AuthPass=your-app-password
UseSTARTTLS=YES
EOF

# Test email
echo "Test from home server" | mail -s "Home Server Test" your-email@gmail.com

echo "
✅ Monitoring and backup setup complete!

Access your monitoring tools:
- Uptime Kuma: http://your-server-ip:3001
- Duplicati: http://your-server-ip:8200
- Glances: http://your-server-ip:61208
- Grafana: http://your-server-ip:3000
- Prometheus: http://your-server-ip:9090

Automated tasks:
- Backups: Daily at 2 AM
- Monitoring: Hourly
- Maintenance: Weekly (Sunday 4 AM)
- SSL renewal: Automatic via Certbot
"`,
        tips: [
          'Test restore process regularly',
          'Set up off-site backups',
          'Monitor disk space and set alerts',
          'Keep a maintenance log',
          'Document recovery procedures',
        ],
        resources: [
          { title: 'Duplicati Manual', url: 'https://docs.duplicati.com/' },
          { title: 'Prometheus Docs', url: 'https://prometheus.io/docs/' },
          { title: 'Grafana Tutorials', url: 'https://grafana.com/tutorials/' },
          { title: 'Uptime Kuma', url: 'https://github.com/louislam/uptime-kuma' },
        ],
      },
    ],
  },
  {
    id: 'cross-platform-app',
    title: 'Cross-Platform Todo App',
    icon: '📱',
    difficulty: 'Intermediate',
    duration: '4-5 hours',
    description: 'Build a todo app that works on iOS, Android, Web, Windows, macOS, and Linux from a single React Native codebase.',
    tags: ['React Native', 'Cross-Platform', 'Mobile', 'Desktop'],
    steps: [
      {
        id: 'step-1',
        title: '1. Setup React Native with Web & Desktop',
        duration: '50 min',
        content: `Create a truly cross-platform app using React Native for mobile, web, Windows, macOS, and Linux.

**Platforms:**
- iOS & Android (React Native)
- Web (React Native Web)
- Windows, macOS, Linux (React Native Windows/macOS + Electron)

**Setup:**`,
        code: `# Create React Native project
npx react-native init CrossPlatformTodo --template react-native-template-typescript
cd CrossPlatformTodo

# Install dependencies for all platforms
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install @react-native-async-storage/async-storage
npm install react-native-vector-icons

# For Web support
npm install react-native-web react-dom
npm install -D @vitejs/plugin-react vite

# For Desktop (optional - Electron)
npm install -D electron electron-builder

# Project Structure
CrossPlatformTodo/
├── src/
│   ├── components/
│   │   ├── TodoItem.tsx
│   │   ├── AddTodoInput.tsx
│   │   └── TodoList.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── hooks/
│   │   └── useTodos.ts
│   ├── storage/
│   │   └── StorageService.ts
│   ├── types/
│   │   └── Todo.ts
│   └── App.tsx
├── web/
│   ├── index.html
│   └── main.tsx
├── electron/
│   └── main.js
├── android/
├── ios/
├── package.json
├── vite.config.ts
└── electron-builder.json

# Create types
mkdir -p src/types
cat > src/types/Todo.ts << 'EOF'
export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
  category?: string;
}

export type TodoFilter = 'all' | 'active' | 'completed';
EOF

# Create Storage Service (works on all platforms)
mkdir -p src/storage
cat > src/storage/StorageService.ts << 'EOF'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { Todo } from '../types/Todo';

const STORAGE_KEY = '@CrossPlatformTodo:todos';

class StorageService {
  async saveTodos(todos: Todo[]): Promise<void> {
    try {
      const jsonValue = JSON.stringify(todos);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Error saving todos:', error);
      throw error;
    }
  }

  async loadTodos(): Promise<Todo[]> {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        const todos = JSON.parse(jsonValue);
        // Parse dates
        return todos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
      }
      return [];
    } catch (error) {
      console.error('Error loading todos:', error);
      return [];
    }
  }

  async clearAllTodos(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing todos:', error);
      throw error;
    }
  }

  // Export/Import functionality
  async exportTodos(): Promise<string> {
    const todos = await this.loadTodos();
    return JSON.stringify(todos, null, 2);
  }

  async importTodos(jsonString: string): Promise<void> {
    try {
      const todos = JSON.parse(jsonString);
      await this.saveTodos(todos);
    } catch (error) {
      console.error('Error importing todos:', error);
      throw error;
    }
  }

  // Platform-specific features
  getPlatformInfo() {
    return {
      os: Platform.OS,
      version: Platform.Version,
      isWeb: Platform.OS === 'web',
      isMobile: Platform.OS === 'ios' || Platform.OS === 'android',
      isDesktop: Platform.OS === 'windows' || Platform.OS === 'macos',
    };
  }

  // Advanced: Platform-specific native features
  async requestNativeFeatures() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Request notifications permission
      try {
        const { PermissionsAndroid, Platform } = require('react-native');
        
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            {
              title: 'Notification Permission',
              message: 'Allow notifications for todo reminders',
              buttonPositive: 'OK',
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          // iOS notification permission
          const PushNotificationIOS = require('@react-native-community/push-notification-ios');
          const permissions = await PushNotificationIOS.requestPermissions();
          return permissions.alert;
        }
      } catch (error) {
        console.error('Permission request failed:', error);
        return false;
      }
    }
    
    if (Platform.OS === 'web') {
      // Web Push Notifications API
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
      }
    }
    
    return false;
  }

  // Platform-specific file system access
  async exportToFile(filename, content) {
    if (Platform.OS === 'web') {
      // Web: Download as file
      const blob = new Blob([content], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mobile: Share via native share dialog
      const { Share } = require('react-native');
      const RNFS = require('react-native-fs');
      
      const path = RNFS.DocumentDirectoryPath + '/' + filename;
      await RNFS.writeFile(path, content, 'utf8');
      
      await Share.share({
        title: 'Export Todos',
        url: 'file://' + path,
      });
    } else {
      // Desktop (Electron): Use native file dialog
      if (window.electron) {
        await window.electron.saveFile(filename, content);
      }
    }
  }
}

export default new StorageService();

// For Electron: Add to preload.js
// const { contextBridge, ipcRenderer } = require('electron');
// contextBridge.exposeInMainWorld('electron', {
//   saveFile: (filename, content) => ipcRenderer.invoke('save-file', filename, content)
// });

// For Electron: Add to main.js
// const { dialog } = require('electron');
// ipcMain.handle('save-file', async (event, filename, content) => {
//   const { filePath } = await dialog.showSaveDialog({ defaultPath: filename });
//   if (filePath) {
//     await fs.promises.writeFile(filePath, content);
//   }
// });
EOF

# Web Configuration
mkdir -p web
cat > web/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Cross-platform Todo App">
  <title>Cross-Platform Todo</title>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    #root {
      height: 100vh;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/main.tsx"></script>
</body>
</html>
EOF

cat > web/main.tsx << 'EOF'
import { AppRegistry } from 'react-native';
import App from '../src/App';

AppRegistry.registerComponent('CrossPlatformTodo', () => App);

AppRegistry.runApplication('CrossPlatformTodo', {
  rootTag: document.getElementById('root'),
});
EOF

# Vite config for web
cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  optimizeDeps: {
    include: ['react-native-web'],
  },
});
EOF

# Add web scripts to package.json
npm pkg set scripts.web="vite"
npm pkg set scripts.web:build="vite build"

# Electron main process (optional)
mkdir -p electron
cat > electron/main.js << 'EOF'
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // In development
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
EOF

# Electron builder config
cat > electron-builder.json << 'EOF'
{
  "appId": "com.crossplatformtodo.app",
  "productName": "Cross-Platform Todo",
  "directories": {
    "output": "dist-electron"
  },
  "files": [
    "dist/**/*",
    "electron/**/*"
  ],
  "mac": {
    "target": ["dmg", "zip"],
    "category": "public.app-category.productivity"
  },
  "win": {
    "target": ["nsis", "portable"]
  },
  "linux": {
    "target": ["AppImage", "deb"],
    "category": "Utility"
  }
}
EOF

# Add electron scripts
npm pkg set scripts.electron:dev="NODE_ENV=development electron electron/main.js"
npm pkg set scripts.electron:build="npm run web:build && electron-builder"

echo "
✅ Cross-platform setup complete!

Run on different platforms:
- iOS: npm run ios
- Android: npm run android
- Web: npm run web
- Desktop: npm run electron:dev

Build for production:
- Web: npm run web:build
- Desktop: npm run electron:build
"`,
        tips: [
          'Use Platform.select() for platform-specific code',
          'Test on all target platforms regularly',
          'Use React Native Web polyfills carefully',
          'Keep bundle size small for web',
        ],
        resources: [
          { title: 'React Native Web', url: 'https://necolas.github.io/react-native-web/' },
          { title: 'Electron', url: 'https://www.electronjs.org/' },
        ],
      },
      {
        id: 'step-2',
        title: '2. Build Core Todo Functionality',
        duration: '70 min',
        content: `Implement the todo management logic that works across all platforms.

**Features:**
- Add/edit/delete todos
- Mark complete
- Categories & priorities
- Filtering & sorting
- Local storage

**Implementation:**`,
        code: `// src/hooks/useTodos.ts
import { useState, useEffect, useCallback } from 'react';
import { Todo, TodoFilter } from '../types/Todo';
import StorageService from '../storage/StorageService';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [loading, setLoading] = useState(true);

  // Load todos on mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const loadedTodos = await StorageService.loadTodos();
      setTodos(loadedTodos);
    } catch (error) {
      console.error('Failed to load todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveTodos = async (newTodos: Todo[]) => {
    try {
      await StorageService.saveTodos(newTodos);
      setTodos(newTodos);
    } catch (error) {
      console.error('Failed to save todos:', error);
    }
  };

  const addTodo = useCallback((title: string, priority: Todo['priority'] = 'medium') => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date(),
      priority,
    };
    saveTodos([...todos, newTodo]);
  }, [todos]);

  const toggleTodo = useCallback((id: string) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updated);
  }, [todos]);

  const deleteTodo = useCallback((id: string) => {
    saveTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    saveTodos(updated);
  }, [todos]);

  const clearCompleted = useCallback(() => {
    saveTodos(todos.filter(todo => !todo.completed));
  }, [todos]);

  // Filtering
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length,
  };

  return {
    todos: filteredTodos,
    allTodos: todos,
    filter,
    loading,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
    reload: loadTodos,
  };
};

// src/components/TodoItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Todo } from '../types/Todo';

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onEdit }) => {
  const getPriorityColor = () => {
    switch (todo.priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onToggle}
        style={[styles.checkbox, todo.completed && styles.checkboxCompleted]}
      >
        {todo.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.title, todo.completed && styles.titleCompleted]}>
          {todo.title}
        </Text>
        {todo.description && (
          <Text style={styles.description}>{todo.description}</Text>
        )}
        <View style={styles.footer}>
          <View style={[styles.priority, { backgroundColor: getPriorityColor() }]}>
            <Text style={styles.priorityText}>{todo.priority}</Text>
          </View>
          <Text style={styles.date}>
            {new Date(todo.createdAt).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
          <Text style={styles.actionText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
          <Text style={styles.actionText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    ...Platform.select({
      web: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      },
    }),
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxCompleted: {
    backgroundColor: '#3b82f6',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priority: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  priorityText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  date: {
    fontSize: 12,
    color: '#9ca3af',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
  },
  actionText: {
    fontSize: 18,
  },
});

// src/components/AddTodoInput.tsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Todo } from '../types/Todo';

interface Props {
  onAdd: (title: string, priority: Todo['priority']) => void;
}

export const AddTodoInput: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title.trim(), priority);
      setTitle('');
      setPriority('medium');
    }
  };

  const priorities: Todo['priority'][] = ['low', 'medium', 'high'];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Add a new todo..."
        placeholderTextColor="#9ca3af"
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      
      <View style={styles.priorityContainer}>
        {priorities.map(p => (
          <TouchableOpacity
            key={p}
            onPress={() => setPriority(p)}
            style={[
              styles.priorityButton,
              priority === p && styles.priorityButtonActive,
            ]}
          >
            <Text style={[
              styles.priorityButtonText,
              priority === p && styles.priorityButtonTextActive,
            ]}>
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={handleAdd}
        style={styles.addButton}
        disabled={!title.trim()}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    ...Platform.select({
      web: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      },
    }),
  },
  input: {
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 12,
    color: '#1f2937',
  },
  priorityContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  priorityButton: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  priorityButtonActive: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  priorityButtonText: {
    fontSize: 14,
    color: '#6b7280',
    textTransform: 'capitalize',
  },
  priorityButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});`,
        tips: [
          'Use React.memo for performance',
          'Implement optimistic updates',
          'Add undo functionality',
          'Support keyboard shortcuts on web/desktop',
        ],
        resources: [
          { title: 'React Native Performance', url: 'https://reactnative.dev/docs/performance' },
        ],
      },
      {
        id: 'step-3',
        title: '3. Complete App & Platform Optimization',
        duration: '60 min',
        content: `Build the main app screen and optimize for each platform.

**Platform Features:**
- Mobile: Gestures, haptic feedback
- Web: Keyboard shortcuts, PWA
- Desktop: System tray, notifications

**Implementation:**`,
        code: `// src/App.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { TodoItem } from './components/TodoItem';
import { AddTodoInput } from './components/AddTodoInput';
import { useTodos } from './hooks/useTodos';
import { TodoFilter } from './types/Todo';

export default function App() {
  const {
    todos,
    filter,
    stats,
    loading,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
  } = useTodos();

  const filters: TodoFilter[] = ['all', 'active', 'completed'];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📝 Cross-Platform Todo</Text>
        <Text style={styles.subtitle}>
          {Platform.OS} • {stats.active} active
        </Text>
      </View>

      {/* Add Todo */}
      <View style={styles.content}>
        <AddTodoInput onAdd={addTodo} />

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          {filters.map(f => (
            <TouchableOpacity
              key={f}
              onPress={() => setFilter(f)}
              style={[styles.filterTab, filter === f && styles.filterTabActive]}
            >
              <Text style={[
                styles.filterText,
                filter === f && styles.filterTextActive,
              ]}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f === 'all' && \` (\${stats.total})\`}
                {f === 'active' && \` (\${stats.active})\`}
                {f === 'completed' && \` (\${stats.completed})\`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Todo List */}
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggle={() => toggleTodo(item.id)}
              onDelete={() => deleteTodo(item.id)}
              onEdit={() => {
                // Implement edit modal
                console.log('Edit todo:', item.id);
              }}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {filter === 'all'
                  ? 'No todos yet. Add one above!'
                  : \`No \${filter} todos\`}
              </Text>
            </View>
          }
          contentContainerStyle={styles.listContent}
        />

        {/* Footer Actions */}
        {stats.completed > 0 && (
          <TouchableOpacity
            onPress={clearCompleted}
            style={styles.clearButton}
          >
            <Text style={styles.clearButtonText}>
              Clear Completed ({stats.completed})
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6b7280',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textTransform: 'capitalize',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterTab: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  filterTabActive: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  filterText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
  clearButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

// Platform-specific optimizations

// For Web: Add keyboard shortcuts
// src/hooks/useKeyboardShortcuts.ts (Web only)
import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useKeyboardShortcuts = (handlers: {
  onNew?: () => void;
  onToggleFilter?: () => void;
}) => {
  useEffect(() => {
    if (Platform.OS !== 'web') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + N: New todo
      if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        handlers.onNew?.();
      }

      // Ctrl/Cmd + F: Toggle filter
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        handlers.onToggleFilter?.();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handlers]);
};

// For Mobile: Add swipe to delete
// Using react-native-gesture-handler
npm install react-native-gesture-handler

// src/components/SwipeableTodoItem.tsx
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { TodoItem } from './TodoItem';

export const SwipeableTodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const renderRightActions = () => (
    <View style={{ backgroundColor: '#ef4444', justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Delete</Text>
    </View>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={onDelete}
    >
      <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
    </Swipeable>
  );
};

// For Desktop: System notifications
// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendNotification: (title, body) => {
    ipcRenderer.send('show-notification', { title, body });
  },
});

// electron/main.js
const { Notification } = require('electron');

ipcMain.on('show-notification', (event, { title, body }) => {
  new Notification({ title, body }).show();
});

echo "
✅ Cross-platform app complete!

Features implemented:
✓ Works on iOS, Android, Web, Windows, macOS, Linux
✓ Persistent local storage
✓ Priority levels and filtering
✓ Platform-specific optimizations
✓ Modern UI with proper styling

Run the app:
- Mobile: npm run ios / npm run android
- Web: npm run web
- Desktop: npm run electron:dev
"`,
        tips: [
          'Use Platform.select() for conditional rendering',
          'Test responsiveness on all screen sizes',
          'Optimize images with platform-specific formats',
          'Use feature detection instead of platform detection',
        ],
        resources: [
          { title: 'React Native Docs', url: 'https://reactnative.dev/docs/platform-specific-code' },
        ],
      },
      {
        id: 'step-4',
        title: '4. Distribution & Deployment',
        duration: '50 min',
        content: `Build and deploy the app to all platforms.

**Distribution:**
- iOS: App Store
- Android: Google Play
- Web: Vercel/Netlify
- Desktop: GitHub Releases

**Implementation:**`,
        code: `# iOS Deployment
cd ios
pod install
cd ..

# Build for App Store
npx react-native run-ios --configuration Release

# Open in Xcode for signing and upload
open ios/CrossPlatformTodo.xcworkspace

# Android Deployment
# Generate signing key
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# android/gradle.properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=***
MYAPP_RELEASE_KEY_PASSWORD=***

# android/app/build.gradle
android {
  signingConfigs {
    release {
      if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
        storeFile file(MYAPP_RELEASE_STORE_FILE)
        storePassword MYAPP_RELEASE_STORE_PASSWORD
        keyAlias MYAPP_RELEASE_KEY_ALIAS
        keyPassword MYAPP_RELEASE_KEY_PASSWORD
      }
    }
  }
  buildTypes {
    release {
      signingConfig signingConfigs.release
      minifyEnabled true
      proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
  }
}

# Build APK/AAB
cd android
./gradlew bundleRelease  # For Play Store (AAB)
./gradlew assembleRelease  # For direct distribution (APK)

# Output: android/app/build/outputs/bundle/release/app-release.aab

# Web Deployment to Vercel
npm run web:build

# vercel.json
{
  "buildCommand": "npm run web:build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist

# Desktop - Build for all platforms
npm run electron:build

# This creates installers for:
# - Windows: dist-electron/Cross-Platform Todo Setup.exe
# - macOS: dist-electron/Cross-Platform Todo.dmg
# - Linux: dist-electron/Cross-Platform Todo.AppImage

# Publish to GitHub Releases
# .github/workflows/release.yml
name: Build and Release

on:
  push:
    tags:
      - 'v*'

jobs:
  build-web:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run web:build
      - uses: actions/upload-artifact@v3
        with:
          name: web-build
          path: dist/

  build-desktop:
    strategy:
      matrix:
        os: [macos-latest, ubuntu-latest, windows-latest]
    runs-on: \${{ matrix.os }}
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run electron:build
      - uses: actions/upload-artifact@v3
        with:
          name: desktop-\${{ matrix.os }}
          path: dist-electron/

  release:
    needs: [build-web, build-desktop]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v3
      - uses: softprops/action-gh-release@v1
        with:
          files: |
            desktop-macos-latest/**/*
            desktop-ubuntu-latest/**/*
            desktop-windows-latest/**/*
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

# PWA Configuration for Web
# public/manifest.json
{
  "name": "Cross-Platform Todo",
  "short_name": "Todo",
  "description": "A cross-platform todo application",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f3f4f6",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

# Register Service Worker
// web/service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.js',
        '/icon-192.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

# App Store Metadata
# ios/fastlane/metadata/en-US/
# - name.txt: Cross-Platform Todo
# - subtitle.txt: Universal Todo App
# - description.txt: A beautiful, cross-platform todo application...
# - keywords.txt: todo,productivity,tasks,cross-platform

# Google Play Metadata
# android/fastlane/metadata/android/en-US/
# Similar structure to iOS

# Update package.json with version
npm version 1.0.0

# Create Git tag and push
git tag v1.0.0
git push origin v1.0.0

# This triggers GitHub Actions to build and release

echo "
✅ Distribution setup complete!

Deployment targets:
✓ iOS App Store
✓ Google Play Store
✓ Web (PWA) - Vercel/Netlify
✓ Desktop - Windows, macOS, Linux via GitHub Releases

Next steps:
1. Test on real devices
2. Submit to app stores
3. Set up analytics
4. Plan updates and feature releases
"`,
        tips: [
          'Use Fastlane for automated deployment',
          'Test on real devices before release',
          'Set up crash reporting (Sentry)',
          'Implement feature flags for gradual rollout',
          'Monitor app performance across platforms',
        ],
        resources: [
          { title: 'React Native Deployment', url: 'https://reactnative.dev/docs/signed-apk-android' },
          { title: 'Electron Builder', url: 'https://www.electron.build/' },
          { title: 'Fastlane', url: 'https://fastlane.tools/' },
          { title: 'GitHub Actions', url: 'https://docs.github.com/actions' },
        ],
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
