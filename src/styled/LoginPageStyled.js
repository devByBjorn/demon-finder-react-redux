import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
  max-width: 90rem;

  h1 {
    font-size: ${({ theme }) => theme.typogrophy.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.typogrophy.large};
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.small};
    max-width: 53.5rem;
  }
`

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xs};
  width: 20rem;
`