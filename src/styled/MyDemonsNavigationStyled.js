import styled from 'styled-components'

export const MyDemonsNavigationStyled = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.mainBg};
  border-radius: 50%;
  bottom: 2rem;
  right: ${({ theme }) => theme.spacing.large};
  font-size: 4rem;
  opacity: 0.95;
  padding: 2px 8px 0px 8px;
  transition: color .2s ease;
`