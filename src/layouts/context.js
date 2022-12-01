import React from 'react'
export const HeroThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
})
