<script>
  import Icon from '../lib/Icon.svelte'
  import DownloadMenu from '../components/DownloadMenu.svelte'
  import BoardArt from '../components/BoardArt.svelte'
  import AppPreview from '../components/AppPreview.svelte'
  import Photo from '../components/Photo.svelte'
  import TerminalDemo from '../components/TerminalDemo.svelte'
  import { REPO } from '../lib/config.js'
  import { go } from '../lib/router.svelte.js'
  import { t } from '../lib/i18n.svelte.js'
  const nav = (e, to) => { e.preventDefault(); go(to) }
  const s = $derived(t().ui)
  $effect(() => { document.title = s.title })

  const featureIcons = ['lock', 'terminal', 'fingerprint', 'mirror', 'unlock', 'terminal', 'bolt', 'copy']
  const features = $derived(s.features.items.map(([title, text], i) => [featureIcons[i], title, text]))
  const boardInfo = [
    ['s3zero', 'ESP32-S3-Zero', 'Waveshare', true],
    ['xiao', 'XIAO ESP32-S3', 'Seeed Studio', true],
    ['c3', 'ESP32-C3 SuperMini', null, false],
    ['c3', 'ESP32-C6 SuperMini', null, false],
  ]
  const boards = $derived(boardInfo.map(([k, n, m, p], i) => [k, n, m ?? s.boards.generic, p, s.boards.notes[i]]))
</script>

<section class="border-b border-rule pt-28 pb-16 sm:pt-32 sm:pb-20">
  <div class="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
    <div>
      <h1 class="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">ESP Crypt</h1>
      <p class="mt-3 font-display text-xl text-ink-2 sm:text-2xl">{s.hero.tagline}</p>
      <p class="lead mt-6 max-w-xl">{s.hero.lead}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <DownloadMenu />
        <a href="#/docs/getting-started" onclick={(e) => nav(e, '/docs/getting-started')} class="btn btn-ghost">{s.hero.docs}</a>
      </div>
      <p class="mt-6 text-sm text-ink-3">{s.hero.meta}</p>
    </div>
    <div class="relative">
      <AppPreview />
    </div>
  </div>
</section>

<section id="features" class="scroll-mt-16 py-20">
  <div class="container-x">
    <div class="max-w-2xl">
      <div class="eyebrow">{s.features.eyebrow}</div>
      <h2 class="h2 mt-2">{s.features.title}</h2>
      <p class="lead mt-4">{s.features.lead}</p>
    </div>
    <div class="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as [icon, title, text]}
        <div class="border-t border-ink pt-5">
          <div class="flex items-center gap-2.5 font-semibold text-ink"><Icon name={icon} class="h-5 w-5 text-accent" />{title}</div>
          <p class="mt-2 text-[15px] leading-relaxed text-ink-2">{text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="how" class="scroll-mt-16 border-y border-rule bg-paper-2 py-20">
  <div class="container-x">
    <div class="max-w-2xl">
      <div class="eyebrow">{s.how.eyebrow}</div>
      <h2 class="h2 mt-2">{s.how.title}</h2>
    </div>
    <ol class="mt-12 grid gap-8 md:grid-cols-4">
      {#each s.how.steps as [title, text], i}
        <li>
          <div class="font-display text-4xl font-semibold text-accent">{i + 1}</div>
          <h3 class="mt-3 font-semibold text-ink">{title}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-ink-2">{text}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>

<section id="mirror" class="scroll-mt-16 py-20">
  <div class="container-x grid items-center gap-12 lg:grid-cols-2">
    <div>
      <div class="eyebrow">{s.mirror.eyebrow}</div>
      <h2 class="h2 mt-2">{s.mirror.title}</h2>
      <p class="lead mt-4">{s.mirror.lead}</p>
      <ul class="mt-6 space-y-2.5 text-[15px] text-ink-2">
        {#each s.mirror.items as item}
          <li class="flex items-start gap-2.5"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-accent" />{item}</li>
        {/each}
      </ul>
    </div>
    <Photo file="shot-mirror.webp" alt={s.mirror.alt} aspect="" caption={s.mirror.caption} />
  </div>
</section>

<section id="cli" class="scroll-mt-16 border-t border-rule py-20">
  <div class="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
    <div>
      <div class="eyebrow">{s.cli.eyebrow}</div>
      <h2 class="h2 mt-2">{s.cli.title}</h2>
      <p class="lead mt-4">{s.cli.lead}</p>
      <ul class="mt-6 space-y-2.5 text-[15px] text-ink-2">
        {#each ['espcrypt status · unlock · lock', 'espcrypt keyfiles · ssh · ssh-new', 'espcrypt vaults · open · close', 'espcrypt mirror · sync (USB or Wi-Fi)'] as item}
          <li class="flex items-start gap-2.5"><Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span class="font-mono text-[14px]">{item}</span></li>
        {/each}
      </ul>
      <a href="#/docs/cli" onclick={(e) => nav(e, '/docs/cli')} class="link mt-5 inline-block text-sm">{s.cli.link}</a>
    </div>
    <TerminalDemo />
  </div>
</section>

<section id="boards" class="scroll-mt-16 border-t border-rule py-20">
  <div class="container-x">
    <div class="max-w-2xl">
      <div class="eyebrow">{s.boards.eyebrow}</div>
      <h2 class="h2 mt-2">{s.boards.title}</h2>
      <p class="lead mt-4">{s.boards.lead}</p>
    </div>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each boards as [kind, name, maker, passkey, note]}
        <div class="card flex flex-col p-5">
          <div class="grid h-44 place-items-center"><BoardArt {kind} led={kind === 'c3' ? '#3b82f6' : '#22c55e'} class="h-40" /></div>
          <h3 class="mt-4 font-semibold text-ink">{name}</h3>
          <div class="text-sm text-ink-3">{maker}</div>
          <dl class="mt-4 grid grid-cols-2 gap-y-1 border-t border-rule pt-3 text-sm">
            <dt class="text-ink-3">{s.boards.vaultSsh}</dt><dd class="text-ink">{s.boards.yes}</dd>
            <dt class="text-ink-3">{s.boards.passkeys}</dt><dd class="text-ink">{passkey ? s.boards.yes : s.boards.no}</dd>
          </dl>
          <p class="mt-3 text-sm leading-relaxed text-ink-2">{note}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="border-t border-rule py-20">
  <div class="container-x">
    <div class="max-w-2xl">
      <div class="eyebrow">{s.photos.eyebrow}</div>
      <h2 class="h2 mt-2">{s.photos.title}</h2>
    </div>
    <div class="mt-10 max-w-4xl">
      <Photo file="devices.jpg" alt={s.photos.alt} aspect="aspect-[3/2]" caption={s.photos.caption} />
    </div>
  </div>
</section>

<section id="security" class="scroll-mt-16 border-t border-rule bg-paper-2 py-20">
  <div class="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
    <div>
      <div class="eyebrow">{s.security.eyebrow}</div>
      <h2 class="h2 mt-2">{s.security.title}</h2>
      <p class="lead mt-4">{s.security.lead}</p>
      <a href="#/docs/security" onclick={(e) => nav(e, '/docs/security')} class="link mt-5 inline-block text-sm">{s.security.link}</a>
    </div>
    <dl class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {#each s.security.items as [title, text]}
        <div>
          <dt class="font-semibold text-ink">{title}</dt>
          <dd class="mt-1.5 text-[15px] leading-relaxed text-ink-2">{text}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<section class="pt-20">
  <div class="container-x">
    <div class="flex flex-col items-start justify-between gap-6 rounded-md bg-ink px-8 py-10 text-paper sm:flex-row sm:items-center sm:px-12">
      <div>
        <h2 class="font-display text-2xl font-semibold sm:text-3xl">{s.cta.title}</h2>
        <p class="mt-2 opacity-75">{s.cta.text}</p>
      </div>
      <div class="flex shrink-0 flex-wrap gap-3">
        <DownloadMenu buttonClass="btn bg-paper text-ink hover:bg-accent-soft" align="right" />
        <a href={REPO} target="_blank" rel="noreferrer" class="btn border border-paper/30 text-paper hover:border-paper"><Icon name="github" class="h-4 w-4" /> GitHub</a>
      </div>
    </div>
  </div>
</section>
