/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./locales/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FBFA2D',
        dark: '#0A0A0A',
        subtle: '#F0F0F0'
      },
      fontFamily: {
        sans: ['"HarmonyOS Sans SC"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    }
  },
  plugins: [],
}