import { useLanguage } from '../language-context'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import SectionHeading from '../components/ui/SectionHeading'
import './Background.css'
export default function Background() {
  const { profil, t, language } = useLanguage()
  return <section className="background-section section-space" id="latar-belakang"><div className="shell">
    <SectionHeading number="04" label={t("FOUNDATION / PEOPLE & LEARNING")} title={t("Belajar. Memimpin.")} accent={t("Bertumbuh.")} />
    <div className="background-layout">
      <AnimatedContent distance={28}><h3 className="column-label"><span aria-hidden="true">⌁</span> {t("Pendidikan")}</h3><div className="education-list">{profil.pendidikan.map(item => <article className="education-card" key={item.institusi}><span className="small-label">{item.periode}</span><h4>{item.institusi}</h4><p>{item.jurusan}</p>{item.ipk && <span className="gpa">{language === "en" ? "GPA" : "IPK"} <b>{item.ipk}</b> / {language === "en" ? "4.00" : "4,00"}</span>}</article>)}</div></AnimatedContent>
      <AnimatedContent distance={28} delay={.1}><h3 className="column-label"><span aria-hidden="true">↗</span> {t("Organisasi & kepanitiaan")}</h3><div className="organization-list">{profil.organisasi.map((item, index) => <details key={item.peran} open={index === 0}><summary><span className="small-label">{item.periode}</span><span><strong>{item.peran}</strong><small>{item.organisasi}</small></span><span className="expand-mark" aria-hidden="true">+</span></summary><p>{item.ringkasan}</p></details>)}</div></AnimatedContent>
    </div>
  </div></section>
}
