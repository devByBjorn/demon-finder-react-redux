import styled from 'styled-components'
import { MainButton } from './Buttons'

export const TopHeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display:flex;
  align-items: center;
  justify-content: flex-end;

  background: ${({ theme }) => theme.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxshadow};
  height: 9rem;
  max-width: 100vw;
  padding: 0 ${({ theme }) => theme.spacing.large};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.level3};

  @media(max-width: 800px) {
    height: 6rem;
    padding: 0 ${({ theme }) => theme.spacing.medium};
  }

  @media(max-height: 800px) {
    height: 6rem;
    padding: 0 ${({ theme }) => theme.spacing.medium};
  }
`

// Found in Sidemenu component
export const MenuControlBtnStyled = styled(MainButton)`
  position: fixed;
  top: 28px;
  left: 5rem;
  z-index: ${({ theme }) => theme.zIndex.level2};

  @media(max-width: 800px) {
    left: 3.375rem;
    top: 13px;
  }

  @media(max-height: 800px) {
    left: 3.375rem;
    top: 13px;
  }
`