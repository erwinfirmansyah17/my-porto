import { useEffect, useMemo, useState } from 'react'
import profil from './profil-data'
import { LanguageContext } from './language-context'
import { translate, translateProfile } from './translations'
import { autoTranslate, missingProfileTexts, readTranslationCache, saveTranslationCache } from './auto-translate'

export default function LanguageProvider({ children }) {
  const [automatic, setAutomatic] = useState(readTranslationCache)
  const [translationStatus, setTranslationStatus] = useState('')
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id' }
    catch { return 'id' }
  })
  useEffect(() => {
    document.documentElement.lang = language
    try { localStorage.setItem('portfolio-language', language) } catch { /* Storage may be unavailable. */ }
  }, [language])
  useEffect(() => {
    if (language !== 'en') return
    let cancelled = false
    async function translateNewContent() {
      const cache = readTranslationCache()
      const missing = missingProfileTexts(profil, cache)
      if (!missing.length) return
      setTranslationStatus('Translating new content…')
      try {
        for (const text of missing) {
          if (cancelled) return
          cache[text] = await autoTranslate(text)
          saveTranslationCache(cache)
          if (!cancelled) setAutomatic({ ...cache })
        }
        if (!cancelled) setTranslationStatus('')
      } catch {
        if (!cancelled) setTranslationStatus('Some content could not be translated. Select ID then EN to retry.')
      }
    }
    void translateNewContent()
    return () => { cancelled = true }
  }, [language])
  const value = useMemo(() => ({ language, setLanguage, profil: translateProfile(profil, language, automatic), t: text => translate(text, language, automatic) }), [language, automatic])
  return <LanguageContext.Provider value={value}>{children}{language === 'en' && translationStatus && <p className="translation-status" role="status">{translationStatus}</p>}</LanguageContext.Provider>
}
