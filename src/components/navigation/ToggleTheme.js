import React, { useContext, useEffect } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { ToggleThemeBtn } from '../../styled/Buttons'

const ToggleTheme = () => {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <ToggleThemeBtn onClick={toggle}>
      {theme === 'dark'
        ? 'Get light'
        : 'Go dark'}
    </ToggleThemeBtn>
  )
}

export default ToggleTheme