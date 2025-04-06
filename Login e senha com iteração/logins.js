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
    console.warn('%c[AVISO] ⚠️ Execução interrompida pelo usuário.', 'color: orange; font-weight: bold;');
}

// Exponha a função stop no escopo global (window) para que possa ser chamada no console.
window.stop = stop;

// Variável para verificar se o login foi bem-sucedido
let loginSucesso = false;

// Tenta o login com um usuário e senha.
async function tentarLogin(usuario, senha) {
    console.groupCollapsed(`%c[TENTATIVA] ${usuario}/${senha}`, 'color: DodgerBlue; font-weight: bold;'); // Inicia grupo recolhido

    // Encontra os campos e o formulário (ADAPTAR OS SELECTORES!).
    const usuarioInput = document.querySelector('input[name="login"]');
    const senhaInput = document.querySelector('input[name="pass"]');
    const form = document.querySelector('form[action="logar.php"]');

    if (!usuarioInput || !senhaInput || !form) {
        console.error("%c[ERRO] ❌ Elementos do formulário não encontrados. Verifique os seletores!", "color: Crimson; font-weight: bold;");
        console.groupEnd(); // Finaliza grupo
        return false; // Elementos não encontrados.
    }

    console.log("%c[INFO] ℹ️ Preenchendo campos de login...", 'color: SlateGray');
    usuarioInput.value = usuario;
    senhaInput.value = senha;

    console.log("%c[INFO] ℹ️ Submetendo formulário...", 'color: SlateGray');
    form.submit();

    console.log("%c[INFO] ℹ️ Aguardando resposta do servidor...", 'color: SlateGray');
    console.log('%c[ALERTA] 💡 Se você for redirecionado para outra página após esta mensagem, significa que o login foi bem-sucedido! ✅', 'color: DarkSeaGreen; font-weight: bold;');
    await new Promise(resolve => setTimeout(resolve, 2500)); // Aguarda (AJUSTAR O TEMPO).

    // Verifica se o login foi bem-sucedido (ADAPTAR A LÓGICA!).
    const painelUsuario = document.querySelector('#painel_usuario');

    if (painelUsuario) {
        console.log(`%c[SUCESSO] ✅ Login com ${usuario}/${senha}`, 'color: green; font-weight: bold;'); // Login bem-sucedido!
        console.groupEnd(); // Finaliza grupo
        loginSucesso = true;
        return true;
    } else {
        console.error(`%c[FALHA] ❌ Login com ${usuario}/${senha}`, 'color: red; font-weight: bold;'); // Login falhou!
        console.groupEnd(); // Finaliza grupo
        return false;
    }
}

// Executa os testes de login.
async function executarTestes() {
    console.group("%cIniciando Testes de Login Automatizados", "color: Gold; font-size: 1.2em; font-weight: bold;");

    for (let i = 0; i < usuarios.length; i++) {
        if (pararExecucao) {
            console.log('%c[INFO] ℹ️ Execução finalizada.', 'color: orange; font-weight: bold;');
            console.groupEnd();
            return;
        }

        const usuario = usuarios[i];
        const senha = senhas[i];

        console.log(`%c[PROCESSO] ⚙️ Testando: ${usuario}/${senha} (${i + 1}/${usuarios.length})`, 'color: RoyalBlue');

        if (await tentarLogin(usuario, senha)) {
            console.groupEnd();
            return; // Para ao encontrar um login válido.
        }
    }

    console.error('%c[RESULTADO] ❌ Nenhuma combinação funcionou.', 'color: red; font-weight: bold;');
    console.groupEnd();
}

executarTestes();

/* **Adaptando para outro site:**
1. Inspecione o HTML do login.
2. Adapte os seletores CSS em `tentarLogin()`.
3. Adapte a lógica de sucesso em `tentarLogin()`.
4. Ajuste o tempo de espera.
5. Modifique a geração de usuários/senhas.
*/