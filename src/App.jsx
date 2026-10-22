import { useLanguage } from './language-context'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Background from './sections/Background'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import './App.css'
import './editorial.css'

export default function App() {
  const { t } = useLanguage()
  return <>
    <a className="skip-link" href="#main-content">{t("Lewati navigasi")}</a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Background />
      <Skills />
      <Certifications />
      <Contact />
    </main>
    <Footer />
  </>
}
