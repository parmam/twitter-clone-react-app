import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState>({
    width: undefined,
    height: undefined,
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    console.log(windowSize.width)
    return () => window.removeEventListener('resize', handleResize)

  }, [windowSize.width])
  return [windowSize, isMobile]
}
