export const route = $state({ path: '/', anchor: '' })

function parse() {
  const raw = location.hash.replace(/^#/, '') || '/'
  const [path, anchor = ''] = raw.split('#')
  route.path = path || '/'
  route.anchor = anchor
}

function scrollToAnchor() {
  if (route.anchor) {
    requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  } else {
    window.scrollTo({ top: 0 })
  }
}

export function go(to) {
  if (location.hash === '#' + to) {
    parse()
    scrollToAnchor()
    return
  }
  location.hash = to
}

window.addEventListener('hashchange', () => {
  parse()
  scrollToAnchor()
})
parse()
