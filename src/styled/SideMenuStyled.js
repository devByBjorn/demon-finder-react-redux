import styled from 'styled-components'

export const SideMenuStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxshadow};
  overflow-y: auto;
  overflow-x: hidden;
  transition: all ease .5s;
  white-space: nowrap;
  z-index: ${({ theme }) => theme.zIndex.level4};
`

export const SideMenuNav = styled.nav`
  display:flex;
  margin: ${({ theme }) => theme.spacing.large} 0;

  ul {
    display: inherit;
    flex-direction: column;
    list-style: none;
    padding: ${({ theme }) => theme.spacing.medium} 0;
    width: 100%;
  }

  li {
    text-transform: capitalize;
    width: 100%;

    :first-child {
      border-top: 2px solid #e0e0e0;
    }

    :last-child {
      border-bottom: 2px solid #e0e0e0;
    }
  }

  a {
    display: block;
    height: 100%;
    padding: ${({ theme }) => theme.spacing.xs} 0;
    padding-left: ${({ theme }) => theme.spacing.large};
    transition: background .2s ease;
    width: 100%;

    &:hover {
      background: ${({ theme }) => theme.elementBg};
    }
  }
`

export const CloseMenu = styled.div`
display: flex;
align-items: center;
padding: 0 ${ ({ theme }) => theme.spacing.large};
`

