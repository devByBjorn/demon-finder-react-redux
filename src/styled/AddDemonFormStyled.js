import styled, { css } from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 850px) {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`
export const FormItem = styled.div`
  min-width: 60rem;
  padding: ${({ theme }) => theme.spacing.medium} 0;

  @media(max-width: 1050px) {
    min-width: 40rem;
  }

  @media(max-width: 600px) {
    min-width: 20rem;
  }
`
const baseInputStyles = css`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.typogrophy.medium};
  outline: none;
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

export const FormInput = styled.input`
  ${baseInputStyles}
`

export const FormTextArea = styled.textarea`
  ${baseInputStyles}
`

export const FormError = styled.small`
  color: #f67e7e;
`