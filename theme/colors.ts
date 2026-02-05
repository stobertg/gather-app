/**
 * theme/colors.ts
 *
 * Single source of truth for ALL raw color values.
 */

export const palette = {
  // Base
  white: '#FFFFFF',
  black: '#000000',

  // Grays (dark-first scale; adjust to taste)
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

  // Brand (example blue ramp)
  blue1: '#0B1B33',
  blue2: '#102A4D',
  blue3: '#163A69',
  blue4: '#1B4C87',
  blue5: '#2161A8',
  blue6: '#2B7CD6',
  blue7: '#4B93FF',

  // Status
  red1: '#3B0A0E',
  red6: '#E5484D',

  green1: '#062414',
  green6: '#30A46C',

  yellow1: '#2A2005',
  yellow6: '#F5C518',

  // Optional: overlays (useful for modals)
  overlay10: 'rgba(0,0,0,0.10)',
  overlay20: 'rgba(0,0,0,0.20)',
  overlay40: 'rgba(0,0,0,0.40)',
  overlay60: 'rgba(0,0,0,0.60)',
} as const

export type Palette = typeof palette

/**
 * Convenience groups (not required, but nice for browsing / picking).
 * These are still RAW values — semantics happen in themes.ts.
 */
export const ramps = {
  gray: {
    1: palette.gray1,
    2: palette.gray2,
    3: palette.gray3,
    4: palette.gray4,
    5: palette.gray5,
    6: palette.gray6,
    7: palette.gray7,
    8: palette.gray8,
    9: palette.gray9,
    10: palette.gray10,
    11: palette.gray11,
  },
  blue: {
    1: palette.blue1,
    2: palette.blue2,
    3: palette.blue3,
    4: palette.blue4,
    5: palette.blue5,
    6: palette.blue6,
    7: palette.blue7,
  },
  red: {
    1: palette.red1,
    6: palette.red6,
  },
  green: {
    1: palette.green1,
    6: palette.green6,
  },
  yellow: {
    1: palette.yellow1,
    6: palette.yellow6,
  },
} as const

/**
 * If you ever want “single brand color” access (still raw):
 */
export const brand = {
  primary: palette.blue6,
  primaryHover: palette.blue7,
  onPrimary: palette.white,
} as const