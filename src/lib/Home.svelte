<script>
import { page, users } from "../stores";

function changePage(v) {
  page.update(() => v);
}

// let registeredUsers = []
// users.subscribe(v => {
//   registeredUsers = v
// })

</script>
<h2>Home</h2>
<button on:click={() => changePage('login')}>
  Login
</button>
<button on:click={() => changePage('register')}>
  Register
</button>
{#each $users as u}
  <div>{u.username} / {u.password}</div>
{/each}