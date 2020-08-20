import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const iconBaseStyle = css`
  border-radius: 5px;
  color: ${({ theme }) => theme.standOutColor};
  font-size: ${({ theme }) => theme.typogrophy.large};
  padding: 0 ${({ theme }) => theme.spacing.xss};
  text-decoration: none;
  transition: box-shadow .2s ease;

  :hover {
    box-shadow: ${({ theme }) => theme.boxshadow};
  }
`

export const AddIcon = styled(NavLink)`
  ${iconBaseStyle}
`
