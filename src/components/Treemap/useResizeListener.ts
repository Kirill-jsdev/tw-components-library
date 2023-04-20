import { useState, useCallback, useEffect, useRef } from 'react'

type SetElement = (element: HTMLElement | null) => void
export type Dimensions = { width: number; height: number }

export function useResizeListener(): [SetElement, Dimensions | undefined] {
  const element = useRef<HTMLElement | null>()
  const [dimensions, setDimensions] = useState<Dimensions>()

  useEffect(() => {
    const resizeHandler = () => {
      if (!element.current) return
      setDimensions({ width: element.current.clientWidth, height: element.current.clientHeight })
    }

    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  const setElement = useCallback((domElement: HTMLElement | null) => {
    if (domElement) setDimensions({ width: domElement.clientWidth, height: domElement.clientHeight })
    element.current = domElement
  }, [])

  return [setElement, dimensions]
}
