import styled from 'styled-components'
import ReactModal from 'react-modal'

export const Modal = styled(ReactModal)`
  background: ${({ theme }) => theme.mainBg};
  border: 1px solid;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  min-height: 70vh;
  margin: 0 auto;
  margin-top: 15rem;
  width: 90vw;
  max-width: 80rem;
  z-index: ${({ theme }) => theme.zIndex.level1};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  width: 95%;
  padding: ${({ theme }) => theme.spacing.medium};
  padding-top: ${({ theme }) => theme.spacing.xl};
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.medium};
  max-width: 50rem;
  width: 70%;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.standOutColor};
  font-size: ${({ theme }) => theme.typogrophy.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  text-transform: uppercase;

  @media(max-width: 600px) {
    font-size: ${({ theme }) => theme.typogrophy.medium};
  }
`
export const Header = styled.h5`
  font-size: ${({ theme }) => theme.typogrophy.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`
export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`
