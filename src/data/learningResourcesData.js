// Additional programming topics and learning resources

export const learningPaths = {
  webDevelopment: {
    id: 'web-development',
    name: 'Web Development',
    icon: '🌐',
    color: '#3B82F6',
    description: 'Complete path to becoming a web developer',
    levels: [
      {
        level: 'Beginner',
        duration: '2-3 months',
        topics: [
          {
            title: 'HTML Fundamentals',
            items: ['Semantic HTML', 'Forms & Validation', 'Accessibility (ARIA)', 'SEO Basics'],
          },
          {
            title: 'CSS Fundamentals',
            items: ['Selectors & Specificity', 'Box Model', 'Flexbox', 'Grid', 'Responsive Design'],
          },
          {
            title: 'JavaScript Basics',
            items: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'Events', 'ES6+ Features'],
          },
        ],
      },
      {
        level: 'Intermediate',
        duration: '3-4 months',
        topics: [
          {
            title: 'Modern JavaScript',
            items: ['Async/Await', 'Promises', 'Modules', 'Fetch API', 'Local Storage'],
          },
          {
            title: 'Frontend Framework',
            items: ['React Fundamentals', 'Components & Props', 'State & Hooks', 'Router', 'Context API'],
          },
          {
            title: 'CSS Frameworks',
            items: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Animations'],
          },
        ],
      },
      {
        level: 'Advanced',
        duration: '4-6 months',
        topics: [
          {
            title: 'Advanced React',
            items: ['Custom Hooks', 'Performance Optimization', 'Server Components', 'Next.js'],
          },
          {
            title: 'State Management',
            items: ['Redux', 'Zustand', 'React Query', 'Context Patterns'],
          },
          {
            title: 'Testing & Deployment',
            items: ['Jest', 'React Testing Library', 'CI/CD', 'Vercel/Netlify'],
          },
        ],
      },
    ],
    resources: [
      'MDN Web Docs',
      'freeCodeCamp',
      'Frontend Mentor',
      'The Odin Project',
    ],
  },

  'mobileApp Development': {
    id: 'mobile-development',
    name: 'Mobile App Development',
    icon: '📱',
    color: '#8B5CF6',
    description: 'Path to building mobile applications',
    levels: [
      {
        level: 'Beginner',
        duration: '2-3 months',
        topics: [
          {
            title: 'React Native Basics',
            items: ['Components', 'Styling', 'Navigation', 'Platform-specific Code'],
          },
          {
            title: 'Mobile UI/UX',
            items: ['Design Patterns', 'Gestures', 'Animations', 'Performance'],
          },
        ],
      },
      {
        level: 'Intermediate',
        duration: '3-4 months',
        topics: [
          {
            title: 'Native Features',
            items: ['Camera', 'Location', 'Push Notifications', 'Local Storage'],
          },
          {
            title: 'APIs & State',
            items: ['REST APIs', 'GraphQL', 'Redux', 'Context'],
          },
        ],
      },
      {
        level: 'Advanced',
        duration: '4-6 months',
        topics: [
          {
            title: 'Advanced Topics',
            items: ['Native Modules', 'Deep Linking', 'App Store Deployment', 'Analytics'],
          },
        ],
      },
    ],
    resources: [
      'React Native Docs',
      'Expo Documentation',
      'React Native School',
    ],
  },

  backend: {
    id: 'backend',
    name: 'Backend Development',
    icon: '⚙️',
    color: '#10B981',
    description: 'Server-side development path',
    levels: [
      {
        level: 'Beginner',
        duration: '2-3 months',
        topics: [
          {
            title: 'Server Fundamentals',
            items: ['HTTP/HTTPS', 'REST APIs', 'CRUD Operations', 'JSON'],
          },
          {
            title: 'Node.js Basics',
            items: ['Express.js', 'Routing', 'Middleware', 'Error Handling'],
          },
          {
            title: 'Databases',
            items: ['SQL Basics', 'PostgreSQL', 'MongoDB', 'ORMs'],
          },
        ],
      },
      {
        level: 'Intermediate',
        duration: '3-4 months',
        topics: [
          {
            title: 'Authentication',
            items: ['JWT', 'OAuth', 'Sessions', 'bcrypt'],
          },
          {
            title: 'API Design',
            items: ['RESTful Principles', 'GraphQL', 'Versioning', 'Documentation'],
          },
          {
            title: 'Security',
            items: ['HTTPS', 'CORS', 'SQL Injection Prevention', 'Rate Limiting'],
          },
        ],
      },
      {
        level: 'Advanced',
        duration: '4-6 months',
        topics: [
          {
            title: 'Scalability',
            items: ['Caching', 'Load Balancing', 'Microservices', 'Message Queues'],
          },
          {
            title: 'DevOps',
            items: ['Docker', 'CI/CD', 'Monitoring', 'Cloud Deployment'],
          },
        ],
      },
    ],
    resources: [
      'Node.js Documentation',
      'PostgreSQL Tutorial',
      'The Net Ninja',
    ],
  },
};

export const bestPractices = {
  codeQuality: {
    title: 'Code Quality',
    icon: '✨',
    practices: [
      {
        name: 'Clean Code Principles',
        description: 'Write readable, maintainable code',
        tips: [
          'Use meaningful variable names',
          'Keep functions small and focused',
          'Follow DRY (Don\'t Repeat Yourself)',
          'Write self-documenting code',
          'Add comments only when necessary',
        ],
      },
      {
        name: 'Code Reviews',
        description: 'Improve code through peer review',
        tips: [
          'Review your own code first',
          'Look for logic errors',
          'Check for security vulnerabilities',
          'Ensure tests are included',
          'Verify documentation is updated',
        ],
      },
      {
        name: 'Testing',
        description: 'Ensure code reliability',
        tips: [
          'Write unit tests for functions',
          'Test edge cases',
          'Use integration tests for workflows',
          'Automate testing in CI/CD',
          'Maintain test coverage above 80%',
        ],
      },
    ],
  },

  performance: {
    title: 'Performance Optimization',
    icon: '⚡',
    practices: [
      {
        name: 'Frontend Performance',
        tips: [
          'Lazy load components and images',
          'Minimize bundle size',
          'Use code splitting',
          'Optimize images (WebP, compression)',
          'Implement caching strategies',
          'Use CDN for static assets',
        ],
      },
      {
        name: 'Backend Performance',
        tips: [
          'Use database indexing',
          'Implement caching (Redis)',
          'Optimize queries',
          'Use connection pooling',
          'Implement rate limiting',
          'Use async operations',
        ],
      },
    ],
  },

  security: {
    title: 'Security Best Practices',
    icon: '🔒',
    practices: [
      {
        name: 'Input Validation',
        tips: [
          'Validate all user input',
          'Sanitize data before storage',
          'Use parameterized queries',
          'Implement CSRF protection',
          'Validate on both client and server',
        ],
      },
      {
        name: 'Authentication & Authorization',
        tips: [
          'Use strong password hashing (bcrypt)',
          'Implement JWT properly',
          'Use HTTPS everywhere',
          'Implement role-based access control',
          'Enable MFA when possible',
        ],
      },
      {
        name: 'Data Protection',
        tips: [
          'Encrypt sensitive data',
          'Use environment variables for secrets',
          'Implement proper error handling',
          'Log security events',
          'Regular security audits',
        ],
      },
    ],
  },
};

export const developerTools = {
  vscode: {
    name: 'Visual Studio Code',
    icon: '💻',
    category: 'IDE',
    description: 'Popular code editor with rich extensions',
    extensions: [
      { name: 'ESLint', description: 'Linting for JavaScript' },
      { name: 'Prettier', description: 'Code formatter' },
      { name: 'GitLens', description: 'Git supercharged' },
      { name: 'Thunder Client', description: 'API testing' },
      { name: 'Live Server', description: 'Local development server' },
      { name: 'Path Intellisense', description: 'File path autocomplete' },
    ],
    shortcuts: [
      { key: 'Ctrl/Cmd + P', action: 'Quick file open' },
      { key: 'Ctrl/Cmd + Shift + P', action: 'Command palette' },
      { key: 'Ctrl/Cmd + D', action: 'Select next occurrence' },
      { key: 'Alt + Up/Down', action: 'Move line' },
      { key: 'Ctrl/Cmd + /', action: 'Toggle comment' },
    ],
  },

  git: {
    name: 'Git',
    icon: '🔀',
    category: 'Version Control',
    description: 'Distributed version control system',
    commonCommands: [
      { command: 'git init', description: 'Initialize repository' },
      { command: 'git clone <url>', description: 'Clone repository' },
      { command: 'git add .', description: 'Stage all changes' },
      { command: 'git commit -m "message"', description: 'Commit changes' },
      { command: 'git push', description: 'Push to remote' },
      { command: 'git pull', description: 'Pull from remote' },
      { command: 'git branch', description: 'List branches' },
      { command: 'git checkout -b <branch>', description: 'Create and switch branch' },
      { command: 'git merge <branch>', description: 'Merge branch' },
      { command: 'git log', description: 'View commit history' },
    ],
    bestPractices: [
      'Commit often with clear messages',
      'Use feature branches',
      'Pull before pushing',
      'Review changes before committing',
      'Use .gitignore properly',
    ],
  },

  postman: {
    name: 'Postman',
    icon: '📬',
    category: 'API Testing',
    description: 'Platform for building and using APIs',
    features: [
      'Test REST APIs',
      'Create collections',
      'Environment variables',
      'Automated testing',
      'Mock servers',
      'API documentation',
    ],
  },
};

export const careerAdvice = {
  juniorDeveloper: {
    title: 'Junior Developer (0-2 years)',
    focus: [
      'Master fundamentals',
      'Build portfolio projects',
      'Learn to read documentation',
      'Practice problem-solving',
      'Contribute to open source',
    ],
    skills: ['HTML/CSS/JavaScript', 'Git', 'One framework', 'Basic algorithms'],
  },

  midLevelDeveloper: {
    title: 'Mid-Level Developer (2-5 years)',
    focus: [
      'System design basics',
      'Code reviews',
      'Mentoring juniors',
      'Architecture patterns',
      'Performance optimization',
    ],
    skills: ['Multiple frameworks', 'Testing', 'CI/CD', 'Database design', 'APIs'],
  },

  seniorDeveloper: {
    title: 'Senior Developer (5+ years)',
    focus: [
      'System architecture',
      'Technical leadership',
      'Cross-team collaboration',
      'Business impact',
      'Continuous learning',
    ],
    skills: ['Scalability', 'Security', 'DevOps', 'Team management', 'Strategy'],
  },
};

export const getAllLearningPaths = () => Object.values(learningPaths);
export const getBestPractices = () => bestPractices;
export const getDeveloperTools = () => developerTools;
export const getCareerAdvice = () => careerAdvice;
