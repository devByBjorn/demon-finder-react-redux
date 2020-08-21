import styled from 'styled-components'

export const LinkStyled = styled.a.attrs(props => ({
  color: props.color || 'hsl(0, 0%, 100%)',
  hoverColor: props.hoverColor || '#ffc600'
}))`
  color: ${props => props.color};
  transition: text-dexoration .2s ease;

  :hover {
    color: ${props => props.hoverColor};
    cursor: pointer;
    text-decoration: transparent;
  }
`

export default LinkStyled