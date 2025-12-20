// Design patterns, UI libraries, and development resources

export const designPatterns = {
  singleton: {
    id: 'singleton',
    name: 'Singleton Pattern',
    category: 'Creational',
    icon: '🏢',
    description: 'Ensures a class has only one instance and provides global access to it',
    examples: {
      javascript: {
        code: `class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = null;
    Database.instance = this;
  }

  connect() {
    if (!this.connection) {
      this.connection = 'Connected to DB';
    }
    return this.connection;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true`,
        usage: 'Use for database connections, loggers, configuration managers',
      },
      python: {
        code: `class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True`,
        usage: 'Thread-safe singleton for shared resources',
      },
    },
  },

  observer: {
    id: 'observer',
    name: 'Observer Pattern',
    category: 'Behavioral',
    icon: '👁️',
    description: 'Defines a subscription mechanism to notify multiple objects about events',
    examples: {
      javascript: {
        code: `class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }

  off(event, listenerToRemove) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(
      listener => listener !== listenerToRemove
    );
  }
}

const emitter = new EventEmitter();
emitter.on('dataReceived', (data) => {
  console.log('Received:', data);
});
emitter.emit('dataReceived', { value: 42 });`,
        usage: 'Event handling, UI updates, state management',
      },
    },
  },

  factory: {
    id: 'factory',
    name: 'Factory Pattern',
    category: 'Creational',
    icon: '🏭',
    description: 'Creates objects without specifying the exact class to create',
    examples: {
      javascript: {
        code: `class ButtonFactory {
  createButton(type) {
    switch(type) {
      case 'primary':
        return new PrimaryButton();
      case 'secondary':
        return new SecondaryButton();
      default:
        return new DefaultButton();
    }
  }
}

class PrimaryButton {
  render() {
    return '<button class="btn-primary">Click</button>';
  }
}

const factory = new ButtonFactory();
const btn = factory.createButton('primary');`,
        usage: 'Creating UI components, database connections, API clients',
      },
    },
  },
};

export const uiLibraries = {
  reactNativePaper: {
    id: 'react-native-paper',
    name: 'React Native Paper',
    icon: '📄',
    category: 'UI Framework',
    description: 'Material Design for React Native',
    installation: `npm install react-native-paper`,
    examples: [
      {
        title: 'Button Component',
        code: `import { Button } from 'react-native-paper';

<Button 
  mode="contained" 
  onPress={() => console.log('Pressed')}
  icon="camera"
>
  Take Photo
</Button>`,
      },
      {
        title: 'Card Component',
        code: `import { Card, Title, Paragraph } from 'react-native-paper';

<Card>
  <Card.Cover source={{ uri: 'image.jpg' }} />
  <Card.Content>
    <Title>Card Title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
</Card>`,
      },
    ],
    link: 'https://callstack.github.io/react-native-paper/',
  },

  nativeBase: {
    id: 'native-base',
    name: 'NativeBase',
    icon: '🎨',
    category: 'UI Framework',
    description: 'Universal component library for React & React Native',
    installation: `npm install native-base`,
    examples: [
      {
        title: 'Box Layout',
        code: `import { Box, VStack, HStack } from 'native-base';

<Box>
  <VStack space={4}>
    <Box bg="primary.500" p={4}>
      Vertical Stack
    </Box>
  </VStack>
</Box>`,
      },
      {
        title: 'Form Input',
        code: `import { FormControl, Input, Select } from 'native-base';

<FormControl>
  <FormControl.Label>Email</FormControl.Label>
  <Input placeholder="Enter email" />
  <FormControl.HelperText>
    We'll never share your email
  </FormControl.HelperText>
</FormControl>`,
      },
    ],
    link: 'https://nativebase.io',
  },

  reactNativeElements: {
    id: 'react-native-elements',
    name: 'React Native Elements',
    icon: '⚛️',
    category: 'UI Framework',
    description: 'Cross-platform React Native UI toolkit',
    installation: `npm install @rneui/themed @rneui/base`,
    examples: [
      {
        title: 'Avatar Component',
        code: `import { Avatar } from '@rneui/themed';

<Avatar
  size={64}
  rounded
  source={{ uri: 'https://example.com/avatar.jpg' }}
  title="JD"
  containerStyle={{ backgroundColor: 'grey' }}
/>`,
      },
      {
        title: 'Card with Image',
        code: `import { Card, Button, Icon } from '@rneui/themed';

<Card>
  <Card.Title>CARD WITH DIVIDER</Card.Title>
  <Card.Divider/>
  <Card.Image 
    source={require('../images/pic.jpg')}
  />
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0}}
    title='VIEW NOW' />
</Card>`,
      },
    ],
    link: 'https://reactnativeelements.com',
  },

  recharts: {
    id: 'recharts',
    name: 'Recharts',
    icon: '📊',
    category: 'Charts & Graphs',
    description: 'Composable charting library for React',
    installation: `npm install recharts`,
    examples: [
      {
        title: 'Line Chart',
        code: `import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
];

<LineChart width={400} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="value" stroke="#8884d8" />
</LineChart>`,
      },
      {
        title: 'Bar Chart',
        code: `import { BarChart, Bar, XAxis, YAxis } from 'recharts';

<BarChart width={400} height={300} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="value" fill="#8884d8" />
</BarChart>`,
      },
    ],
    link: 'https://recharts.org',
  },

  framerMotion: {
    id: 'framer-motion',
    name: 'Framer Motion',
    icon: '✨',
    category: 'Animation',
    description: 'Production-ready animation library for React',
    installation: `npm install framer-motion`,
    examples: [
      {
        title: 'Basic Animation',
        code: `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Content
</motion.div>`,
      },
      {
        title: 'Gesture Animation',
        code: `import { motion } from 'framer-motion';

<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
>
  Drag me!
</motion.div>`,
      },
    ],
    link: 'https://www.framer.com/motion/',
  },
};

export const developmentTools = {
  prettier: {
    name: 'Prettier',
    icon: '✨',
    description: 'Opinionated code formatter',
    config: `// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}`,
  },
  eslint: {
    name: 'ESLint',
    icon: '🔍',
    description: 'JavaScript linting utility',
    config: `// .eslintrc.js
module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error'
  }
}`,
  },
};

export const getAllDesignPatterns = () => Object.values(designPatterns);
export const getAllUILibraries = () => Object.values(uiLibraries);
export const getPatternById = (id) => designPatterns[id];
export const getLibraryById = (id) => uiLibraries[id];
