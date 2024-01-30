const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        'error-shadow':
          '0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
        'primary-shadow':
          '0px 0px 0px 4px #D1E0FF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(197, 100%, 96%)',
          100: 'hsl(199, 100%, 92%)',
          200: 'hsl(197, 100%, 85%)',
          300: 'hsla(220, 100%, 76%, 1)',
          400: 'hsl(197, 100%, 64%)',
          500: 'hsl(202, 100%, 56%)',
          600: 'hsl(207, 100%, 51%)',
          700: 'hsl(211, 100%, 50%)',
          800: 'hsl(213, 92%, 40%)',
          900: 'hsl(211, 85%, 33%)',
          950: 'hsl(213, 74%, 21%)',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
          50: 'hsl(47, 90%, 96%)',
          100: 'hsl(49, 95%, 92%)',
          200: 'hsl(46, 95%, 83%)',
          300: 'hsl(44, 94%, 72%)',
          400: 'hsl(41, 95%, 61%)',
          500: 'hsl(38, 95%, 53%)',
          600: 'hsl(34, 94%, 50%)',
          700: 'hsl(31, 91%, 40%)',
          800: 'hsl(29, 83%, 34%)',
          900: 'hsl(29, 77%, 28%)',
          950: 'hsl(26, 84%, 15%)',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          foreground: 'hsl(var(--error-foreground))',
          50: 'hsl(5, 86%, 97%)',
          100: 'hsl(4, 93%, 94%)',
          200: 'hsl(4, 100%, 89%)',
          300: 'hsl(4, 96%, 82%)',
          400: 'hsl(4, 92%, 71%)',
          500: 'hsl(4, 86%, 58%)',
          600: 'hsl(4, 74%, 51%)',
          700: 'hsl(4, 76%, 42%)',
          800: 'hsl(4, 71%, 35%)',
          900: 'hsl(4, 64%, 31%)',
          950: 'hsl(4, 77%, 15%)',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
          50: 'hsl(152, 62%, 96%)',
          100: 'hsl(147, 65%, 90%)',
          200: 'hsl(150, 62%, 80%)',
          300: 'hsl(155, 57%, 67%)',
          400: 'hsl(156, 51%, 52%)',
          500: 'hsl(158, 68%, 41%)',
          600: 'hsl(160, 75%, 30%)',
          700: 'hsl(161, 76%, 24%)',
          800: 'hsl(161, 70%, 20%)',
          900: 'hsl(162, 69%, 16%)',
          950: 'hsl(164, 74%, 9%)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gray: {
          50: 'hsl(220, 20%, 97%)',
          100: 'hsl(225, 12%, 94%)',
          200: 'hsl(220, 13%, 86%)',
          300: 'hsl(221, 14%, 74%)',
          400: 'hsl(219, 14%, 60%)',
          500: 'hsl(221, 13%, 46%)',
          600: 'hsl(223, 14%, 39%)',
          700: 'hsl(225, 15%, 32%)',
          800: 'hsl(223, 13%, 27%)',
          900: 'hsl(223, 11%, 24%)',
          950: 'hsl(227, 11%, 16%)',
        },
        dark: {
          DEFAULT: 'hsl(211, 45%, 15%)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
};
