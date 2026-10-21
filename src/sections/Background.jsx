import profil from '../profil-data'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import SectionHeading from '../components/ui/SectionHeading'
import './Background.css'
export default function Background() {
  return <section className="background-section section-space" id="latar-belakang"><div className="shell">
    <SectionHeading number="04" label="FOUNDATION / PEOPLE & LEARNING" title="Belajar. Memimpin." accent="Bertumbuh." />
    <div className="background-layout">
      <AnimatedContent distance={28}><h3 className="column-label"><span aria-hidden="true">⌁</span> Pendidikan</h3><div className="education-list">{profil.pendidikan.map(item => <article className="education-card" key={item.institusi}><span className="small-label">{item.periode}</span><h4>{item.institusi}</h4><p>{item.jurusan}</p>{item.ipk && <span className="gpa">IPK <b>{item.ipk}</b> / 4,00</span>}</article>)}</div></AnimatedContent>
      <AnimatedContent distance={28} delay={.1}><h3 className="column-label"><span aria-hidden="true">↗</span> Organisasi & kepanitiaan</h3><div className="organization-list">{profil.organisasi.map((item, index) => <details key={item.peran} open={index === 0}><summary><span className="small-label">{item.periode}</span><span><strong>{item.peran}</strong><small>{item.organisasi}</small></span><span className="expand-mark" aria-hidden="true">+</span></summary><p>{item.ringkasan}</p></details>)}</div></AnimatedContent>
    </div>
  </div></section>
}
