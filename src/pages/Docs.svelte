<script>
  import Icon from '../lib/Icon.svelte'
  import { t, i18n } from '../lib/i18n.svelte.js'
  import { go } from '../lib/router.svelte.js'
  import { WEBSITE } from '../lib/config.js'

  let { slug } = $props()
  const sections = $derived(t().docs.sections)
  const pages = $derived(t().docs.pages)
  const ui = $derived(t().ui.docsUi)
  const order = $derived(sections.flatMap((s) => s.pages))
  const page = $derived(pages[slug] ?? pages['getting-started'])
  const current = $derived(pages[slug] ? slug : 'getting-started')
  const idx = $derived(order.indexOf(current))
  const prev = $derived(idx > 0 ? order[idx - 1] : null)
  const next = $derived(idx < order.length - 1 ? order[idx + 1] : null)

  const nav = (e, to) => { e.preventDefault(); go(to) }

  function onContentClick(e) {
    const a = e.target.closest('a[href^="#/"]')
    if (a) nav(e, a.getAttribute('href').slice(1))
  }

  $effect(() => { document.title = `${page.title} · ${ui.suffix}` })
</script>

<div class="container-x pt-24 pb-10 sm:pt-28">
  <div class="grid gap-10 lg:grid-cols-[220px_1fr]">
    <aside class="hidden lg:block">
      <nav class="sticky top-24 space-y-7" aria-label="Docs">
        {#each sections as s}
          <div>
            <div class="mb-2 font-mono text-xs text-ink-3">{s.title}</div>
            <ul class="space-y-0.5">
              {#each s.pages as p}
                <li>
                  <a href="#/docs/{p}" onclick={(e) => nav(e, `/docs/${p}`)}
                    class="block border-l-2 py-1 pl-3 text-sm {p === current ? 'border-accent font-medium text-ink' : 'border-transparent text-ink-2 hover:text-ink'}">{pages[p].title}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </nav>
    </aside>

    <article class="min-w-0">
      <label class="mb-6 block lg:hidden">
        <span class="sr-only">{ui.page}</span>
        <select class="w-full rounded-md border border-rule bg-card px-3 py-2.5 text-sm text-ink" value={current} onchange={(e) => go(`/docs/${e.currentTarget.value}`)}>
          {#each sections as s}
            <optgroup label={s.title}>
              {#each s.pages as p}<option value={p}>{pages[p].title}</option>{/each}
            </optgroup>
          {/each}
        </select>
      </label>

      <div class="eyebrow">{ui.docs}</div>
      <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.title}</h1>
      <p class="lead mt-3">{page.lead}</p>

      <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
      <div class="prose-doc mt-8 max-w-3xl" onclick={onContentClick}>{@html page.html}</div>

      <div class="mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
        {#if prev}
          <a href="#/docs/{prev}" onclick={(e) => nav(e, `/docs/${prev}`)} class="card p-4 transition-colors hover:border-ink-3">
            <div class="text-xs text-ink-3">{ui.prev}</div><div class="mt-1 font-medium text-ink">{pages[prev].title}</div>
          </a>
        {:else}<span></span>{/if}
        {#if next}
          <a href="#/docs/{next}" onclick={(e) => nav(e, `/docs/${next}`)} class="card p-4 text-right transition-colors hover:border-ink-3">
            <div class="text-xs text-ink-3">{ui.next}</div><div class="mt-1 font-medium text-ink">{pages[next].title}</div>
          </a>
        {/if}
      </div>

      <a href="{WEBSITE}/edit/main/src/lib/i18n/{i18n.lang}.js" target="_blank" rel="noreferrer" class="mt-8 inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-ink">
        <Icon name="github" class="h-4 w-4" /> {ui.improve}
      </a>
    </article>
  </div>
</div>
