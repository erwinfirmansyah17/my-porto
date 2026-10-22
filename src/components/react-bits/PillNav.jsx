import { useLanguage } from '../../language-context'
// React Bits PillNav adaptation. Upstream circle reveal retained; native anchors and accessible mobile navigation.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './PillNav.css'

export default function PillNav({ items, activeHref, name }) {
  const { t, language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const root = useRef(null)
  const trigger = useRef(null)
  const timelines = useRef([])
  useEffect(() => {
    const element = root.current
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const links = element.querySelectorAll('.pill-link')
      links.forEach((link, index) => {
        const circle = link.querySelector('.pill-circle')
        const label = link.querySelector('.pill-label')
        const hover = link.querySelector('.pill-label-hover')
        const timeline = gsap.timeline({ paused: true })
          .fromTo(circle, { scale: 0 }, { scale: 1.2, duration: .35, ease: 'power3.out' }, 0)
          .to(label, { y: -35, duration: .25 }, 0)
          .fromTo(hover, { y: 35 }, { y: 0, duration: .25 }, 0)
        timelines.current[index] = timeline
      })
      return () => { timelines.current.forEach(t => t.kill()); timelines.current = [] }
    })
    return () => mm.revert()
  }, [items])
  useEffect(() => {
    if (!open) return
    const outside = event => { if (!root.current?.contains(event.target)) setOpen(false) }
    const escape = event => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape) }
  }, [open])
  const enter = index => timelines.current[index]?.play()
  const leave = index => timelines.current[index]?.reverse()
  return (
    <nav ref={root} className="pill-nav" aria-label={t("Navigasi utama")}>
      <a href="#beranda" className="nav-discipline" onClick={() => setOpen(false)}>Data &amp; Development</a>
      <div className="pill-nav-links">
        {items.map((item, index) => (
          <a key={item.href} className="pill-link" href={item.href} aria-current={activeHref === item.href ? 'location' : undefined}
            onMouseEnter={() => enter(index)} onMouseLeave={() => leave(index)} onFocus={() => enter(index)} onBlur={() => leave(index)}>
            <span className="pill-circle" aria-hidden="true" /><span className="pill-label">{item.label}</span><span className="pill-label-hover" aria-hidden="true">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="nav-profile-controls">
      <div className="language-switch" role="group" aria-label={language === 'en' ? 'Language' : 'Bahasa'}>
        {['id', 'en'].map(code => <button key={code} type="button" lang={code} aria-label={code === 'id' ? 'Bahasa Indonesia' : 'English'} aria-pressed={language === code} onClick={() => setLanguage(code)}>{code.toUpperCase()}</button>)}
      </div>
      <a href="#profil" className="nav-owner" onClick={() => setOpen(false)}>{name}</a>
      </div>
      <button ref={trigger} type="button" className="nav-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={t(open ? 'Tutup menu' : 'Buka menu')} onClick={() => setOpen(!open)}><span /><span /></button>
      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        {items.map(item => <a key={item.href} href={item.href} aria-current={activeHref === item.href ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>)}
      </div>
    </nav>
  )
}
