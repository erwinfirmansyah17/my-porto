import { useLanguage } from '../language-context'
import { useState } from 'react'
import Magnet from '../components/react-bits/Magnet'
import AnimatedContent from '../components/react-bits/AnimatedContent'
import DecryptedText from '../components/react-bits/DecryptedText'
import Parallax from '../components/ui/Parallax'
import './Contact.css'
export default function Contact() {
  const { profil, t } = useLanguage()
  const [status, setStatus] = useState('')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profil.identitas.email); setStatus('Alamat email tersalin.') }
    catch { setStatus('Belum bisa menyalin. Gunakan tautan email di atas.') }
  }
  return <section className="contact-section section-space" id="kontak" data-nav>
    <Parallax className="contact-orbits" distance={75}><div className="celestial-ring" /></Parallax>
    <div className="shell contact-layout">
      <AnimatedContent distance={28}><div className="section-label"><span>07 /</span><DecryptedText key={t("NEXT / LET’S CONNECT")} text={t("NEXT / LET’S CONNECT")} /></div><h2>{t("Percakapan kecil.")}<br /><span>{t("Kemungkinan baru.")}</span></h2><p className="contact-intro">{t("Tentang data, aplikasi, peluang kerja, atau ide yang ingin Anda kembangkan. Saya senang mendengarnya.")}</p><Magnet><a className="button button-primary" href={`mailto:${profil.identitas.email}`}>{t("Mulai percakapan")} <span aria-hidden="true">↗</span></a></Magnet></AnimatedContent>
      <AnimatedContent distance={28} delay={.15} className="contact-directory"><span className="small-label">{t("PILIH JALUR KOMUNIKASI")}</span><a href={`mailto:${profil.identitas.email}`}><span>Email</span><strong>{profil.identitas.email}</strong><i aria-hidden="true">↗</i></a><a href={`tel:${profil.identitas.telepon}`}><span>{t("Telepon / WhatsApp")}</span><strong>{profil.identitas.telepon}</strong><i aria-hidden="true">↗</i></a>{profil.linkMedia?.map(link => <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"><span>{link.platform}</span><strong>{link.name || profil.identitas.nama}</strong><i aria-hidden="true">↗</i></a>)}<button type="button" className="copy-email" onClick={copyEmail}>{t("Salin email")} <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{t(status)}</p></AnimatedContent>
    </div>
  </section>
}
