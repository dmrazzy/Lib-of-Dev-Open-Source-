// Dark theme colors and styles
export const colors = {
  // Primary colors
  primary: '#6C5CE7',
  primaryDark: '#5F3DC4',
  secondary: '#00CEC9',
  accent: '#FD79A8',
  
  // Background colors (Dark Mode)
  background: '#0D0D0D',
  backgroundElevated: '#1A1A1A',
  backgroundCard: '#262626',
  
  // Text colors
  text: '#F5F5F5',
  textSecondary: '#A0A0A0',
  textMuted: '#666666',
  
  // Code colors
  codeBackground: '#1E1E1E',
  codeText: '#D4D4D4',
  codeComment: '#6A9955',
  codeKeyword: '#569CD6',
  codeString: '#CE9178',
  codeFunction: '#DCDCAA',
  
  // Status colors
  success: '#00B894',
  warning: '#FDCB6E',
  error: '#FF7675',
  info: '#74B9FF',
  
  // Border colors
  border: '#333333',
  borderLight: '#404040',
  
  // Language colors
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  python: '#3776AB',
  java: '#ED8B00',
  c: '#A8B9CC',
  csharp: '#239120',
  go: '#00ADD8',
  rust: '#CE422B',
  swift: '#FA7343',
  kotlin: '#7F52FF',
  ruby: '#CC342D',
  php: '#777BB4',
  sql: '#00758F',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
  },
  bodySecondary: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textMuted,
  },
  code: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: colors.codeText,
  },
};

export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export default {
  colors,
  spacing,
  typography,
  shadows,
  borderRadius,
};
