import styled from 'styled-components'

export const BlockSpan = styled.span.attrs(props => ({
  fontWeight: props.fontWeight || 'normal',
  textAlign: props.textAlign
}))`
  display: block;
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};
`

export const ColorSpan = styled.span`
  color: ${({ theme }) => theme.standOutColor};
`