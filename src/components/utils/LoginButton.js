import React from 'react'
import { LoginButtonStyled } from '../../styled/Buttons'

const LoginButton = ({
  authType,
  background,
  hoverBg,
  text }) => (
    <LoginButtonStyled
      onClick={authType}
      background={background}
      hoverBg={hoverBg}
    >{text}
    </LoginButtonStyled>
  )

export default LoginButton