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
        dark: '#262D27',
        light: '#FAFFFB',
        primary: '#9ecea2',
        secondary: '#cfe7d1',
      },
      textColor: {
        darkPrimary: '#262D27',
        darkSecondary: '#323532',
        lightPrimary: '#FAFFFB',
        lightSecondary: '#FAFFFB',
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
          '@apply text-darkPrimary dark:text-lightPrimary': {},
        },
        '.text-color-secondary': {
          '@apply text-darkSecondary dark:text-lightSecondary': {},
        },
      })
    }),
    require('tailwindcss-animate'),
  ],
}
