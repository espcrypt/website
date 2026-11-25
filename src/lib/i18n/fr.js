import { RELEASES, ISSUES } from '../config.js'

export default {
  ui: {
    title: 'ESP Crypt : une clé matérielle à partir d’un ESP32',
    nav: {
      features: 'Fonctions', how: 'Fonctionnement', mirror: 'Miroir', boards: 'Cartes', docs: 'Docs',
      download: 'Télécharger', toLight: 'Thème clair', toDark: 'Thème sombre',
      light: 'Thème clair', dark: 'Thème sombre', source: 'Code source sur GitHub',
      openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', language: 'Langue',
    },
    hero: {
      tagline: 'Une clé matérielle sur un ESP32 à 4 €.',
      lead: 'Une application de bureau et un firmware pour des coffres chiffrés, des clés SSH et des passkeys. L’application flashe la carte, gère vos clés et garde une carte de secours synchronisée.',
      docs: 'Lire la documentation',
      meta: 'Windows, macOS et Linux · Open source (LGPL-3.0) · Les cartes restent reflashables',
    },
    features: {
      eyebrow: 'Fonctions', title: 'Ce qu’il fait',
      lead: 'Utilisez ce dont vous avez besoin : coffres et clés SSH fonctionnent sur tout ESP32 pris en charge, les passkeys exigent un ESP32-S3. Une seule carte peut tout faire.',
      items: [
        ['Coffres chiffrés', 'Des conteneurs VeraCrypt dont les fichiers clés vivent sur l’ESP32, dans un stockage chiffré par votre phrase secrète. Débranchez la carte et tous les coffres se verrouillent.'],
        ['Clés SSH sur la puce', 'Les clés sont générées sur la carte et utilisées via un agent SSH intégré, pour ssh, git et VS Code Remote. Les clés privées ne la quittent jamais.'],
        ['Passkeys et clé de sécurité', 'Un ESP32-S3 sert aussi de clé de sécurité FIDO2. Navigateurs et systèmes l’utilisent pour les passkeys et la connexion à deux facteurs.'],
        ['Miroir par Wi-Fi', 'Gardez une carte de secours dans une autre pièce. Les modifications sont synchronisées dans les deux sens par votre Wi-Fi en quelques secondes, et les données restent chiffrées.'],
        ['Déverrouillage en 1,5 seconde', 'La phrase secrète est étirée sur l’accélérateur SHA de la puce : 200 000 tours PBKDF2 en 1,5 s. Déverrouillez une fois ; l’application garde la carte ouverte jusqu’à ce que vous la verrouilliez.'],
        ['Ligne de commande', 'espcrypt status, unlock, keyfiles, ssh, open, close, mirror et sync, depuis n’importe quel terminal sous macOS, Windows et Linux.'],
        ['Firmware signé, toujours à jour', 'L’application télécharge le dernier firmware signé et vérifie sa signature avant de flasher. Branchez une nouvelle carte, choisissez Vault, Passkey ou les deux : elle est prête en moins d’une minute.'],
        ['Mode 2-ESP', 'Exigez au besoin deux cartes pour un coffre. Chacune détient un fichier clé, le coffre ne s’ouvre donc qu’avec les deux branchées.'],
      ],
    },
    how: {
      eyebrow: 'Fonctionnement', title: 'D’une carte nue à vos clés en quelques minutes',
      steps: [
        ['Branchez une carte', 'N’importe quel ESP32-C3, ESP32-C6 ou ESP32-S3 en USB. Une nouvelle carte apparaît aussitôt dans l’application.'],
        ['Installez le firmware', 'Choisissez Vault, Passkey ou Vault + Passkey. L’application détecte la puce, récupère le dernier firmware signé et le flashe. Aucun outil, aucun fichier .bin.'],
        ['Choisissez une phrase secrète', 'Elle chiffre tout ce que la carte stocke. Ajoutez au besoin un code PIN pour la clé de sécurité.'],
        ['Utilisez vos clés', 'Créez des coffres, des clés SSH et des passkeys. Ajoutez une seconde carte en miroir si vous voulez une réserve.'],
      ],
    },
    mirror: {
      eyebrow: 'Sauvegarde et miroir', title: 'Perdre une carte sans rien perdre',
      lead: 'Associez un second ESP32 en miroir. Fichiers clés, clés SSH et passkeys sont copiés dans les deux sens, en USB ou par votre Wi-Fi, si bien que la sauvegarde peut rester dans une autre pièce sur un chargeur de téléphone. Les données sont copiées chiffrées : l’application ne voit jamais vos clés.',
      items: [
        'Synchronisation automatique dans les deux sens en USB ou Wi-Fi, en quelques secondes',
        'Contenus comparés par hachage : si les deux cartes ont changé, vous choisissez, rien n’est perdu',
        'Le Wi-Fi reste coupé jusqu’à ce que vous l’activiez d’un appui sur BOOT ; seuls les ordinateurs associés se connectent, chiffrés de bout en bout',
        'Les coffres s’ouvrent avec l’une ou l’autre carte du miroir',
        'Les passkeys sont copiées aussi, chiffrées avec la clé du coffre',
      ],
      alt: 'La page Backup & mirror d’ESP Crypt, avec deux cartes ESP32-S3 synchronisées',
      caption: 'Deux cartes ESP32-S3 associées en principale et secours, synchronisées.',
    },
    cli: {
      eyebrow: 'Ligne de commande', title: 'Tout depuis votre terminal',
      lead: 'La commande espcrypt parle à vos cartes en USB, et à une carte miroir par Wi-Fi. Elle partage les coffres et associations de l’application : vous pouvez scripter des sauvegardes ou ouvrir un coffre sans fenêtre.',
      link: 'Référence de la ligne de commande',
    },
    boards: {
      eyebrow: 'Cartes prises en charge', title: 'Quelle carte acheter',
      lead: 'Chaque carte est flashée depuis l’application. Les passkeys exigent l’USB OTG, que seul l’ESP32-S3 possède.',
      vaultSsh: 'Vault, SSH', passkeys: 'Passkeys', yes: 'Oui', no: 'Non', generic: 'Générique',
      notes: [
        'LED d’état RGB, bouton BOOT pour la confirmation tactile.',
        'Très petite, avec une LED utilisateur. La confirmation tactile peut être désactivée.',
        'L’option la moins chère pour les coffres et les clés SSH. Pas d’USB OTG, donc pas de clé de sécurité.',
        'Comme la C3, avec une puce plus récente. Coffres, clés SSH et miroir par Wi-Fi ; pas de clé de sécurité (pas d’USB OTG).',
      ],
    },
    photos: {
      eyebrow: 'Photos', title: 'Assez petit pour un porte-clés',
      alt: 'Un ESP32-C3 SuperMini et un XIAO ESP32-S3 dans des boîtiers imprimés en 3D avec le logo ESP Crypt',
      caption: 'Un ESP32-C3 SuperMini et un XIAO ESP32-S3 dans des boîtiers imprimés.',
    },
    security: {
      eyebrow: 'Modèle de sécurité', title: 'Ce qu’il protège, et ce qu’il ne protège pas',
      lead: 'ESP Crypt privilégie des cartes que vous pouvez toujours reflasher et récupérer. C’est un compromis, et il vaut la peine de savoir ce qu’il implique.',
      link: 'Lire le modèle de sécurité complet',
      items: [
        ['Chiffré au repos', 'Fichiers clés et clés SSH sont dans un conteneur AES-GCM, avec une clé dérivée de votre phrase secrète.'],
        ['Les clés restent sur la puce', 'Les clés privées SSH et passkey sont générées et utilisées sur la carte. Seules les signatures en sortent.'],
        ['Toujours reflashable', 'Aucun eFuse n’est grillé et le chiffrement matériel de la flash reste désactivé : une carte ne peut pas être bloquée.'],
        ['L’accès physique compte', 'Quiconque tient la carte peut lire sa flash ou remplacer le firmware. Utilisez une longue phrase secrète.'],
      ],
    },
    cta: {
      title: 'Essayez avec n’importe quel ESP32-S3, C3 ou C6',
      text: 'Téléchargez l’application, branchez une carte et suivez la configuration. Comptez environ cinq minutes.',
    },
    footer: {
      tagline: 'Coffres chiffrés, clés SSH et passkeys sur un ESP32 à quelques euros. Open source et reflashable.',
      project: 'Projet', download: 'Télécharger', app: 'Application et CLI', firmware: 'Firmware', website: 'Site et docs',
      issues: 'Signaler un problème', docs: 'Docs', gettingStarted: 'Premiers pas', passkeys: 'Passkeys',
      mirror: 'Sauvegarde et miroir', security: 'Modèle de sécurité',
      license: 'Sous licence GNU LGPL-3.0', contributors: 'Contributeurs d’ESP Crypt',
    },
    dl: { button: 'Télécharger', recommended: 'Pour votre ordinateur', windows: 'Windows', windowsSub: 'Installateur · Windows 10 et 11', macArm: 'macOS · Apple Silicon', macArmSub: 'M1, M2, M3, M4 et plus récents', macIntel: 'macOS · Intel', macIntelSub: 'Mac avec processeur Intel', linux: 'Linux · ligne de commande', linuxSub: 'x64 et arm64', linuxX64: 'x64', linuxArm: 'arm64', all: 'Tous les téléchargements et sommes de contrôle' },
    docsUi: { docs: 'Docs', page: 'Page de la doc', prev: '← Précédent', next: 'Suivant →', improve: 'Améliorer cette page sur GitHub', suffix: 'Docs ESP Crypt' },
  },

  docs: {
    sections: [
      { title: 'Démarrer', pages: ['getting-started', 'flashing'] },
      { title: 'Utilisation', pages: ['vaults', 'ssh', 'passkeys', 'mirror'] },
      { title: 'Référence', pages: ['cli', 'boards', 'security', 'troubleshooting'] },
    ],
    pages: {
      'getting-started': {
        title: 'Premiers pas',
        lead: 'Du téléchargement à votre premier coffre déverrouillé en environ cinq minutes.',
        html: `
<h2>Ce qu’il vous faut</h2>
<ul>
  <li>Une carte prise en charge : un <strong>ESP32-S3</strong> (par exemple la Waveshare S3-Zero ou la Seeed XIAO S3), un <strong>ESP32-C3</strong> ou un <strong>ESP32-C6</strong> SuperMini. Voir <a href="#/docs/boards">Cartes</a>.</li>
  <li>Un câble USB qui transmet les données, pas seulement le courant.</li>
  <li>Windows, macOS ou Linux. Pour les coffres chiffrés, il vous faut aussi <a href="https://veracrypt.io" target="_blank" rel="noreferrer">VeraCrypt</a>.</li>
</ul>

<h2>1. Installez l’application</h2>
<p>Téléchargez la dernière version pour votre système depuis <a href="${RELEASES}" target="_blank" rel="noreferrer">GitHub Releases</a> et lancez-la. L’application se met à jour d’elle-même quand une nouvelle version sort.</p>

<h2>2. Branchez la carte</h2>
<p>Ouvrez la page <strong>ESP32</strong> dans la barre latérale. Une nouvelle carte apparaît avec son type de puce et son port série. Sinon, voir <a href="#/docs/troubleshooting">Dépannage</a>.</p>

<h2>3. Installez le firmware</h2>
<p>Choisissez un firmware et cliquez sur <strong>Install</strong> :</p>
<ul>
  <li><strong>Vault</strong> – fichiers clés et clés SSH. Fonctionne sur toutes les cartes prises en charge.</li>
  <li><strong>Passkey</strong> – uniquement une clé de sécurité FIDO2. ESP32-S3 uniquement.</li>
  <li><strong>Vault + Passkey</strong> – les deux à la fois. ESP32-S3 uniquement. Recommandé si vous avez un S3.</li>
</ul>
<p>Le flashage prend moins d’une minute. Détails dans <a href="#/docs/flashing">Flashage</a>.</p>

<h2>4. Choisissez une phrase secrète</h2>
<p>L’application demande une phrase secrète la première fois. Elle chiffre tout ce que la carte stocke. Choisissez-la longue : c’est la principale protection de vos clés si la carte est perdue.</p>
<div class="warn"><strong>Aucune récupération n’est possible.</strong> Si vous oubliez la phrase secrète, les données de la carte deviennent illisibles. Mettez en place tôt un <a href="#/docs/mirror">miroir ou un fichier de sauvegarde</a>.</div>

<h2>5. Utilisez-la</h2>
<p>Créez un coffre sur la page <strong>Vaults</strong>, une clé SSH sur la page <strong>SSH keys</strong>, ou enregistrez la carte comme passkey sur un site web. Chaque sujet a sa propre page ici.</p>
`,
      },

      flashing: {
        title: 'Flashage',
        lead: 'L’application installe et met à jour le firmware elle-même. Ni ESP-IDF, ni esptool, ni fichiers .bin.',
        html: `
<h2>Nouvelles cartes</h2>
<p>Une carte qui sort du sachet exécute ce que l’usine y a mis. Sur la page <strong>ESP32</strong>, choisissez un firmware et cliquez sur <strong>Install</strong>. L’application met la puce en mode téléchargement, écrit le bootloader, la table de partitions et le firmware, puis la redémarre.</p>
<div class="note">Si l’application n’atteint pas la puce, maintenez <span class="kbd">BOOT</span>, appuyez sur <span class="kbd">RESET</span>, puis relâchez <span class="kbd">BOOT</span>. La carte est alors en mode téléchargement et l’installation fonctionnera.</div>

<h2>Confirmation tactile</h2>
<p>À l’installation, vous choisissez si la carte demande un appui sur le bouton avant d’utiliser une clé. Vous pouvez le changer plus tard dans l’application. Désactivez-la pour les cartes sans bouton utilisable.</p>

<h2>Mises à jour</h2>
<p>Quand une release de firmware plus récente est disponible, la page ESP32 propose une mise à jour. Les mises à jour sont signées et conservent toutes les données de la carte : coffres, clés SSH, passkeys et réglages restent en place. Si une ancienne carte ne peut pas se mettre à jour elle-même, l’application écrit le nouveau firmware par USB, toujours sans perte de données.</p>

<h2>Effacer une carte</h2>
<p>Une nouvelle installation sur une carte existante efface tout ce qu’elle contient. L’application vous demande d’abord de taper une confirmation. Pour garder vos clés, utilisez <strong>Update</strong>, ou faites d’abord une <a href="#/docs/mirror">sauvegarde</a>.</p>
`,
      },

      vaults: {
        title: 'Coffres',
        lead: 'Des conteneurs VeraCrypt qui ne s’ouvrent que si votre carte est branchée et déverrouillée.',
        html: `
<h2>Fonctionnement</h2>
<p>Chaque coffre est un conteneur VeraCrypt ordinaire sur votre disque. Son fichier clé est généré sur la carte et conservé dans le stockage chiffré de la carte, jamais sur votre ordinateur. Au déverrouillage, l’application charge le fichier clé en mémoire, le transmet à VeraCrypt puis l’efface.</p>
<p>Débranchez la carte et l’application démonte tous les coffres qui l’utilisaient.</p>

<h2>Créer un coffre</h2>
<ol>
  <li>Ouvrez <strong>Vaults</strong> et cliquez sur <strong>New vault</strong>.</li>
  <li>Choisissez l’emplacement et la taille du conteneur.</li>
  <li>Ajoutez au besoin un mot de passe en plus du fichier clé.</li>
  <li>L’application crée le conteneur avec VeraCrypt et le monte.</li>
</ol>

<h2>Mode 2-ESP</h2>
<p>Pour plus de sûreté, un coffre peut exiger deux cartes. Chaque carte détient un fichier clé, et VeraCrypt a besoin des deux. Activez-le dans <strong>Settings</strong> et choisissez la seconde carte. Un coffre en mode 2-ESP ne s’ouvre que si les deux cartes sont branchées et déverrouillées.</p>
<div class="note">Le mode 2-ESP n’est pas le <a href="#/docs/mirror">mode miroir</a>. Un miroir est une copie : chaque carte seule ouvre le coffre. En mode 2-ESP, il faut les deux.</div>

<h2>Supprimer</h2>
<p>Supprimer le fichier clé d’un coffre rend le conteneur illisible pour toujours. L’application vous fait taper le nom du coffre et vous avertit d’abord.</p>
`,
      },

      ssh: {
        title: 'Clés SSH',
        lead: 'Des clés ECDSA P-256 générées et utilisées sur la carte, via un agent SSH intégré.',
        html: `
<h2>Créer une clé</h2>
<p>Ouvrez <strong>SSH keys</strong> et cliquez sur <strong>New key</strong>. La clé est générée sur la puce ; seule la clé publique est affichée. Copiez-la dans <code>~/.ssh/authorized_keys</code> sur un serveur, ou ajoutez-la à GitHub ou GitLab.</p>

<h2>Utiliser l’agent</h2>
<p>L’application fait tourner un agent SSH tant que la carte est déverrouillée. Indiquez-le une fois à vos outils :</p>
<pre><code># macOS / Linux
export SSH_AUTH_SOCK="$HOME/.ssh/espcrypt-agent.sock"

# Windows (named pipe)
$env:SSH_AUTH_SOCK = "\\\\.\\pipe\\espcrypt-ssh-agent"</code></pre>
<p>Ou laissez l’application l’ajouter à <code>~/.ssh/config</code> depuis la page SSH keys.</p>
<p>Désormais <code>ssh</code>, <code>git</code> et des éditeurs comme VS Code Remote signent avec la clé de la carte.</p>

<h2>Les clés privées ne quittent jamais la carte</h2>
<p>L’agent envoie les données à signer à la carte et reçoit une signature en retour. Il est impossible d’exporter une clé privée depuis l’application.</p>
`,
      },

      passkeys: {
        title: 'Passkeys',
        lead: 'Votre ESP32-S3 comme clé de sécurité FIDO2 pour les passkeys et la connexion à deux facteurs.',
        html: `
<h2>Prérequis</h2>
<p>Les passkeys exigent l’USB OTG : elles ne fonctionnent que sur l’<strong>ESP32-S3</strong>. Installez le firmware <strong>Passkey</strong> ou <strong>Vault + Passkey</strong>. La carte apparaît alors comme une clé de sécurité USB standard ; aucun pilote n’est nécessaire.</p>

<h2>S’enregistrer sur un site</h2>
<ol>
  <li>Sur le site, choisissez <em>Ajouter une passkey</em> ou <em>Ajouter une clé de sécurité</em>.</li>
  <li>Quand le navigateur ou le système le demande, choisissez <em>Clé de sécurité</em>.</li>
  <li>Saisissez le code PIN si vous en avez défini un, puis appuyez sur le bouton de la carte quand la LED clignote.</li>
</ol>

<h2>PIN et toucher</h2>
<p>Définissez ou changez le PIN de la clé de sécurité sur la page <strong>Passkeys</strong>. Les sites qui exigent une vérification de l’utilisateur le demandent. La confirmation tactile, l’appui sur le bouton, s’active ou se désactive sur la même page.</p>

<h2>Gérer les passkeys</h2>
<p>La page <strong>Passkeys</strong> liste les passkeys stockées sur la carte et l’espace restant. Vous pouvez supprimer des passkeys une à une ou réinitialiser complètement la clé de sécurité.</p>
<div class="warn">La réinitialisation supprime toutes les passkeys. Les sites ne l’accepteront plus tant que vous ne l’aurez pas enregistrée à nouveau.</div>

<h2>Avec un miroir</h2>
<p>En <a href="#/docs/mirror">mode miroir</a>, les passkeys sont aussi copiées sur la carte de secours : vous pouvez vous connecter avec l’une ou l’autre.</p>
`,
      },

      mirror: {
        title: 'Sauvegarde et miroir',
        lead: 'Gardez une seconde carte comme copie exacte, ou enregistrez un fichier de sauvegarde chiffré.',
        html: `
<h2>Mode miroir</h2>
<p>Un miroir est une seconde carte qui détient les mêmes fichiers clés, clés SSH et passkeys que votre carte principale. Dès que les deux sont connectées et déverrouillées, l’application les synchronise dans les deux sens. Perdez ou cassez une carte : l’autre a tout.</p>

<h2>Configurer un miroir</h2>
<ol>
  <li>Ouvrez <strong>Backup &amp; mirror</strong> et lancez l’assistant.</li>
  <li>Branchez la carte qui servira de secours. L’assistant installe le firmware si nécessaire.</li>
  <li>Le stockage chiffré de la carte principale y est copié. Les deux cartes utilisent désormais la même phrase secrète.</li>
</ol>

<h2>Miroir par Wi-Fi</h2>
<p>La carte de secours n’a pas besoin d’être branchée. Activez <strong>Mirror over Wi-Fi</strong> sur les deux cartes (page <strong>Wireless</strong>, en USB, confirmé par un appui sur BOOT), saisissez votre réseau 2,4 GHz et cliquez sur <strong>Pair this computer</strong> pour les deux. Placez la carte de secours sur n’importe quel chargeur USB dans une autre pièce : l’application la trouve sur le réseau en quelques secondes et la garde synchronisée tant que la carte principale est branchée.</p>
<ul>
  <li>Seule la synchronisation du miroir passe par le Wi-Fi. Coffres, fichiers clés, clés SSH, passkeys et mises à jour exigent toujours l’USB.</li>
  <li>Seuls les ordinateurs associés peuvent se connecter ; chaque connexion est chiffrée (X25519 + AES-256-GCM) et vérifie qu’elle atteint la carte associée.</li>
  <li>Les coffres s’ouvrent avec l’une ou l’autre carte du miroir.</li>
</ul>

<h2>Fonctionnement de la synchronisation</h2>
<p>Chaque carte indique un hachage de son stockage chiffré. L’application copie depuis la carte qui a changé depuis la dernière synchronisation vers l’autre, généralement en quelques secondes. Les données sont copiées chiffrées ; l’application ne voit jamais vos clés.</p>
<p>Si les deux cartes ont changé depuis la dernière synchronisation, l’application signale un conflit et vous choisissez la carte à conserver.</p>
<div class="note">Les passkeys sont copiées quand les deux cartes sont déverrouillées, car elles sont rechiffrées avec la clé du coffre au passage.</div>

<h2>Sauvegarde dans un fichier</h2>
<p>Cliquez sur <strong>Back up to file</strong> pour enregistrer un fichier <code>.espcrypt</code>. Il contient le stockage chiffré et vos passkeys, et la restauration exige votre phrase secrète. Gardez-le hors ligne, par exemple sur une clé USB dans un tiroir.</p>
<p>Pour restaurer, branchez une carte avec le firmware Vault, cliquez sur <strong>Restore from file</strong> et saisissez la phrase secrète.</p>
`,
      },

      cli: {
        title: 'Ligne de commande',
        lead: 'La commande espcrypt : vos cartes depuis n’importe quel terminal, synchronisation du miroir comprise.',
        html: `
<p><code>espcrypt</code> parle aux cartes en USB avec le même code que l’application, et atteint une carte miroir par Wi-Fi avec les associations de l’application. Elle utilise la liste de coffres de l’application. Tant que l’application est ouverte, elle occupe les ports USB : fermez-la pour les commandes qui ont besoin d’une carte en USB ; <code>mirror</code> et <code>sync</code> fonctionnent aussi par Wi-Fi.</p>

<h2>Commandes</h2>
<pre><code>espcrypt status                  cartes en USB : puce, verrouillage, stockage, firmware
espcrypt unlock [board]          déverrouiller (demande la phrase secrète)
espcrypt lock [board]            verrouiller
espcrypt keyfiles [board]        fichiers clés VeraCrypt sur la carte
espcrypt ssh [board]             clés SSH publiques (format authorized_keys)
espcrypt ssh-new &lt;label&gt; [board] générer une clé SSH sur la carte
espcrypt vaults                  coffres connus de l’application
espcrypt open &lt;vault&gt;            déverrouiller la carte si besoin et monter
espcrypt close &lt;vault&gt;|--all     démonter
espcrypt mirror                  les deux cartes du miroir (USB ou Wi-Fi) et leur concordance
espcrypt sync                    copier le côté le plus récent vers l’autre</code></pre>
<p><code>[board]</code> est la fin du numéro de série (par exemple <code>46D98C</code>) ou un port. Sans lui, la seule carte branchée est utilisée.</p>

<h2>Scripts</h2>
<p>Définissez <code>ESPCRYPT_PASSPHRASE</code> pour déverrouiller sans invite, par exemple dans une tâche de sauvegarde qui lance <code>espcrypt sync</code>.</p>
<div class="note">Un déverrouillage dure jusqu’à ce que la carte soit verrouillée ou redémarre ; les commandes suivantes ne redemandent rien.</div>
`,
      },

      boards: {
        title: 'Cartes',
        lead: 'Quelles cartes ESP32 fonctionnent, et ce que chacune sait faire.',
        html: `
<table>
  <thead><tr><th>Carte</th><th>Puce</th><th>Vault</th><th>Passkey</th><th>Remarques</th></tr></thead>
  <tbody>
    <tr><td>Waveshare ESP32-S3-Zero</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>LED RGB, bouton BOOT pour le toucher</td></tr>
    <tr><td>Seeed XIAO ESP32-S3</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>LED utilisateur</td></tr>
    <tr><td>Autres cartes ESP32-S3</td><td>ESP32-S3</td><td>✓</td><td>✓</td><td>USB natif sur GPIO19/20 requis</td></tr>
    <tr><td>ESP32-C3 SuperMini</td><td>ESP32-C3</td><td>✓</td><td>–</td><td>Pas d’USB OTG</td></tr>
    <tr><td>ESP32-C6 SuperMini</td><td>ESP32-C6</td><td>✓</td><td>–</td><td>Pas d’USB OTG ; LED sur GPIO15</td></tr>
  </tbody>
</table>

<h2>LED</h2>
<p>Une couleur par état, allumée et éteinte franchement. Clignotement lent (1,5 s allumée, 1,5 s éteinte) au repos, rapide pendant une opération.</p>
<ul>
  <li><strong>Rouge, lent</strong> – verrouillée.</li>
  <li><strong>Vert, lent</strong> – déverrouillée.</li>
  <li><strong>Violet, lent</strong> – aucune phrase secrète définie.</li>
  <li><strong>Orange, rapide</strong> – déverrouillage en cours.</li>
  <li><strong>Vert, rapide</strong> – synchronisation du miroir par Wi-Fi.</li>
  <li><strong>Jaune, rapide</strong> – mise à jour du firmware.</li>
  <li><strong>Blanc clignotant</strong> – appuyez sur BOOT pour confirmer (activer le Wi-Fi, associer, ou connexion par passkey) ; vert une fois l’appui fait.</li>
  <li><strong>Rouge, trois fois</strong> – mauvaise phrase secrète.</li>
</ul>
<p>Les cartes à LED monochrome suivent le même rythme.</p>
`,
      },

      security: {
        title: 'Modèle de sécurité',
        lead: 'Ce contre quoi ESP Crypt protège, et ce contre quoi il ne protège pas.',
        html: `
<h2>Ce qui est protégé</h2>
<ul>
  <li><strong>Données au repos.</strong> Fichiers clés et clés SSH sont stockés dans un conteneur AES-GCM. Sa clé est dérivée de votre phrase secrète avec PBKDF2-HMAC-SHA-256 (200 000 tours sur l’accélérateur SHA de la puce : environ 1,5 s par déverrouillage), donc le contenu de la flash est inutile sans elle. Utilisez une longue phrase secrète : qui emporte la carte peut essayer les courtes hors ligne.</li>
  <li><strong>Clés en usage.</strong> Les clés privées SSH et passkey sont générées et utilisées sur la carte. Votre ordinateur ne reçoit que des signatures.</li>
  <li><strong>Les fichiers clés des coffres</strong> ne sont dans la mémoire de votre ordinateur que pendant le montage d’un coffre.</li>
  <li><strong>Le firmware</strong> est signé (RSA-3072). L’application vérifie la signature et les sommes de contrôle de la release avant de flasher, et la carte refuse les mises à jour non signées.</li>
</ul>

<h2>Compromis assumés</h2>
<p>ESP Crypt ne grille pas d’eFuses et n’active ni le chiffrement matériel de la flash ni le secure boot de la puce. Une carte peut donc toujours être reflashée et jamais bloquée, mais aussi :</p>
<ul>
  <li>Quiconque tient la carte peut lire sa flash. Vos données ne sont alors protégées que par la phrase secrète : faites-la longue.</li>
  <li>Quiconque tient la carte pourrait installer un autre firmware par USB. Ne continuez pas à utiliser une carte que vous avez perdue de vue.</li>
</ul>

<h2>Non couvert</h2>
<ul>
  <li>Un logiciel malveillant sur votre ordinateur peut lire les fichiers d’un coffre monté, comme pour tout disque chiffré.</li>
  <li>Un ESP32 n’est pas un élément sécurisé certifié. Pour des secrets de grande valeur, utilisez du matériel certifié.</li>
</ul>
<div class="note">Vous avez trouvé un problème de sécurité ? Signalez-le en privé sur <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> plutôt que dans une issue publique.</div>
`,
      },

      troubleshooting: {
        title: 'Dépannage',
        lead: 'Solutions aux problèmes les plus courants.',
        html: `
<h3>La carte n’apparaît pas</h3>
<ul>
  <li>Essayez un autre câble. Beaucoup de câbles bon marché ne transportent que le courant.</li>
  <li>Branchez-la directement plutôt que via un hub.</li>
  <li>Mettez la carte en mode téléchargement : maintenez <span class="kbd">BOOT</span>, appuyez sur <span class="kbd">RESET</span>, relâchez <span class="kbd">BOOT</span>.</li>
</ul>

<h3>L’installation se bloque ou échoue</h3>
<p>Fermez les autres programmes qui pourraient occuper le port série, comme l’IDE Arduino ou un moniteur série, et réessayez. Si cela échoue encore, mettez la carte en mode téléchargement comme ci-dessus.</p>

<h3>« Le firmware n’a pas pu être téléchargé »</h3>
<p>L’application a besoin d’Internet une fois pour récupérer le firmware sur GitHub. Ensuite, elle fonctionne hors ligne avec le dernier firmware téléchargé.</p>

<h3>La clé de sécurité n’est pas reconnue</h3>
<p>Vérifiez que la carte exécute le firmware <strong>Passkey</strong> ou <strong>Vault + Passkey</strong> et qu’il s’agit d’un ESP32-S3. Utilisez le port USB-C relié à l’USB natif de la puce.</p>

<h3>Le miroir indique « conflit »</h3>
<p>Les deux cartes ont changé depuis leur dernière synchronisation. Ouvrez <strong>Backup &amp; mirror</strong> et choisissez la carte à conserver. L’autre est écrasée.</p>

<h3>J’ai oublié ma phrase secrète</h3>
<p>Les données ne peuvent pas être récupérées. Restaurez depuis votre carte miroir ou un fichier de sauvegarde, ou effacez la carte et recommencez.</p>

<h3>Toujours bloqué ?</h3>
<p>Ouvrez une issue sur <a href="${ISSUES}" target="_blank" rel="noreferrer">GitHub</a> en indiquant votre carte, votre système et ce qu’affiche l’application.</p>
`,
      },
    },
  },
}
