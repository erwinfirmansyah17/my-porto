import profil from '../profil-data'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import './Projects.css'

export default function Projects() {
  return <section className="projects-section section-space" id="karya" data-nav><div className="shell">
    <SectionHeading number="02" label="SELECTED WORK / 2025—2026" title="Sedikit eksplorasi." accent="Banyak kemungkinan." description="Cerita tentang data, computer vision, dan ide yang tumbuh menjadi aplikasi." />
    <div className="work-gallery">{profil.karya.map((work,index) => {
      const project = profil.project?.find(entry => entry.nama === work.judul)
      return <AnimatedContent key={work.judul} distance={30} className={`work-card work-card-${index}`}>
        <div className="work-visual"><span className="work-number" aria-hidden="true">0{index+1}</span><div className="work-image-wrap"><img src={work.gambar} alt={`Tampilan aplikasi ${work.judul}`} loading="lazy" /></div><span className="work-image-note">a closer look ↗</span></div>
        <div className="work-story"><span className="eyebrow">{work.kategori} / {work.tahun}</span><h3>{work.judul}</h3><p className="work-description">{project?.deskripsi || work.deskripsi}</p><p className="work-client">{work.konteks}</p>{project?.link && <a className="work-visit" href={project.link} target="_blank" rel="noopener noreferrer"><span className="round-arrow" aria-hidden="true">↗</span><span>Lihat repositori<span className="sr-only"> {work.judul}</span></span></a>}</div>
      </AnimatedContent>
    })}</div>
  </div></section>
}
