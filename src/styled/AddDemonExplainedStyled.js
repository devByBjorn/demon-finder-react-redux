import styled from 'styled-components'

export const ExplinationContainer = styled.div`
  display: flex;
  flex-direction: column;

`
export const ExplinationItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  h4 {
    font-size: ${({ theme }) => theme.typogrophy.medium};
  }
`
export const Paragrapgh = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  max-width: 60rem;
  text-align: justify;

  @media(max-width: 850px) {
    max-width: 100%;
  }

  span {
    font-weight: bold;
  }
`