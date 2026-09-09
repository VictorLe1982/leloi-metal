// ==============================================================================
// LELOI METAL DESIGN TOKENS (Approved Brand Identity Specification)
// ==============================================================================

export const colors = {
  navy: {
    DEFAULT: '#0A2D5B', // Primary Brand, Headings, Dark UI
    light: '#123D77',
    dark: '#061D3B',
    50: '#F0F5FA',
    100: '#DCE6F3',
    500: '#0A2D5B',
    900: '#041326'
  },
  blue: {
    DEFAULT: '#2F7BFF', // Primary CTA, Highlights, Active States
    hover: '#1B6BF8',
    light: '#EBF2FF',
    dark: '#0A52D4'
  },
  aluminium: {
    DEFAULT: '#9AA3AF', // Wordmark METAL, Technical Accent, Borders
    light: '#C7CCD3',
    dark: '#68717D',
    metallic: '#8E98A5'
  },
  lightGray: {
    DEFAULT: '#F1F4F8', // Technical card backgrounds, Surface
    surface: '#F8FAFC',
    border: '#E2E8F0'
  },
  white: '#FFFFFF',
  charcoal: {
    DEFAULT: '#172033', // Body copy, dark text
    muted: '#4A5568'
  },
  sustainability: {
    DEFAULT: '#16A34A', // Green eco accent (sparingly used)
    light: '#DCFCE7'
  }
} as const;

export const typography = {
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'JetBrains Mono, monospace'
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
} as const;

export const spacingGrid = {
  base: '8px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  6: '48px',
  8: '64px',
  12: '96px'
} as const;
