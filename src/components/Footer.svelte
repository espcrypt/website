<script>
  import { RELEASES, MANAGER, FIRMWARE, WEBSITE, ISSUES, LICENSE_URL, ORG } from '../lib/config.js'
  import { go } from '../lib/router.svelte.js'
  import { t } from '../lib/i18n.svelte.js'
  const f = $derived(t().ui.footer)
  const nav = (e, to) => { e.preventDefault(); go(to) }
</script>

<footer class="mt-20 border-t border-rule bg-paper-2">
  <div class="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
    <div class="lg:col-span-2">
      <div class="flex items-center gap-2 font-semibold text-ink"><img src="./logo.svg" alt="" class="h-7 w-7" /> ESP Crypt</div>
      <p class="mt-3 max-w-sm text-sm leading-relaxed text-ink-2">{f.tagline}</p>
    </div>
    <div>
      <div class="text-sm font-semibold text-ink">{f.project}</div>
      <ul class="mt-3 space-y-2 text-sm text-ink-2">
        <li><a class="hover:text-ink" href={RELEASES} target="_blank" rel="noreferrer">{f.download}</a></li>
        <li><a class="hover:text-ink" href={MANAGER} target="_blank" rel="noreferrer">{f.app}</a></li>
        <li><a class="hover:text-ink" href={FIRMWARE} target="_blank" rel="noreferrer">{f.firmware}</a></li>
        <li><a class="hover:text-ink" href={WEBSITE} target="_blank" rel="noreferrer">{f.website}</a></li>
        <li><a class="hover:text-ink" href={ISSUES} target="_blank" rel="noreferrer">{f.issues}</a></li>
      </ul>
    </div>
    <div>
      <div class="text-sm font-semibold text-ink">{f.docs}</div>
      <ul class="mt-3 space-y-2 text-sm text-ink-2">
        <li><a class="hover:text-ink" href="#/docs/getting-started" onclick={(e) => nav(e, '/docs/getting-started')}>{f.gettingStarted}</a></li>
        <li><a class="hover:text-ink" href="#/docs/passkeys" onclick={(e) => nav(e, '/docs/passkeys')}>{f.passkeys}</a></li>
        <li><a class="hover:text-ink" href="#/docs/mirror" onclick={(e) => nav(e, '/docs/mirror')}>{f.mirror}</a></li>
        <li><a class="hover:text-ink" href="#/docs/security" onclick={(e) => nav(e, '/docs/security')}>{f.security}</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-rule">
    <div class="container-x flex flex-col justify-between gap-2 py-5 text-xs text-ink-3 sm:flex-row">
      <span>© {new Date().getFullYear()} {f.contributors} · <a href={LICENSE_URL} target="_blank" rel="noreferrer" class="hover:text-ink">{f.license}</a></span>
      <a href={ORG} target="_blank" rel="noreferrer" class="font-mono hover:text-ink">github.com/espcrypt</a>
    </div>
  </div>
</footer>
