<script>
    import { page, users, currentUser } from "../stores";

    let username, password
    function changePage(v) {
        page.update(() => v);
    }

    function logar() {
        // let user = $users.find(function(u) {
        //     return u.username == username && u.password == password;
        // })
        let user = null;
        for (let i = 0; i < $users.length; i++) {
            if ($users[i].username == username && $users[i].password == password) {
                user = $users[i];
                break;
            }
        }
        if (!user) {
            alert('usuário não encontrado')
            return
        }
        $currentUser = user
        $page = 'home'
    }
</script>

<form on:submit|preventDefault={logar}>
    <input type="text" bind:value={username} placeholder="Username">
    <input type="password" bind:value={password} placeholder="Senha">
    <input type="submit" value="Logar">
</form>
<button on:click={() => changePage('home')}>Voltar</button>