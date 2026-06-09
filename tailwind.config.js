/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display-lg': ['Chivo', 'sans-serif'],
        'headline-lg': ['Chivo', 'sans-serif'],
        'headline-md': ['Chivo', 'sans-serif'],
        'body-lg': ['Literata', 'serif'],
        'body-md': ['Literata', 'serif'],
        'label-md': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2', fontWeight: '800' }],
        'headline-lg': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'headline-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.5' }],
        'label-md': ['0.875rem', { lineHeight: '1.25', fontWeight: '500' }],
      },
      colors: {
        primary: '#00261a',
        'on-primary': '#ffffff',
        'primary-container': '#0f3d2e',
        'on-primary-container': '#7ba894',
        secondary: '#1e6b4c',
        'on-secondary': '#ffffff',
        'secondary-container': '#e5f5ef',
        'on-secondary-container': '#0a2b1f',
        tertiary: '#4a6fa5',
        'tertiary-container': '#e0eaf5',
        'on-tertiary-container': '#1a2d4a',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        surface: '#f8f9fa',
        'on-surface': '#191c1d',
        'surface-variant': '#e0e4e1',
        'on-surface-variant': '#414944',
        outline: '#7a857f',
        'outline-variant': '#c0c8c3',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'subtle-float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}