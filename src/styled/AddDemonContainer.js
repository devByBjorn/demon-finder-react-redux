import styled from 'styled-components'

export const AddDemonContainer = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.large};
  width: 100%;

  @media(max-width: 850px) {
    flex-direction: column-reverse;
    margin: 0 ${({ theme }) => theme.spacing.small};
  }
`

export const Item = styled.div`
  flex: 1;

  :first-child {
    margin-right: 5rem;
    
    @media(max-width: 1050px) {
      margin-right: 2.5rem;
    }

    @media(max-width: 800px) {
      margin-right: 0;
    }
  }

    h3 {
      color: ${({ theme }) => theme.standOutColor};
      font-size: ${({ theme }) => theme.typogrophy.large};
      margin-bottom: ${({ theme }) => theme.spacing.medium};
    }
`