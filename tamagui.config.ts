import { createFont, createTamagui, createTokens } from 'tamagui'

/**
 * Stitches-like setup:
 * - Define a raw palette once in tokens.color
 * - Map palette -> semantic theme keys in themes.light / themes.dark
 * - Consume only semantic keys in components (e.g. bg="$bg", color="$fg", borderColor="$border")
 */

export const tokens = createTokens({
  color: {
    // Neutrals
    white: '#FFFFFF',
    black: '#000000',

    // Gray scale (tweak whenever)
    gray1: '#0B0D10',
    gray2: '#12151A',
    gray3: '#1A1F27',
    gray4: '#232A34',
    gray5: '#2D3744',
    gray6: '#3A4657',
    gray7: '#56657A',
    gray8: '#7A8BA3',
    gray9: '#A8B3C4',
    gray10: '#D3DAE5',
    gray11: '#EEF1F6',

    // Brand (example)
    blue1: '#0B1B33',
    blue2: '#102A4D',
    blue3: '#163A69',
    blue4: '#1B4C87',
    blue5: '#2161A8',
    blue6: '#2B7CD6',
    blue7: '#4B93FF',

    // Status
    red6: '#E5484D',
    green6: '#30A46C',
    yellow6: '#F5C518',
  },

  // spacing scale
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 32,
    8: 40,
    9: 48,
    10: 64,
  },

  // component sizing scale
  size: {
    0: 0,
    1: 20,
    2: 24,
    3: 28,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
  },

  radius: {
    0: 0,
    1: 6,
    2: 10,
    3: 14,
    4: 18,
    5: 24,
    round: 9999,
  },

  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
  },
})

// Simple system fonts (swap to your custom fonts later)
const bodyFont = createFont({
  family: '$system',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
  },
  lineHeight: {
    1: 16,
    2: 18,
    3: 22,
    4: 24,
    5: 26,
    6: 30,
    7: 34,
    8: 38,
  },
  weight: {
    4: '400',
    5: '500',
    6: '600',
    7: '700',
  },
  face: {
    400: { normal: '$system' },
    500: { normal: '$system' },
    600: { normal: '$system' },
    700: { normal: '$system' },
  },
})

const headingFont = createFont({
  ...bodyFont,
  weight: {
    6: '600',
    7: '700',
  },
})

/**
 * Themes (semantic keys).
 * Use these in components:
 * - bg / fg for main surfaces
 * - mutedBg / mutedFg for secondary UI
 * - cardBg for cards
 * - border for outlines
 * - accent + accentFg for primary actions
 */
export const themes = {
  light: {
    bg: tokens.color.white,
    fg: tokens.color.gray1,

    mutedBg: tokens.color.gray11,
    mutedFg: tokens.color.gray6,

    cardBg: tokens.color.white,
    border: tokens.color.gray10,

    accent: tokens.color.blue6,
    accentFg: tokens.color.white,

    danger: tokens.color.red6,
    success: tokens.color.green6,
    warning: tokens.color.yellow6,

    // common Tamagui keys (helps 3rd-party components)
    background: tokens.color.white,
    color: tokens.color.gray1,
    borderColor: tokens.color.gray10,
  },

  dark: {
    bg: tokens.color.gray1,
    fg: tokens.color.gray11,

    mutedBg: tokens.color.gray3,
    mutedFg: tokens.color.gray9,

    cardBg: tokens.color.gray2,
    border: tokens.color.gray4,

    accent: tokens.color.blue7,
    accentFg: tokens.color.white,

    danger: tokens.color.red6,
    success: tokens.color.green6,
    warning: tokens.color.yellow6,

    background: tokens.color.gray1,
    color: tokens.color.gray11,
    borderColor: tokens.color.gray4,
  },
} as const

// Optional shorthands (Stitches-like). If you prefer explicit props, delete this section.
export const shorthands = {
  // Margin
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',

  // Padding
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',

  // Border radius
  br: 'borderRadius',
} as const

const config = createTamagui({
  tokens,
  themes,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    defaultFont: 'body',
    // you're already controlling theme via TamaguiProvider defaultTheme
    shouldAddPrefersColorThemes: false,
  },
})

export default config

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}