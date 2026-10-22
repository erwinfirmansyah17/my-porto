import { useLanguage } from '../language-context'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import './About.css'

export default function About() {
  const { profil, t, language } = useLanguage()
  return <section className="about-section section-space" id="profil" data-nav><div className="shell profile-collage">
    <AnimatedContent distance={25} className="profile-photo"><img src={profil.identitas.foto || '/portrait-placeholder.svg'} alt={`${language === "en" ? "Photo of" : "Foto"} ${profil.identitas.nama}`} width="600" height="750" loading="lazy" /><span className="photo-scribble" aria-hidden="true">↗</span><a className="orange-label" href="/erwin-firmansyah-cv.pdf" download="CV-Erwin-Firmansyah.pdf">{t("Unduh CV ↗")}</a><span className="photo-index">{t("THE HUMAN BEHIND THE CODE / 01")}</span></AnimatedContent>
    <AnimatedContent distance={25} className="profile-intro"><span className="eyebrow">{t("A LITTLE ABOUT ME")}</span><h2>{t("Hello!")}<strong>I’m {profil.identitas.namaDepan}</strong><span>.</span></h2><p className="profile-lead">{profil.ringkasan.utama}</p><p>{profil.ringkasan.lanjutan}</p>
      <div className="profile-note"><h3>{t("Education")}</h3>{profil.pendidikan.map(item => <div className="profile-education" key={item.institusi}><span>{item.periode}</span><div><strong>{item.institusi}</strong><p>{item.jurusan}{item.ipk && ` · ${language === "en" ? "GPA" : "IPK"} ${item.ipk}`}</p></div></div>)}<h3>{t("At a glance")}</h3><div className="profile-highlights">{profil.sorotan.map(item => <div key={item.label}><strong>{item.nilai}</strong><span>{item.label}</span></div>)}</div></div>
      <div className="profile-tools"><div><span>{t("My everyday toolkit")}</span><div className="software-icons"><span title="Python">Py</span><span title="JavaScript">JS</span><span title="MySQL">SQL</span><span title="Machine Learning">ML</span></div></div></div>
    </AnimatedContent>
  </div></section>
}
