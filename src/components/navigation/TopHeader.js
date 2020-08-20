import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import ToggleTheme from './ToggleTheme'
import { TopHeaderStyled, } from '../../styled/TopHeaderStyled'
import { MainButton, MenuControlBtnStyled } from '../../styled/Buttons'

const TopHeader = () => {
  const dispatch = useDispatch()
  return (
    <TopHeaderStyled>
      <div>
        { /*<ToggleTheme />*/}
        <MainButton
          data-testid="logout"
          onClick={() => dispatch(startLogout())}>
          Logout
      </MainButton>
      </div>
    </TopHeaderStyled>
  )
}

export default TopHeader

/*
     <MainButton onClick={toggleMenu}>
        Menu
      </MainButton>
*/