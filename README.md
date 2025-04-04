# Script de Força Bruta para Recuperação de Conta (Chrome Console)

**Atenção:** Este script destina-se *exclusivamente* à recuperação de *sua própria* conta em situações onde você perdeu ou esqueceu sua senha. O uso para qualquer outra finalidade é ilegal e antiético.

## Descrição

Este script JavaScript foi criado para ser executado no console do Chrome e realizar tentativas automatizadas de login em um formulário web. Ele itera sobre uma lista de nomes de usuário e senhas, preenchendo o formulário e submetendo-o para tentar acessar a conta.

**Importante:** Este script é um *modelo* e requer *adaptação* para funcionar em um site específico. Sites modernos geralmente possuem proteções contra ataques de força bruta (como CAPTCHAs e bloqueio de IP) que podem impedir o funcionamento deste script.

## Como Usar

1.  **Abra o Chrome DevTools:** Navegue até a página de login do site desejado e abra o Chrome DevTools (geralmente pressionando F12).
2.  **Cole o código:** Vá para a aba "Console" e cole o código JavaScript fornecido.
3.  **Adapte o código (CRUCIAL):**
    *   **`usuarios` e `senhas`:** Modifique as listas `usuarios` e `senhas` para conter os nomes de usuário e senhas que você deseja testar.
    *   **Seletores CSS:** Inspecione o HTML do formulário de login e adapte os seletores CSS nas linhas que usam `document.querySelector()` dentro da função `tentarLogin()` para corresponder aos campos de nome de usuário, senha e ao formulário.
    *   **Lógica de Verificação de Sucesso:** Adapte a lógica de verificação de sucesso dentro da função `tentarLogin()` para detectar quando o login é bem-sucedido. Isso geralmente envolve verificar se um elemento específico aparece na página após o login ou se a URL da página muda.
    *   **Tempo de Espera:** Ajuste o tempo de espera (em milissegundos) dentro da função `tentarLogin()` para corresponder à velocidade de resposta do servidor do site.
4.  **Execute o código:** Pressione Enter para executar o código no console.
5.  **Monitore o Console:** Observe o console para ver se o script encontra uma combinação válida de nome de usuário e senha.

 
 
