import { useLanguage } from '../language-context'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import './Hero.css'

export default function Hero() {
  const { profil, t } = useLanguage()
  return <section className="hero-section" id="beranda" data-nav><div className="shell">
    <AnimatedContent distance={24} className="folder-cover">
      <span className="folder-tab">2025 — 2026</span>
      <div className="cover-stickers">
        <a href="#keahlian" className="sticker sticker-code"><small>{t("CURIOUS MIND / CREATIVE CODE")}</small><strong>{t("BUILDING")}<br />{t("WITH DATA.")}</strong><span>PYTHON · WEB · MACHINE LEARNING</span></a>
        <a href="#karya" className="sticker sticker-holo"><span>{t("EXPLORE THE POSSIBILITIES")}</span><strong>DATA<br />SCIENCE</strong><small>{t("✦ ANALYZE · DISCOVER ✦")}</small></a>
        <a href="#pengalaman" className="sticker sticker-ticket"><span className="ticket-face" aria-hidden="true">☺</span><span><strong>{t("TURN IDEAS INTO IMPACT")}</strong><small>{t("DEVELOPMENT / NETWORKING")}</small><i className="ticket-barcode" aria-hidden="true" /></span></a>
        <a href="#karya" className="sticker sticker-disc"><span>COMPUTER</span><strong>VISION</strong><small>YOLO / PYTHON</small></a>
        <span className="sticker-spark" aria-hidden="true">✦</span>
      </div>
      <div className="folder-title"><h1>Port<br />folio<span className="title-dot">.</span></h1><span className="cover-volume">Vol.1</span></div>
      <a className="cover-enter" href="#profil" aria-label={t("Kenali Erwin Firmansyah")}><span aria-hidden="true">↘</span></a>
      <span className="folder-caption">{t("SELECTED WORKS")} / {profil.identitas.lokasi.toUpperCase()}, INDONESIA</span>
    </AnimatedContent>
    <div className="cover-bottom"><span>{t("LOGIC MEETS CURIOSITY.")}</span><a href="#karya">{t("BUKA KOLEKSI KARYA ↗")}</a></div>
  </div></section>
}
