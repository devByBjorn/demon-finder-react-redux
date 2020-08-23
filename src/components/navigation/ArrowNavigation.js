import React from 'react'
import { ArrowNavigationStyled } from '../../styled/ArrowNavigationStyled'
import { NavLinkStyled } from '../../styled/NavLinkStyled'
import { ArrowLeftIcon } from '../icons/IconsComponents'

const ArrowNavigation = () => (
  <ArrowNavigationStyled>
    <NavLinkStyled to="/demons">
      <ArrowLeftIcon
        hovercolor='#ffc600'
      />
    </NavLinkStyled>
  </ArrowNavigationStyled>
)


export default ArrowNavigation