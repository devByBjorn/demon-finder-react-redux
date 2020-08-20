import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'
import { MainButton } from '../styled/Buttons'

const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <MainButton
      data-testid="login"
      onClick={() => dispatch(startLogin())}>Login</MainButton>
  )
}

export default LoginPage