import React from 'react'
import { useDispatch } from 'react-redux'
import { twitterLogin, googleLogin } from '../actions/auth'
import LoginButton from '../components/utils/LoginButton'
import { LoginWrapper, Content } from '../styled/LoginPageStyled'
import Logo from '../components/logo/Logo'
import LinkStyled from '../styled/LinkStyled'


const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Logo
        position="absolute"
        top="1.5rem"
        left="1.5rem"
      />
      <Content>
        <div>
          <h2>Check your demons before you wreck your account!</h2>
          <p>The Demon Finder lets you write down and keep track of your trading errors. The tool was introduced to me by Tom Dante a.k.a <LinkStyled target="blank" to="https://twitter.com/trader_dante">Trader Dante</LinkStyled> and has helped me alot in my own trading journey</p>
          <p>
            Hopefully the Demon Finder, in its simplicity can help you too, and have a positive impact on your trading.
          </p>
          <p>No registration needed, you just log in below with your twitter or google account</p>
        </div>
        <div>
          <h5>Login:</h5>
          <LoginWrapper>
            <LoginButton
              authType={() => dispatch(twitterLogin())}
              background="rgb(29, 161, 242)"
              hoverBg="rgb(29, 148, 242)"
              text="Twitter"
            >Twitter</LoginButton>
            <LoginButton
              authType={() => dispatch(googleLogin())}
              background="#DB4437"
              hoverBg="#E94B46"
              text="Goggle"
            >Google</LoginButton>
          </LoginWrapper>
        </div>
      </Content>
    </div>
  )
}

export default LoginPage