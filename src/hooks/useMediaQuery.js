import { useState, useEffect } from 'react'

const useMediaQuery = () => {
  const [media, setMedia] = useState({ height: 0, width: 0 })

  useEffect(() => {
    setMedia({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }, [])

  return media
}

export default useMediaQuery