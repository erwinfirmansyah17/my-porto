// React Bits DecryptedText adaptation: view/hover reveal with accessible static text.
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

export default function DecryptedText({ text, className = '', animateOn = 'view', speed = 35 }) {
  const [display, setDisplay] = useState(text)
  const node = useRef(null)
  const timer = useRef(null)
  const reduce = useReducedMotion()
  useEffect(() => {
    const element = node.current
    let finished = false
    const start = () => {
      if (reduce || finished) return
      finished = true
      let step = 0
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      timer.current = window.setInterval(() => {
        step += 1
        setDisplay(text.split('').map((char, index) => char === ' ' || index < step
          ? char : characters[Math.floor(Math.random() * characters.length)]).join(''))
        if (step >= text.length) clearInterval(timer.current)
      }, speed)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && animateOn === 'view') start()
    })
    observer.observe(element)
    element.addEventListener('pointerenter', start)
    return () => { clearInterval(timer.current); observer.disconnect(); element.removeEventListener('pointerenter', start) }
  }, [text, speed, reduce, animateOn])
  return <span ref={node} className={className}><span className="sr-only">{text}</span><span aria-hidden="true">{reduce ? text : display}</span></span>
}
