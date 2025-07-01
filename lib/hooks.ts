import { useState, useEffect } from 'react'

export function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return isClient
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    // Set initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return { scrollY, isClient }
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    // Set initial size
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return { windowSize, isClient }
} 