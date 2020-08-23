import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useTopScroll from '../../hooks/useTopScroll'

const TopScroll = ({ children }) => {
  const { pathname } = useLocation()
  const top = useTopScroll()

  useEffect(() => {
    if (top > 0) window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default TopScroll