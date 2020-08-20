import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const activeClassName = 'active'

export const NavLinkStyled = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &.${activeClassName} {
    color: ${({ theme }) => theme.standOutColor};
  }
`

export default NavLinkStyled

