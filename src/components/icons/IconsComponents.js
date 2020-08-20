import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trashcan, edit, questionMark, plusSquare, close, arrowLeft, circle } from '../../assets/icons-library/library'

const FontAwesomeIconStyled = styled(FontAwesomeIcon).attrs(props => ({
  color: props.color,
  fontSize: props.fontSize,
  hovercolor: props.hovercolor
}))`
  color: ${props => props.color};
  cursor: pointer;
  font-size: ${props => props.fontSize};
  transition: color .2s ease;

  :hover {
    color: ${props => props.hovercolor};
  }
`

export const TrashIcon = props => (
  <div>
    <FontAwesomeIconStyled
      {...props}
      icon={trashcan} />
  </div>
)

export const EditIcon = props => (
  <div>
    <FontAwesomeIconStyled
      {...props}
      icon={edit} />
  </div>
)

export const QuestionIcon = props => (
  <div>
    <FontAwesomeIconStyled
      {...props}
      icon={questionMark} />
  </div>
)

export const PlusSquareIcon = props => (
  <>
    <FontAwesomeIconStyled
      {...props}
      icon={plusSquare}
    />
  </>
)
export const CloseIcon = props => (
  <FontAwesomeIconStyled
    {...props}
    icon={close}
  />
)

export const ArrowLeftIcon = props => (
  <>
    <FontAwesomeIconStyled
      {...props}
      icon={arrowLeft}
    />
  </>
)

export const CircleIcon = props => (
  <FontAwesomeIconStyled
    {...props}
    icon={circle}
  />
)



