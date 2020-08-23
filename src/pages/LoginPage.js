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
          <h1>Hi trader!</h1>
          <p>Welcome to the <span>Demon Finder</span>, a tool that helps you keep track of your trading mistakes.</p>

          <p>The tool was introduced to me by Tom Dante (<LinkStyled target="blank" href="https://twitter.com/trader_dante">follow  @Trader_Dante on twitter</LinkStyled>), and it has helped me alot in my own trading journey.</p>

          <p>Hopefully, the Demon Finder can help you too, and have a positive impact on your trading.</p>
          <p>Log in below with twitter or google and start tackling those demons.</p>
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