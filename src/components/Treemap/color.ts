import { css } from 'styled-components'

export const LIGHTEN_FACTOR = 0.4
export const FADE_FACTOR = 0.3

export const color = {
  white: '#FFFFFF',
  black: '#000000',

  main: {
    primary: '#5573F7',
    secondary: '#1D0C5F',
    tertiary: '#4D0246',
    athens: '#EBECF0',
    smoke: '#958CAB',
    studio: '#684BAE',
  },

  comp: {
    sulu: '#9FF760',
    jade: '#02B57E',
    cinnabar: '#E65F39',
    viking: '#5CC8D0',
    equator: '#E3C066',
  },

  shades: {
    primary: {
      ll: '#49C8FC',
      l: '#8397FF',
      d: '#3E55B8',
      dd: '#293778',
      ddd: '#131A38',
    },
    secondary: {
      llll: '#8466FE',
      lll: '#6844F8',
      ll: '#5738D2',
      l: '#391F9D',
      d: '#150945',
    },
    tertiary: {
      llll: '#895F85',
      lll: '#764171',
      ll: '#662860',
      l: '#63035A',
      d: '#380333',
    },
    jade: {
      d: '#02A674',
    },
    smoke: {
      ll: '#EAE7F1',
      l: '#C9C4D4',
      d: '#857A9E',
      dd: '#6B6185',
      ddd: '#534B67',
      dddd: '#2c2835',
    },
    athens: {
      ll: '#f5f5f5e6',
      l: '#EFF0F4',
      d: '#DBDDE5',
      dd: '#C2C5D2',
      ddd: '#9DA0AE',
      dddd: '#868A9B',
    },
    monotone: {
      lll: '#F8F8F8',
      ll: '#ECECEC',
      l: '#DCDCDC',
      d: '#BFBFBF',
      dd: '#A6A3A3',
      ddd: '#747474',
    },
  },

  graph: {
    primaryTriad: {
      governor: '#2941AB',
      sandy: '#F78D6D',
      starship: '#FABB42',
      crail: '#C04848',
    },
    primaryComp: {
      heliotrope: '#486B85',
      emerald: '#57CE5C',
      gorse: '#FFF640',
      picton: '#48C4F7',
    },
    smokeComp: {
      fiord: '#455069',
      mint: '#A5FFA1',
      scarpa: '#53525C',
      madang: '#BBF0CA',
    },
    smokeTetradic: {
      deluge: '#6F57AB',
      aquamar: '#96FFE8',
      virdian: '#499988',
      cosmic: '#7A434F',
    },
  },
}

export const gradient = {
  primary: {
    primaryStudio: `${color.main.primary}, ${color.main.studio}`,
    primarySmoke: `${color.main.primary}, ${color.main.smoke}`,
    primaryPrimaryL: `${color.main.primary}, ${color.shades.primary.l}`,
    primaryPrimaryLL: `${color.main.primary}, ${color.shades.primary.ll}`,
  },
  secondary: {
    secondaryPrimary: `${color.main.secondary}, ${color.main.primary}`,
    secondaryStudio: `${color.main.secondary}, ${color.main.studio}`,
    secondaryPrimaryD: `${color.main.secondary}, ${color.shades.primary.d}`,
  },
  tertiary: {
    tertiaryCinnabar: `${color.main.tertiary}, ${color.comp.cinnabar}`,
    tertiaryViking: `${color.main.tertiary}, ${color.comp.viking}`,
    tertiaryPrimaryLL: `${color.main.tertiary}, ${color.shades.primary.ll}`,
  },
  header: `#EFF0F4, #DADBDF`,
  headerLoading: `#DADBDF99, #EFF0F420, #DADBDFAA`,
}

const DARK_TEXT_COLOR = color.shades.smoke.dddd
export const COLOR_TO_TEXT_COLOR_MAP: Record<string, string> = {
  [color.graph.primaryTriad.sandy]: DARK_TEXT_COLOR,
  [color.graph.primaryComp.gorse]: DARK_TEXT_COLOR,
  [color.graph.smokeComp.mint]: DARK_TEXT_COLOR,
  [color.graph.smokeComp.madang]: DARK_TEXT_COLOR,
  [color.graph.smokeTetradic.aquamar]: DARK_TEXT_COLOR,
  [color.comp.viking]: DARK_TEXT_COLOR,
  [color.comp.sulu]: DARK_TEXT_COLOR,
}

export const loadingAnimation = css`
  background-image: linear-gradient(0.25turn, ${gradient.headerLoading});
  background-size: 300% 400%;
  animation: Gradient 4s ease-out infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
