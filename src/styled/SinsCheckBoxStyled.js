import styled, { css } from 'styled-components'
import { CloseIcon, CircleIcon } from '../components/icons/IconsComponents'

export const Label = styled.label.attrs(props => ({
  background: props.background || 'transparent',
  opacity: props.opacity
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.background};
    border-radius: 5px;
    border: 1px dotted;
    height: 4rem;
    opacity: ${props => props.opacity};
    width: 4rem;
    transition: all .2s ease;
`
export const Input = styled.input.attrs(props => ({
  opacity: props.opacity
}))`
    display: none;
`

const circleBase = css`
font-size: 3.5rem;
opacity: 0.2;

@media(max-width: 850px) {
  font-size: 2.5rem;
}
`

export const Circle = styled(CircleIcon)`
  ${circleBase}
`
export const CircleChecked = styled(CloseIcon)`
  ${circleBase}
  color: #f67e7e;
  opacity: 1;
`


