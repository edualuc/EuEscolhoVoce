import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

const theme = {
  maxWidth: 1280,
  colors: {
    primary: '#A30C0C',
    secondary: '#BF3C3C',
    light: '#FFF',
    dark: '#444',
    background: '#F3F3F3',
    backgroundDark: '#C4C4C4',
    backgroundLight: '#FFF',
    header: {
      color1: '#D10202',
      color2: '#BD2D00',
      color3: '#F33A00',
    }
  },
  margin: {
    default: 20,
    thin: 10,
    big: 30,
  },
  border: {
    radius: 20,
  },
  font: {
    title: 1.4,
    title2: 1.2,
    body: 1,
  }
}

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
