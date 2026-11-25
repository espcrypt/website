<script>
  let { kind = 's3zero', led = '#8b5cf6', class: cls = '' } = $props()
  const B = {
    s3zero: { pcb: '#1f3f8f', edge: '#16306d', name: 'ESP32-S3-Zero', chip: 'S3', w: 180, h: 236, btn: [52, 128], rgb: true },
    c3: { pcb: '#1e3a8a', edge: '#172e6e', name: 'ESP32-C3 SuperMini', chip: 'C3', w: 180, h: 226, btn: [64, 116], rgb: false },
    xiao: { pcb: '#18181b', edge: '#0f0f11', name: 'XIAO ESP32-S3', chip: 'S3', w: 176, h: 210, btn: [44, 132], rgb: false },
  }
  let b = $derived(B[kind] ?? B.s3zero)
  const uid = Math.random().toString(36).slice(2, 8)
</script>

<svg class={cls} viewBox="0 0 {b.w + 40} {b.h + 40}" role="img" aria-label={b.name}>
  <defs>
    <radialGradient id="glow-{uid}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color={led} stop-opacity="0.95" />
      <stop offset="0.35" stop-color={led} stop-opacity="0.35" />
      <stop offset="1" stop-color={led} stop-opacity="0" />
    </radialGradient>
    <linearGradient id="pcb-{uid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color={b.pcb} />
      <stop offset="1" stop-color={b.edge} />
    </linearGradient>
    <linearGradient id="metal-{uid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e5e7eb" />
      <stop offset="1" stop-color="#9ca3af" />
    </linearGradient>
    <filter id="shadow-{uid}" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000" flood-opacity="0.55" />
    </filter>
  </defs>
  <g transform="translate(20 28)" filter="url(#shadow-{uid})">
    <rect width={b.w} height={b.h} rx="12" fill="url(#pcb-{uid})" />
    <rect x="1" y="1" width={b.w - 2} height={b.h - 2} rx="11" fill="none" stroke="white" stroke-opacity="0.08" />
    {#each Array(Math.floor((b.h - 40) / 22)) as _, i}
      <circle cx="9" cy={34 + i * 22} r="6" fill="#d4a24c" /><circle cx="9" cy={34 + i * 22} r="2.6" fill={b.edge} />
      <circle cx={b.w - 9} cy={34 + i * 22} r="6" fill="#d4a24c" /><circle cx={b.w - 9} cy={34 + i * 22} r="2.6" fill={b.edge} />
    {/each}
    <rect x={b.w / 2 - 30} y="-10" width="60" height="44" rx="10" fill="url(#metal-{uid})" />
    <rect x={b.w / 2 - 20} y="-2" width="40" height="10" rx="5" fill="#374151" />
    {#each b.btn as x}
      <rect x={x - 13} y="50" width="26" height="22" rx="4" fill="#e5e7eb" />
      <circle cx={x} cy="61" r="6.5" fill="#1f2937" />
    {/each}
    <circle cx={b.w / 2} cy="61" r="26" fill="url(#glow-{uid})" class="led" />
    <rect x={b.w / 2 - 6} y="55" width="12" height="12" rx="2" fill={b.rgb ? '#f5f5f5' : '#fde68a'} />
    <g transform="translate({b.w / 2} {b.h / 2 + 22}) rotate(45)">
      <rect x="-34" y="-34" width="68" height="68" rx="6" fill="#1f2023" />
      <rect x="-34" y="-34" width="68" height="68" rx="6" fill="none" stroke="#3f3f46" />
    </g>
    <text x={b.w / 2} y={b.h / 2 + 27} text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="15" fill="#a1a1aa">{b.chip}</text>
    <rect x="34" y={b.h - 30} width={b.w - 68} height="14" rx="3" fill="#000" fill-opacity="0.25" />
    <path d="M44 {b.h - 23} h12 v-5 h10 v10 h10 v-10 h10 v10 h10 v-5 h12" fill="none" stroke="#d4a24c" stroke-width="2" />
  </g>
</svg>
