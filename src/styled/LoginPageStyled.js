import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70vh;
  max-width: 90rem;

  h2 {
    font-size: ${({ theme }) => theme.typogrophy.large};
  }

  h5 {
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