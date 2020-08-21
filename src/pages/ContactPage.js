import React from 'react'
import LinkStyled from '../styled/LinkStyled'
import { LoginWrapper, Content } from '../styled/LoginPageStyled'

const ContactPage = () => (
  <div>
    <Content>
      <div>
        <h1>Contact!</h1>
        <p>If you have any ideas of how to improve the demon finder, or if you are experiencing any issues, please reach out to me.</p>
      </div>
      <div>
        <h5>Reach:</h5>
        <LoginWrapper>
          <LinkStyled color="#ffc600" to="mailto:demonfinder.contact@gmail.com">
            demonfinder.contact@gmail.com
          </LinkStyled>
        </LoginWrapper>
      </div>
    </Content>
  </div>
)

export default ContactPage