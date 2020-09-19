<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 960px;
    padding: 60px 10px;
    margin: 0 auto;
  }
</style>

<Nav {segment} />
<!-- <main class="container animate__animated animate__fadeIn"> -->
<main>
  <slot />
</main>
<Footer />
