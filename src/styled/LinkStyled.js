import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.standOutColor};
  text-decoration: none;
  transition: all .2s ease;

  :hover {
    text-decoration: underline;
  }
`

export default LinkStyled