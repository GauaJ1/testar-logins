
# 🛡️ Script de Força Bruta para Recuperação de Conta (Console do Chrome)

⚠️ **Aviso Legal:** Este script é destinado **exclusivamente** à recuperação de **contas pessoais** em casos de esquecimento de senha.  
**Qualquer outro uso é ilegal, antiético e pode violar leis de segurança digital.**  
Você é o único responsável pelo uso desta ferramenta.

---

## 📋 Descrição

Este script JavaScript realiza tentativas automatizadas de login utilizando listas predefinidas de usuários e senhas.  
Executado no console do navegador, ele simula o preenchimento do formulário de login e verifica se houve sucesso.

---

## 🧠 Funcionalidades

✅ Geração automática de combinações (ex: `yan01` a `yan30`)  
✅ Estilização no console com cores para facilitar a leitura  
✅ Detecção de login bem-sucedido por presença de elemento (`#painel_usuario`)  
✅ Alerta de sucesso em destaque  
✅ Interrupção manual com `stop()`

---

## 🎨 Cores e Significados no Console

| Cor              | Significado                         |
|------------------|-------------------------------------|
| 🔵 Azul Claro     | Tentativa de login iniciada         |
| ⚙️ Azul Escuro     | Processo de tentativa               |
| ⚪ Cinza          | Informações de preenchimento        |
| 🟢 Verde          | Login bem-sucedido                  |
| 🔴 Vermelho       | Login falhou / erro nos elementos   |
| 🟠 Laranja        | Execução interrompida pelo usuário  |
| 🟡 Dourado        | Início dos testes                   |

---

## ⚙️ Como Usar

### 1. Acesse o Console

- Abra o navegador Chrome
- Vá para a página de login do sistema desejado
- Pressione `F12` e vá até a aba **Console**

### 2. Cole o Script

- Copie e cole o código no console
- Aguarde a execução

### 3. Parar o Script

- Para interromper, digite: `stop()` no console

---

## ✏️ Adaptação Necessária

| O que               | Onde ajustar                                  | Exemplo atual             |
|--------------------|-----------------------------------------------|---------------------------|
| Lista de usuários  | `usuarios.push(...)` dentro do loop           | `yan01` a `yan30`         |
| Lista de senhas    | `senhas.push(...)`                             | mesmas que usuários       |
| Campos do formulário | `querySelector('input[name="login"]')`     | Ajustar para o site alvo  |
| Lógica de sucesso  | `document.querySelector('#painel_usuario')`   | Mude se necessário        |
| Tempo de espera    | `setTimeout` / `await` com delay              | 2500ms (ajustável)        |

## 📎 Anexos

📁 **Script Principal:**
- [📥 script.js](./Login%20e%20senha%20com%20iteração/logins.js) — clique para abrir ou baixar o script principal.

---

## 🧪 Exemplo de Execução no Console

```js
// Parar a execução manualmente (a qualquer momento)
stop()
```

---

## 🛡️ Aviso Final

Este script **não deve ser usado em contas que não sejam suas**.  
Use **apenas para aprendizado ou recuperação legítima de conta** com permissão.  
Respeite a ética e a legislação vigente.

---
