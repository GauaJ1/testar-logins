# Script de Força Bruta para Recuperação de Conta (Console do Chrome)

⚠️ **Atenção:** Este script destina-se *exclusivamente* à recuperação de *sua própria* conta em situações onde você perdeu ou esqueceu sua senha. **O uso para qualquer outra finalidade é ilegal e antiético.**

---

## 📌 Descrição

Este script JavaScript foi criado para ser executado no console do Chrome e realizar tentativas automatizadas de login em um formulário web. Ele percorre listas de usuários e senhas, preenchendo e submetendo o formulário para tentar acessar a conta.

> 🔒 **Importante:** Este é apenas um modelo e exige **adaptação** para funcionar em um site específico. A maioria dos sites modernos implementa mecanismos de segurança contra ataques de força bruta, como CAPTCHA, limites de tentativas e bloqueios de IP.

---

## ⚙️ Como Usar

1. **Abra o DevTools do Chrome:**
   - Vá até a página de login do site desejado.
   - Pressione `F12` para abrir as ferramentas de desenvolvedor.

2. **Cole o código:**
   - Acesse a aba **Console** e cole o código JavaScript fornecido.

3. **Adapte o código (ESSENCIAL):**
   - ✏️ **Listas `usuarios` e `senhas`:** Insira os valores que deseja testar.
   - 🧩 **Seletores CSS:** Use o `document.querySelector()` para apontar corretamente para os campos de login e senha do formulário.
   - ✅ **Verificação de sucesso:** Implemente uma lógica que reconheça quando o login foi bem-sucedido (ex: mudança de URL ou presença de um elemento específico).
   - ⏱️ **Tempo de espera:** Ajuste o tempo entre tentativas para respeitar o tempo de resposta do servidor e evitar bloqueios.

4. **Execute o código:**
   - Pressione `Enter` no console para iniciar o script.

5. **Monitore os resultados:**
   - Acompanhe o console para ver os resultados das tentativas e identificar combinações válidas.
