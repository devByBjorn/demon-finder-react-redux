import styled from 'styled-components'

export const LogoStyled = styled.h1.attrs(props => ({
  position: props.position || 'relative',
  bottom: props.bottom || 'initial',
  left: props.left || 'initial',
  right: props.right || 'initial',
  top: props.top || 'initial',
  padding: props.padding || '0rem'
}))`
  position: ${props => props.position};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  top: ${props => props.top};
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1;
  padding: ${props => props.padding};
  width: 30rem;
`