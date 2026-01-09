// How-To Guides - Step-by-step tutorials for real-world projects
export const howToGuides = {
  id: 'howto',
  name: 'How-To Guides',
  icon: '🎯',
  color: '#F59E0B',
  description: 'Step-by-step guides for deployment, monetization, and real-world projects',
  categories: {
    webProjects: {
      name: 'Web Development',
      items: [
        {
          title: 'Deploy Website with Vercel',
          code: `# Complete Guide: VS Code → GitHub → Vercel → Custom Domain

## 1. Create Project in VS Code
mkdir my-website
cd my-website
npm create vite@latest . -- --template react
npm install

## 2. Initialize Git Repository
git init
git add .
git commit -m "Initial commit"

## 3. Create GitHub Repository
# Go to github.com → New repository
# Name: my-website
# Don't initialize with README

git remote add origin https://github.com/username/my-website.git
git branch -M main
git push -u origin main

## 4. Deploy to Vercel
# Option A: Vercel CLI
npm i -g vercel
vercel login
vercel

# Option B: Web Interface
# 1. Go to vercel.com
# 2. Sign in with GitHub
# 3. Import repository: my-website
# 4. Configure:
#    - Framework Preset: Vite
#    - Build Command: npm run build
#    - Output Directory: dist
# 5. Click "Deploy"

## 5. Add Custom Domain
# Vercel Dashboard:
# 1. Project → Settings → Domains
# 2. Add domain: www.yoursite.com
# 3. Update DNS records at registrar:
#    - Type: CNAME
#    - Name: www
#    - Value: cname.vercel-dns.com
# 4. Wait for DNS propagation (up to 24h)

## 6. Environment Variables
# Vercel Dashboard → Settings → Environment Variables
VITE_API_KEY=your_key_here
VITE_API_URL=https://api.example.com

## 7. Automatic Deployments
# Every git push to main = new deployment!
git add .
git commit -m "Update homepage"
git push

# Preview deployments for PRs
git checkout -b feature
git push -u origin feature
# Create PR on GitHub → Vercel creates preview URL`,
          description: 'Complete deployment workflow from VS Code to production',
          usage: 'From local development to live website with custom domain',
          technologies: ['VS Code', 'GitHub', 'Vercel', 'DNS', 'React', 'Vite'],
          bestPractices: [
            'Use environment variables for secrets',
            'Test locally before pushing',
            'Use branches for features',
            'Enable HTTPS (automatic on Vercel)',
            'Set up custom 404 page'
          ],
          relatedTopics: ['Git', 'CI/CD', 'DNS Management', 'React'],
          estimatedTime: '30-60 minutes'
        },
        {
          title: 'Next.js Blog with MDX',
          code: `# Create a blog with Next.js + MDX + Tailwind

## 1. Create Project
npx create-next-app@latest my-blog --typescript --tailwind --app
cd my-blog

## 2. Install MDX
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx

## 3. Configure next.config.js
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({})
export default withMDX(nextConfig)

## 4. Create Blog Post Structure
mkdir -p app/blog
mkdir -p content/posts

## 5. Create First Blog Post
# content/posts/first-post.mdx
---
title: "My First Post"
date: "2024-01-15"
author: "Your Name"
excerpt: "This is my first blog post"
---

# Hello World

This is my **first** blog post written in MDX!

\`\`\`javascript
console.log("Hello from code block!");
\`\`\`

## 6. Blog Listing Page
# app/blog/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const filenames = fs.readdirSync(postsDirectory)
  
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug: filename.replace('.mdx', ''),
      ...data
    }
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={\`/blog/\${post.slug}\`}>
          <article className="mb-8 p-6 border rounded-lg hover:shadow-lg">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </article>
        </Link>
      ))}
    </div>
  )
}

## 7. Deploy
git init
git add .
git commit -m "Initial blog"
git push

# Vercel will auto-detect Next.js!`,
          description: 'Build a blog with MDX content',
          usage: 'Write blog posts in Markdown with React components',
          technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'TypeScript'],
          estimatedTime: '2-3 hours'
        },
        {
          title: 'Portfolio with GitHub Pages',
          code: `# Free Portfolio Hosting with GitHub Pages

## 1. Create React Portfolio
npx create-react-app portfolio
cd portfolio

## 2. Install gh-pages
npm install gh-pages --save-dev

## 3. Update package.json
{
  "name": "portfolio",
  "homepage": "https://username.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}

## 4. Create Portfolio Components
# src/App.js
function App() {
  return (
    <div className="App">
      <header>
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
      </header>
      
      <section id="about">
        <h2>About Me</h2>
        <p>I build amazing web applications...</p>
      </section>
      
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <ProjectCard 
            title="E-commerce Site"
            tech={["React", "Node.js", "MongoDB"]}
            link="https://github.com/username/ecommerce"
          />
        </div>
      </section>
      
      <section id="contact">
        <h2>Contact</h2>
        <a href="mailto:john@example.com">Email</a>
        <a href="https://github.com/username">GitHub</a>
        <a href="https://linkedin.com/in/username">LinkedIn</a>
      </section>
    </div>
  )
}

## 5. Deploy to GitHub Pages
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

npm run deploy

## 6. Enable GitHub Pages
# GitHub → Repository → Settings → Pages
# Source: gh-pages branch
# Your site is live at: https://username.github.io/portfolio

## 7. Custom Domain (Optional)
# Add CNAME file in public folder
echo "www.yoursite.com" > public/CNAME

# Update DNS at registrar:
# Type: CNAME
# Name: www
# Value: username.github.io`,
          description: 'Free portfolio hosting with GitHub Pages',
          usage: 'Showcase your projects with optional custom domain',
          technologies: ['React', 'GitHub Pages', 'DNS'],
          estimatedTime: '1-2 hours'
        }
      ]
    },
    monetization: {
      name: 'App Monetization',
      items: [
        {
          title: 'In-App Purchases - iOS Setup',
          code: `# Complete Guide: In-App Purchases in React Native

## 1. Install Dependencies
npm install react-native-iap

# iOS specific
cd ios && pod install && cd ..

## 2. Configure App Store Connect
# 1. Go to App Store Connect
# 2. My Apps → Your App → Features → In-App Purchases
# 3. Click "+" to create new IAP
# 4. Choose type:
#    - Consumable: Credits, coins (can be purchased multiple times)
#    - Non-Consumable: Remove ads, premium features (one-time)
#    - Auto-Renewable: Monthly/yearly subscriptions
# 5. Fill in details:
#    - Product ID: com.yourapp.premium (must be unique)
#    - Price: Select price tier
#    - Localization: Add title and description

## 3. Add IAP Capability in Xcode
# Open ios/YourApp.xcworkspace
# Target → Signing & Capabilities → "+ Capability" → In-App Purchase

## 4. Implement IAP in React Native
// src/services/IAPService.js
import RNIap, {
  purchaseErrorListener,
  purchaseUpdatedListener,
  type ProductPurchase,
  type PurchaseError
} from 'react-native-iap';

// Define your product IDs
const productIds = [
  'com.yourapp.premium',
  'com.yourapp.coins_100',
  'com.yourapp.subscription_monthly'
];

class IAPService {
  purchaseUpdateSubscription = null;
  purchaseErrorSubscription = null;

  async initialize() {
    try {
      // Connect to store
      await RNIap.initConnection();
      console.log('✅ IAP initialized');

      // Get available products
      const products = await RNIap.getProducts({ skus: productIds });
      console.log('📦 Available products:', products);

      // Set up listeners
      this.purchaseUpdateSubscription = purchaseUpdatedListener(
        this.handlePurchaseUpdate
      );

      this.purchaseErrorSubscription = purchaseErrorListener(
        this.handlePurchaseError
      );

      return products;
    } catch (error) {
      console.error('❌ IAP init error:', error);
      throw error;
    }
  }

  handlePurchaseUpdate = async (purchase: ProductPurchase) => {
    console.log('🎉 Purchase successful:', purchase);
    
    const receipt = purchase.transactionReceipt;
    
    if (receipt) {
      try {
        // Verify purchase on your backend (IMPORTANT for security!)
        await this.verifyPurchaseOnBackend(receipt, purchase.productId);

        // Grant access to purchased content
        await this.unlockPremiumFeature(purchase.productId);

        // Acknowledge/consume purchase (required!)
        if (Platform.OS === 'ios') {
          await RNIap.finishTransaction({ purchase });
        } else {
          // Android: Acknowledge for non-consumables, consume for consumables
          if (purchase.productId.includes('coins')) {
            await RNIap.consumePurchase(purchase.purchaseToken);
          } else {
            await RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken);
          }
        }

        console.log('✅ Purchase finalized');
      } catch (error) {
        console.error('❌ Purchase verification failed:', error);
      }
    }
  };

  async verifyPurchaseOnBackend(receipt, productId) {
    // CRITICAL: Always verify purchases on your backend!
    const response = await fetch('https://your-api.com/verify-purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ receipt, productId, platform: Platform.OS })
    });

    const result = await response.json();
    if (!result.valid) {
      throw new Error('Invalid purchase');
    }
    return result;
  }

  async purchaseProduct(productId) {
    try {
      await RNIap.requestPurchase({ sku: productId });
    } catch (error) {
      console.error('❌ Purchase request failed:', error);
      throw error;
    }
  }

  async restorePurchases() {
    try {
      const purchases = await RNIap.getAvailablePurchases();
      console.log('📦 Restored purchases:', purchases);

      for (const purchase of purchases) {
        await this.unlockPremiumFeature(purchase.productId);
      }

      return purchases.length > 0;
    } catch (error) {
      console.error('❌ Restore failed:', error);
      return false;
    }
  }
}

export default new IAPService();`,
          description: 'Complete iOS In-App Purchase implementation with StoreKit',
          usage: 'Monetize your iOS app with purchases and subscriptions',
          technologies: ['React Native', 'iOS', 'IAP', 'App Store', 'StoreKit'],
          bestPractices: [
            '✅ Always verify receipts on your backend',
            '✅ Finish/consume transactions to avoid issues',
            '✅ Implement restore purchases button',
            '✅ Test with sandbox accounts',
            '✅ Handle all error cases gracefully',
            '❌ Never trust client-side verification alone'
          ],
          relatedTopics: ['React Native', 'Backend APIs', 'Payment Processing'],
          estimatedTime: '4-6 hours'
        },
        {
          title: 'AdMob Integration - Mobile Ads',
          code: `# Complete AdMob Integration for React Native

## 1. Create AdMob Account
# 1. Go to admob.google.com
# 2. Sign in with Google account
# 3. Add your app
# 4. Get App ID: ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY

## 2. Install React Native Google Mobile Ads
npm install react-native-google-mobile-ads

# iOS
cd ios && pod install && cd ..

## 3. Configure AdMob App IDs
// app.json
{
  "react-native-google-mobile-ads": {
    "android_app_id": "ca-app-pub-3940256099942544~3347511713",
    "ios_app_id": "ca-app-pub-3940256099942544~1458002511"
  }
}

## 4. Initialize AdMob
// App.js
import mobileAds from 'react-native-google-mobile-ads';

useEffect(() => {
  mobileAds()
    .initialize()
    .then(() => console.log('✅ AdMob initialized'));
}, []);

## 5. Banner Ads
// components/AdBanner.js
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ 
  ? TestIds.BANNER 
  : 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY';

export default function AdBanner() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      onAdLoaded={() => console.log('Banner loaded')}
      onAdFailedToLoad={(error) => console.error(error)}
    />
  );
}

## 6. Interstitial Ads (Full-Screen)
// hooks/useInterstitialAd.js
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

export const useInterstitialAd = () => {
  const [loaded, setLoaded] = useState(false);
  const [interstitial, setInterstitial] = useState(null);

  useEffect(() => {
    const ad = InterstitialAd.createForAdRequest(
      __DEV__ ? TestIds.INTERSTITIAL : 'YOUR-AD-UNIT-ID'
    );

    ad.addAdEventListener(AdEventType.LOADED, () => setLoaded(true));
    ad.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      ad.load(); // Load next ad
    });

    ad.load();
    setInterstitial(ad);

    return () => ad.removeAllListeners();
  }, []);

  const showAd = () => {
    if (loaded) interstitial.show();
  };

  return { showAd, loaded };
};

## 7. Rewarded Ads (Watch for Reward)
// hooks/useRewardedAd.js
export const useRewardedAd = (onReward) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ad = RewardedAd.createForAdRequest(
      __DEV__ ? TestIds.REWARDED : 'YOUR-AD-UNIT-ID'
    );

    ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
      onReward(reward.amount); // Give user reward
    });

    ad.load();
    return () => ad.removeAllListeners();
  }, []);

  return { showAd: () => loaded && ad.show(), loaded };
};

## 8. Best Practices
- Use test ads during development
- Limit interstitial frequency (max 1 per minute)
- Implement GDPR consent for EU users
- Preload ads for better UX
- Rewarded ads have highest eCPM ($10-50)
- Interstitials: $5-15 eCPM
- Banners: $0.50-2 eCPM`,
          description: 'Complete AdMob integration with all ad types',
          usage: 'Monetize your React Native app with Google AdMob',
          technologies: ['React Native', 'AdMob', 'Google Ads', 'GDPR'],
          bestPractices: [
            '✅ Use test ads during development',
            '✅ Limit interstitial frequency',
            '✅ Implement GDPR consent',
            '✅ Preload ads for better UX',
            '❌ Never click your own ads'
          ],
          estimatedTime: '2-3 hours'
        },
        {
          title: 'Google AdSense - Website Monetization',
          code: `# Complete Google AdSense Setup for Websites

## 1. Apply for AdSense Account
# 1. Go to adsense.google.com
# 2. Add your website URL
# 3. Requirements:
#    - Original content
#    - Privacy policy page
#    - 10+ quality articles
#    - Professional design

## 2. Add AdSense Code
<!-- Add to <head> section -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>

## 3. Display Ads - React/Next.js
// components/AdSenseAd.jsx
export default function AdSenseAd({ adSlot, adFormat = 'auto' }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}

## 4. Usage in Page
import AdSenseAd from '@/components/AdSenseAd';

export default function BlogPost() {
  return (
    <article>
      <h1>My Blog Post</h1>
      
      {/* Ad after title */}
      <AdSenseAd adSlot="1234567890" />
      
      <p>Content...</p>
      
      {/* Ad in middle */}
      <AdSenseAd adSlot="0987654321" />
    </article>
  );
}

## 5. Next.js Setup
// pages/_document.js
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

## 6. Best Ad Placements
- Above the fold (top of page)
- After first paragraph
- Middle of content (after 3-4 paragraphs)
- Sidebar (sticky ads work well)
- End of content

## 7. Privacy Policy (Required)
<!-- Required text: -->
This site uses Google AdSense. Google uses cookies to serve 
ads based on your prior visits. You may opt out at 
https://www.google.com/settings/ads

## 8. Revenue Optimization
- Page RPM: $5-15 (varies by niche)
- CTR: 1-3%
- High-paying niches:
  * Finance & Insurance: $20-80 RPM
  * Legal Services: $30-100 RPM
  * Technology: $10-30 RPM
  * Health & Medical: $15-40 RPM

## 9. Alternatives
- Ezoic: AI-powered, 50-200% higher revenue
- Media.net: Good AdSense alternative
- Mediavine: Requires 50k monthly sessions
- AdThrive: Requires 100k monthly sessions`,
          description: 'Monetize your website with Google AdSense',
          usage: 'Earn money from your blog, news site, or content platform',
          technologies: ['HTML', 'JavaScript', 'React', 'Next.js', 'AdSense'],
          bestPractices: [
            '✅ Place ads naturally in content',
            '✅ Max 3 ads per page',
            '✅ Use responsive ad units',
            '✅ Fast loading site (Core Web Vitals)',
            '❌ Never click your own ads',
            '❌ Don\'t encourage clicks'
          ],
          estimatedTime: '1-2 hours setup, weeks for approval'
        }
      ]
    },
    backend: {
      name: 'Backend Development',
      items: [
        {
          title: 'REST API mit JWT Authentication',
          code: `# Vollständige REST API mit JWT-Authentifizierung

## 1. Projekt Setup
mkdir secure-api
cd secure-api
npm init -y
npm install express jsonwebtoken bcrypt dotenv cors helmet express-validator

## 2. Projektstruktur
secure-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   └── server.js
├── .env
└── package.json

## 3. Environment Variables (.env)
PORT=5000
JWT_SECRET=your_super_secret_key_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/myapp

## 4. Server Setup (src/server.js)
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`✅ Server läuft auf Port \${PORT}\`);
});

## 5. User Model (src/models/User.js)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name ist erforderlich'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email ist erforderlich'],
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Ungültige Email']
  },
  password: {
    type: String,
    required: [true, 'Passwort ist erforderlich'],
    minlength: 6,
    select: false // Password nicht bei Queries zurückgeben
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Password hashen vor dem Speichern
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Passwort vergleichen
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

## 6. JWT Middleware (src/middleware/auth.js)
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  // Token aus Header extrahieren
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Nicht autorisiert - kein Token'
    });
  }

  try {
    // Token verifizieren
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // User aus DB laden
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(404).json({
        success: false,
        message: 'User nicht gefunden'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token ungültig'
    });
  }
};

// Admin-Rolle überprüfen
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Keine Berechtigung für diese Route'
      });
    }
    next();
  };
};

## 7. Auth Controller (src/controllers/authController.js)
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// JWT Token generieren
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// @route   POST /api/auth/register
// @desc    User registrieren
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Prüfen ob User bereits existiert
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User existiert bereits'
      });
    }

    // User erstellen
    const user = await User.create({
      name,
      email,
      password
    });

    // Token generieren
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token
      }
    });
  } catch (error) {
    next(error);
  }
};

// @route   POST /api/auth/login
// @desc    User einloggen
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validierung
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Bitte Email und Passwort angeben'
      });
    }

    // User finden (mit Password)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Ungültige Anmeldedaten'
      });
    }

    // Passwort überprüfen
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Ungültige Anmeldedaten'
      });
    }

    // Token generieren
    const token = generateToken(user._id);

    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token
      }
    });
  } catch (error) {
    next(error);
  }
};

// @route   GET /api/auth/me
// @desc    Aktuellen User abrufen
// @access  Private
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

## 8. Auth Routes (src/routes/auth.js)
const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { body } = require('express-validator');

const router = express.Router();

// Validierung
const registerValidation = [
  body('name').notEmpty().withMessage('Name ist erforderlich'),
  body('email').isEmail().withMessage('Ungültige Email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Passwort muss mindestens 6 Zeichen haben')
];

const loginValidation = [
  body('email').isEmail().withMessage('Ungültige Email'),
  body('password').notEmpty().withMessage('Passwort ist erforderlich')
];

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/me', protect, getMe);

module.exports = router;

## 9. User Routes (src/routes/users.js)
const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// @route   GET /api/users
// @desc    Alle User abrufen (nur Admin)
// @access  Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/users/:id
// @desc    Einzelnen User abrufen
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    // User darf nur eigene Daten sehen, außer er ist Admin
    if (req.user.id !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Keine Berechtigung'
      });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User nicht gefunden'
      });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

## 10. Error Handler (src/middleware/errorHandler.js)
module.exports = (err, req, res, next) => {
  console.error('❌ Error:', err);

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validierungsfehler',
      errors
    });
  }

  // Mongoose Duplicate Key
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'Daten existieren bereits'
    });
  }

  // JWT Errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Token ungültig'
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Token abgelaufen'
    });
  }

  // Default Error
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error'
  });
};

## 11. Testing mit Postman/Thunder Client

### Register
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "password": "test123"
}

### Login
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "max@example.com",
  "password": "test123"
}

### Get Me (mit Token)
GET http://localhost:5000/api/auth/me
Authorization: Bearer YOUR_JWT_TOKEN

### Get All Users (Admin only)
GET http://localhost:5000/api/users
Authorization: Bearer YOUR_JWT_TOKEN

## 12. Deployment auf Railway

# package.json scripts hinzufügen:
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}

# Railway:
1. GitHub Repository pushen
2. Railway.app öffnen
3. "New Project" → GitHub Repo auswählen
4. Environment Variables hinzufügen:
   - JWT_SECRET
   - DATABASE_URL (MongoDB Atlas)
   - NODE_ENV=production
5. Deploy!

## 13. Frontend Integration (React)

// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Token speichern
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Register
export const register = async (userData) => {
  const response = await axios.post(\`\${API_URL}/auth/register\`, userData);
  if (response.data.data.token) {
    setAuthToken(response.data.data.token);
  }
  return response.data;
};

// Login
export const login = async (credentials) => {
  const response = await axios.post(\`\${API_URL}/auth/login\`, credentials);
  if (response.data.data.token) {
    setAuthToken(response.data.data.token);
  }
  return response.data;
};

// Get current user
export const getMe = async () => {
  const response = await axios.get(\`\${API_URL}/auth/me\`);
  return response.data.data;
};`,
          description: 'Vollständige REST API mit JWT-Authentifizierung, Bcrypt-Password-Hashing und Role-Based Access Control',
          usage: 'Sichere API mit User-Registrierung, Login und geschützten Routen',
          technologies: ['Node.js', 'Express', 'JWT', 'Bcrypt', 'MongoDB', 'Mongoose'],
          bestPractices: [
            '✅ Passwörter immer hashen (Bcrypt)',
            '✅ JWT Secrets in .env auslagern',
            '✅ HTTP-Only Cookies für Token (alternativ)',
            '✅ Rate Limiting implementieren',
            '✅ Input Validation (express-validator)',
            '✅ Helmet.js für Security Headers',
            '✅ CORS richtig konfigurieren',
            '❌ Nie Passwörter im Klartext speichern',
            '❌ Keine sensiblen Daten im JWT',
            '❌ Token nie in localStorage (XSS-Risiko)'
          ],
          commonIssues: [
            'Token abgelaufen: Refresh Token implementieren',
            'CORS Errors: Cors() mit richtigen Origins konfigurieren',
            'Mongoose Connection: DATABASE_URL prüfen',
            'JWT_SECRET: Muss lang und zufällig sein (32+ Zeichen)'
          ],
          securityTips: [
            'JWT Expiration Zeit kurz halten (15min - 1h)',
            'Refresh Tokens in Datenbank speichern',
            'Rate Limiting mit express-rate-limit',
            'HTTPS in Produktion verwenden',
            'Environment Variables niemals committen',
            'bcrypt rounds: 10-12 für Balance Performance/Security'
          ],
          relatedTopics: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Security'],
          estimatedTime: '3-4 Stunden'
        },
        {
          title: 'GraphQL API mit Apollo Server',
          code: `# GraphQL API von Grund auf

## 1. Projekt Setup
mkdir graphql-api
cd graphql-api
npm init -y
npm install @apollo/server graphql mongoose dotenv bcrypt jsonwebtoken

## 2. Server Setup (server.js)
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const mongoose = require('mongoose');
require('dotenv').config();

// Type Definitions (Schema)
const typeDefs = \`#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
    createdAt: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    published: Boolean!
    createdAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    # Users
    users: [User!]!
    user(id: ID!): User
    me: User

    # Posts
    posts: [Post!]!
    post(id: ID!): Post
    publishedPosts: [Post!]!
  }

  type Mutation {
    # Auth
    register(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!

    # Posts
    createPost(title: String!, content: String!): Post!
    updatePost(id: ID!, title: String, content: String, published: Boolean): Post!
    deletePost(id: ID!): Post!
  }
\`;

// Resolvers (Logic)
const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    me: async (_, __, context) => {
      if (!context.user) {
        throw new Error('Nicht authentifiziert');
      }
      return await User.findById(context.user.id);
    },
    posts: async () => {
      return await Post.find().populate('author');
    },
    post: async (_, { id }) => {
      return await Post.findById(id).populate('author');
    },
    publishedPosts: async () => {
      return await Post.find({ published: true }).populate('author');
    }
  },

  Mutation: {
    register: async (_, { name, email, password }) => {
      // User erstellen
      const user = await User.create({ name, email, password });
      
      // Token generieren
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });

      return { token, user };
    },

    login: async (_, { email, password }) => {
      // User finden
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        throw new Error('Ungültige Anmeldedaten');
      }

      // Passwort prüfen
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new Error('Ungültige Anmeldedaten');
      }

      // Token generieren
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });

      return { token, user };
    },

    createPost: async (_, { title, content }, context) => {
      if (!context.user) {
        throw new Error('Nicht authentifiziert');
      }

      const post = await Post.create({
        title,
        content,
        author: context.user.id
      });

      return await post.populate('author');
    },

    updatePost: async (_, { id, ...updates }, context) => {
      if (!context.user) {
        throw new Error('Nicht authentifiziert');
      }

      const post = await Post.findById(id);
      if (!post) {
        throw new Error('Post nicht gefunden');
      }

      // Nur Author darf updaten
      if (post.author.toString() !== context.user.id) {
        throw new Error('Keine Berechtigung');
      }

      return await Post.findByIdAndUpdate(id, updates, { new: true }).populate('author');
    },

    deletePost: async (_, { id }, context) => {
      if (!context.user) {
        throw new Error('Nicht authentifiziert');
      }

      const post = await Post.findById(id);
      if (!post) {
        throw new Error('Post nicht gefunden');
      }

      if (post.author.toString() !== context.user.id) {
        throw new Error('Keine Berechtigung');
      }

      return await Post.findByIdAndDelete(id);
    }
  },

  // Field Resolvers
  User: {
    posts: async (parent) => {
      return await Post.find({ author: parent.id });
    }
  }
};

// Context Function (für Auth)
const getUser = async (token) => {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { id: decoded.id };
  } catch (error) {
    return null;
  }
};

// Server starten
async function startServer() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log('✅ MongoDB verbunden');

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const token = req.headers.authorization?.split(' ')[1] || '';
      const user = await getUser(token);
      return { user };
    },
  });

  console.log(\`✅ Server läuft auf \${url}\`);
}

startServer();

## 3. GraphQL Queries testen

### Register User
mutation {
  register(
    name: "Max Mustermann"
    email: "max@example.com"
    password: "test123"
  ) {
    token
    user {
      id
      name
      email
    }
  }
}

### Login
mutation {
  login(email: "max@example.com", password: "test123") {
    token
    user {
      id
      name
      email
    }
  }
}

### Create Post (mit Auth Token im Header)
# Header: { "Authorization": "Bearer YOUR_TOKEN" }
mutation {
  createPost(
    title: "Mein erster Post"
    content: "Das ist der Inhalt meines Posts"
  ) {
    id
    title
    content
    author {
      name
      email
    }
    createdAt
  }
}

### Get All Posts
query {
  posts {
    id
    title
    content
    published
    author {
      name
      email
    }
    createdAt
  }
}

### Get User with Posts
query {
  user(id: "USER_ID") {
    name
    email
    posts {
      title
      published
    }
  }
}

### Get Current User
# Header: { "Authorization": "Bearer YOUR_TOKEN" }
query {
  me {
    name
    email
    posts {
      title
      content
      published
    }
  }
}

## 4. Frontend Integration (React + Apollo Client)

npm install @apollo/client graphql

// src/apollo/client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? \`Bearer \${token}\` : '',
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// src/App.js
import { ApolloProvider, useQuery, useMutation, gql } from '@apollo/client';
import { client } from './apollo/client';

const GET_POSTS = gql\`
  query GetPosts {
    posts {
      id
      title
      content
      author {
        name
      }
    }
  }
\`;

const CREATE_POST = gql\`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
\`;

function PostsList() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [createPost] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {data.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>von {post.author.name}</small>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <PostsList />
    </ApolloProvider>
  );
}

## 5. GraphQL Subscriptions (Real-time)

# Server (mit Subscriptions)
npm install graphql-subscriptions graphql-ws ws

const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

// Im Schema:
type Subscription {
  postCreated: Post!
  postUpdated: Post!
}

// In Resolvers:
Subscription: {
  postCreated: {
    subscribe: () => pubsub.asyncIterator(['POST_CREATED'])
  },
  postUpdated: {
    subscribe: () => pubsub.asyncIterator(['POST_UPDATED'])
  }
}

// Beim createPost Mutation:
pubsub.publish('POST_CREATED', { postCreated: post });`,
          description: 'Vollständige GraphQL API mit Apollo Server, Type Definitions, Resolvers, Auth und Subscriptions',
          usage: 'Moderne API-Alternative zu REST mit flexiblen Queries und Real-time Updates',
          technologies: ['GraphQL', 'Apollo Server', 'MongoDB', 'JWT', 'WebSockets'],
          bestPractices: [
            '✅ Schema-First Design',
            '✅ Input Types für Mutations',
            '✅ DataLoader für N+1 Problem',
            '✅ Error Handling mit Extensions',
            '✅ Pagination implementieren',
            '✅ Query Complexity Limits',
            '✅ Caching mit Apollo Cache'
          ],
          relatedTopics: ['GraphQL', 'Apollo', 'Node.js', 'React'],
          estimatedTime: '4-5 Stunden'
        }
      ]
    },
    mobile: {
      name: 'Mobile Apps',
      items: [
        {
          title: 'React Native App von Grund auf',
          code: `# Vollständige React Native App erstellen

## 1. Entwicklungsumgebung einrichten

### Option A: Expo (Empfohlen für Anfänger)
# Expo CLI installieren
npm install -g expo-cli

# Neues Projekt erstellen
expo init MyApp
cd MyApp

# App starten
expo start

### Option B: React Native CLI (mehr Kontrolle)
# Installation (macOS)
brew install node
brew install watchman
sudo gem install cocoapods

# Android Studio installieren
# Xcode installieren (nur macOS)

# React Native CLI
npm install -g react-native-cli

# Neues Projekt
npx react-native init MyApp
cd MyApp

# iOS starten (nur macOS)
npx react-native run-ios

# Android starten
npx react-native run-android

## 2. Projektstruktur erstellen
MyApp/
├── src/
│   ├── components/      # Wiederverwendbare Komponenten
│   ├── screens/         # Bildschirme
│   ├── navigation/      # Navigation
│   ├── services/        # API Calls
│   ├── store/           # State Management
│   ├── utils/           # Hilfsfunktionen
│   ├── constants/       # Konstanten, Themes
│   └── assets/          # Bilder, Fonts
├── App.js
└── package.json

## 3. Navigation einrichten
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Start' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

## 4. Screens erstellen

// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Suchen..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 16,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
  },
  itemCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

// src/screens/DetailsScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>
          Details zu {item.title}
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Zurück</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

## 5. State Management mit Redux Toolkit
npm install @reduxjs/toolkit react-redux

// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// src/store/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;

// App.js - Store Provider hinzufügen
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Navigation */}
      </NavigationContainer>
    </Provider>
  );
}

## 6. API Integration
npm install axios

// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (für Auth Token)
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Error Handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired - logout
    }
    return Promise.reject(error);
  }
);

// API Functions
export const fetchUsers = () => api.get('/users');
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(\`/users/\${id}\`, data);
export const deleteUser = (id) => api.delete(\`/users/\${id}\`);

export default api;

## 7. Lokale Datenspeicherung
npm install @react-native-async-storage/async-storage

// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error reading data:', error);
    return null;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

## 8. Performance Optimierung

// useMemo für teure Berechnungen
const expensiveValue = useMemo(() => {
  return items.filter(item => item.active).map(item => item.value);
}, [items]);

// useCallback für Callbacks
const handlePress = useCallback(() => {
  console.log('Pressed');
}, []);

// React.memo für Komponenten
const ListItem = React.memo(({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.id)}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
));

// FlatList Optimierungen
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  updateCellsBatchingPeriod={50}
  initialNumToRender={20}
  windowSize={21}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>

## 9. Build & Deployment

### Expo Build
# iOS
expo build:ios

# Android
expo build:android

# App Store Upload
# 1. Create App in App Store Connect
# 2. expo upload:ios

# Google Play Upload
# expo upload:android

### React Native CLI Build
# iOS
cd ios
pod install
cd ..
npx react-native run-ios --configuration Release

# Android
cd android
./gradlew assembleRelease
# APK unter: android/app/build/outputs/apk/release/app-release.apk

## 10. Testing
npm install --save-dev @testing-library/react-native jest

// __tests__/HomeScreen.test.js
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

test('renders correctly', () => {
  const { getByText } = render(<HomeScreen />);
  expect(getByText('Start')).toBeTruthy();
});

test('search filter works', () => {
  const { getByPlaceholderText, getByText } = render(<HomeScreen />);
  
  const searchInput = getByPlaceholderText('Suchen...');
  fireEvent.changeText(searchInput, 'Item 1');
  
  expect(getByText('Item 1')).toBeTruthy();
});`,
          description: 'Vollständige React Native App mit Navigation, State Management, API Integration und Deployment',
          usage: 'Native iOS & Android Apps mit einer Codebase entwickeln',
          technologies: ['React Native', 'Expo', 'Redux', 'React Navigation', 'AsyncStorage'],
          bestPractices: [
            '✅ Expo für schnelleren Start',
            '✅ TypeScript für Type Safety',
            '✅ React Navigation für Routing',
            '✅ Redux Toolkit für State',
            '✅ FlashList statt FlatList (besser Performance)',
            '✅ React.memo für Performance',
            '✅ Error Boundaries implementieren',
            '✅ Offline-First Approach',
            '✅ Bilder mit react-native-fast-image',
            '❌ Nicht zu viele re-renders',
            '❌ Keine großen Bilder ohne Optimierung'
          ],
          commonIssues: [
            'Metro Bundler Fehler: npm start -- --reset-cache',
            'iOS Pods: cd ios && pod install',
            'Android Build: ./gradlew clean',
            'Performance: React DevTools Profiler nutzen'
          ],
          relatedTopics: ['React Native', 'Expo', 'Mobile Development', 'Redux'],
          estimatedTime: '6-8 Stunden für vollständige App'
        }
      ]
    }
  }
};

export default howToGuides;
