

## Réplica da Landing Page - Natural Bot

### Seção 1: Header
- Barra superior com logo centralizado da Natural Bot (usaremos uma versão estilizada com texto e ícone)

### Seção 2: Hero com Formulário (fundo rosa/magenta)
- **Lado esquerdo**: Título em branco "Preencha o formulário, simule o seu pedido em uma pizzaria e veja como é ser atendido pelo nosso Copiloto de Vendas" + subtítulo "Descubra porque somos a nova geração de chatbot"
- **Lado direito**: Card amarelo/laranja com formulário contendo:
  - Select "Trabalha, gerencia ou é dono de uma operação de restaurante?" (Sim/Não)
  - Radio buttons "Trabalha com delivery?" (Sim/Não)
  - Campos: Nome, Email, Celular (com bandeira BR)
  - Captcha simples (ex: "10 + 1 = ?")
  - Checkbox de consentimento de comunicações
  - Texto de privacidade
  - Botão "TESTAR COPILOTO"
- O envio do formulário dispara um email com os dados preenchidos (via Lovable Cloud edge function)

### Seção 3: Vídeo Institucional
- Título "Conheça a nova geração de chatbot para WhatsApp que ajuda no atendimento a delivery"
- Embed do vídeo do YouTube (https://www.youtube.com/watch?v=UbuqFrCE068)

### Seção 4: Features (cards com ícones)
- Título "Somos o 1° Copiloto de Vendas com IA para restaurantes do Brasil!"
- Subtítulo "Tenha um atendimento automatizado dos seus pedidos e com uma linguagem mais natural"
- 4 cards: Inteligência Artificial, Atendimento Multilíngue, Integração com Monitores, Linguagem Personalizada — cada um com ícone e descrição

### Seção 5: Banner de Cookies
- Toast/banner inferior com opções "Recusar Cookies" e "Aceitar Cookies"

### Backend
- Configurar Lovable Cloud para envio de email com os dados do formulário
- Edge function para processar e enviar o email

