// Adapted from React Bits SpotlightCard:
// https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/SpotlightCard
import { useRef } from 'react'
import './react-bits.css'

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(198, 117, 70, .12)' }) {
  const cardRef = useRef(null)

  function handlePointerMove(event) {
    if (event.pointerType === 'touch') return
    const card = cardRef.current
    if (!card) return
    const bounds = card.getBoundingClientRect()
    card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`)
    card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <article
      ref={cardRef}
      className={`rb-spotlight ${className}`}
      style={{ '--spot-color': spotlightColor }}
      onPointerMove={handlePointerMove}
    >
      {children}
    </article>
  )
}
