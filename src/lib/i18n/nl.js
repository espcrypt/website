import { RELEASES, ISSUES } from '../config.js'

export default {
  ui: {
    title: 'ESP Crypt: een hardwaresleutel van een ESP32',
    nav: {
      features: 'Functies', how: 'Hoe het werkt', mirror: 'Mirror', boards: 'Boards', docs: 'Docs',
      download: 'Downloaden', toLight: 'Licht thema', toDark: 'Donker thema',
      light: 'Licht thema', dark: 'Donker thema', source: 'Broncode op GitHub',
      openMenu: 'Menu openen', closeMenu: 'Menu sluiten', language: 'Taal',
    },
    hero: {
      tagline: 'Een hardwaresleutel op een ESP32 van €4.',
      lead: 'Een desktop-app en firmware voor versleutelde kluizen, SSH-sleutels en passkeys. De app flasht het board, beheert je sleutels en houdt een back-upboard synchroon.',
      docs: 'Lees de documentatie',
      meta: 'Windows, macOS en Linux · Open source (LGPL-3.0) · Boards blijven herflashbaar',
    },
    features: {
      eyebrow: 'Functies', title: 'Wat het doet',
      lead: 'Gebruik wat je nodig hebt: kluizen en SSH-sleutels werken op elke ondersteunde ESP32, passkeys hebben een ESP32-S3 nodig. Eén board kan het allemaal.',
      items: [
        ['Versleutelde kluizen', 'VeraCrypt-containers waarvan de keyfiles op de ESP32 staan, in een opslag die met je wachtzin is versleuteld. Trek het board eruit en elke kluis gaat op slot.'],
        ['SSH-sleutels op de chip', 'Sleutels worden op het board gemaakt en via een ingebouwde SSH-agent gebruikt, voor ssh, git en VS Code Remote. Privésleutels verlaten het board nooit.'],
        ['Passkeys en beveiligingssleutel', 'Een ESP32-S3 werkt ook als FIDO2-beveiligingssleutel. Browsers en besturingssystemen gebruiken hem voor passkeys en tweestapsverificatie.'],
        ['Mirror via wifi', 'Houd een back-upboard in een andere kamer. Wijzigingen gaan binnen seconden in beide richtingen over je wifi, en de gegevens blijven versleuteld.'],
        ['Ontgrendelt in 1,5 seconde', 'De wachtzin wordt op de SHA-versneller van de chip uitgerekt: 200.000 PBKDF2-rondes in 1,5 s. Eén keer ontgrendelen; de app houdt het board open tot je het vergrendelt.'],
        ['Opdrachtregel', 'espcrypt status, unlock, keyfiles, ssh, open, close, mirror en sync, vanuit elke terminal op macOS, Windows en Linux.'],
        ['Ondertekende firmware, altijd actueel', 'De app downloadt de nieuwste ondertekende firmware en controleert de handtekening voor het flashen. Sluit een nieuw board aan, kies Vault, Passkey of beide, en binnen een minuut is het klaar.'],
        ['2-ESP-modus', 'Vereis desgewenst twee boards voor een kluis. Elk bewaart één keyfile, dus de kluis opent alleen als beide zijn aangesloten.'],
      ],
    },
    how: {
      eyebrow: 'Hoe het werkt', title: 'Van een kaal board naar je sleutels in een paar minuten',
      steps: [
        ['Sluit een board aan', 'Elke ESP32-C3, ESP32-C6 of ESP32-S3 via USB. Een nieuw board verschijnt meteen in de app.'],
        ['Installeer de firmware', 'Kies Vault, Passkey of Vault + Passkey. De app herkent de chip, haalt de nieuwste ondertekende firmware op en flasht hem. Geen tools, geen .bin-bestanden.'],
        ['Stel een wachtzin in', 'Die versleutelt alles wat het board opslaat. Voeg eventueel een pincode toe voor de beveiligingssleutel.'],
        ['Gebruik je sleutels', 'Maak kluizen, SSH-sleutels en passkeys. Voeg een tweede board toe als mirror als je een reserve wilt.'],
      ],
    },
    mirror: {
      eyebrow: 'Back-up en mirror', title: 'Board kwijt, niets kwijt',
      lead: 'Koppel een tweede ESP32 als mirror. Keyfiles, SSH-sleutels en passkeys worden in beide richtingen gekopieerd, via USB of via je wifi, dus de back-up kan in een andere kamer aan een telefoonlader hangen. De gegevens worden versleuteld gekopieerd, dus de app ziet je sleutels nooit.',
      items: [
        'Automatische synchronisatie in twee richtingen via USB of wifi, binnen seconden',
        'Inhoud vergeleken op hash: zijn beide boards gewijzigd, dan kies jij, er gaat niets verloren',
        'Wifi staat uit tot je het met een druk op BOOT aanzet; alleen gekoppelde computers verbinden, end-to-end versleuteld',
        'Kluizen openen met elk van beide boards',
        'Passkeys worden ook gekopieerd, versleuteld met de kluissleutel',
      ],
      alt: 'De pagina Backup & mirror in ESP Crypt, met twee synchrone ESP32-S3-boards',
      caption: 'Twee ESP32-S3-boards gekoppeld als hoofd en back-up, synchroon.',
    },
    cli: {
      eyebrow: 'Opdrachtregel', title: 'Alles vanuit je terminal',
      lead: 'Het commando espcrypt praat via USB met je boards, en via wifi met een mirrorboard. Het deelt de kluizen en koppelingen van de app, dus je kunt back-ups scripten of een kluis openen zonder venster.',
      link: 'Opdrachtregelreferentie',
    },
    boards: {
      eyebrow: 'Ondersteunde boards', title: 'Welk board koop je',
      lead: 'Elk board wordt vanuit de app geflasht. Passkeys hebben USB OTG nodig, en dat heeft alleen de ESP32-S3.',
      vaultSsh: 'Vault, SSH', passkeys: 'Passkeys', yes: 'Ja', no: 'Nee', generic: 'Generiek',
      notes: [
        'RGB-status-led, BOOT-knop voor aanraakbevestiging.',
        'Erg klein, met een gebruikersled. Aanraakbevestiging kan uit.',
        'De goedkoopste optie voor kluizen en SSH-sleutels. Geen USB OTG, dus geen beveiligingssleutel.',
        'Zoals de C3, met een nieuwere chip. Kluizen, SSH-sleutels en mirror via wifi; geen beveiligingssleutel (geen USB OTG).',
      ],
    },
    photos: {
      eyebrow: "Foto's", title: 'Klein genoeg voor aan je sleutelbos',
      alt: 'Een ESP32-C3 SuperMini en een XIAO ESP32-S3 in 3D-geprinte behuizingen met het ESP Crypt-logo',
      caption: 'Een ESP32-C3 SuperMini en een XIAO ESP32-S3 in geprinte behuizingen.',
    },
    security: {
      eyebrow: 'Beveiligingsmodel', title: 'Waartegen het beschermt, en waartegen niet',
      lead: 'ESP Crypt kiest voor boards die je altijd kunt herflashen en herstellen. Dat is een afweging, en het is goed om te weten wat die betekent.',
      link: 'Lees het volledige beveiligingsmodel',
      items: [
        ['Versleuteld opgeslagen', 'Keyfiles en SSH-sleutels staan in een AES-GCM-container, met een sleutel die van je wachtzin is afgeleid.'],
        ['Sleutels blijven op de chip', 'Privésleutels voor SSH en passkeys worden op het board gemaakt en gebruikt. Alleen handtekeningen verlaten het.'],
        ['Altijd herflashbaar', 'Er worden geen eFuses gebrand en hardwarematige flashversleuteling blijft uit, dus een board kan niet onbruikbaar raken.'],
        ['Fysieke toegang telt', 'Wie het board in handen heeft, kan de flash uitlezen of de firmware vervangen. Gebruik een lange wachtzin.'],
      ],
    },
    cta: {
      title: 'Probeer het met elke ESP32-S3, C3 of C6',
      text: 'Download de app, sluit een board aan en volg de installatie. Het kost ongeveer vijf minuten.',
    },
    footer: {
      tagline: 'Versleutelde kluizen, SSH-sleutels en passkeys op een ESP32 van een paar euro. Open source en herflashbaar.',
      project: 'Project', download: 'Downloaden', app: 'App en CLI', firmware: 'Firmware', website: 'Website en docs',
      issues: 'Probleem melden', docs: 'Docs', gettingStarted: 'Aan de slag', passkeys: 'Passkeys',
      mirror: 'Back-up en mirror', security: 'Beveiligingsmodel',
      license: 'Gelicentieerd onder de GNU LGPL-3.0', contributors: 'ESP Crypt-bijdragers',
    },
    dl: { button: 'Downloaden', recommended: 'Voor jouw computer', windows: 'Windows', windowsSub: 'Installatieprogramma · Windows 10 en 11', macArm: 'macOS · Apple Silicon', macArmSub: 'M1, M2, M3, M4 en nieuwer', macIntel: 'macOS · Intel', macIntelSub: 'Macs met een Intel-processor', linux: 'Linux · opdrachtregel', linuxSub: 'x64 en arm64', linuxX64: 'x64', linuxArm: 'arm64', all: 'Alle downloads en controlesommen' },
    docsUi: { docs: 'Docs', page: 'Docspagina', prev: '← Vorige', next: 'Volgende →', improve: 'Verbeter deze pagina op GitHub', suffix: 'ESP Crypt-docs' },
  },

  docs: {
    sections: [
      { title: 'Begin', pages: ['getting-started', 'flashing'] },
      { title: 'Gebruik', pages: ['vaults', 'ssh', 'passkeys', 'mirror'] },
      { title: 'Naslag', pages: ['cli', 'boards', 'security', 'troubleshooting'] },
    ],
    pages: {
      'getting-started': {
        title: 'Aan de slag',
        lead: 'Van download tot je eerste ontgrendelde kluis in ongeveer vijf minuten.',
        html: `
<h2>Wat je nodig hebt</h2>
<ul>
  <li>Een ondersteund board: een <strong>ESP32-S3</strong> (bijvoorbeeld de Waveshare S3-Zero of Seeed XIAO S3), een <strong>ESP32-C3</strong> of een <strong>ESP32-C6</strong> SuperMini. Zie <a href="#/docs/boards">Boards</a>.</li>
  <li>Een USB-kabel die data doorgeeft, niet alleen stroom.</li>
  <li>Windows, macOS of Linux. Voor versleutelde kluizen heb je ook <a href="https://veracrypt.io" target="_blank" rel="noreferrer">VeraCrypt</a> nodig.</li>
</ul>

<h2>1. Installeer de app</h2>
<p>Download de nieuwste versie voor je systeem van <a href="${RELEASES}" target="_blank" rel="noreferrer">GitHub Releases</a> en start hem. De app werkt zichzelf bij als er een nieuwe versie is.</p>

<h2>2. Sluit het board aan</h2>
<p>Open de pagina <strong>ESP32</strong> in de zijbalk. Een nieuw board verschijnt met zijn chiptype en seriële poort. Gebeurt dat niet, zie dan <a href="#/docs/troubleshooting">Problemen oplossen</a>.</p>

<h2>3. Installeer de firmware</h2>
<p>Kies een firmware en klik op <strong>Install</strong>:</p>
<ul>
  <li><strong>Vault</strong> – keyfiles en SSH-sleutels. Werkt op elk ondersteund board.</li>
  <li><strong>Passkey</strong> – alleen een FIDO2-beveiligingssleutel. Alleen ESP32-S3.</li>
  <li><strong>Vault + Passkey</strong> – beide tegelijk. Alleen ESP32-S3. Aanbevolen als je een S3 hebt.</li>
</ul>
<p>Flashen duurt minder dan een minuut. Zie <a href="#/docs/flashing">Flashen</a> voor details.</p>

<h2>4. Stel een wachtzin in</h2>
<p>De app vraagt de eerste keer om een wachtzin. Die versleutelt alles wat het board opslaat. Kies iets langs: het is de belangrijkste bescherming van je sleutels als het board kwijtraakt.</p>
<div class="warn"><strong>Er is geen herstel.</strong> Vergeet je de wachtzin, dan zijn de gegevens op het board niet meer te lezen. Stel vroeg een <a href="#/docs/mirror">mirror of back-upbestand</a> in.</div>

<h2>5. Gebruik het</h2>
<p>Maak een kluis op de pagina <strong>Vaults</strong>, een SSH-sleutel op de pagina <strong>SSH keys</strong>, of registreer het board als passkey op een website. Elk onderdeel heeft hier een eigen pagina.</p>
`,
      },

      flashing: {
        title: 'Flashen',
        lead: 'De app installeert en werkt de firmware zelf bij. Geen ESP-IDF, geen esptool, geen .bin-bestanden.',
        html: `
<h2>Nieuwe boards</h2>
<p>Een board dat net uit de verpakking komt, draait wat de fabriek erop zette. Kies op de pagina <strong>ESP32</strong> een firmware en klik op <strong>Install</strong>. De app zet de chip in downloadmodus, schrijft de bootloader, partitietabel en firmware, en start hem opnieuw.</p>
<div class="note">Bereikt de app de chip niet, houd dan <span class="kbd">BOOT</span> ingedrukt, tik op <span class="kbd">RESET</span> en laat <span class="kbd">BOOT</span> los. Het board staat nu in downloadmodus en de installatie lukt.</div>

<h2>Aanraakbevestiging</h2>
<p>Bij het installeren kies je of het board om een knopdruk vraagt voordat het een sleutel gebruikt. Je kunt dit later in de app wijzigen. Zet het uit voor boards zonder bruikbare knop.</p>

<h2>Updates</h2>
<p>Is er een nieuwere firmwarerelease, dan biedt de pagina ESP32 een update aan. Updates zijn ondertekend en behouden alle gegevens op het board: kluizen, SSH-sleutels, passkeys en instellingen blijven staan. Kan een oud board zichzelf niet bijwerken, dan schrijft de app de nieuwe firmware via USB, nog steeds met behoud van je gegevens.</p>

<h2>Een board wissen</h2>
<p>Een nieuwe installatie over een bestaand board wist alles erop. De app vraagt je eerst een bevestiging te typen. Wil je je sleutels houden, gebruik dan <strong>Update</strong>, of maak eerst een <a href="#/docs/mirror">back-up</a>.</p>
`,
      },

      vaults: {
        title: 'Kluizen',
        lead: 'VeraCrypt-containers die alleen opengaan als je board is aangesloten en ontgrendeld.',
        html: `
<h2>Hoe het werkt</h2>
<p>Elke kluis is een gewone VeraCrypt-container op je schijf. De keyfile wordt op het board gemaakt en in de versleutelde opslag van het board bewaard, nooit op je computer. Bij het ontgrendelen haalt de app de keyfile in het geheugen op, geeft hem aan VeraCrypt en wist hem weer.</p>
<p>Trek het board eruit en de app ontkoppelt elke kluis die het gebruikte.</p>

<h2>Een kluis maken</h2>
<ol>
  <li>Open <strong>Vaults</strong> en klik op <strong>New vault</strong>.</li>
  <li>Kies waar de container komt en hoe groot hij wordt.</li>
  <li>Voeg eventueel een wachtwoord toe bovenop de keyfile.</li>
  <li>De app maakt de container met VeraCrypt en koppelt hem.</li>
</ol>

<h2>2-ESP-modus</h2>
<p>Voor extra zekerheid kan een kluis twee boards vereisen. Elk board bewaart één keyfile en VeraCrypt heeft ze allebei nodig. Zet het aan in <strong>Settings</strong> en kies het tweede board. Een kluis in 2-ESP-modus opent alleen als beide boards zijn aangesloten en ontgrendeld.</p>
<div class="note">De 2-ESP-modus is iets anders dan de <a href="#/docs/mirror">mirrormodus</a>. Een mirror is een kopie, dus elk board opent de kluis alleen. In 2-ESP-modus heb je ze allebei nodig.</div>

<h2>Verwijderen</h2>
<p>Het verwijderen van een keyfile maakt de container voorgoed onleesbaar. De app vraagt je de naam van de kluis te typen en waarschuwt je eerst.</p>
`,
      },

      ssh: {
        title: 'SSH-sleutels',
        lead: 'ECDSA P-256-sleutels die op het board worden gemaakt en gebruikt, via een ingebouwde SSH-agent.',
        html: `
<h2>Een sleutel maken</h2>
<p>Open <strong>SSH keys</strong> en klik op <strong>New key</strong>. De sleutel wordt op de chip gemaakt; alleen de publieke sleutel wordt getoond. Kopieer die naar <code>~/.ssh/authorized_keys</code> op een server, of voeg hem toe aan GitHub of GitLab.</p>

<h2>De agent gebruiken</h2>
<p>De app draait een SSH-agent zolang het board ontgrendeld is. Wijs je tools er één keer naar:</p>
<pre><code># macOS / Linux
export SSH_AUTH_SOCK="$HOME/.ssh/espcrypt-agent.sock"

# Windows (named pipe)
$env:SSH_AUTH_SOCK = "\\\\.\\pipe\\espcrypt-ssh-agent"</code></pre>
<p>Of laat de app hem vanaf de pagina SSH keys aan <code>~/.ssh/config</code> toevoegen.</p>
<p>Nu ondertekenen <code>ssh</code>, <code>git</code> en editors zoals VS Code Remote met de sleutel op het board.</p>

<h2>Privésleutels verlaten het board nooit</h2>
<p>De agent stuurt de te ondertekenen gegevens naar het board en krijgt een handtekening terug. Er is geen manier om een privésleutel uit de app te exporteren.</p>
`,
      },

      passkeys: {
        title: 'Passkeys',
        lead: 'Je ESP32-S3 als FIDO2-beveiligingssleutel voor passkeys en tweestapsverificatie.',
        html: `
<h2>Vereisten</h2>
<p>Passkeys hebben USB OTG nodig, dus ze werken alleen op de <strong>ESP32-S3</strong>. Installeer de firmware <strong>Passkey</strong> of <strong>Vault + Passkey</strong>. Het board verschijnt dan als standaard USB-beveiligingssleutel; drivers zijn niet nodig.</p>

<h2>Registreren op een website</h2>
<ol>
  <li>Kies op de site <em>Passkey toevoegen</em> of <em>Beveiligingssleutel toevoegen</em>.</li>
  <li>Kies <em>Beveiligingssleutel</em> als je browser of systeem erom vraagt.</li>
  <li>Voer de pincode in als je die hebt ingesteld, en druk op de knop van het board als de led knippert.</li>
</ol>

<h2>Pincode en aanraking</h2>
<p>Stel de pincode van de beveiligingssleutel in of wijzig hem op de pagina <strong>Passkeys</strong>. Websites die gebruikersverificatie eisen, vragen erom. Aanraakbevestiging, de knopdruk, zet je op dezelfde pagina aan of uit.</p>

<h2>Passkeys beheren</h2>
<p>De pagina <strong>Passkeys</strong> toont de passkeys op het board en hoeveel ruimte er over is. Je kunt losse passkeys verwijderen of de beveiligingssleutel volledig resetten.</p>
<div class="warn">Resetten verwijdert elke passkey op de sleutel. Websites accepteren hem pas weer als je hem opnieuw registreert.</div>

<h2>Met een mirror</h2>
<p>In <a href="#/docs/mirror">mirrormodus</a> worden passkeys ook naar het back-upboard gekopieerd, dus je kunt met elk board inloggen.</p>
`,
      },

      mirror: {
        title: 'Back-up en mirror',
        lead: 'Houd een tweede board als exacte kopie, of bewaar een versleuteld back-upbestand.',
        html: `
<h2>Mirrormodus</h2>
<p>Een mirror is een tweede board met dezelfde keyfiles, SSH-sleutels en passkeys als je hoofdboard. Zodra beide verbonden en ontgrendeld zijn, synchroniseert de app ze in beide richtingen. Raak je een board kwijt of gaat het stuk, dan heeft het andere alles nog.</p>

<h2>Een mirror instellen</h2>
<ol>
  <li>Open <strong>Backup &amp; mirror</strong> en start de wizard.</li>
  <li>Sluit het board aan dat de back-up wordt. De wizard installeert zo nodig de firmware.</li>
  <li>De versleutelde opslag van het hoofdboard wordt erheen gekopieerd. Beide boards gebruiken nu dezelfde wachtzin.</li>
</ol>

<h2>Mirror via wifi</h2>
<p>De back-up hoeft niet aangesloten te zijn. Zet <strong>Mirror over Wi-Fi</strong> aan op beide boards (pagina <strong>Wireless</strong>, via USB, bevestigd met een druk op BOOT), vul je 2,4 GHz-netwerk in en klik op beide op <strong>Pair this computer</strong>. Hang de back-up aan een willekeurige USB-lader in een andere kamer: de app vindt hem binnen seconden op het netwerk en houdt hem synchroon zolang het hoofdboard is aangesloten.</p>
<ul>
  <li>Alleen mirrorsynchronisatie werkt via wifi. Kluizen, keyfiles, SSH-sleutels, passkeys en updates hebben altijd USB nodig.</li>
  <li>Alleen gekoppelde computers kunnen verbinden; elke verbinding is versleuteld (X25519 + AES-256-GCM) en controleert dat het gekoppelde board is bereikt.</li>
  <li>Kluizen openen met elk van beide boards.</li>
</ul>

<h2>Hoe synchronisatie werkt</h2>
<p>Elk board meldt een hash van zijn versleutelde opslag. De app kopieert van het board dat sinds de vorige synchronisatie is gewijzigd naar het andere, meestal binnen een paar seconden. Gegevens worden versleuteld gekopieerd; de app ziet je sleutels nooit.</p>
<p>Zijn beide boards sinds de vorige synchronisatie gewijzigd, dan meldt de app een conflict en kies jij welk board je houdt.</p>
<div class="note">Passkeys worden gekopieerd als beide boards ontgrendeld zijn, omdat ze onderweg opnieuw met de kluissleutel worden versleuteld.</div>

<h2>Back-up naar een bestand</h2>
<p>Klik op <strong>Back up to file</strong> om een <code>.espcrypt</code>-bestand te bewaren. Het bevat de versleutelde opslag en je passkeys, en heeft je wachtzin nodig om te herstellen. Bewaar het offline, zoals op een USB-stick in een la.</p>
<p>Om te herstellen sluit je een board met de Vault-firmware aan, klik je op <strong>Restore from file</strong> en voer je de wachtzin in.</p>
`,
      },

      cli: {
        title: 'Opdrachtregel',
        lead: 'Het commando espcrypt: je boards vanuit elke terminal, inclusief mirrorsynchronisatie.',
        html: `
<p><code>espcrypt</code> praat met boards op USB met dezelfde code als de app, en bereikt een mirrorboard via wifi met de koppelingen van de app. Het gebruikt de kluislijst van de app. Zolang de app open is houdt die de USB-poorten bezet, dus sluit hem voor commando's die een board op USB nodig hebben; <code>mirror</code> en <code>sync</code> werken ook via wifi.</p>

<h2>Commando's</h2>
<pre><code>espcrypt status                  boards op USB: chip, slotstatus, opslag, firmware
espcrypt unlock [board]          ontgrendelen (vraagt de wachtzin)
espcrypt lock [board]            vergrendelen
espcrypt keyfiles [board]        VeraCrypt-keyfiles op het board
espcrypt ssh [board]             publieke SSH-sleutels (authorized_keys-formaat)
espcrypt ssh-new &lt;label&gt; [board] een SSH-sleutel op het board maken
espcrypt vaults                  kluizen die de app kent
espcrypt open &lt;vault&gt;            board zo nodig ontgrendelen en koppelen
espcrypt close &lt;vault&gt;|--all     ontkoppelen
espcrypt mirror                  beide mirrorboards (USB of wifi) en of ze gelijk zijn
espcrypt sync                    de nieuwere kant naar de andere kopiëren</code></pre>
<p><code>[board]</code> is het einde van het serienummer (bijvoorbeeld <code>46D98C</code>) of een poort. Zonder wordt het enige aangesloten board gebruikt.</p>

<h2>Scripts</h2>
<p>Zet <code>ESPCRYPT_PASSPHRASE</code> om zonder vraag te ontgrendelen, bijvoorbeeld in een back-uptaak die <code>espcrypt sync</code> draait.</p>
<div class="note">Een ontgrendeling blijft gelden tot het board wordt vergrendeld of herstart; volgende commando's vragen niet opnieuw.</div>
`,
      },

      boards: {
        title: 'Boards',
        lead: 'Welke ESP32-boards werken, en wat elk kan.',
        html: `
<table>
  <thead><tr><th>Board</th><th>Chip</th><th>Vault</th><th>Passkey</th><th>Opmerkingen</th></tr></thead>
  <tbody>
    <tr><td>Waveshare ESP32-S3-Zero</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>RGB-led, BOOT-knop voor aanraking</td></tr>
    <tr><td>Seeed XIAO ESP32-S3</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>Gebruikersled</td></tr>
    <tr><td>Andere ESP32-S3-boards</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>Native USB op GPIO19/20 nodig</td></tr>
    <tr><td>ESP32-C3 SuperMini</td><td>ESP32-C3</td><td>✓</td><td>–</td><td>Geen USB OTG</td></tr>
    <tr><td>ESP32-C6 SuperMini</td><td>ESP32-C6</td><td>✓</td><td>–</td><td>Geen USB OTG; led op GPIO15</td></tr>
  </tbody>
</table>

<h2>Led</h2>
<p>Eén kleur per toestand, hard aan en uit. Langzaam knipperen (1,5 s aan, 1,5 s uit) in rust, snel knipperen terwijl er iets loopt.</p>
<ul>
  <li><strong>Rood, langzaam</strong> – vergrendeld.</li>
  <li><strong>Groen, langzaam</strong> – ontgrendeld.</li>
  <li><strong>Paars, langzaam</strong> – nog geen wachtzin ingesteld.</li>
  <li><strong>Oranje, snel</strong> – bezig met ontgrendelen.</li>
  <li><strong>Groen, snel</strong> – mirrorsynchronisatie via wifi.</li>
  <li><strong>Geel, snel</strong> – firmware-update.</li>
  <li><strong>Wit knipperend</strong> – druk op BOOT om te bevestigen (wifi aanzetten, koppelen of inloggen met een passkey); groen zodra je hebt gedrukt.</li>
  <li><strong>Rood, drie keer</strong> – verkeerde wachtzin.</li>
</ul>
<p>Boards met een eenkleurige led tonen hetzelfde ritme.</p>
`,
      },

      security: {
        title: 'Beveiligingsmodel',
        lead: 'Waartegen ESP Crypt beschermt, en waartegen niet.',
        html: `
<h2>Wat beschermd is</h2>
<ul>
  <li><strong>Opgeslagen gegevens.</strong> Keyfiles en SSH-sleutels staan in een AES-GCM-container. De sleutel wordt van je wachtzin afgeleid met PBKDF2-HMAC-SHA-256 (200.000 rondes, op de SHA-versneller van de chip: ongeveer 1,5 s per ontgrendeling), dus de flashinhoud is zonder wachtzin nutteloos. Gebruik een lange wachtzin: wie het board meeneemt, kan korte offline proberen.</li>
  <li><strong>Sleutels in gebruik.</strong> Privésleutels voor SSH en passkeys worden op het board gemaakt en gebruikt. Je computer krijgt alleen handtekeningen.</li>
  <li><strong>Keyfiles van kluizen</strong> staan alleen in het geheugen van je computer terwijl een kluis wordt gekoppeld.</li>
  <li><strong>Firmware</strong> is ondertekend (RSA-3072). De app controleert de handtekening en de controlesommen van de release voor het flashen, en het board weigert niet-ondertekende updates.</li>
</ul>

<h2>Bewuste afwegingen</h2>
<p>ESP Crypt brandt geen eFuses en zet de hardwarematige flashversleuteling en secure boot van de chip niet aan. Een board kan dus altijd opnieuw worden geflasht en nooit onbruikbaar raken, maar ook:</p>
<ul>
  <li>Wie het board in handen heeft, kan de flash uitlezen. Je gegevens zijn dan alleen beschermd door de wachtzin, dus maak die lang.</li>
  <li>Wie het board in handen heeft, kan via USB andere firmware installeren. Gebruik een board dat je kwijt bent geweest niet meer.</li>
</ul>

<h2>Niet gedekt</h2>
<ul>
  <li>Malware op je computer kan de bestanden in een gekoppelde kluis lezen, zoals bij elke versleutelde schijf.</li>
  <li>Een ESP32 is geen gecertificeerd secure element. Gebruik voor zeer waardevolle geheimen gecertificeerde hardware.</li>
</ul>
<div class="note">Een beveiligingsprobleem gevonden? Meld het dan privé op <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> in plaats van in een openbare issue.</div>
`,
      },

      troubleshooting: {
        title: 'Problemen oplossen',
        lead: 'Oplossingen voor de problemen die het vaakst voorkomen.',
        html: `
<h3>Het board verschijnt niet</h3>
<ul>
  <li>Probeer een andere kabel. Veel goedkope kabels geven alleen stroom door.</li>
  <li>Sluit het direct aan in plaats van via een hub.</li>
  <li>Zet het board in downloadmodus: houd <span class="kbd">BOOT</span> ingedrukt, tik op <span class="kbd">RESET</span>, laat <span class="kbd">BOOT</span> los.</li>
</ul>

<h3>Installeren blijft hangen of mislukt</h3>
<p>Sluit andere programma's die de seriële poort bezet kunnen houden, zoals Arduino IDE of een seriële monitor, en probeer het opnieuw. Blijft het mislukken, zet het board dan in downloadmodus zoals hierboven.</p>

<h3>"De firmware kon niet worden gedownload"</h3>
<p>De app heeft één keer internet nodig om de firmware van GitHub te halen. Daarna werkt hij offline met de nieuwste gedownloade firmware.</p>

<h3>De beveiligingssleutel wordt niet herkend</h3>
<p>Controleer dat het board <strong>Passkey</strong>- of <strong>Vault + Passkey</strong>-firmware draait en een ESP32-S3 is. Gebruik de USB-C-poort die op de native USB van de chip is aangesloten.</p>

<h3>De mirror meldt "conflict"</h3>
<p>Beide boards zijn gewijzigd sinds de vorige synchronisatie. Open <strong>Backup &amp; mirror</strong> en kies welk board je houdt. Het andere wordt overschreven.</p>

<h3>Ik ben mijn wachtzin vergeten</h3>
<p>De gegevens zijn niet te herstellen. Herstel vanaf je mirrorboard of back-upbestand, of wis het board en begin opnieuw.</p>

<h3>Kom je er nog niet uit?</h3>
<p>Open een issue op <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> met je board, besturingssysteem en wat de app laat zien.</p>
`,
      },
    },
  },
}
