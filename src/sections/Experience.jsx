import { useLanguage } from '../language-context'
import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import SpotlightCard from '../components/react-bits/SpotlightCard'
import './Experience.css'
export default function Experience() {
  const { profil, t } = useLanguage()
  const [selected, setSelected] = useState(0)
  const current = profil.pengalaman[selected]
  return <section className="experience-section section-space" id="pengalaman" data-nav><div className="shell">
    <SectionHeading number="03" label={t("EXPERIENCE / FLIGHT LOG")} title={t("Setiap peran,")} accent={t("perspektif baru.")} />
    <div className="experience-layout">
      <div className="experience-selector" role="group" aria-label={t("Pilih pengalaman kerja")}>{profil.pengalaman.map((item, index) => <button key={item.organisasi} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}><span className="log-index">0{index + 1}</span><span><small>{item.periode}</small><strong>{item.peran}</strong></span><span className="log-arrow" aria-hidden="true">↗</span></button>)}</div>
      <AnimatedContent key={selected} distance={16} duration={.45}><SpotlightCard className="experience-detail" spotlightColor="rgba(131,185,252,.1)"><div aria-live="polite"><span className="eyebrow">LOG 0{selected + 1} / {current.periode}</span><h3>{current.peran}</h3><p className="experience-company">{current.organisasi}</p><ul>{current.poin.map(point => <li key={point}>{point}</li>)}</ul></div><span className="detail-cross" aria-hidden="true">+</span></SpotlightCard></AnimatedContent>
    </div>
  </div></section>
}
