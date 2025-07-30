"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number
  duration?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = "transition-all ease-out"
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} ${durationClass} opacity-0 translate-y-8`
        case "fadeInDown":
          return `${baseClass} ${durationClass} opacity-0 -translate-y-8`
        case "fadeInLeft":
          return `${baseClass} ${durationClass} opacity-0 -translate-x-8`
        case "fadeInRight":
          return `${baseClass} ${durationClass} opacity-0 translate-x-8`
        case "scaleIn":
          return `${baseClass} ${durationClass} opacity-0 scale-95`
        case "slideInUp":
          return `${baseClass} ${durationClass} opacity-0 translate-y-12`
        default:
          return `${baseClass} ${durationClass} opacity-0 translate-y-8`
      }
    } else {
      return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
