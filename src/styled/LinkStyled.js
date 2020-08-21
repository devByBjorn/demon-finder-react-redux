import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`

  color: ${({ theme }) => theme.text};
  transition: text-dexoration .2s ease;

  :hover {
    color: ${({ theme }) => theme.standOutColor};
    text-decoration: transparent;
  }
`

export default LinkStyled