import React from 'react'
import { MenuControlBtnStyled } from '../../styled/TopHeaderStyled'

const MenuControlBtn = ({ onClick, textContent }) => {

  return (
    <MenuControlBtnStyled onClick={onClick}>
      {textContent}
    </MenuControlBtnStyled>
  )
}

export default MenuControlBtn