<script>
  let { session = 'status' } = $props()

  const sessions = {
    status: [
      ['cmd', 'espcrypt status'],
      ['head', 'BOARD         CHIP      STATE     STORAGE           FIRMWARE'],
      ['out', '90DA7246D98C  ESP32-S3  unlocked  127/6048 entries  vaultkey v0.0.15'],
      ['out', '90DA72476A34  ESP32-S3  locked    126/6048 entries  vaultkey v0.0.15'],
      ['cmd', 'espcrypt keyfiles 46D98C'],
      ['dim', 'Passphrase for ESP32-S3 · 90DA7246D98C: ••••••'],
      ['ok', 'Unlocked in 1.5 s'],
      ['head', 'ID  LABEL                SIZE'],
      ['out', '1   work-laptop          64'],
      ['out', '2   photos-archive       64'],
      ['out', '3   tax-documents        32'],
      ['cmd', 'espcrypt mirror'],
      ['out', 'main   90DA7246D98C  unlocked  over USB                 rev 4'],
      ['out', 'backup 90DA72476A34  locked    over Wi-Fi 192.168.1.172  rev 4'],
      ['ok', 'In sync.'],
      ['cmd', 'espcrypt open photos-archive'],
      ['ok', 'photos-archive open at /Volumes/photos-archive'],
    ],
  }
  const lines = $derived(sessions[session] ?? sessions.status)
  const color = { cmd: 'text-[#e6e6e6]', out: 'text-[#c9c9c9]', ok: 'text-[#7ee2a8]', dim: 'text-[#8a8a8a]', head: 'text-[#8a8a8a]' }
</script>

<div class="overflow-hidden rounded-xl border border-black/40 bg-[#141414] shadow-2xl shadow-black/30">
  <div class="flex items-center gap-2 border-b border-white/10 bg-[#1e1e1e] px-4 py-2.5">
    <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
    <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
    <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
    <span class="ml-3 font-mono text-xs text-[#8a8a8a]">espcrypt — zsh</span>
  </div>
  <pre class="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[1.65]">{#each lines as [kind, text]}<div class={color[kind]}>{#if kind === 'cmd'}<span class="text-[#a78bfa]">❯ </span>{/if}{text}</div>{/each}</pre>
</div>
