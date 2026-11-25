import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

const SITE_URL = (process.env.SITE_URL || 'https://espcrypt.org').replace(/\/+$/, '')

const docs = ['getting-started', 'flashing', 'vaults', 'ssh', 'passkeys', 'mirror', 'cli', 'boards', 'security', 'troubleshooting']

function seo() {
  return {
    name: 'seo',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const urls = ['/', ...docs.map((d) => `/#/docs/${d}`)]
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [tailwindcss(), svelte(), seo()],
})
