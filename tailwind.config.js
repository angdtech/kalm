/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pico App Custom Colors
        'pico-primary': 'var(--pico-primary)',
        'pico-secondary': 'var(--pico-secondary)',
        'pico-tertiary': 'var(--pico-tertiary)',
        'pico-accent-1': 'var(--pico-accent-1)',
        'pico-accent-2': 'var(--pico-accent-2)',
        'pico-accent-3': 'var(--pico-accent-3)',
        'pico-accent-4': 'var(--pico-accent-4)',
        'pico-text-primary': 'var(--pico-text-primary)',
        'pico-text-secondary': 'var(--pico-text-secondary)',
        'pico-bg-primary': 'var(--pico-bg-primary)',
        'pico-bg-secondary': 'var(--pico-bg-secondary)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}