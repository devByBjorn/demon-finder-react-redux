import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.large};
  min-height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const MainContent = styled.main`
display: flex;
justify-content: center;
margin: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.small};
width: 100%;

@media(max-height: 500px) {
  margin-top: 7rem;
}

@media(max-width: 600px) {
  margin: 0 ${({ theme }) => theme.spacing.xs};
  margin-top: 5rem;
}
`

