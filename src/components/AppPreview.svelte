<script>
  import Icon from '../lib/Icon.svelte'
  const nav = [['lock', 'Vaults', true], ['file', 'Keyfiles'], ['terminal', 'SSH keys'], ['key', 'Passkeys'], ['mirror', 'Backup & mirror'], ['shield', 'Security'], ['chip', 'ESP32 firmware']]
  const vaults = [['Personal documents', 'Z:', true, '2 ESPs'], ['Tax 2026', 'Documents/Vaults/Tax 2026.hc32', false, 'ESP32 keyfile'], ['Photos', 'Documents/Vaults/Photos.hc32', false, 'ESP32 + password']]
</script>

<div class="overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-2xl shadow-black/60 ring-1 ring-white/5">
  <div class="flex items-center gap-2 border-b border-white/5 bg-[#1b1b1b] px-4 py-2.5">
    <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span><span class="h-3 w-3 rounded-full bg-[#febc2e]"></span><span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
    <span class="ml-3 text-xs text-neutral-500">ESP Crypt</span>
  </div>
  <div class="flex text-left">
    <aside class="hidden w-44 shrink-0 border-r border-white/5 bg-[#141414] p-3 sm:block">
      {#each nav as [icon, label, active]}
        <div class="mb-0.5 flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12px] {active ? 'bg-neutral-700/70 text-white' : 'text-neutral-400'}">
          <Icon name={icon} class="h-3.5 w-3.5 {active ? 'text-violet-400' : ''}" />{label}
        </div>
      {/each}
      <div class="mt-6 rounded-lg border border-white/5 p-2 text-[10px] text-neutral-500">
        Active ESP Crypt
        <div class="mt-1 rounded-md bg-neutral-900 px-2 py-1 text-neutral-300">ESP32-S3 · 46D98C</div>
        <div class="mt-2 flex justify-between"><span>Passphrase</span><span class="rounded-full bg-violet-500/15 px-1.5 text-violet-300">unlocked</span></div>
      </div>
    </aside>
    <div class="min-w-0 flex-1 p-4 sm:p-5">
      <div class="mb-3 flex items-center justify-between">
        <div class="text-sm font-semibold text-white">My vaults <span class="text-xs font-normal text-neutral-500">3 · 1 open</span></div>
        <div class="rounded-lg bg-violet-600 px-2.5 py-1 text-[11px] font-semibold text-white">+ New vault</div>
      </div>
      <div class="overflow-hidden rounded-xl border border-white/5 bg-neutral-800/40">
        {#each vaults as [name, path, open, prot]}
          <div class="flex items-center gap-3 border-b border-white/5 px-3 py-2.5 last:border-0">
            <div class="grid h-7 w-7 place-items-center rounded-lg {open ? 'bg-violet-500/15 text-violet-300' : 'bg-neutral-700/60 text-neutral-300'}"><Icon name="lock" class="h-3.5 w-3.5" /></div>
            <div class="min-w-0 flex-1"><div class="truncate text-[12px] font-medium text-white">{name}</div><div class="truncate text-[10px] text-neutral-500">{path}</div></div>
            <span class="hidden text-[10px] text-neutral-400 md:inline">{prot}</span>
            <span class="rounded-full px-2 py-0.5 text-[10px] {open ? 'bg-violet-500/15 text-violet-300' : 'bg-neutral-700/50 text-neutral-400'}">{open ? 'Unlocked' : 'Locked'}</span>
          </div>
        {/each}
      </div>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="rounded-xl border border-white/5 bg-neutral-800/40 p-3">
          <div class="text-[10px] tracking-wide text-neutral-500 uppercase">Mirror</div>
          <div class="mt-1 flex items-center gap-2 text-[11px] text-neutral-200">46D98C <Icon name="mirror" class="h-3.5 w-3.5 text-violet-300" /> 476A34</div>
          <div class="mt-1.5 inline-block rounded-full bg-violet-500/15 px-2 text-[10px] text-violet-300">In sync</div>
        </div>
        <div class="rounded-xl border border-white/5 bg-neutral-800/40 p-3">
          <div class="text-[10px] tracking-wide text-neutral-500 uppercase">Storage</div>
          <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-700/60"><div class="h-full w-[12%] rounded-full bg-violet-400"></div></div>
          <div class="mt-1.5 text-[10px] text-neutral-400">23 KB used · 166 KB free</div>
        </div>
      </div>
    </div>
  </div>
</div>
