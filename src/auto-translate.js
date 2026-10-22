import { english, indonesian } from './translations.js'

const cacheKey = 'portfolio-translations-id-en-v1'
const fields = new Set(['singkat', 'utama', 'lanjutan', 'label', 'peran', 'periode', 'poin', 'jurusan', 'ringkasan', 'kategori', 'deskripsi', 'konteks', 'daftar', 'program'])
const pending = new Map()

export function readTranslationCache() {
  try {
    const data = JSON.parse(localStorage.getItem(cacheKey) || '{}')
    return Object.fromEntries(Object.entries(data).filter(([, value]) => typeof value === 'string'))
  } catch { return {} }
}

export function missingProfileTexts(profile, cache) {
  const texts = new Set()
  function visit(value, field) {
    if (Array.isArray(value)) value.forEach(item => visit(item, field))
    else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => visit(item, key))
    else if (typeof value === 'string' && fields.has(field) && /[a-zA-Z]/.test(value) && !Object.hasOwn(english, value) && !Object.hasOwn(indonesian, value) && !Object.hasOwn(cache, value)) texts.add(value)
  }
  visit(profile)
  return [...texts]
}

// MyMemory accepts at most 500 UTF-8 bytes per request.
export function splitTranslationText(text) {
  const chunks = []
  let chunk = ''
  const encoder = new TextEncoder()
  for (const token of text.match(/\S+\s*|\s+/gu) || []) {
    if (encoder.encode(chunk + token).length <= 450) { chunk += token; continue }
    if (chunk) { chunks.push(chunk); chunk = '' }
    for (const char of token) {
      if (encoder.encode(chunk + char).length > 450) { chunks.push(chunk); chunk = '' }
      chunk += char
    }
  }
  if (chunk) chunks.push(chunk)
  return chunks
}

export function autoTranslate(text) {
  if (pending.has(text)) return pending.get(text)
  const request = (async () => {
    const result = []
    for (const chunk of splitTranslationText(text)) {
      const params = new URLSearchParams({ q: chunk, langpair: 'id|en' })
      const response = await fetch(`https://api.mymemory.translated.net/get?${params}`, { signal: AbortSignal.timeout(15000) })
      if (!response.ok) throw new Error('Translation service unavailable')
      const data = await response.json()
      const translated = data.responseData?.translatedText
      if (Number(data.responseStatus) !== 200 || data.quotaFinished || typeof translated !== 'string' || !translated.trim()) throw new Error('Translation unavailable or quota reached')
      result.push(translated.trim())
    }
    return result.join(' ')
  })()
  pending.set(text, request)
  request.catch(() => pending.delete(text))
  return request
}

export function saveTranslationCache(cache) {
  try { localStorage.setItem(cacheKey, JSON.stringify(cache)) } catch { /* Continue with in-memory translations. */ }
}
