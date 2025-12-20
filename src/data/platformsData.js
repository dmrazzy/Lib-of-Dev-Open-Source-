// Platform and tools reference data

export const platforms = {
  expo: {
    id: 'expo',
    name: 'Expo',
    icon: '📱',
    color: '#000020',
    category: 'Mobile Development',
    description: 'Framework and platform for universal React applications',
    details: {
      what: 'Expo is an open-source platform for making universal native apps with React that run on Android, iOS, and the web.',
      when: 'Use Expo when building cross-platform mobile apps, especially for rapid prototyping and development.',
      why: 'Simplifies React Native development with managed workflow, over-the-air updates, and easy access to native APIs.',
    },
    features: [
      'Managed workflow with minimal configuration',
      'Access to 50+ native APIs',
      'Over-the-air (OTA) updates',
      'Easy building and deployment',
      'Web support out of the box',
      'Development tools and debugging',
    ],
    commands: [
      {
        title: 'Create New Expo App',
        code: `npx create-expo-app my-app
cd my-app
npx expo start`,
        description: 'Initialize a new Expo project',
      },
      {
        title: 'Run on Device',
        code: `npx expo start
# Scan QR code with Expo Go app`,
        description: 'Start development server',
      },
      {
        title: 'Build for Production',
        code: `eas build --platform ios
eas build --platform android`,
        description: 'Build production apps with EAS',
      },
    ],
    links: {
      website: 'https://expo.dev',
      docs: 'https://docs.expo.dev',
      github: 'https://github.com/expo/expo',
    },
  },

  vercel: {
    id: 'vercel',
    name: 'Vercel',
    icon: '▲',
    color: '#000000',
    category: 'Web Hosting & Deployment',
    description: 'Platform for frontend developers, providing hosting and serverless functions',
    details: {
      what: 'Vercel is a cloud platform for static sites and serverless functions that fits perfectly with headless content, e-commerce, or database.',
      when: 'Use Vercel for deploying web applications, especially Next.js apps, static sites, and serverless APIs.',
      why: 'Zero-configuration deployments, automatic HTTPS, global CDN, and excellent performance optimization.',
    },
    features: [
      'Automatic deployments from Git',
      'Global CDN with edge functions',
      'Preview deployments for every push',
      'Built-in analytics',
      'Serverless functions',
      'Custom domains and SSL',
    ],
    commands: [
      {
        title: 'Install Vercel CLI',
        code: `npm install -g vercel`,
        description: 'Install Vercel command-line tool',
      },
      {
        title: 'Deploy Project',
        code: `vercel
# Follow the prompts`,
        description: 'Deploy your project to Vercel',
      },
      {
        title: 'Deploy to Production',
        code: `vercel --prod`,
        description: 'Deploy to production environment',
      },
    ],
    links: {
      website: 'https://vercel.com',
      docs: 'https://vercel.com/docs',
      templates: 'https://vercel.com/templates',
    },
  },

  cloudflare: {
    id: 'cloudflare',
    name: 'Cloudflare',
    icon: '☁️',
    color: '#F38020',
    category: 'CDN & Security',
    description: 'Web infrastructure and website security company providing CDN and DDoS mitigation',
    details: {
      what: 'Cloudflare is a global network designed to make everything you connect to the Internet secure, private, fast, and reliable.',
      when: 'Use Cloudflare for improving website performance, security, and reliability through CDN and edge computing.',
      why: 'Global network, DDoS protection, web application firewall, and edge computing capabilities.',
    },
    features: [
      'Content Delivery Network (CDN)',
      'DDoS protection',
      'Web Application Firewall (WAF)',
      'Cloudflare Workers (edge computing)',
      'DNS management',
      'SSL/TLS encryption',
      'Analytics and insights',
    ],
    services: [
      {
        name: 'Cloudflare Pages',
        description: 'JAMstack platform for frontend developers',
        code: `# Deploy with Git integration
# Push to GitHub/GitLab and auto-deploy`,
      },
      {
        name: 'Cloudflare Workers',
        description: 'Serverless execution at the edge',
        code: `addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response('Hello from the edge!', {
    headers: { 'content-type': 'text/plain' }
  })
}`,
      },
      {
        name: 'Cloudflare R2',
        description: 'Object storage without egress fees',
        code: `// S3-compatible API
const object = await env.MY_BUCKET.get('file.txt')`,
      },
    ],
    links: {
      website: 'https://cloudflare.com',
      docs: 'https://developers.cloudflare.com',
      dashboard: 'https://dash.cloudflare.com',
    },
  },

  netlify: {
    id: 'netlify',
    name: 'Netlify',
    icon: '🌐',
    color: '#00C7B7',
    category: 'Web Hosting & Deployment',
    description: 'All-in-one platform for modern web projects',
    details: {
      what: 'Netlify is a hosting platform for web applications and static websites with continuous deployment from Git.',
      when: 'Use Netlify for deploying static sites, JAMstack applications, and serverless functions.',
      why: 'Simple deployment, built-in CI/CD, form handling, identity management, and serverless functions.',
    },
    features: [
      'Continuous deployment from Git',
      'Instant rollbacks',
      'Split testing (A/B testing)',
      'Serverless functions',
      'Form handling',
      'Identity and authentication',
    ],
    commands: [
      {
        title: 'Install Netlify CLI',
        code: `npm install -g netlify-cli`,
        description: 'Install CLI tool',
      },
      {
        title: 'Deploy Site',
        code: `netlify deploy
# For production:
netlify deploy --prod`,
        description: 'Deploy your site',
      },
      {
        title: 'Link to Git',
        code: `netlify init
# Links repo for auto-deployment`,
        description: 'Set up continuous deployment',
      },
    ],
    links: {
      website: 'https://netlify.com',
      docs: 'https://docs.netlify.com',
    },
  },

  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    color: '#2496ED',
    category: 'Containerization',
    description: 'Platform for developing, shipping, and running applications in containers',
    details: {
      what: 'Docker is a platform that uses OS-level virtualization to deliver software in packages called containers.',
      when: 'Use Docker to package applications with their dependencies for consistent deployment across environments.',
      why: 'Ensures consistency between development and production, easy scaling, and simplified dependency management.',
    },
    features: [
      'Container orchestration',
      'Image-based deployment',
      'Microservices architecture',
      'CI/CD integration',
      'Cross-platform compatibility',
      'Resource isolation',
    ],
    commands: [
      {
        title: 'Create Dockerfile',
        code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
        description: 'Basic Node.js Dockerfile',
      },
      {
        title: 'Build Image',
        code: `docker build -t my-app:latest .`,
        description: 'Build Docker image',
      },
      {
        title: 'Run Container',
        code: `docker run -p 3000:3000 my-app:latest`,
        description: 'Run the container',
      },
      {
        title: 'Docker Compose',
        code: `version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example`,
        description: 'Multi-container setup',
      },
    ],
    links: {
      website: 'https://docker.com',
      docs: 'https://docs.docker.com',
      hub: 'https://hub.docker.com',
    },
  },

  firebase: {
    id: 'firebase',
    name: 'Firebase',
    icon: '🔥',
    color: '#FFCA28',
    category: 'Backend as a Service',
    description: 'Google\'s mobile and web development platform',
    details: {
      what: 'Firebase provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users, store data, and more.',
      when: 'Use Firebase for rapid development with real-time databases, authentication, hosting, and analytics.',
      why: 'Comprehensive backend solution, real-time synchronization, automatic scaling, and extensive documentation.',
    },
    features: [
      'Authentication',
      'Realtime Database & Firestore',
      'Cloud Storage',
      'Hosting',
      'Cloud Functions',
      'Analytics',
      'Push Notifications',
    ],
    commands: [
      {
        title: 'Install Firebase',
        code: `npm install firebase
# or for CLI:
npm install -g firebase-tools`,
        description: 'Install Firebase SDK',
      },
      {
        title: 'Initialize Firebase',
        code: `import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);`,
        description: 'Initialize in your app',
      },
      {
        title: 'Firestore Example',
        code: `import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

await addDoc(collection(db, "users"), {
  name: "John",
  age: 30
});`,
        description: 'Basic Firestore usage',
      },
    ],
    links: {
      website: 'https://firebase.google.com',
      docs: 'https://firebase.google.com/docs',
      console: 'https://console.firebase.google.com',
    },
  },
};

export const getAllPlatforms = () => {
  return Object.values(platforms);
};

export const getPlatformById = (id) => {
  return platforms[id];
};

export const getPlatformsByCategory = (category) => {
  return Object.values(platforms).filter(p => p.category === category);
};
