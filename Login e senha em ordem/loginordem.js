// Lista de usuários e senhas para testar.
const usuarios = [
  'usuario1', // Adicione seus nomes de usuário aqui
  'usuario2'
];
const senhas = [
  'senha1', // Adicione suas senhas aqui
  'senha2'
];

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
      const usuario = usuarios[i];
      const senha = senhas[i];

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
*/