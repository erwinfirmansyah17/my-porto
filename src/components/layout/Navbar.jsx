import { useEffect, useState } from 'react'
import profil from '../../profil-data'
import PillNav from '../react-bits/PillNav'
import './Navbar.css'

const items = [
  { label: 'Profil', href: '#profil' },
  { label: 'Karya', href: '#karya' }, { label: 'Perjalanan', href: '#pengalaman' },
  { label: 'Kontak', href: '#kontak' },
]
export default function Navbar() {
  const [active, setActive] = useState('#beranda')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive('#' + entry.target.id)
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 })
    document.querySelectorAll('[data-nav]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="site-header"><div className="shell"><PillNav items={items} activeHref={active} name={profil.identitas.nama} /></div></header>
}
