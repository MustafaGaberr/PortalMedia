/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f2f7',
          100: '#e1e6ef',
          200: '#c3cde0',
          300: '#a5b4d0',
          400: '#879bc1',
          500: '#5f6db0', // الأساسي
          600: '#4c5a9e',
          700: '#39478c',
          800: '#26347a',
          900: '#132168',
          950: '#0a1a56',
        },
        secondary: {
          50: '#f7f6f0',
          100: '#efede1',
          200: '#dfdbc3',
          300: '#cfc9a5',
          400: '#bfb787',
          500: '#b0a25f', // مكمل
          600: '#9e924c',
          700: '#8c7f39',
          800: '#7a6c26',
          900: '#685913',
          950: '#56470a',
        },
        accent: {
          50: '#f2f0f7',
          100: '#e5e1ef',
          200: '#cbc3df',
          300: '#b1a5cf',
          400: '#9787bf',
          500: '#735fb0', // بنفسجي متجاور
          600: '#5c4c9e',
          700: '#45398c',
          800: '#2e267a',
          900: '#171368',
          950: '#0a0a56',
        },
        tertiary: {
          50: '#f0f7f2',
          100: '#e1efe5',
          200: '#c3dfcb',
          300: '#a5cfb1',
          400: '#87bf97',
          500: '#6db05f', // أخضر ثلاثي
          600: '#5c9e4c',
          700: '#4b8c39',
          800: '#3a7a26',
          900: '#296813',
          950: '#18560a',
        },
        light: {
          50: '#f7f8fc',
          100: '#eff1f9',
          200: '#dfe3f3',
          300: '#cfd5ed',
          400: '#bfc7e7',
          500: '#7c89c7', // درجة أفتح
          600: '#6c7ab7',
          700: '#5c6ba7',
          800: '#4c5c97',
          900: '#3c4d87',
          950: '#2c3e77',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['Cairo', 'Hanimation', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Hanimation', 'Noto Sans Arabic', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        dallas: ['Dallas', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hanimation: ['Hanimation', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(95, 109, 176, 0.4), 0 0 60px rgba(95, 109, 176, 0.2)',
        'elegant': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 40px rgba(95, 109, 176, 0.1)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};