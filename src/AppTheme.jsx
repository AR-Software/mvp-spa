import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import './assets/styles/variables.scss'

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(0,0,0,0)"
    },
    secondary: {
      main: "rgba(255,255,255,1)"
    },
    error: red,
    textPrimary: 'black',
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    letterSpacing: '0.1em',
    htmlFontSize: 12,
    useNextVariants: true,
  },

  // Style override for material components
  overrides: {
    MuiButton: {
      text: {
        fontWeight: 300,
        fontSize: '13px',
        fontFamily: 'Open Sans, sans-serif',
      },
    },
    MuiTypography: {
    }
  }
});

export default AppTheme;