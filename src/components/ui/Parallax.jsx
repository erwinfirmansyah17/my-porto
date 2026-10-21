import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Parallax({ children, distance = 45, className = '' }) {
  const outer = useRef(null)
  const inner = useRef(null)
  useEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference) and (min-width: 801px)', () => {
      gsap.fromTo(inner.current, { y: -distance }, {
        y: distance, ease: 'none',
        scrollTrigger: { trigger: outer.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      })
    })
    return () => media.revert()
  }, [distance])
  return <div className={className} ref={outer}><div ref={inner}>{children}</div></div>
}
