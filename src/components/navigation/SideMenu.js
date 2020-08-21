import React, { useRef, useState, useEffect } from 'react'
import NavLinkStyled from '../../styled/NavLinkStyled'
import Logo from '../logo/Logo'
import {
  SideMenuStyled,
  SideMenuNav,
  CloseMenu,
} from '../../styled/SideMenuStyled'
import { MainButton } from '../../styled/Buttons'
import MenuControlBtn from '../utils/MenuControlBtn'

const SideMenu = () => {
  const node = useRef()
  const [width, setWidth] = useState('0rem')
  const [textContent, setTextContent] = useState('Menu')

  const toggleMenu = () => {
    if (width === '0rem') {
      setWidth('30rem')
      setTextContent('Close')
    } else {
      setWidth('0rem')
      setTextContent('Menu')
    }
  }

  const toggleOnOutside = (e) => {
    if (node.current.contains(e.target)) {
      return
    }
    setWidth('0rem')
    setTextContent('Menu')
  }

  useEffect(() => {
    document.addEventListener('mousedown', toggleOnOutside)

    return () => {
      document.removeEventListener('mousedown', toggleOnOutside)
    }
  }, [])

  return (
    <div ref={node}>
      <MenuControlBtn
        onClick={toggleMenu}
        textContent={textContent}
      />
      <SideMenuStyled style={{ width: width }}>
        <Logo padding="0 5rem" />
        <SideMenuNav>
          <ul>
            <li>
              <NavLinkStyled to="/demons">My demons</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/add">Add demon</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/example">Example</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/original">Original demon finder</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/contact">Contact</NavLinkStyled>
            </li>
          </ul>
        </SideMenuNav>
      </SideMenuStyled>
    </div>
  )
}

export default SideMenu