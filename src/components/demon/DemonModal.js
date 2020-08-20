import React from 'react'
import { EditIcon } from '../icons/iconsComponents'
import {
  Modal,
  Container,
  Content,
  Title,
  Paragraph,
  Header,
} from '../../styled/DemonModalStyled'
import { NavLinkStyled } from '../../styled/NavLinkStyled'
import { MainButton } from '../../styled/Buttons'

const DemonModal = ({ demon, handleModal, showModal }) => (
  <Modal
    style={{
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)'
      }
    }}
    isOpen={showModal}
    onRequestClose={handleModal}
    shouldCloseOnOverlayClick={true}
  >

    <Container>
      <MainButton
        onClick={handleModal}
      >Close
      </MainButton>
      <Content>
        <div>
          <Title>{demon.title}</Title>
          <Header>Cause</Header>
          <Paragraph>{demon.cause}</Paragraph>

          <Header>Management</Header>
          <Paragraph>{demon.manage}</Paragraph>
        </div>
        <div>
          <NavLinkStyled to={`edit/${demon.id}`}>
            <EditIcon />
          </NavLinkStyled>
        </div>
      </Content>
    </Container>
  </Modal>
)

export default DemonModal