<script>
  import Icon from '../lib/Icon.svelte'
  import { DOWNLOADS, RELEASES } from '../lib/config.js'
  import { t } from '../lib/i18n.svelte.js'

  let { class: cls = '', buttonClass = 'btn btn-primary', align = 'left', compact = false } = $props()
  const d = $derived(t().ui.dl)
  let open = $state(false)
  let root

  function detect() {
    const ua = navigator.userAgent
    const p = navigator.userAgentData?.platform || navigator.platform || ''
    if (/Win/i.test(p) || /Windows/i.test(ua)) return 'windows'
    if (/Mac/i.test(p) || /Mac OS X/i.test(ua)) return 'mac'
    if (/Linux/i.test(p) && !/Android/i.test(ua)) return 'linux'
    return ''
  }
  const os = detect()

  const items = $derived([
    { id: 'windows', icon: 'windows', label: d.windows, sub: d.windowsSub, href: DOWNLOADS.windows },
    { id: 'mac', icon: 'apple', label: d.macArm, sub: d.macArmSub, href: DOWNLOADS.macArm },
    { id: 'mac', icon: 'apple', label: d.macIntel, sub: d.macIntelSub, href: DOWNLOADS.macIntel },
    { id: 'linux', icon: 'linux', label: d.linux, sub: d.linuxSub, href: DOWNLOADS.linuxX64, alt: [[d.linuxArm, DOWNLOADS.linuxArm]] },
  ])

  function onWindowClick(e) {
    if (open && root && !root.contains(e.target)) open = false
  }
  function onKey(e) {
    if (e.key === 'Escape') open = false
  }
</script>

<svelte:window onclick={onWindowClick} onkeydown={onKey} />

<div class="relative inline-block {cls}" bind:this={root}>
  <button type="button" class={buttonClass} aria-haspopup="menu" aria-expanded={open} onclick={() => (open = !open)}>
    <Icon name="download" class={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} /> {d.button}
    <svg class="h-3.5 w-3.5 transition-transform {open ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
  </button>
  {#if open}
    <div role="menu" class="absolute z-50 mt-2 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-rule bg-card text-left shadow-xl shadow-black/20 {align === 'right' ? 'right-0' : 'left-0'}">
      {#each items as it}
        <div class="flex items-center border-b border-rule last:border-0 {it.id === os ? 'bg-accent-soft/40' : ''}">
          <a role="menuitem" href={it.href} class="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 text-ink hover:bg-paper-2" onclick={() => (open = false)}>
            <Icon name={it.icon} class="h-5 w-5 shrink-0" />
            <span class="min-w-0">
              <span class="block text-sm font-medium">{it.label}</span>
              <span class="block text-xs leading-snug text-ink-3">{it.id === os ? `${d.recommended} · ` : ''}{it.sub}</span>
            </span>
          </a>
          {#each it.alt ?? [] as [label, href]}
            <a role="menuitem" {href} class="mr-3 rounded border border-rule px-2 py-1 font-mono text-[11px] text-ink-2 hover:text-ink" onclick={() => (open = false)}>{label}</a>
          {/each}
        </div>
      {/each}
      <a href={RELEASES} target="_blank" rel="noreferrer" class="flex items-center gap-2 bg-paper-2 px-4 py-2.5 text-xs text-ink-2 hover:text-ink" onclick={() => (open = false)}>
        <Icon name="github" class="h-3.5 w-3.5" /> {d.all}
      </a>
    </div>
  {/if}
</div>
