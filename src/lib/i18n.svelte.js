import en from './i18n/en.js'
import nl from './i18n/nl.js'
import de from './i18n/de.js'
import fr from './i18n/fr.js'

const dicts = { en, nl, de, fr }
export const LANGS = [['en', 'English'], ['nl', 'Nederlands'], ['de', 'Deutsch'], ['fr', 'Français']]

function initial() {
  const q = new URLSearchParams(location.search).get('lang')
  if (q && dicts[q]) return q
  try { const s = localStorage.getItem('lang'); if (s && dicts[s]) return s } catch {}
  return 'en'
}

export const i18n = $state({ lang: initial() })
document.documentElement.lang = i18n.lang

export function setLang(l) {
  if (!dicts[l]) return
  i18n.lang = l
  document.documentElement.lang = l
  try { localStorage.setItem('lang', l) } catch {}
}

export function t() { return dicts[i18n.lang] }
