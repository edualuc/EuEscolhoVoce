import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import themes from '../styles/themes'



function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = useState('')
  return (<ThemeProvider theme={themes[themeName] ? themes[themeName] : themes['themeDefault']}>
    <Component {...pageProps} setTheme={setThemeName} />
  </ThemeProvider>)
}

export default MyApp
