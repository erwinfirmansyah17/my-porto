import { useLanguage } from '../language-context'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import './Projects.css'

const workBackgrounds = ['#435ded', '#ffb132', '#c2e5c7', '#c4a7e7', '#f29baf', '#83d4df']

function workBackground(index) {
  return workBackgrounds[index] ?? `hsl(${(210 + (index - workBackgrounds.length) * 137.508) % 360} 38% 84%)`
}

export default function Projects() {
  const { profil, t, language } = useLanguage()
  return <section className="projects-section section-space" id="karya" data-nav><div className="shell">
    <SectionHeading number="02" label={t("SELECTED WORK / 2025—2026")} title={t("Sedikit eksplorasi.")} accent={t("Banyak kemungkinan.")} description={t("Cerita tentang data, computer vision, dan ide yang tumbuh menjadi aplikasi.")} />
    <div className="work-gallery">{profil.karya.map((work,index) => {
      return <AnimatedContent key={work.judul} distance={30} className={`work-card work-card-${index}`}>
        <div className="work-visual" style={{ '--work-background': workBackground(index) }}><span className="work-number" aria-hidden="true">0{index+1}</span><div className="work-image-wrap"><img src={work.gambar} alt={`${language === "en" ? "Application preview:" : "Tampilan aplikasi"} ${work.judul}`} loading="lazy" /></div><span className="work-image-note">{t("a closer look ↗")}</span></div>
        <div className="work-story"><span className="eyebrow">{work.kategori} / {work.tahun}</span><h3>{work.judul}</h3><p className="work-description">{work.deskripsi}</p><p className="work-client">{work.konteks}</p>{work.website ? <a className="work-visit" href={work.website} target="_blank" rel="noopener noreferrer"><span className="round-arrow" aria-hidden="true">↗</span><span>{t("Kunjungi Website")}<span className="sr-only"> {work.judul}</span></span></a> : <button className="work-visit" type="button" disabled><span className="round-arrow" aria-hidden="true">↗</span><span>{t("Kunjungi Website")}<small className="work-unavailable">{t("Belum tersedia")}</small></span></button>}</div>
      </AnimatedContent>
    })}</div>
  </div></section>
}
