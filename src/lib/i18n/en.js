import { RELEASES, ISSUES } from '../config.js'

export default {
  ui: {
    title: 'ESP Crypt: a hardware key from an ESP32',
    nav: {
      features: 'Features', how: 'How it works', mirror: 'Mirror', boards: 'Boards', docs: 'Docs',
      download: 'Download', toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
      light: 'Light mode', dark: 'Dark mode', source: 'Source code on GitHub',
      openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language',
    },
    hero: {
      tagline: 'A hardware key on a €4 ESP32.',
      lead: 'A desktop app and firmware for encrypted vaults, SSH keys and passkeys. The app flashes the board, manages your keys and keeps a backup board in sync.',
      docs: 'Read the docs',
      meta: 'Windows, macOS and Linux · Open source (LGPL-3.0) · Boards stay reflashable',
    },
    features: {
      eyebrow: 'Features', title: 'What it does',
      lead: 'Use what you need: vaults and SSH keys work on any supported ESP32, passkeys need an ESP32-S3. One board can do all of it.',
      items: [
        ['Encrypted vaults', 'VeraCrypt containers whose keyfiles live on the ESP32, inside a passphrase-encrypted store. Unplug the board and every vault locks.'],
        ['SSH keys on the chip', 'Keys are generated on the board and used through a built-in SSH agent, for ssh, git and VS Code Remote. Private keys never leave it.'],
        ['Passkeys and security key', 'An ESP32-S3 also works as a FIDO2 security key. Browsers and operating systems use it for passkeys and two-factor login.'],
        ['Mirror over Wi-Fi', 'Keep a backup board in another room. Changes are synced both ways over your Wi-Fi in seconds, and the data stays encrypted.'],
        ['Unlocks in 1.5 seconds', 'The passphrase is stretched on the chip’s SHA accelerator: 200,000 PBKDF2 rounds in 1.5 s. Unlock once; the app keeps the board open until you lock it.'],
        ['Command line', 'espcrypt status, unlock, keyfiles, ssh, open, close, mirror and sync, from any terminal on macOS, Windows and Linux.'],
        ['Signed firmware, always current', 'The app downloads the latest signed firmware and checks its signature before flashing. Plug in a new board, pick Vault, Passkey or both, and it is ready in under a minute.'],
        ['2-ESP mode', 'Optionally require two boards for a vault. Each holds one keyfile, so the vault only opens with both connected.'],
      ],
    },
    how: {
      eyebrow: 'How it works', title: 'From a bare board to your keys in a few minutes',
      steps: [
        ['Plug in a board', 'Any ESP32-C3, ESP32-C6 or ESP32-S3 over USB. A new board shows up in the app right away.'],
        ['Install the firmware', 'Choose Vault, Passkey or Vault + Passkey. The app detects the chip, fetches the latest signed firmware and flashes it. No tools, no .bin files.'],
        ['Set a passphrase', 'It encrypts everything the board stores. Optionally add a PIN for the security key.'],
        ['Use your keys', 'Create vaults, SSH keys and passkeys. Add a second board as a mirror if you want a spare.'],
      ],
    },
    mirror: {
      eyebrow: 'Backup and mirror', title: 'Lose a board, lose nothing',
      lead: 'Pair a second ESP32 as a mirror. Keyfiles, SSH keys and passkeys are copied both ways, over USB or over your Wi-Fi, so the backup can live in another room on a phone charger. The data is copied in encrypted form, so the app never sees your keys.',
      items: [
        'Automatic two-way sync over USB or Wi-Fi, within seconds',
        'Contents compared by hash: when both boards changed you choose, nothing is lost',
        'Wi-Fi is off until you turn it on with a press of BOOT; only paired computers connect, end-to-end encrypted',
        'Vaults open with either board of the mirror',
        'Passkeys are copied too, encrypted with the vault key',
      ],
      alt: 'The Backup & mirror page in ESP Crypt, showing two ESP32-S3 boards in sync',
      caption: 'Two ESP32-S3 boards paired as main and backup, in sync.',
    },
    cli: {
      eyebrow: 'Command line', title: 'Everything from your terminal',
      lead: "The espcrypt command talks to your boards over USB, and to a mirror board over Wi-Fi. It shares the app's vaults and pairings, so you can script backups or open a vault without the window.",
      link: 'Command line reference',
    },
    boards: {
      eyebrow: 'Supported boards', title: 'Which board to buy',
      lead: 'Every board is flashed from the app. Passkeys need USB OTG, which only the ESP32-S3 has.',
      vaultSsh: 'Vault, SSH', passkeys: 'Passkeys', yes: 'Yes', no: 'No', generic: 'Generic',
      notes: [
        'RGB status LED, BOOT button for touch confirmation.',
        'Very small, with a user LED. Touch confirmation can be turned off.',
        'The cheapest option for vaults and SSH keys. No USB OTG, so no security key.',
        'Like the C3, with a newer chip. Vaults, SSH keys and mirror over Wi-Fi; no security key (no USB OTG).',
      ],
    },
    photos: {
      eyebrow: 'Photos', title: 'Small enough for a keyring',
      alt: 'An ESP32-C3 SuperMini and a XIAO ESP32-S3 in 3D-printed cases with the ESP Crypt logo',
      caption: 'An ESP32-C3 SuperMini and a XIAO ESP32-S3 in printed cases.',
    },
    security: {
      eyebrow: 'Security model', title: "What it protects, and what it doesn't",
      lead: 'ESP Crypt favours boards you can always reflash and recover. That is a trade-off, and it is worth knowing what it means.',
      link: 'Read the full security model',
      items: [
        ['Encrypted at rest', 'Keyfiles and SSH keys sit in an AES-GCM container, with a key derived from your passphrase.'],
        ['Keys stay on the chip', 'SSH and passkey private keys are generated and used on the board. Only signatures leave it.'],
        ['Always reflashable', 'No eFuses are burned and hardware flash encryption stays off, so a board cannot be bricked.'],
        ['Physical access matters', 'Someone holding the board can read its flash or replace the firmware. Use a long passphrase.'],
      ],
    },
    cta: {
      title: 'Try it with any ESP32-S3, C3 or C6',
      text: 'Download the app, plug in a board and follow the setup. It takes about five minutes.',
    },
    footer: {
      tagline: 'Encrypted vaults, SSH keys and passkeys on a few euros of ESP32. Open source and reflashable.',
      project: 'Project', download: 'Download', app: 'App and CLI', firmware: 'Firmware', website: 'Website and docs',
      issues: 'Report an issue', docs: 'Docs', gettingStarted: 'Getting started', passkeys: 'Passkeys',
      mirror: 'Backup & mirror', security: 'Security model',
      license: 'Licensed under the GNU LGPL-3.0', contributors: 'ESP Crypt contributors',
    },
    dl: { button: 'Download', recommended: 'For your computer', windows: 'Windows', windowsSub: 'Installer · Windows 10 and 11', macArm: 'macOS · Apple Silicon', macArmSub: 'M1, M2, M3, M4 and newer', macIntel: 'macOS · Intel', macIntelSub: 'Macs with an Intel processor', linux: 'Linux · command line', linuxSub: 'x64 and arm64', linuxX64: 'x64', linuxArm: 'arm64', all: 'All downloads and checksums' },
    docsUi: { docs: 'Docs', page: 'Docs page', prev: '← Previous', next: 'Next →', improve: 'Improve this page on GitHub', suffix: 'ESP Crypt docs' },
  },

  docs: {
    sections: [
      { title: 'Start', pages: ['getting-started', 'flashing'] },
      { title: 'Using it', pages: ['vaults', 'ssh', 'passkeys', 'mirror'] },
      { title: 'Reference', pages: ['cli', 'boards', 'security', 'troubleshooting'] },
    ],
    pages: {
      'getting-started': {
        title: 'Getting started',
        lead: 'From download to your first unlocked vault in about five minutes.',
        html: `
<h2>What you need</h2>
<ul>
  <li>A supported board: an <strong>ESP32-S3</strong> (for example the Waveshare S3-Zero or Seeed XIAO S3), an <strong>ESP32-C3</strong> or an <strong>ESP32-C6</strong> SuperMini. See <a href="#/docs/boards">Boards</a>.</li>
  <li>A USB cable that carries data, not just power.</li>
  <li>Windows, macOS or Linux. For encrypted vaults you also need <a href="https://veracrypt.io" target="_blank" rel="noreferrer">VeraCrypt</a>.</li>
</ul>

<h2>1. Install the app</h2>
<p>Download the latest build for your system from <a href="${RELEASES}" target="_blank" rel="noreferrer">GitHub Releases</a> and run it. The app updates itself when a new version is out.</p>

<h2>2. Plug in the board</h2>
<p>Open the <strong>ESP32</strong> page in the sidebar. A new board shows up with its chip type and serial port. If it does not, see <a href="#/docs/troubleshooting">Troubleshooting</a>.</p>

<h2>3. Install the firmware</h2>
<p>Choose a firmware and click <strong>Install</strong>:</p>
<ul>
  <li><strong>Vault</strong> – keyfiles and SSH keys. Works on every supported board.</li>
  <li><strong>Passkey</strong> – a FIDO2 security key only. ESP32-S3 only.</li>
  <li><strong>Vault + Passkey</strong> – both at once. ESP32-S3 only. Recommended if you have an S3.</li>
</ul>
<p>Flashing takes under a minute. See <a href="#/docs/flashing">Flashing</a> for details.</p>

<h2>4. Set a passphrase</h2>
<p>The app asks for a passphrase the first time. It encrypts everything the board stores. Use something long: it is the main thing protecting your keys if the board is lost.</p>
<div class="warn"><strong>There is no recovery.</strong> If you forget the passphrase, the data on the board cannot be read. Set up a <a href="#/docs/mirror">mirror or backup file</a> early.</div>

<h2>5. Use it</h2>
<p>Create a vault on the <strong>Vaults</strong> page, an SSH key on the <strong>SSH keys</strong> page, or register the board as a passkey on any website. Each is described in its own page here.</p>
`,
      },

      flashing: {
        title: 'Flashing',
        lead: 'The app installs and updates the firmware itself. No ESP-IDF, no esptool, no .bin files.',
        html: `
<h2>New boards</h2>
<p>A board straight out of the bag runs whatever the factory put on it. On the <strong>ESP32</strong> page, pick a firmware and click <strong>Install</strong>. The app puts the chip in download mode, writes the bootloader, partition table and firmware, and restarts it.</p>
<div class="note">If the app cannot reach the chip, hold <span class="kbd">BOOT</span>, tap <span class="kbd">RESET</span>, then release <span class="kbd">BOOT</span>. The board is now in download mode and the install will work.</div>

<h2>Touch confirmation</h2>
<p>When you install firmware you choose whether the board should ask for a button press before it uses a key. You can change this later in the app. Turn it off for boards without a usable button.</p>

<h2>Updates</h2>
<p>When a newer firmware release is out, the ESP32 page offers an update. Updates are signed and keep all data on the board: vaults, SSH keys, passkeys and settings stay where they are. If an old board cannot update itself, the app writes the new firmware over USB instead, still keeping your data.</p>

<h2>Erasing a board</h2>
<p>A fresh install over an existing board erases everything on it. The app asks you to type a confirmation first. If you want to keep your keys, use <strong>Update</strong> instead, or make a <a href="#/docs/mirror">backup</a> first.</p>
`,
      },

      vaults: {
        title: 'Vaults',
        lead: 'VeraCrypt containers that only open when your board is connected and unlocked.',
        html: `
<h2>How it works</h2>
<p>Each vault is a normal VeraCrypt container on your disk. Its keyfile is generated on the board and stored in the board's encrypted store, never on your computer. When you unlock a vault, the app fetches the keyfile into memory, hands it to VeraCrypt and wipes it again.</p>
<p>Unplug the board and the app dismounts every vault that used it.</p>

<h2>Create a vault</h2>
<ol>
  <li>Open <strong>Vaults</strong> and click <strong>New vault</strong>.</li>
  <li>Choose where to store the container and how big it should be.</li>
  <li>Optionally add a password on top of the keyfile.</li>
  <li>The app creates the container with VeraCrypt and mounts it.</li>
</ol>

<h2>2-ESP mode</h2>
<p>For extra safety a vault can require two boards. Each board holds one keyfile, and VeraCrypt needs both. Turn it on in <strong>Settings</strong> and pick the second board. A vault in 2-ESP mode only opens when both boards are plugged in and unlocked.</p>
<div class="note">2-ESP mode is different from <a href="#/docs/mirror">mirror mode</a>. A mirror is a copy, so either board alone opens the vault. In 2-ESP mode you need both.</div>

<h2>Deleting</h2>
<p>Deleting a vault keyfile makes the container unreadable for good. The app asks you to type the vault name and warns you first.</p>
`,
      },

      ssh: {
        title: 'SSH keys',
        lead: 'ECDSA P-256 keys generated and used on the board, through a built-in SSH agent.',
        html: `
<h2>Create a key</h2>
<p>Open <strong>SSH keys</strong> and click <strong>New key</strong>. The key is generated on the chip; only the public key is shown. Copy it to <code>~/.ssh/authorized_keys</code> on a server, or add it to GitHub or GitLab.</p>

<h2>Use the agent</h2>
<p>The app runs an SSH agent while the board is unlocked. Point your tools at it once:</p>
<pre><code># macOS / Linux
export SSH_AUTH_SOCK="$HOME/.ssh/espcrypt-agent.sock"

# Windows (named pipe)
$env:SSH_AUTH_SOCK = "\\\\.\\pipe\\espcrypt-ssh-agent"</code></pre>
<p>Or let the app add it to <code>~/.ssh/config</code> for you from the SSH keys page.</p>
<p>Now <code>ssh</code>, <code>git</code> and editors like VS Code Remote sign with the key on the board.</p>

<h2>Private keys never leave the board</h2>
<p>The agent sends the data to sign to the board and gets a signature back. There is no way to export a private key from the app.</p>
`,
      },

      passkeys: {
        title: 'Passkeys',
        lead: 'Your ESP32-S3 as a FIDO2 security key for passkeys and two-factor login.',
        html: `
<h2>Requirements</h2>
<p>Passkeys need USB OTG, so they work on the <strong>ESP32-S3</strong> only. Install the <strong>Passkey</strong> or <strong>Vault + Passkey</strong> firmware. The board then shows up as a standard USB security key; no drivers are needed.</p>

<h2>Register on a website</h2>
<ol>
  <li>On the site, choose <em>Add a passkey</em> or <em>Add a security key</em>.</li>
  <li>When your browser or system asks, pick <em>Security key</em>.</li>
  <li>Enter the PIN if you set one, then press the board's button when the LED blinks.</li>
</ol>

<h2>PIN and touch</h2>
<p>Set or change the security-key PIN on the <strong>Passkeys</strong> page. Websites that require user verification ask for it. Touch confirmation, the button press, can be turned on or off on the same page.</p>

<h2>Managing passkeys</h2>
<p>The <strong>Passkeys</strong> page lists the passkeys stored on the board and how much space is left. You can remove single passkeys or reset the security key completely.</p>
<div class="warn">Resetting the security key removes every passkey on it. Websites will no longer accept it until you register it again.</div>

<h2>With a mirror</h2>
<p>In <a href="#/docs/mirror">mirror mode</a> passkeys are copied to the backup board too, so you can log in with either board.</p>
`,
      },

      mirror: {
        title: 'Backup & mirror',
        lead: 'Keep a second board as an exact copy, or save an encrypted backup file.',
        html: `
<h2>Mirror mode</h2>
<p>A mirror is a second board that holds the same keyfiles, SSH keys and passkeys as your main board. Whenever both are connected and unlocked, the app syncs them, in both directions. Lose or break one board and the other has everything.</p>

<h2>Set up a mirror</h2>
<ol>
  <li>Open <strong>Backup &amp; mirror</strong> and start the wizard.</li>
  <li>Plug in the board you want as backup. The wizard installs the firmware if needed.</li>
  <li>The main board's encrypted store is copied to it. Both boards now use the same passphrase.</li>
</ol>

<h2>Mirror over Wi-Fi</h2>
<p>The backup does not have to be plugged in. Turn on <strong>Mirror over Wi-Fi</strong> on both boards (page <strong>Wireless</strong>, over USB, confirmed with a press of BOOT), enter your 2.4 GHz network and click <strong>Pair this computer</strong> on both. Put the backup on any USB charger in another room: the app finds it on the network within seconds and keeps it in sync while the main board is plugged in.</p>
<ul>
  <li>Only mirror sync works over Wi-Fi. Vaults, keyfiles, SSH keys, passkeys and updates always need USB.</li>
  <li>Only paired computers can connect; every connection is encrypted (X25519 + AES-256-GCM) and checks it reached the paired board.</li>
  <li>Vaults open with either board of the mirror.</li>
</ul>

<h2>How sync works</h2>
<p>Each board reports a hash of its encrypted store. The app copies from the board that changed since the last sync to the other one, usually within a few seconds. Data is copied in its encrypted form; the app never sees your keys.</p>
<p>If both boards changed since the last sync, the app shows a conflict and lets you choose which board to keep.</p>
<div class="note">Passkeys are copied when both boards are unlocked, because they are re-encrypted with the vault key on the way.</div>

<h2>Backup to a file</h2>
<p>Click <strong>Back up to file</strong> to save an <code>.espcrypt</code> file. It contains the encrypted store and your passkeys, and needs your passphrase to restore. Keep it somewhere offline, such as a USB stick in a drawer.</p>
<p>To restore, plug in a board with the Vault firmware, click <strong>Restore from file</strong> and enter the passphrase.</p>
`,
      },

      cli: {
        title: 'Command line',
        lead: 'The espcrypt command: your boards from any terminal, mirror sync included.',
        html: `
<p><code>espcrypt</code> talks to boards on USB with the same code as the app, and reaches a mirror board over Wi-Fi with the app's pairings. It uses the app's vault list. While the app is open it holds the USB ports, so close it for commands that need a board on USB; <code>mirror</code> and <code>sync</code> also work over Wi-Fi.</p>

<h2>Commands</h2>
<pre><code>espcrypt status                  boards on USB: chip, lock state, storage, firmware
espcrypt unlock [board]          unlock (asks for the passphrase)
espcrypt lock [board]            lock
espcrypt keyfiles [board]        VeraCrypt keyfiles on the board
espcrypt ssh [board]             SSH public keys (authorized_keys format)
espcrypt ssh-new &lt;label&gt; [board] generate an SSH key on the board
espcrypt vaults                  vaults known to the app
espcrypt open &lt;vault&gt;            unlock the board if needed and mount
espcrypt close &lt;vault&gt;|--all     dismount
espcrypt mirror                  both mirror boards (USB or Wi-Fi) and whether they match
espcrypt sync                    copy the newer side to the other</code></pre>
<p><code>[board]</code> is the end of the serial number (for example <code>46D98C</code>) or a port. Without it the only connected board is used.</p>

<h2>Scripting</h2>
<p>Set <code>ESPCRYPT_PASSPHRASE</code> to unlock without a prompt, for example in a backup job that runs <code>espcrypt sync</code>.</p>
<div class="note">An unlock lasts until the board is locked or restarts; later commands do not ask again.</div>
`,
      },

      boards: {
        title: 'Boards',
        lead: 'Which ESP32 boards work, and what each one can do.',
        html: `
<table>
  <thead><tr><th>Board</th><th>Chip</th><th>Vault</th><th>Passkey</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Waveshare ESP32-S3-Zero</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>RGB LED, BOOT button for touch</td></tr>
    <tr><td>Seeed XIAO ESP32-S3</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>User LED</td></tr>
    <tr><td>Other ESP32-S3 boards</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>Needs native USB on GPIO19/20</td></tr>
    <tr><td>ESP32-C3 SuperMini</td><td>ESP32-C3</td><td>✓</td><td>–</td><td>No USB OTG</td></tr>
    <tr><td>ESP32-C6 SuperMini</td><td>ESP32-C6</td><td>✓</td><td>–</td><td>No USB OTG; LED on GPIO15</td></tr>
  </tbody>
</table>

<h2>LED</h2>
<p>One colour per state, switched hard on and off. Slow blink (1.5 s on, 1.5 s off) while resting, fast blink while something runs.</p>
<ul>
  <li><strong>Red, slow</strong> – locked.</li>
  <li><strong>Green, slow</strong> – unlocked.</li>
  <li><strong>Purple, slow</strong> – no passphrase set yet.</li>
  <li><strong>Orange, fast</strong> – unlocking.</li>
  <li><strong>Green, fast</strong> – mirror sync over Wi-Fi.</li>
  <li><strong>Yellow, fast</strong> – firmware update.</li>
  <li><strong>White blinking</strong> – press BOOT to confirm (turning on Wi-Fi, pairing, or a passkey sign-in); green once you pressed it.</li>
  <li><strong>Red, three times</strong> – wrong passphrase.</li>
</ul>
<p>Boards with a single-colour LED show the same rhythm.</p>
`,
      },

      security: {
        title: 'Security model',
        lead: 'What ESP Crypt protects against, and what it does not.',
        html: `
<h2>What is protected</h2>
<ul>
  <li><strong>Data at rest.</strong> Keyfiles and SSH keys are stored in an AES-GCM container. Its key is derived from your passphrase with PBKDF2-HMAC-SHA-256 (200,000 rounds, on the chip's SHA accelerator: about 1.5 s per unlock), so the flash contents are useless without it. Use a long passphrase: someone who takes the board can try short ones offline.</li>
  <li><strong>Keys in use.</strong> SSH and passkey private keys are generated and used on the board. Your computer only gets signatures.</li>
  <li><strong>Vault keyfiles</strong> are only in your computer's memory while a vault is being mounted.</li>
  <li><strong>Firmware</strong> is signed (RSA-3072). The app checks the signature and the release checksums before flashing, and the board refuses unsigned updates.</li>
</ul>

<h2>Deliberate trade-offs</h2>
<p>ESP Crypt does not burn eFuses and does not turn on the chip's hardware flash encryption or secure boot. That means a board can always be reflashed and never bricked, but also:</p>
<ul>
  <li>Someone with the board in hand can read its flash. Your data stays protected only by the passphrase, so make it long.</li>
  <li>Someone with the board in hand could install other firmware over USB. Do not keep using a board you lost track of.</li>
</ul>

<h2>Not covered</h2>
<ul>
  <li>Malware on your computer while a vault is mounted can read the files in it, as with any encrypted disk.</li>
  <li>An ESP32 is not a certified secure element. For high-value secrets, use certified hardware.</li>
</ul>
<div class="note">Found a security problem? Please open a private report on <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> instead of a public issue.</div>
`,
      },

      troubleshooting: {
        title: 'Troubleshooting',
        lead: 'Fixes for the problems people run into most.',
        html: `
<h3>The board does not show up</h3>
<ul>
  <li>Try another cable. Many cheap cables only carry power.</li>
  <li>Plug it in directly instead of through a hub.</li>
  <li>Put the board in download mode: hold <span class="kbd">BOOT</span>, tap <span class="kbd">RESET</span>, release <span class="kbd">BOOT</span>.</li>
</ul>

<h3>Installing hangs or fails</h3>
<p>Close other programs that may hold the serial port, such as Arduino IDE or a serial monitor, and try again. If it keeps failing, put the board in download mode as above.</p>

<h3>"The firmware could not be downloaded"</h3>
<p>The app needs internet once to fetch the firmware from GitHub. After that it works offline with the newest firmware it downloaded.</p>

<h3>The security key is not recognised</h3>
<p>Make sure the board runs <strong>Passkey</strong> or <strong>Vault + Passkey</strong> firmware and is an ESP32-S3. Plug it into the USB-C port wired to the chip's native USB.</p>

<h3>The mirror says "conflict"</h3>
<p>Both boards changed since they last synced. Open <strong>Backup &amp; mirror</strong> and choose which board to keep. The other is overwritten.</p>

<h3>I forgot my passphrase</h3>
<p>The data cannot be recovered. Restore from your mirror board or backup file, or erase the board and start over.</p>

<h3>Still stuck?</h3>
<p>Open an issue on <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> with your board, operating system and what the app shows.</p>
`,
      },
    },
  },
}
