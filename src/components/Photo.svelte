<script>
  let { file, alt, caption = '', aspect = 'aspect-[4/3]', position = 'object-center', class: cls = '' } = $props()
  let failed = $state(false)
</script>

<figure class={cls}>
  {#if !failed}
    <img src="./images/{file}" {alt} loading="lazy" class="{aspect} {position} w-full rounded-md border border-rule object-cover" onerror={() => (failed = true)} />
  {:else}
    <div class="grid {aspect} place-items-center rounded-md border border-dashed border-ink-3/50 bg-paper-2 p-4 text-center">
      <div>
        <div class="text-sm text-ink-2">{alt}</div>
        <div class="mt-1 font-mono text-[11px] text-ink-3">public/images/{file}</div>
      </div>
    </div>
  {/if}
  {#if caption}<figcaption class="mt-3 text-sm leading-relaxed text-ink-2">{caption}</figcaption>{/if}
</figure>
