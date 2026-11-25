import { RELEASES, ISSUES } from '../config.js'

export default {
  ui: {
    title: 'ESP Crypt: ein Hardware-Schlüssel aus einem ESP32',
    nav: {
      features: 'Funktionen', how: 'So funktioniert es', mirror: 'Spiegel', boards: 'Boards', docs: 'Doku',
      download: 'Herunterladen', toLight: 'Helles Design', toDark: 'Dunkles Design',
      light: 'Helles Design', dark: 'Dunkles Design', source: 'Quellcode auf GitHub',
      openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', language: 'Sprache',
    },
    hero: {
      tagline: 'Ein Hardware-Schlüssel auf einem ESP32 für 4 €.',
      lead: 'Eine Desktop-App und Firmware für verschlüsselte Tresore, SSH-Schlüssel und Passkeys. Die App flasht das Board, verwaltet deine Schlüssel und hält ein Backup-Board synchron.',
      docs: 'Zur Dokumentation',
      meta: 'Windows, macOS und Linux · Open Source (LGPL-3.0) · Boards bleiben neu flashbar',
    },
    features: {
      eyebrow: 'Funktionen', title: 'Was es kann',
      lead: 'Nutze, was du brauchst: Tresore und SSH-Schlüssel laufen auf jedem unterstützten ESP32, Passkeys brauchen einen ESP32-S3. Ein Board kann alles.',
      items: [
        ['Verschlüsselte Tresore', 'VeraCrypt-Container, deren Schlüsseldateien auf dem ESP32 liegen, in einem mit deiner Passphrase verschlüsselten Speicher. Board abziehen, und jeder Tresor ist gesperrt.'],
        ['SSH-Schlüssel auf dem Chip', 'Schlüssel werden auf dem Board erzeugt und über einen eingebauten SSH-Agenten genutzt, für ssh, git und VS Code Remote. Private Schlüssel verlassen es nie.'],
        ['Passkeys und Sicherheitsschlüssel', 'Ein ESP32-S3 arbeitet auch als FIDO2-Sicherheitsschlüssel. Browser und Betriebssysteme nutzen ihn für Passkeys und Zwei-Faktor-Anmeldung.'],
        ['Spiegel über WLAN', 'Halte ein Backup-Board in einem anderen Raum. Änderungen werden in Sekunden in beide Richtungen über dein WLAN synchronisiert, und die Daten bleiben verschlüsselt.'],
        ['Entsperrt in 1,5 Sekunden', 'Die Passphrase wird auf dem SHA-Beschleuniger des Chips gestreckt: 200.000 PBKDF2-Runden in 1,5 s. Einmal entsperren; die App hält das Board offen, bis du es sperrst.'],
        ['Kommandozeile', 'espcrypt status, unlock, keyfiles, ssh, open, close, mirror und sync, aus jedem Terminal unter macOS, Windows und Linux.'],
        ['Signierte Firmware, immer aktuell', 'Die App lädt die neueste signierte Firmware und prüft die Signatur vor dem Flashen. Neues Board anschließen, Vault, Passkey oder beides wählen, und in unter einer Minute ist es fertig.'],
        ['2-ESP-Modus', 'Auf Wunsch braucht ein Tresor zwei Boards. Jedes hält eine Schlüsseldatei, also öffnet sich der Tresor nur, wenn beide angeschlossen sind.'],
      ],
    },
    how: {
      eyebrow: 'So funktioniert es', title: 'Vom nackten Board zu deinen Schlüsseln in wenigen Minuten',
      steps: [
        ['Board anschließen', 'Jeder ESP32-C3, ESP32-C6 oder ESP32-S3 über USB. Ein neues Board erscheint sofort in der App.'],
        ['Firmware installieren', 'Wähle Vault, Passkey oder Vault + Passkey. Die App erkennt den Chip, holt die neueste signierte Firmware und flasht sie. Keine Tools, keine .bin-Dateien.'],
        ['Passphrase festlegen', 'Sie verschlüsselt alles, was das Board speichert. Optional kommt eine PIN für den Sicherheitsschlüssel dazu.'],
        ['Schlüssel nutzen', 'Erstelle Tresore, SSH-Schlüssel und Passkeys. Füge ein zweites Board als Spiegel hinzu, wenn du Ersatz willst.'],
      ],
    },
    mirror: {
      eyebrow: 'Backup und Spiegel', title: 'Board verloren, nichts verloren',
      lead: 'Kopple einen zweiten ESP32 als Spiegel. Schlüsseldateien, SSH-Schlüssel und Passkeys werden in beide Richtungen kopiert, über USB oder dein WLAN, sodass das Backup in einem anderen Raum an einem Handy-Ladegerät hängen kann. Die Daten werden verschlüsselt kopiert, die App sieht deine Schlüssel nie.',
      items: [
        'Automatische Synchronisierung in beide Richtungen über USB oder WLAN, in Sekunden',
        'Inhalte per Hash verglichen: Haben sich beide Boards geändert, entscheidest du, nichts geht verloren',
        'WLAN ist aus, bis du es mit einem Druck auf BOOT einschaltest; nur gekoppelte Computer verbinden sich, Ende-zu-Ende-verschlüsselt',
        'Tresore öffnen mit jedem der beiden Boards',
        'Passkeys werden ebenfalls kopiert, verschlüsselt mit dem Tresorschlüssel',
      ],
      alt: 'Die Seite Backup & mirror in ESP Crypt mit zwei synchronen ESP32-S3-Boards',
      caption: 'Zwei ESP32-S3-Boards als Haupt- und Backup-Board gekoppelt, synchron.',
    },
    cli: {
      eyebrow: 'Kommandozeile', title: 'Alles aus deinem Terminal',
      lead: 'Der Befehl espcrypt spricht über USB mit deinen Boards und über WLAN mit einem Spiegel-Board. Er teilt die Tresore und Kopplungen der App, sodass du Backups skripten oder einen Tresor ohne Fenster öffnen kannst.',
      link: 'Kommandozeilen-Referenz',
    },
    boards: {
      eyebrow: 'Unterstützte Boards', title: 'Welches Board kaufen',
      lead: 'Jedes Board wird aus der App geflasht. Passkeys brauchen USB OTG, das nur der ESP32-S3 hat.',
      vaultSsh: 'Vault, SSH', passkeys: 'Passkeys', yes: 'Ja', no: 'Nein', generic: 'Generisch',
      notes: [
        'RGB-Status-LED, BOOT-Taste zur Berührungsbestätigung.',
        'Sehr klein, mit Benutzer-LED. Die Berührungsbestätigung lässt sich abschalten.',
        'Die günstigste Wahl für Tresore und SSH-Schlüssel. Kein USB OTG, also kein Sicherheitsschlüssel.',
        'Wie der C3, mit neuerem Chip. Tresore, SSH-Schlüssel und Spiegel über WLAN; kein Sicherheitsschlüssel (kein USB OTG).',
      ],
    },
    photos: {
      eyebrow: 'Fotos', title: 'Klein genug für den Schlüsselbund',
      alt: 'Ein ESP32-C3 SuperMini und ein XIAO ESP32-S3 in 3D-gedruckten Gehäusen mit dem ESP-Crypt-Logo',
      caption: 'Ein ESP32-C3 SuperMini und ein XIAO ESP32-S3 in gedruckten Gehäusen.',
    },
    security: {
      eyebrow: 'Sicherheitsmodell', title: 'Wovor es schützt und wovor nicht',
      lead: 'ESP Crypt setzt auf Boards, die du immer neu flashen und wiederherstellen kannst. Das ist ein Kompromiss, und es lohnt sich zu wissen, was er bedeutet.',
      link: 'Das vollständige Sicherheitsmodell lesen',
      items: [
        ['Verschlüsselt gespeichert', 'Schlüsseldateien und SSH-Schlüssel liegen in einem AES-GCM-Container, mit einem aus deiner Passphrase abgeleiteten Schlüssel.'],
        ['Schlüssel bleiben auf dem Chip', 'Private Schlüssel für SSH und Passkeys werden auf dem Board erzeugt und genutzt. Nur Signaturen verlassen es.'],
        ['Immer neu flashbar', 'Es werden keine eFuses gebrannt und die Hardware-Flash-Verschlüsselung bleibt aus, ein Board kann also nicht unbrauchbar werden.'],
        ['Physischer Zugriff zählt', 'Wer das Board in der Hand hat, kann den Flash auslesen oder die Firmware ersetzen. Nutze eine lange Passphrase.'],
      ],
    },
    cta: {
      title: 'Probier es mit jedem ESP32-S3, C3 oder C6',
      text: 'Lade die App herunter, schließe ein Board an und folge der Einrichtung. Es dauert etwa fünf Minuten.',
    },
    footer: {
      tagline: 'Verschlüsselte Tresore, SSH-Schlüssel und Passkeys auf einem ESP32 für ein paar Euro. Open Source und neu flashbar.',
      project: 'Projekt', download: 'Herunterladen', app: 'App und CLI', firmware: 'Firmware', website: 'Website und Doku',
      issues: 'Problem melden', docs: 'Doku', gettingStarted: 'Erste Schritte', passkeys: 'Passkeys',
      mirror: 'Backup und Spiegel', security: 'Sicherheitsmodell',
      license: 'Lizenziert unter der GNU LGPL-3.0', contributors: 'ESP-Crypt-Mitwirkende',
    },
    docsUi: { docs: 'Doku', page: 'Doku-Seite', prev: '← Zurück', next: 'Weiter →', improve: 'Diese Seite auf GitHub verbessern', suffix: 'ESP-Crypt-Doku' },
  },

  docs: {
    sections: [
      { title: 'Start', pages: ['getting-started', 'flashing'] },
      { title: 'Nutzung', pages: ['vaults', 'ssh', 'passkeys', 'mirror'] },
      { title: 'Referenz', pages: ['cli', 'boards', 'security', 'troubleshooting'] },
    ],
    pages: {
      'getting-started': {
        title: 'Erste Schritte',
        lead: 'Vom Download zum ersten entsperrten Tresor in etwa fünf Minuten.',
        html: `
<h2>Was du brauchst</h2>
<ul>
  <li>Ein unterstütztes Board: einen <strong>ESP32-S3</strong> (zum Beispiel Waveshare S3-Zero oder Seeed XIAO S3), einen <strong>ESP32-C3</strong> oder einen <strong>ESP32-C6</strong> SuperMini. Siehe <a href="#/docs/boards">Boards</a>.</li>
  <li>Ein USB-Kabel, das Daten überträgt, nicht nur Strom.</li>
  <li>Windows, macOS oder Linux. Für verschlüsselte Tresore brauchst du außerdem <a href="https://veracrypt.io" target="_blank" rel="noreferrer">VeraCrypt</a>.</li>
</ul>

<h2>1. App installieren</h2>
<p>Lade die neueste Version für dein System von <a href="${RELEASES}" target="_blank" rel="noreferrer">GitHub Releases</a> und starte sie. Die App aktualisiert sich selbst, wenn eine neue Version erscheint.</p>

<h2>2. Board anschließen</h2>
<p>Öffne die Seite <strong>ESP32</strong> in der Seitenleiste. Ein neues Board erscheint mit Chiptyp und seriellem Port. Falls nicht, siehe <a href="#/docs/troubleshooting">Fehlerbehebung</a>.</p>

<h2>3. Firmware installieren</h2>
<p>Wähle eine Firmware und klicke auf <strong>Install</strong>:</p>
<ul>
  <li><strong>Vault</strong> – Schlüsseldateien und SSH-Schlüssel. Läuft auf jedem unterstützten Board.</li>
  <li><strong>Passkey</strong> – nur ein FIDO2-Sicherheitsschlüssel. Nur ESP32-S3.</li>
  <li><strong>Vault + Passkey</strong> – beides zugleich. Nur ESP32-S3. Empfohlen, wenn du einen S3 hast.</li>
</ul>
<p>Das Flashen dauert unter einer Minute. Details unter <a href="#/docs/flashing">Flashen</a>.</p>

<h2>4. Passphrase festlegen</h2>
<p>Die App fragt beim ersten Mal nach einer Passphrase. Sie verschlüsselt alles, was das Board speichert. Wähle etwas Langes: Sie ist der wichtigste Schutz deiner Schlüssel, wenn das Board verloren geht.</p>
<div class="warn"><strong>Es gibt keine Wiederherstellung.</strong> Vergisst du die Passphrase, sind die Daten auf dem Board nicht mehr lesbar. Richte früh einen <a href="#/docs/mirror">Spiegel oder eine Backup-Datei</a> ein.</div>

<h2>5. Loslegen</h2>
<p>Erstelle einen Tresor auf der Seite <strong>Vaults</strong>, einen SSH-Schlüssel auf der Seite <strong>SSH keys</strong>, oder registriere das Board als Passkey auf einer Website. Jedes Thema hat hier eine eigene Seite.</p>
`,
      },

      flashing: {
        title: 'Flashen',
        lead: 'Die App installiert und aktualisiert die Firmware selbst. Kein ESP-IDF, kein esptool, keine .bin-Dateien.',
        html: `
<h2>Neue Boards</h2>
<p>Ein Board frisch aus der Tüte läuft mit dem, was das Werk aufgespielt hat. Wähle auf der Seite <strong>ESP32</strong> eine Firmware und klicke auf <strong>Install</strong>. Die App versetzt den Chip in den Download-Modus, schreibt Bootloader, Partitionstabelle und Firmware und startet ihn neu.</p>
<div class="note">Erreicht die App den Chip nicht, halte <span class="kbd">BOOT</span> gedrückt, tippe auf <span class="kbd">RESET</span> und lass <span class="kbd">BOOT</span> los. Das Board ist jetzt im Download-Modus und die Installation klappt.</div>

<h2>Berührungsbestätigung</h2>
<p>Beim Installieren wählst du, ob das Board einen Tastendruck verlangt, bevor es einen Schlüssel nutzt. Das lässt sich später in der App ändern. Schalte es bei Boards ohne nutzbare Taste ab.</p>

<h2>Updates</h2>
<p>Erscheint ein neueres Firmware-Release, bietet die Seite ESP32 ein Update an. Updates sind signiert und behalten alle Daten auf dem Board: Tresore, SSH-Schlüssel, Passkeys und Einstellungen bleiben erhalten. Kann sich ein altes Board nicht selbst aktualisieren, schreibt die App die neue Firmware über USB, ebenfalls ohne Datenverlust.</p>

<h2>Ein Board löschen</h2>
<p>Eine Neuinstallation über ein bestehendes Board löscht alles darauf. Die App lässt dich zuerst eine Bestätigung eintippen. Willst du deine Schlüssel behalten, nutze <strong>Update</strong> oder erstelle zuerst ein <a href="#/docs/mirror">Backup</a>.</p>
`,
      },

      vaults: {
        title: 'Tresore',
        lead: 'VeraCrypt-Container, die sich nur öffnen, wenn dein Board angeschlossen und entsperrt ist.',
        html: `
<h2>So funktioniert es</h2>
<p>Jeder Tresor ist ein normaler VeraCrypt-Container auf deiner Festplatte. Seine Schlüsseldatei wird auf dem Board erzeugt und im verschlüsselten Speicher des Boards abgelegt, nie auf deinem Computer. Beim Entsperren holt die App die Schlüsseldatei in den Arbeitsspeicher, übergibt sie an VeraCrypt und löscht sie wieder.</p>
<p>Ziehst du das Board ab, trennt die App jeden Tresor, der es genutzt hat.</p>

<h2>Einen Tresor erstellen</h2>
<ol>
  <li>Öffne <strong>Vaults</strong> und klicke auf <strong>New vault</strong>.</li>
  <li>Wähle Speicherort und Größe des Containers.</li>
  <li>Füge optional ein Passwort zusätzlich zur Schlüsseldatei hinzu.</li>
  <li>Die App erstellt den Container mit VeraCrypt und bindet ihn ein.</li>
</ol>

<h2>2-ESP-Modus</h2>
<p>Für zusätzliche Sicherheit kann ein Tresor zwei Boards verlangen. Jedes Board hält eine Schlüsseldatei, und VeraCrypt braucht beide. Schalte es unter <strong>Settings</strong> ein und wähle das zweite Board. Ein Tresor im 2-ESP-Modus öffnet sich nur, wenn beide Boards angeschlossen und entsperrt sind.</p>
<div class="note">Der 2-ESP-Modus ist etwas anderes als der <a href="#/docs/mirror">Spiegelmodus</a>. Ein Spiegel ist eine Kopie, also öffnet jedes Board allein den Tresor. Im 2-ESP-Modus brauchst du beide.</div>

<h2>Löschen</h2>
<p>Das Löschen einer Schlüsseldatei macht den Container dauerhaft unlesbar. Die App lässt dich den Namen des Tresors eintippen und warnt dich vorher.</p>
`,
      },

      ssh: {
        title: 'SSH-Schlüssel',
        lead: 'ECDSA-P-256-Schlüssel, auf dem Board erzeugt und genutzt, über einen eingebauten SSH-Agenten.',
        html: `
<h2>Einen Schlüssel erstellen</h2>
<p>Öffne <strong>SSH keys</strong> und klicke auf <strong>New key</strong>. Der Schlüssel wird auf dem Chip erzeugt; nur der öffentliche Schlüssel wird angezeigt. Kopiere ihn nach <code>~/.ssh/authorized_keys</code> auf einem Server oder füge ihn bei GitHub oder GitLab hinzu.</p>

<h2>Den Agenten nutzen</h2>
<p>Die App betreibt einen SSH-Agenten, solange das Board entsperrt ist. Richte deine Tools einmal darauf aus:</p>
<pre><code># macOS / Linux
export SSH_AUTH_SOCK="$HOME/.ssh/espcrypt-agent.sock"

# Windows (named pipe)
$env:SSH_AUTH_SOCK = "\\\\.\\pipe\\espcrypt-ssh-agent"</code></pre>
<p>Oder lass die App ihn auf der Seite SSH keys in <code>~/.ssh/config</code> eintragen.</p>
<p>Jetzt signieren <code>ssh</code>, <code>git</code> und Editoren wie VS Code Remote mit dem Schlüssel auf dem Board.</p>

<h2>Private Schlüssel verlassen das Board nie</h2>
<p>Der Agent schickt die zu signierenden Daten an das Board und erhält eine Signatur zurück. Einen privaten Schlüssel aus der App zu exportieren ist nicht möglich.</p>
`,
      },

      passkeys: {
        title: 'Passkeys',
        lead: 'Dein ESP32-S3 als FIDO2-Sicherheitsschlüssel für Passkeys und Zwei-Faktor-Anmeldung.',
        html: `
<h2>Voraussetzungen</h2>
<p>Passkeys brauchen USB OTG und funktionieren daher nur auf dem <strong>ESP32-S3</strong>. Installiere die Firmware <strong>Passkey</strong> oder <strong>Vault + Passkey</strong>. Das Board erscheint dann als normaler USB-Sicherheitsschlüssel; Treiber sind nicht nötig.</p>

<h2>Auf einer Website registrieren</h2>
<ol>
  <li>Wähle auf der Website <em>Passkey hinzufügen</em> oder <em>Sicherheitsschlüssel hinzufügen</em>.</li>
  <li>Wähle <em>Sicherheitsschlüssel</em>, wenn Browser oder System fragen.</li>
  <li>Gib die PIN ein, falls gesetzt, und drücke die Taste des Boards, wenn die LED blinkt.</li>
</ol>

<h2>PIN und Berührung</h2>
<p>Setze oder ändere die PIN des Sicherheitsschlüssels auf der Seite <strong>Passkeys</strong>. Websites, die eine Benutzerverifizierung verlangen, fragen danach. Die Berührungsbestätigung, also der Tastendruck, lässt sich auf derselben Seite ein- und ausschalten.</p>

<h2>Passkeys verwalten</h2>
<p>Die Seite <strong>Passkeys</strong> listet die Passkeys auf dem Board und den freien Platz. Du kannst einzelne Passkeys entfernen oder den Sicherheitsschlüssel komplett zurücksetzen.</p>
<div class="warn">Das Zurücksetzen entfernt jeden Passkey darauf. Websites akzeptieren ihn erst wieder, wenn du ihn neu registrierst.</div>

<h2>Mit einem Spiegel</h2>
<p>Im <a href="#/docs/mirror">Spiegelmodus</a> werden Passkeys auch auf das Backup-Board kopiert, sodass du dich mit jedem Board anmelden kannst.</p>
`,
      },

      mirror: {
        title: 'Backup und Spiegel',
        lead: 'Halte ein zweites Board als exakte Kopie oder speichere eine verschlüsselte Backup-Datei.',
        html: `
<h2>Spiegelmodus</h2>
<p>Ein Spiegel ist ein zweites Board mit denselben Schlüsseldateien, SSH-Schlüsseln und Passkeys wie dein Haupt-Board. Sobald beide verbunden und entsperrt sind, synchronisiert die App sie in beide Richtungen. Geht ein Board verloren oder kaputt, hat das andere alles.</p>

<h2>Einen Spiegel einrichten</h2>
<ol>
  <li>Öffne <strong>Backup &amp; mirror</strong> und starte den Assistenten.</li>
  <li>Schließe das Board an, das zum Backup werden soll. Der Assistent installiert bei Bedarf die Firmware.</li>
  <li>Der verschlüsselte Speicher des Haupt-Boards wird darauf kopiert. Beide Boards nutzen jetzt dieselbe Passphrase.</li>
</ol>

<h2>Spiegel über WLAN</h2>
<p>Das Backup muss nicht angeschlossen sein. Schalte <strong>Mirror over Wi-Fi</strong> auf beiden Boards ein (Seite <strong>Wireless</strong>, über USB, bestätigt mit einem Druck auf BOOT), gib dein 2,4-GHz-Netz ein und klicke bei beiden auf <strong>Pair this computer</strong>. Hänge das Backup an ein beliebiges USB-Ladegerät in einem anderen Raum: Die App findet es in Sekunden im Netz und hält es synchron, solange das Haupt-Board angeschlossen ist.</p>
<ul>
  <li>Nur die Spiegel-Synchronisierung läuft über WLAN. Tresore, Schlüsseldateien, SSH-Schlüssel, Passkeys und Updates brauchen immer USB.</li>
  <li>Nur gekoppelte Computer können sich verbinden; jede Verbindung ist verschlüsselt (X25519 + AES-256-GCM) und prüft, dass sie das gekoppelte Board erreicht hat.</li>
  <li>Tresore öffnen mit jedem der beiden Boards.</li>
</ul>

<h2>So funktioniert die Synchronisierung</h2>
<p>Jedes Board meldet einen Hash seines verschlüsselten Speichers. Die App kopiert vom Board, das sich seit der letzten Synchronisierung geändert hat, auf das andere, meist innerhalb weniger Sekunden. Die Daten werden verschlüsselt kopiert; die App sieht deine Schlüssel nie.</p>
<p>Haben sich seit der letzten Synchronisierung beide Boards geändert, zeigt die App einen Konflikt und du wählst, welches Board bleibt.</p>
<div class="note">Passkeys werden kopiert, wenn beide Boards entsperrt sind, weil sie unterwegs mit dem Tresorschlüssel neu verschlüsselt werden.</div>

<h2>Backup in eine Datei</h2>
<p>Klicke auf <strong>Back up to file</strong>, um eine <code>.espcrypt</code>-Datei zu speichern. Sie enthält den verschlüsselten Speicher und deine Passkeys und braucht zum Wiederherstellen deine Passphrase. Bewahre sie offline auf, etwa auf einem USB-Stick in einer Schublade.</p>
<p>Zum Wiederherstellen schließe ein Board mit Vault-Firmware an, klicke auf <strong>Restore from file</strong> und gib die Passphrase ein.</p>
`,
      },

      cli: {
        title: 'Kommandozeile',
        lead: 'Der Befehl espcrypt: deine Boards aus jedem Terminal, Spiegel-Synchronisierung inklusive.',
        html: `
<p><code>espcrypt</code> spricht mit Boards an USB über denselben Code wie die App und erreicht ein Spiegel-Board über WLAN mit den Kopplungen der App. Es nutzt die Tresorliste der App. Solange die App offen ist, belegt sie die USB-Ports; schließe sie also für Befehle, die ein Board an USB brauchen. <code>mirror</code> und <code>sync</code> funktionieren auch über WLAN.</p>

<h2>Befehle</h2>
<pre><code>espcrypt status                  Boards an USB: Chip, Sperrstatus, Speicher, Firmware
espcrypt unlock [board]          entsperren (fragt nach der Passphrase)
espcrypt lock [board]            sperren
espcrypt keyfiles [board]        VeraCrypt-Schlüsseldateien auf dem Board
espcrypt ssh [board]             öffentliche SSH-Schlüssel (authorized_keys-Format)
espcrypt ssh-new &lt;label&gt; [board] einen SSH-Schlüssel auf dem Board erzeugen
espcrypt vaults                  Tresore, die die App kennt
espcrypt open &lt;vault&gt;            Board bei Bedarf entsperren und einbinden
espcrypt close &lt;vault&gt;|--all     trennen
espcrypt mirror                  beide Spiegel-Boards (USB oder WLAN) und ob sie übereinstimmen
espcrypt sync                    die neuere Seite auf die andere kopieren</code></pre>
<p><code>[board]</code> ist das Ende der Seriennummer (zum Beispiel <code>46D98C</code>) oder ein Port. Ohne Angabe wird das einzige angeschlossene Board genutzt.</p>

<h2>Skripte</h2>
<p>Setze <code>ESPCRYPT_PASSPHRASE</code>, um ohne Abfrage zu entsperren, etwa in einem Backup-Job, der <code>espcrypt sync</code> ausführt.</p>
<div class="note">Eine Entsperrung gilt, bis das Board gesperrt wird oder neu startet; spätere Befehle fragen nicht erneut.</div>
`,
      },

      boards: {
        title: 'Boards',
        lead: 'Welche ESP32-Boards funktionieren und was jedes kann.',
        html: `
<table>
  <thead><tr><th>Board</th><th>Chip</th><th>Vault</th><th>Passkey</th><th>Hinweise</th></tr></thead>
  <tbody>
    <tr><td>Waveshare ESP32-S3-Zero</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>RGB-LED, BOOT-Taste für Berührung</td></tr>
    <tr><td>Seeed XIAO ESP32-S3</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>Benutzer-LED</td></tr>
    <tr><td>Andere ESP32-S3-Boards</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>Natives USB an GPIO19/20 nötig</td></tr>
    <tr><td>ESP32-C3 SuperMini</td><td>ESP32-C3</td><td>✓</td><td>–</td><td>Kein USB OTG</td></tr>
    <tr><td>ESP32-C6 SuperMini</td><td>ESP32-C6</td><td>✓</td><td>–</td><td>Kein USB OTG; LED an GPIO15</td></tr>
  </tbody>
</table>

<h2>LED</h2>
<p>Eine Farbe pro Zustand, hart ein- und ausgeschaltet. Langsames Blinken (1,5 s an, 1,5 s aus) in Ruhe, schnelles Blinken, während etwas läuft.</p>
<ul>
  <li><strong>Rot, langsam</strong> – gesperrt.</li>
  <li><strong>Grün, langsam</strong> – entsperrt.</li>
  <li><strong>Lila, langsam</strong> – noch keine Passphrase festgelegt.</li>
  <li><strong>Orange, schnell</strong> – entsperrt gerade.</li>
  <li><strong>Grün, schnell</strong> – Spiegel-Synchronisierung über WLAN.</li>
  <li><strong>Gelb, schnell</strong> – Firmware-Update.</li>
  <li><strong>Weiß blinkend</strong> – BOOT drücken zum Bestätigen (WLAN einschalten, Koppeln oder Passkey-Anmeldung); grün, sobald du gedrückt hast.</li>
  <li><strong>Rot, dreimal</strong> – falsche Passphrase.</li>
</ul>
<p>Boards mit einfarbiger LED zeigen denselben Rhythmus.</p>
`,
      },

      security: {
        title: 'Sicherheitsmodell',
        lead: 'Wovor ESP Crypt schützt und wovor nicht.',
        html: `
<h2>Was geschützt ist</h2>
<ul>
  <li><strong>Gespeicherte Daten.</strong> Schlüsseldateien und SSH-Schlüssel liegen in einem AES-GCM-Container. Sein Schlüssel wird mit PBKDF2-HMAC-SHA-256 aus deiner Passphrase abgeleitet (200.000 Runden auf dem SHA-Beschleuniger des Chips: etwa 1,5 s pro Entsperrung), daher ist der Flash-Inhalt ohne sie nutzlos. Nutze eine lange Passphrase: Wer das Board mitnimmt, kann kurze offline durchprobieren.</li>
  <li><strong>Schlüssel im Einsatz.</strong> Private Schlüssel für SSH und Passkeys werden auf dem Board erzeugt und genutzt. Dein Computer erhält nur Signaturen.</li>
  <li><strong>Schlüsseldateien von Tresoren</strong> liegen nur im Arbeitsspeicher deines Computers, während ein Tresor eingebunden wird.</li>
  <li><strong>Firmware</strong> ist signiert (RSA-3072). Die App prüft Signatur und Prüfsummen des Releases vor dem Flashen, und das Board lehnt unsignierte Updates ab.</li>
</ul>

<h2>Bewusste Kompromisse</h2>
<p>ESP Crypt brennt keine eFuses und schaltet weder die Hardware-Flash-Verschlüsselung noch Secure Boot des Chips ein. Ein Board lässt sich also immer neu flashen und nie unbrauchbar machen, aber auch:</p>
<ul>
  <li>Wer das Board in der Hand hat, kann den Flash auslesen. Deine Daten schützt dann nur die Passphrase, also mach sie lang.</li>
  <li>Wer das Board in der Hand hat, könnte über USB andere Firmware installieren. Nutze kein Board weiter, das du aus den Augen verloren hast.</li>
</ul>

<h2>Nicht abgedeckt</h2>
<ul>
  <li>Schadsoftware auf deinem Computer kann bei eingebundenem Tresor die Dateien darin lesen, wie bei jeder verschlüsselten Festplatte.</li>
  <li>Ein ESP32 ist kein zertifiziertes Secure Element. Für sehr wertvolle Geheimnisse nutze zertifizierte Hardware.</li>
</ul>
<div class="note">Ein Sicherheitsproblem gefunden? Melde es bitte privat auf <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> statt in einem öffentlichen Issue.</div>
`,
      },

      troubleshooting: {
        title: 'Fehlerbehebung',
        lead: 'Lösungen für die häufigsten Probleme.',
        html: `
<h3>Das Board erscheint nicht</h3>
<ul>
  <li>Probiere ein anderes Kabel. Viele billige Kabel übertragen nur Strom.</li>
  <li>Schließe es direkt an statt über einen Hub.</li>
  <li>Versetze das Board in den Download-Modus: <span class="kbd">BOOT</span> halten, <span class="kbd">RESET</span> antippen, <span class="kbd">BOOT</span> loslassen.</li>
</ul>

<h3>Die Installation hängt oder schlägt fehl</h3>
<p>Schließe andere Programme, die den seriellen Port belegen könnten, etwa die Arduino IDE oder einen seriellen Monitor, und versuche es erneut. Scheitert es weiter, versetze das Board wie oben in den Download-Modus.</p>

<h3>„Die Firmware konnte nicht geladen werden“</h3>
<p>Die App braucht einmal Internet, um die Firmware von GitHub zu holen. Danach arbeitet sie offline mit der neuesten geladenen Firmware.</p>

<h3>Der Sicherheitsschlüssel wird nicht erkannt</h3>
<p>Prüfe, dass das Board <strong>Passkey</strong>- oder <strong>Vault + Passkey</strong>-Firmware hat und ein ESP32-S3 ist. Nutze den USB-C-Port, der mit dem nativen USB des Chips verbunden ist.</p>

<h3>Der Spiegel meldet „Konflikt“</h3>
<p>Beide Boards haben sich seit der letzten Synchronisierung geändert. Öffne <strong>Backup &amp; mirror</strong> und wähle, welches Board bleibt. Das andere wird überschrieben.</p>

<h3>Ich habe meine Passphrase vergessen</h3>
<p>Die Daten lassen sich nicht wiederherstellen. Stelle vom Spiegel-Board oder einer Backup-Datei wieder her, oder lösche das Board und fange neu an.</p>

<h3>Immer noch nicht gelöst?</h3>
<p>Öffne ein Issue auf <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> mit deinem Board, Betriebssystem und dem, was die App anzeigt.</p>
`,
      },
    },
  },
}
