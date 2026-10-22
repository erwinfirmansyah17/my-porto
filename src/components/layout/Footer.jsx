import { useLanguage } from '../../language-context'
import DecryptedText from '../react-bits/DecryptedText'
import Magnet from '../react-bits/Magnet'
import './Footer.css'

export default function Footer() {
  const { profil, t } = useLanguage()
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><a href="#beranda" className="footer-wordmark" aria-label={t("Kembali ke beranda")}><DecryptedText text="ERWIN." animateOn="hover" /></a>
      <div className="footer-note"><span className="signal-dot" /> {profil.identitas.lokasi}, Indonesia<p>Data Science · AI · Web Development</p></div>
      <Magnet><a href="#beranda" className="back-top" aria-label={t("Kembali ke atas")}>↑</a></Magnet>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profil.identitas.nama}</span><span>{t("BUILT WITH CURIOSITY / DESIGNED TO EXPLORE")}</span></div>
  </div></footer>
}
