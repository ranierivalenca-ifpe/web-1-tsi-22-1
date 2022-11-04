<script>
import { page } from "../stores";

function changePage(v) {
  page.update(() => v);
}
</script>
<h2>Home</h2>
<button on:click={() => changePage('login')}>
  Login
</button>
<button on:click={() => changePage('register')}>
  Register
</button>