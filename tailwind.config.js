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
          // 60% Dominant: White (#f1f1f1)
          white: '#f1f1f1',
          light: '#f1f1f1',
          lightSurface: '#ffffff',
          lightMuted: '#e8e8e8',
          cream: '#f1f1f1',
          parchment: '#f1f1f1',
          
          // 30% Secondary: Black (#111111)
          black: '#111111',
          dark: '#111111',
          darker: '#0a0a0a',
          surface: '#181818',
          surfaceLight: '#242424',
          
          // 10% Accent: Red (#ff3803)
          red: '#ff3803',
          brass: '#ff3803',
          brassLight: '#ff5722',
          brassDark: '#d82d00',
          rope: '#ff3803',
          ropeLight: '#ff5722',
          orange: '#ff3803',
          
          // Text & Borders
          textDark: '#111111',
          textDarkMuted: '#555555',
          textLight: '#f1f1f1',
          textLightMuted: '#9e9e9e',
          textMain: '#111111',
          textMuted: '#555555',
          borderLight: '#e0e0e0',
          borderDark: '#262626',
        }
      },
      fontFamily: {
        western: ['Rye', 'cursive', 'serif'],
        typewriter: ['"Special Elite"', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Sora', 'sans-serif'],
      },
      boxShadow: {
        'rope-card': '0 15px 35px -5px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(255, 56, 3, 0.15)',
        'wanted': '0 20px 40px rgba(0,0,0,0.18), 0 0 15px rgba(255, 56, 3, 0.2)',
        'gold-glow': '0 0 25px rgba(255, 56, 3, 0.4)',
        'red-glow': '0 0 25px rgba(255, 56, 3, 0.5)',
        'card-light': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
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
