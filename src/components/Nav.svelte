<script>
  import Icon from '../lib/Icon.svelte'
  import DownloadMenu from './DownloadMenu.svelte'
  import { REPO } from '../lib/config.js'
  import { go, route } from '../lib/router.svelte.js'
  import { t, i18n, setLang, LANGS } from '../lib/i18n.svelte.js'
  const n = $derived(t().ui.nav)

  let open = $state(false)

  const systemDark = () => matchMedia('(prefers-color-scheme: dark)').matches
  let dark = $state(document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : systemDark())
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!document.documentElement.dataset.theme) dark = e.matches
  })
  function toggleTheme() {
    dark = !dark
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }
  const links = $derived([[n.features, '/#features'], [n.how, '/#how'], [n.mirror, '/#mirror'], [n.boards, '/#boards'], [n.docs, '/docs/getting-started']])

  function nav(e, to) {
    e.preventDefault()
    open = false
    go(to)
  }
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/95">
  <nav class="container-x flex h-14 items-center gap-6" aria-label="Main">
    <a href="#/" onclick={(e) => nav(e, '/')} class="flex items-center gap-2 font-semibold text-ink">
      <img src="./logo.svg" alt="" class="h-7 w-7" />
      <span>ESP Crypt</span>
    </a>
    <div class="ml-2 hidden items-center gap-5 md:flex">
      {#each links as [label, to]}
        <a href="#{to}" onclick={(e) => nav(e, to)}
          class="text-sm transition-colors {route.path.startsWith('/docs') && to.startsWith('/docs') ? 'text-ink underline decoration-accent decoration-2 underline-offset-[18px]' : 'text-ink-2 hover:text-ink'}">{label}</a>
      {/each}
    </div>
    <div class="ml-auto flex items-center gap-3">
      <label class="relative inline-flex items-center text-ink-2 hover:text-ink" title={n.language}>
        <span class="sr-only">{n.language}</span>
        <Icon name="globe" class="pointer-events-none absolute left-1.5 h-4 w-4" />
        <select class="cursor-pointer appearance-none rounded-md border border-rule bg-paper py-1 pr-2 pl-7 text-[13px] text-ink" value={i18n.lang} onchange={(e) => setLang(e.currentTarget.value)}>
          {#each LANGS as [code, name]}<option value={code}>{name}</option>{/each}
        </select>
      </label>
      <button class="p-1 text-ink-2 hover:text-ink" onclick={toggleTheme} aria-label={dark ? n.toLight : n.toDark} title={dark ? n.light : n.dark}>
        <Icon name={dark ? 'sun' : 'moon'} />
      </button>
      <a href={REPO} target="_blank" rel="noreferrer" class="hidden text-ink-2 hover:text-ink sm:inline-flex" aria-label={n.source}><Icon name="github" /></a>
      <DownloadMenu cls="hidden sm:inline-block" buttonClass="btn btn-primary px-3 py-1.5 text-[13px]" align="right" compact />
      <button class="p-2 text-ink md:hidden" aria-label={open ? n.closeMenu : n.openMenu} aria-expanded={open} onclick={() => (open = !open)}>
        <Icon name={open ? 'x' : 'menu'} />
      </button>
    </div>
  </nav>
  {#if open}
    <div class="container-x border-t border-rule pb-4 md:hidden">
      <div class="flex flex-col">
        {#each links as [label, to]}
          <a href="#{to}" onclick={(e) => nav(e, to)} class="border-b border-rule py-3 text-ink">{label}</a>
        {/each}
        <a href={REPO} target="_blank" rel="noreferrer" class="flex items-center gap-2 border-b border-rule py-3 text-ink"><Icon name="github" class="h-4 w-4" /> GitHub</a>
        <DownloadMenu cls="mt-4" buttonClass="btn btn-primary w-full justify-center" />
      </div>
    </div>
  {/if}
</header>
