/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '0.688rem',
      base: '0.75rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '2rem',
    },
    lineHeight: {
      15: '0.938rem',
      18: '1.125rem',
      22: '1.375rem',
      24: '1.5rem',
      36: '2.25rem',
    },
    letterSpacing: {
      'tight-4': '-1px',
      'tight-3': '-0.8px',
      'tight-2': '-0.63px',
      'tight-1': '-0.25px',
      tight: '-0.23px',
      normal: 0,
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
        18: '4.5rem',
        25: '6.5rem',
      },
      colors: {
        violet: {
          light: '#9277ff',
          normal: '#7c5dfa',
        },
        blue: {
          lightest: '#dfe3fa',
          lighter: '#888eb0',
          light: '#7e88c3',
          strong: '#252945',
          dark: '#141625',
          darker: '#1e2139',
        },
        black: {
          shade: '#0c0e16',
        },
        red: {
          lighter: '#ff9797',
          light: '#ec5757',
        },
        white: {
          lighter: '#f8f8fb',
          light: '#f9fafe',
          full: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
