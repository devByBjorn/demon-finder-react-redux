import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Row, Title, RowLeftSpan } from './DemonRowStyled'

export const Container = styled.div`
  background: ${({ theme }) => theme.mainBg};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxshadow};
  margin: ${({ theme }) => theme.spacing.large};
  max-width: 95vw;
  min-height: 61rem;
  width: 140rem;
  padding-bottom: 2rem;

  @media(max-width: 850px) {
    margin: ${({ theme }) => theme.spacing.small};
  }
`
export const Top = styled.div`
  background: ${({ theme }) => theme.mainBg};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
  width: 100%;

  p {
    margin-right: ${({ theme }) => theme.spacing.small};

    @media(max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`
export const iconBaseStyle = css`
  border-radius: 5px;
  color: ${({ theme }) => theme.standOutColor};
  font-size: ${({ theme }) => theme.typogrophy.large};
  padding: ${({ theme }) => theme.spacing.xss};
  text-decoration: none;
  transition: box-shadow .2s ease;

  :hover {
    box-shadow: ${({ theme }) => theme.boxshadow};
  }

  @media(max-width: 850px) {
    font-size: ${({ theme }) => theme.typogrophy.medium};
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  @media(max-width: 400px) {
    font-size: ${({ theme }) => theme.typogrophy.small};
  }
`
export const AddIcon = styled(NavLink)`
  ${iconBaseStyle}
`
export const TopHeading = styled.h3`
  font-size: ${({ theme }) => theme.typogrophy.xl};
  text-transform: capitalize;

  @media(max-width: 600px) {
    font-size: ${({ theme }) => theme.typogrophy.large};
  }
`
export const TopRow = styled(Row)`
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.contrast};
  border-top: 2px solid ${({ theme }) => theme.contrast};
  border-left: 2px solid transparent;
  font-size: ${({ theme }) => theme.typogrophy.large};
  font-weight: ${({ theme }) => theme.fontWeight.xl};

  :hover {
    cursor: default;
    border-left: 2px solid transparent;
  }

  @media(max-width: 850px) {
    align-items: initial;
    font-size: ${({ theme }) => theme.typogrophy.medium};
  }
`
export const TopRowLeftSpan = styled(RowLeftSpan)`
  @media(max-width: 600px) {
    :first-child {
      display: none;
    }
  }
`
export const TopRowTitle = styled(Title)`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.typogrophy.large};
  white-space: no-wrap;

  :hover {
    cursor: default;
  }

  @media(max-width: 850px) {
    font-size: ${({ theme }) => theme.typogrophy.medium};
  }

  @media(max-width: 600px) {
    display: none;
  }
`
