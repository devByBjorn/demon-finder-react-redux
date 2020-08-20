import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { TopHeaderStyled, } from '../../styled/TopHeaderStyled'
import { MainButton, MenuControlBtnStyled } from '../../styled/Buttons'

const TopHeader = () => {
  const dispatch = useDispatch()
  return (
    <TopHeaderStyled>
      <div>
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

