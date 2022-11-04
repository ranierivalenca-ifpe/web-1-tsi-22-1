<script>
    import { page } from "../stores";

    function changePage(v) {
        page.update(() => v);
    }
</script>

<form action="">
    Login!
  </form>
  <button on:click={() => changePage('home')}>Voltar</button>