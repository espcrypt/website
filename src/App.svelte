<script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import Landing from './pages/Landing.svelte'
  import Docs from './pages/Docs.svelte'
  import { route } from './lib/router.svelte.js'
</script>

<Nav />
<main>
  {#if route.path.startsWith('/docs')}
    <Docs slug={route.path.split('/')[2] || 'getting-started'} />
  {:else}
    <Landing />
  {/if}
</main>
<Footer />
