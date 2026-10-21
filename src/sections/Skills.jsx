import profil from '../profil-data'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import './Skills.css'
const symbols = ['{ }', '</>', '↗', '✳']
export default function Skills() {
  return <section className="skills-section section-space" id="keahlian"><div className="shell"><SectionHeading number="05" label="THE TOOLKIT / CAPABILITIES" title="Logika, teknologi," accent="dan kolaborasi." description="Perangkat yang saya gunakan untuk mengubah pertanyaan menjadi solusi." /><div className="capability-grid">{profil.keahlian.map((group,index) => <AnimatedContent key={group.kategori} distance={20} className="capability-card"><div className="capability-top"><span>CAPABILITY / 0{index+1}</span><b aria-hidden="true">{symbols[index]}</b></div><h3>{group.kategori}</h3><div className="capability-tags">{group.daftar.map(item => <span key={item}>{item}</span>)}</div></AnimatedContent>)}</div></div></section>
}
