'use client'

import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -500, y: -500 })
  const lag = useRef({ x: -500, y: -500 })
  const rafId = useRef<number>(0)
  const revealed = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      root.style.setProperty('--mx', e.clientX + 'px')
      root.style.setProperty('--my', e.clientY + 'px')

      if (!revealed.current) {
        revealed.current = true
        if (dotRef.current) dotRef.current.style.opacity = '1'
        if (ringRef.current) ringRef.current.style.opacity = '1'
      }

      const isInteractive = !!(e.target as Element).closest(
        'a, button, [role="button"], label, input, textarea, select'
      )
      ringRef.current?.classList.toggle(styles.ringHover, isInteractive)
      dotRef.current?.classList.toggle(styles.dotHover, isInteractive)
    }

    const tick = () => {
      lag.current.x += (mouse.current.x - lag.current.x) * 0.1
      lag.current.y += (mouse.current.y - lag.current.y) * 0.1
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${lag.current.x}px, ${lag.current.y}px)`
      rafId.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      root.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
