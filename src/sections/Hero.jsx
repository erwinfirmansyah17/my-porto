import profil from '../profil-data'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import './Hero.css'

export default function Hero() {
  return <section className="hero-section" id="beranda" data-nav><div className="shell">
    <AnimatedContent distance={24} className="folder-cover">
      <span className="folder-tab">2025 — 2026</span>
      <div className="cover-stickers">
        <a href="#keahlian" className="sticker sticker-code"><small>CURIOUS MIND / CREATIVE CODE</small><strong>BUILDING<br />WITH DATA.</strong><span>PYTHON · WEB · MACHINE LEARNING</span></a>
        <a href="#karya" className="sticker sticker-holo"><span>EXPLORE THE POSSIBILITIES</span><strong>DATA<br />SCIENCE</strong><small>✦ ANALYZE · DISCOVER ✦</small></a>
        <a href="#pengalaman" className="sticker sticker-ticket"><span className="ticket-face" aria-hidden="true">☺</span><span><strong>TURN IDEAS INTO IMPACT</strong><small>DEVELOPMENT / NETWORKING</small><i className="ticket-barcode" aria-hidden="true" /></span></a>
        <a href="#karya" className="sticker sticker-disc"><span>COMPUTER</span><strong>VISION</strong><small>YOLO / PYTHON</small></a>
        <span className="sticker-spark" aria-hidden="true">✦</span>
      </div>
      <div className="folder-title"><h1>Port<br />folio<span className="title-dot">.</span></h1><span className="cover-volume">Vol.1</span></div>
      <a className="cover-enter" href="#profil" aria-label="Kenali Erwin Firmansyah"><span aria-hidden="true">↘</span></a>
      <span className="folder-caption">SELECTED WORKS / {profil.identitas.lokasi.toUpperCase()}, INDONESIA</span>
    </AnimatedContent>
    <div className="cover-bottom"><span>LOGIC MEETS CURIOSITY.</span><a href="#karya">BUKA KOLEKSI KARYA ↗</a></div>
  </div></section>
}
