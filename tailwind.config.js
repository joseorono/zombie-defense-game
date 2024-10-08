/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    fontFamily: {
      serif: ['serif'],
      body: ['Oswald', 'sans-serif'],
      display: ['Oswald', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
    },
    fontSize: {
      xs: '0.725rem',
      sm: '0.875rem',
      base: '1.15rem',
      lg: '1.20rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        white: '#F5F6FA',
        red: {
          100: '#f8cccc',
          200: '#f1a3a4',
          300: '#e97a7d',
          400: '#e15156',
          500: '#d9292f',
          600: '#8E001C', // included
          700: '#800000', // included
          800: '#600f15',
          900: '#38070c',
        },
        gold: {
          50: '#ffffe7',
          100: '#feffc1',
          200: '#fffd86',
          300: '#fff441',
          400: '#ffe60d',
          500: '#ffd700',
          600: '#d19e00',
          700: '#a67102',
          800: '#89580a',
          900: '#74480f',
          950: '#442604',
        },
        yellow: {
          50: '#ffffe7',
          100: '#feffc1',
          200: '#fffd86',
          300: '#fff441',
          400: '#ffe60d',
          500: '#ffd700',
          600: '#d19e00',
          700: '#a67102',
          800: '#89580a',
          900: '#74480f',
          950: '#442604',
        },
        blue: {
          50: '#e6f0ff',
          100: '#cce1ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3384ff',
          500: '#0065ff',
          600: '#0057e6',
          700: '#0047b3',
          800: '#003580',
          900: '#002452',
          950: '#001326',
        },
        green: {
          50: '#e6f9e6',
          100: '#ccf2cc',
          200: '#99e699',
          300: '#66d966',
          400: '#33cc33',
          500: '#00bf00',
          600: '#00a300',
          700: '#008000',
          800: '#005900',
          900: '#003300',
          950: '#001900',
        },

        brown: {
          50: '#f8f6ee',
          100: '#efead2',
          200: '#e0d5a8',
          300: '#ceba76',
          400: '#bfa150',
          500: '#b08d42',
          600: '#977137',
          700: '#7a562e',
          800: '#66472d',
          900: '#5a3e2b',
          950: '#332015',
        },
        scroll: {
          100: '#fbf8ef',
          200: '#f7f2e3',
          300: '#f4ecd7',
          400: '#f1e6cb',
          500: '#ede0bf',
          600: '#e8e0c3', // from palette
          700: '#e2d8b7',
          800: '#ddd2ab',
          900: '#d7caa0', // from palette
        },

        slate: {
          50: '#f5f7fa',
          100: '#e4e7eb',
          200: '#cbd2d9',
          300: '#9aa5b1',
          400: '#7b8794',
          500: '#616e7c',
          600: '#52606d',
          700: '#3e4c59',
          800: '#323f4b',
          900: '#1f2933',
        },

        gray: {
          50: '#f5f7fa',
          100: '#e4e7eb',
          200: '#cbd2d9',
          300: '#9aa5b1',
          400: '#7b8794',
          500: '#616e7c',
          600: '#52606d',
          700: '#3e4c59',
          800: '#323f4b',
          900: '#1f2933',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
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
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],

  daisyui: {
    themes: [
      {
        'zombie-red': {
          primary: '#f21717',
          'primary-focus': '#cb0c0c',
          'primary-content': '#131616',
          secondary: '#ffd700',
          'secondary-focus': '#F5D000',
          'secondary-content': '#ffffff',
          accent: '#4fa300',
          'accent-focus': '#367000',
          'accent-content': '#ffffff',
          neutral: '#1b1d1d',
          'neutral-focus': '#131616',
          'neutral-content': '#ffffff',
          'base-100': '#1f1f1f',
          'base-200': '#1b1d1d',
          'base-300': '#131616',
          'base-content': '#ffffff',
          info: '#66c7ff',
          success: '#87cf3a',
          warning: '#e1d460',
          error: '#ff6b6b',
          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '.25s',
          '--animation-input': '.2s',
          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
    prefix: 'daisy-',
    base: false,
    styled: true,
    utils: false,
    logs: false,
  },
};
