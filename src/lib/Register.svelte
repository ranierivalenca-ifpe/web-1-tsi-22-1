<script>
import { page, users } from "../stores";

let username
let password

function changePage(v) {
    page.update(() => v);
}

function registrar() {
    users.update(users => users.concat({
        username,
        password
    }))
    changePage('home');
}
</script>

<form on:submit|preventDefault={registrar}>
    <input type="text" bind:value={username} placeholder="Username">
    <input type="password" bind:value={password} placeholder="Senha">
    <input type="submit" value="Registrar">
</form>
<button on:click={() => changePage('home')}>Voltar</button>