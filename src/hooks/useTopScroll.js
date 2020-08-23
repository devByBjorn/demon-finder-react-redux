import { useState, useEffect } from 'react'

const useTopScroll = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScrollMove = () => {
      setScrollTop(window.scrollY)
    }
    document.addEventListener('scroll', handleScrollMove)

    return () => {
      document.removeEventListener('scroll', handleScrollMove)
    }
  }, [scrollTop])

  return scrollTop
}

export default useTopScroll
