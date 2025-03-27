/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        dark: '#1A1A1D',
        light: '#FAFFFB',
        g50: '#f3faf4',
        g100: '#e3f5e5',
        g200: '#c8eacd',
        g300: '#9dd8a6',
        g400: '#6abe78',
        g500: '#45a255',
        g600: '#348542',
        g700: '#2c6937',
        g800: '#27542f',
        g900: '#224529',
        g950: '#0e2513',
      },
      textColor: {
        darkPrimary: '#262D27',
        darkSecondary: '#323532',
        lightPrimary: '#FAFFFB',
        lightSecondary: '#FAFFFB',
        gt50: '#f3faf4',
        gt100: '#e3f5e5',
        gt200: '#c8eacd',
        gt300: '#9dd8a6',
        gt400: '#6abe78',
        gt500: '#45a255',
        gt600: '#348542',
        gt700: '#2c6937',
        gt800: '#27542f',
        gt900: '#224529',
        gt950: '#0e2513',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-color': {
          '@apply bg-light dark:bg-dark': {},
        },
        '.bg-color-secondary': {
          '@apply bg-slate-200 dark:bg-slate-800': {},
        },
        '.border-color': {
          '@apply border-slate-200 dark:border-slate-800': {},
        },
        '.text-color': {
          '@apply text-darkPrimary dark:text-gt50': {},
        },
        '.text-color-secondary': {
          '@apply text-darkSecondary dark:text-lightSecondary': {},
        },
      })
    }),
    require('tailwindcss-animate'),
  ],
}
