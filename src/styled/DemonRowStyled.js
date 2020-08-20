import styled from 'styled-components'
import CircleIcon from '../components/icons/IconsComponents'

export const Row = styled.div`
  display: flex;
  border-left: 2px solid transparent;
  padding: ${({ theme }) => theme.spacing.xs};

  :nth-child(odd) {
    background: ${({ theme }) => theme.secondaryBg};
  }

  :nth-child(even) {
    background: ${({ theme }) => theme.elementBg};
  }

  &:hover {
    border-left: 2px solid ${({ theme }) => theme.standOutColor};
  }

  @media(max-width: 600px) {
    flex-direction:column;
    padding: 0;
  }
`
// Left span
export const RowLeftSpan = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.small};

  @media(max-width: 600px) {
    align-items: initial;
    border-bottom: 1px solid ${({ theme }) => theme.mainBg};
    flex-direction: column-reverse;
    padding: ${({ theme }) => theme.spacing.xs};
  }
`
export const HandleDemon = styled.div`
  flex: 1;
  display: flex;

  div:first-child {
    margin-right: 1rem;
  }
`
export const Title = styled.h5`
  flex: 2;
  color: ${({ theme }) => theme.standOutColor};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typogrophy.medium};
  text-transform: uppercase;
  white-space: no-wrap;

  @media(max-width: 600px) {
    flex: 1;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`

//Right span
export const RowRightSpan = styled.div`
  flex: 2;
  display: flex;

  @media(max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.xs};
  }
`

export const Count = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 600px) {
    justify-content: left;
  }
`



