import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
  min-height: 95vh;
  justify-content: center;
  width: 100vw;
`

export const MainContent = styled.main`
display: flex;
align-items: center;
justify-content: center;
margin: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.small};
width: 100%;

@media(max-height: 500px) {
  margin-top: 7rem;
}

@media(max-width: 600px) {
  margin-top: 5rem;
}
`