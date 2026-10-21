import profil from '../profil-data'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import SectionHeading from '../components/ui/SectionHeading'
import './Certifications.css'
export default function Certifications() {
  return <section className="certifications-section section-space" id="pelatihan"><div className="shell">
    <SectionHeading number="06" label="CONTINUOUS LEARNING" title="Terus menambah" accent="bekal." />
    <div className="training-list">{profil.sertifikasi.map((group, index) => <AnimatedContent key={group.penyelenggara} distance={25}><div className="training-group"><div><span className="small-label">0{index + 1} / SERTIFIKASI & PELATIHAN</span><h3>{group.penyelenggara}</h3></div><ul>{group.program.map(program => <li key={program}><span aria-hidden="true">↗</span>{program}</li>)}</ul></div></AnimatedContent>)}</div>
  </div></section>
}
