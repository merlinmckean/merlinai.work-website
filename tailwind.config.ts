// tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2540', // Deep rich blue
          light: '#1B3A5F',   // Slightly lighter for variations
          dark: '#051A2D',    // Slightly darker for variations
        },
        accent: {
          DEFAULT: '#00A9FF', // Bright "electra" blue
          light: '#66D2FF',   // Lighter for gradients/shimmers
          dark: '#007ACC',    // Darker for pressed states or variations
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F1A', // Very dark gray, almost black
        },
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '-100% 0' },
          '50%': { backgroundPosition: '100% 0' },
        }
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
      }
    },
  },
  plugins: [],
}
