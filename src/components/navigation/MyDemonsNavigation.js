import React from 'react'
import { MyDemonsNavigationStyled } from '../../styled/MyDemonsNavigationStyled'
import { NavLinkStyled } from '../../styled/NavLinkStyled'
import { ArrowLeftIcon } from '../icons/IconsComponents'

const MyDemonsNavigation = () => (
  <MyDemonsNavigationStyled>
    <NavLinkStyled to="/demons">
      <ArrowLeftIcon
        hovercolor='#ffc600'
      />
    </NavLinkStyled>
  </MyDemonsNavigationStyled>
)


export default MyDemonsNavigation