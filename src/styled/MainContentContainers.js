import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.mainBg};
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
  min-height: 100vh;
  justify-content: center;
  width: 100vw;

  @media(max-width: 600px) {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`

export const MainContent = styled.main`
display: flex;
justify-content: center;
margin: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.medium};
width: 100%;

@media(max-width: 600px) {
  margin: 0 ${({ theme }) => theme.spacing.xs};
}
`

