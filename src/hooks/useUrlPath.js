import { useState, useEffect } from 'react'

const useUrlPath = activePath => {
  const [path, setPath] = useState('')
  const [pathMatch, setPathMatch] = useState(false)

  useEffect(() => {
    setPath(window.location.pathname)
    if (path === activePath) setPathMatch(true)
  }, [path, pathMatch])

  return pathMatch
}

export default useUrlPath