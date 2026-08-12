/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        macrow: {
          dark: '#0E0D0C',
          darker: '#070706',
          surface: '#171614',
          surfaceLight: '#22201D',
          cream: '#F3E9D2',
          creamMuted: '#D9CBAC',
          parchment: '#E8DCC4',
          rope: '#6B4A2C',
          ropeLight: '#9E744A',
          brass: '#C9A44C',
          brassLight: '#E5BF65',
          brassDark: '#997930',
          textMain: '#E5DFD3',
          textMuted: '#9A9183',
          borderDark: '#2B2824',
        }
      },
      fontFamily: {
        western: ['Rye', 'cursive', 'serif'],
        typewriter: ['"Special Elite"', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Sora', 'sans-serif'],
      },
      boxShadow: {
        'rope-card': '0 15px 35px -5px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(107, 74, 44, 0.15)',
        'wanted': '0 20px 40px rgba(0,0,0,0.8), 0 0 15px rgba(201, 164, 76, 0.15)',
        'gold-glow': '0 0 25px rgba(201, 164, 76, 0.3)',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0px)' },
          '50%': { transform: 'rotate(-1deg) translateY(-4px)' },
        },
        swayAlt: {
          '0%, 100%': { transform: 'rotate(2deg) translateY(0px)' },
          '50%': { transform: 'rotate(4deg) translateY(-3px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'sway-slow': 'sway 6s ease-in-out infinite',
        'sway-alt': 'swayAlt 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
