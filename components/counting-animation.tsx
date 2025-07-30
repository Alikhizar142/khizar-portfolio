"use client"

import { useEffect, useState, useRef } from "react"

interface CountingAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function CountingAnimation({ 
  end, 
  duration = 2000, 
  suffix = "", 
  className = "" 
}: CountingAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount()
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated])

  const animateCount = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
} 