import { createMuiTheme } from '@material-ui/core/styles';
import MorrisRomanBlack from './assets/MorrisRoman-Black.ttf';
import MorrisRomanAlternate from './assets/MorrisRomanAlternate-Black.ttf';

const morris = {
  fontFamily: 'MorrisRoman-Black',
  fontStyle: 'semi-bold',
  // fontDisplay: 'swap',
  fontWeight: '600',
  src: `
    local('MorrisRoman-Black'),
    local('MorrisRoman-Black-SemiBold'),
    url(${MorrisRomanBlack}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const morrisAlternate = {
  fontFamily: 'MorrisRomanAlternate-Black',
  fontStyle: 'semi-bold',
  // fontDisplay: 'swap',
  fontWeight: '600',
  src: `
    local('MorrisRomanAlternate-Black'),
    local('MorrisRomanAlternate-Black-SemiBold'),
    url(${MorrisRomanAlternate}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['MorrisRoman-Black', 'MorrisRomanAlternate-Black', 'san-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [morris, morrisAlternate],
      },
    },
  },
});
