/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'invitation-pink': {
          100: '#FFE5EE',
          200: '#FFB5C9',
          300: '#FF8AAE',
          400: '#FF6B8E',
          500: '#FF4D7D',
          600: '#FF1F5A',
        },
        'invitation-green': {
          100: '#E8F5E8',
          200: '#C3E6C3',
          300: '#90C290',
          400: '#6AAD6A',
          500: '#4A854A',
        },
        'invitation-brown': '#e8d7c3',
      },
      backgroundImage: {
        'wood-pattern': "url('/fondo.jpg')",
      },
      boxShadow: {
        'invitation': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

