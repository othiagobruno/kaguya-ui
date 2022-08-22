import React from 'react'
import { ThemeProvider, DefaultTheme } from 'kaguyaui-core'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
