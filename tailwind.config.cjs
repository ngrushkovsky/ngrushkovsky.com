const colors = require('tailwindcss/colors')
const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./source/**/*.astro'],
  experimental: { optimizeUniversalDefaults: true },
  plugins: [
    ({ addBase }) => {
      addBase({
        '@font-face': {
          fontDisplay: 'swap',
          fontFamily: 'Inter var',
          fontStyle: 'normal',
          fontWeight: '100 900',
          src: 'url("/inter-var.woff2") format("woff2-variations")',
        },
        html: {
          fontVariationSettings: '"opsz" 32',
        },
      })
    },
  ],
  theme: {
    animation: {
      first: 'fade-in-up 750ms backwards 150ms',
      second: 'fade-in-up 750ms backwards 300ms',
      third: 'fade-in-up 750ms backwards 450ms',
      fourth: 'fade-in-up 750ms backwards 600ms',
    },
    colors: {
      black: colors.black,
      gray: colors.neutral,
      white: colors.white,
    },
    fontFamily: {
      sans: 'Inter var, sans-serif',
    },
    fontSize: ({ theme }) => ({
      base: [
        '1rem',
        {
          letterSpacing: theme('letterSpacing.normal'),
          lineHeight: theme('lineHeight.normal'),
        },
      ],
    }),
    keyframes: {
      'fade-in-up': {
        from: {
          opacity: 0,
          transform: 'translateY(1rem)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
    },
    letterSpacing: {
      normal: '0.015625rem',
    },
    lineHeight: {
      normal: '1.75rem',
    },
    screens: {
      sm: '33rem',
      md: '43rem',
      lg: '53rem',
    },
    spacing: Object.fromEntries(
      Object.entries(defaultConfig.theme.spacing).map(([key, value]) => [
        key === 'px' ? key : +key * 4,
        value,
      ]),
    ),
  },
}
