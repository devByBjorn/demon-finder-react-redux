import styled, { css } from 'styled-components'

export const AddDemonFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 850px) {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`

export const DemonFormItem = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.large};
`
const baseInputStyles = css`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.typogrophy.medium};
  padding: ${({ theme }) => theme.spacing.xs};
  transition: border .3s ease;
  width: 95%;

  &::placeholder {
    opacity: .5;
    transition: border .3s ease;
  }

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.secondaryBg};
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.text};
      opacity: 1;
    }
  }

  @media(max-width: 600px) {
    width: 100%;
  }
`

export const DemonFormInput = styled.input`
  ${baseInputStyles}
`

export const DemonFormTextArea = styled.textarea`
  ${baseInputStyles}
`

export const DemonFormError = styled.small`
  color: #f67e7e;
`