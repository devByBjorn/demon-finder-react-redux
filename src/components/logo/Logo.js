import React from 'react'
import { LogoStyled } from '../../styled/LogoStyled'
import { BlockSpan, ColorSpan } from '../../styled/Spans'

const Logo = ({ position, bottom, left, right, top, padding }) => (
  <LogoStyled
    position={position}
    bottom={bottom}
    left={left}
    right={right}
    top={top}
    padding={padding}
  >
    <BlockSpan>De<ColorSpan>m</ColorSpan>on</BlockSpan>
    <BlockSpan >F<ColorSpan>ind</ColorSpan>er</BlockSpan>
  </LogoStyled>
)

export default Logo