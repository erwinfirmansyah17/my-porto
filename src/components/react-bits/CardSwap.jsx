// React Bits CardSwap, adapted from DavidHDev/react-bits (MIT + Commons Clause).
// Preserves the upstream drop/promote/return GSAP sequence; adds controls and motion preferences.
import { Children, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import gsap from 'gsap'
import './CardSwap.css'

const slot = (index, gap, rise, total) => ({
  x: index * gap, y: -index * rise, z: -index * gap * 1.5, zIndex: total - index,
})

const CardSwap = forwardRef(function CardSwap({
  children, delay = 5500, paused = false, onChange, className = '',
}, ref) {
  const container = useRef(null)
  const controls = useRef({})
  const pausedRef = useRef(paused)
  const count = Children.count(children)

  useEffect(() => {
    pausedRef.current = paused
    controls.current.schedule?.()
  }, [paused])

  useImperativeHandle(ref, () => ({
    next: () => controls.current.next?.(),
    previous: () => controls.current.previous?.(),
  }), [])

  useEffect(() => {
    const node = container.current
    const cards = Array.from(node.children)
    const media = gsap.matchMedia()
    media.add({
      reduced: '(prefers-reduced-motion: reduce)',
      mobile: '(max-width: 700px)',
      all: '(min-width: 0px)',
    }, context => {
      const { reduced, mobile } = context.conditions
      const gap = mobile ? 18 : 34
      const rise = mobile ? 17 : 27
      let order = cards.map((_, i) => i)
      let timeline
      let timer
      let hovering = false
      let visible = true
      let focused = false

      const place = () => cards.forEach((card, i) => gsap.set(card, {
        ...slot(order.indexOf(i), gap, rise, count),
        rotation: 0, transformOrigin: 'center center', force3D: true,
      }))
      const announce = () => {
        cards.forEach((card, index) => {
          card.setAttribute('aria-hidden', index !== order[0] ? 'true' : 'false')
          card.inert = index !== order[0]
        })
        onChange?.(order[0])
      }
      const schedule = () => {
        clearInterval(timer)
        if (!pausedRef.current && !reduced && visible && !hovering && !focused && !document.hidden) {
          timer = window.setInterval(() => swap(1), delay)
        }
      }
      const swap = (direction) => {
        if (count < 2 || timeline?.isActive()) return
        if (reduced || direction < 0) {
          order = direction < 0 ? [order.at(-1), ...order.slice(0, -1)] : [...order.slice(1), order[0]]
          place()
          announce()
          return
        }
        const [front, ...rest] = order
        const frontCard = cards[front]
        timeline = gsap.timeline({
          onComplete: () => { order = [...rest, front]; announce() },
        })
        timeline.to(frontCard, { y: 310, rotation: -5, duration: .65, ease: 'power2.inOut' })
        timeline.addLabel('promote', '-=.3')
        rest.forEach((index, i) => {
          const next = slot(i, gap, rise, count)
          timeline.set(cards[index], { zIndex: next.zIndex }, 'promote')
          timeline.to(cards[index], { ...next, duration: .7, ease: 'power3.inOut' }, 'promote')
        })
        const back = slot(count - 1, gap, rise, count)
        timeline.set(frontCard, { zIndex: back.zIndex }, 'promote+=.2')
        timeline.to(frontCard, { ...back, rotation: 0, duration: .85, ease: 'power3.inOut' }, 'promote+=.2')
      }
      controls.current = {
        schedule,
        next: () => { swap(1); schedule() },
        previous: () => { swap(-1); schedule() },
      }
      place()
      announce()
      const enter = () => { hovering = true; clearInterval(timer) }
      const leave = () => { hovering = false; schedule() }
      const focusIn = () => { focused = true; clearInterval(timer) }
      const focusOut = event => { if (!node.contains(event.relatedTarget)) { focused = false; schedule() } }
      const visibility = () => { document.hidden ? timeline?.pause() : timeline?.resume(); schedule() }
      node.addEventListener('pointerenter', enter)
      node.addEventListener('pointerleave', leave)
      node.addEventListener('focusin', focusIn)
      node.addEventListener('focusout', focusOut)
      document.addEventListener('visibilitychange', visibility)
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        visible ? timeline?.resume() : timeline?.pause()
        schedule()
      })
      observer.observe(node)
      schedule()
      return () => {
        clearInterval(timer)
        timeline?.kill()
        gsap.killTweensOf(cards)
        observer.disconnect()
        node.removeEventListener('pointerenter', enter)
        node.removeEventListener('pointerleave', leave)
        node.removeEventListener('focusin', focusIn)
        node.removeEventListener('focusout', focusOut)
        document.removeEventListener('visibilitychange', visibility)
      }
    })
    return () => media.revert()
  }, [count, delay, onChange])

  return (
    <div ref={container} className={`card-swap-container ${className}`} role="group" aria-label="Kartu fokus profesional">
      {Children.map(children, (child, index) => (
        <div className="swap-card" role="group" aria-label={`Kartu ${index + 1} dari ${count}`}>{child}</div>
      ))}
    </div>
  )
})

export default CardSwap
