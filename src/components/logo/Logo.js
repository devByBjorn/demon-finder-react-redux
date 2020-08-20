import React from 'react'
import { LogoStyled } from '../../styled/LogoStyled'
import { BlockSpan, ColorSpan } from '../../styled/Spans'

const Logo = () => (
  <LogoStyled>
    <BlockSpan>De<ColorSpan>m</ColorSpan>on</BlockSpan>
    <BlockSpan >F<ColorSpan>ind</ColorSpan>er</BlockSpan>
  </LogoStyled>
)

export default Logo