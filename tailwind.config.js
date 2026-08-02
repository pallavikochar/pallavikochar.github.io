/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0d0c0a',
          900: '#17140f',
          800: '#211d16',
          700: '#2b251c',
        },
        accent: {
          DEFAULT: '#c9973d',
          light: '#e0b563',
          dark: '#9c7529',
        },
        market: {
          DEFAULT: '#3e7a52',
          light: '#5fa377',
          dark: '#2c5a3c',
        },
        rust: {
          DEFAULT: '#a6512c',
          light: '#c97347',
          dark: '#7c3b1e',
        },
        steel: {
          DEFAULT: '#4a6b7a',
          light: '#6e93a3',
          dark: '#354f5a',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

