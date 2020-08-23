import React from 'react'
import LinkStyled from '../styled/LinkStyled'
import { LoginWrapper } from '../styled/LoginPageStyled'
import { ContactContent } from '../styled/ContactPageStyled'
import ArrowNavigation from '../components/navigation/ArrowNavigation'

const ContactPage = () => (
  <div>
    <ContactContent>
      <div>
        <h1>Contact!</h1>
        <p>If you have any ideas of how to improve the demon finder, or if you are experiencing any issues, please reach out.</p>
      </div>
      <div>
        <h5>Reach:</h5>
        <LoginWrapper>
          <LinkStyled color="#ffc600" href="mailto:demonfinder.contact@gmail.com">
            demonfinder.contact@gmail.com
          </LinkStyled>
        </LoginWrapper>
      </div>
    </ContactContent>
    <ArrowNavigation />
  </div>
)

export default ContactPage