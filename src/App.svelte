<script>
  // import svelteLogo from './assets/svelte.svg'
  // import Counter from './lib/Counter.svelte'
  import Home from './lib/Home.svelte';
  import Login from './lib/Login.svelte';
  import Register from './lib/Register.svelte';
  import { page } from './stores';
  
  let currentPage
  page.subscribe(value => {
    currentPage = value
  })

</script>

<main>
  <h1>Meus ursinhos ({currentPage})</h1>
  {#if currentPage == 'home'}
    <Home />
  {:else if currentPage == 'login'}
    <Login />
  {:else if currentPage == 'register'}
    <Register />
  {/if}

</main>

<style>
</style>
