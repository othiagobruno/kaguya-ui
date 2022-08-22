import React, { createContext, useContext } from 'react'
import merge from 'deepmerge'
import { DefaultTheme } from '../theme/theme'

interface IThemeContext {
  theme: typeof DefaultTheme
  toggleTheme: () => void
  themeMode: 'light' | 'dark'
}

const ThemeContext = createContext<IThemeContext>(null as any)

interface ThemeProvider {
  theme?: typeof DefaultTheme
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProvider> = ({ children, theme }) => {
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  const userTheme: typeof DefaultTheme = merge(DefaultTheme, theme ?? {})

  return (
    <ThemeContext.Provider value={{ theme: userTheme, themeMode, toggleTheme }}>
      <div
        style={{ flex: 1, backgroundColor: userTheme.colors.background.main }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext<IThemeContext>(ThemeContext)
  if (!context) {
    throw new Error('The context must be within a valid provider')
  }
  return context
}
