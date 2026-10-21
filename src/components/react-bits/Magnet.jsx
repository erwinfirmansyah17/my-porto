// Adapted from React Bits Magnet:
// https://github.com/DavidHDev/react-bits/tree/main/src/content/Animations/Magnet
import { useRef } from 'react'
import './react-bits.css'

export default function Magnet({ children, className = '', strength = 0.15 }) {
  const itemRef = useRef(null)

  function handlePointerMove(event) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const item = itemRef.current
    if (!item) return
    const bounds = item.getBoundingClientRect()
    const x = (event.clientX - bounds.left - bounds.width / 2) * strength
    const y = (event.clientY - bounds.top - bounds.height / 2) * strength
    item.style.setProperty('--magnet-x', `${x}px`)
    item.style.setProperty('--magnet-y', `${y}px`)
  }

  function reset() {
    const item = itemRef.current
    if (!item) return
    item.style.setProperty('--magnet-x', '0px')
    item.style.setProperty('--magnet-y', '0px')
  }

  return (
    <span ref={itemRef} className={`rb-magnet ${className}`} onPointerMove={handlePointerMove} onPointerLeave={reset}>
      {children}
    </span>
  )
}
