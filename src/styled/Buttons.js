import styled from 'styled-components'

export const MainButton = styled.button`
  background: ${({ theme }) => theme.elementBg};
  border: .5px solid;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.boxshadow};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.large};
  height: 3.5rem;
  transition: all .2s ease;
  width: 9rem;

  :hover {
    background: ${({ theme }) => theme.mainBg};
  }
`

export const ToggleThemeBtn = styled(MainButton)`
  color: ${({ theme }) => theme.standOutColor};
`

