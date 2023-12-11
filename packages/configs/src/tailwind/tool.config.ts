import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import animatePlugin from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  prefix: 'bw-',
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'black',
      white: 'white',

      border: 'hsl(214.3 31.8% 91.4%)',
      input: 'hsl(214.3 31.8% 91.4%)',
      ring: 'hsl(215 20.2% 65.1%)',
      background: 'hsl(0 0% 100%)',
      foreground: 'hsl(222.2 47.4% 11.2%)',
      primary: {
        DEFAULT: 'hsl(222.2 47.4% 11.2%)',
        foreground: 'hsl(210 40% 98%)',
      },
      secondary: {
        DEFAULT: 'hsl(210 40% 96.1%)',
        foreground: 'hsl(222.2 47.4% 11.2%)',
      },
      destructive: {
        DEFAULT: 'hsl(0 100% 50%)',
        foreground: 'hsl(210 40% 98%)',
      },
      muted: {
        DEFAULT: 'hsl(210 40% 96.1%)',
        foreground: 'hsl(215.4 16.3% 46.9%)',
      },
      accent: {
        DEFAULT: 'hsl(210 40% 96.1%)',
        foreground: 'hsl(222.2 47.4% 11.2%)',
      },
      popover: {
        DEFAULT: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 47.4% 11.2%)',
      },
      card: {
        DEFAULT: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 47.4% 11.2%)',
      },
    },
    extend: {
      borderRadius: {
        full: '9999px',
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
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
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
