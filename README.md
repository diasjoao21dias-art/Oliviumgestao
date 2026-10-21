# Olivium Gestão & Pessoas — site premium

Site institucional responsivo com catálogo de soluções, formulário de orçamento que monta uma mensagem para WhatsApp, menu mobile, animações suaves, favicon e imagem Open Graph.

## Publicar no Render (Static Site)
1. Extraia o ZIP e envie os arquivos para um repositório GitHub.
2. No Render, escolha **New + → Static Site** e conecte o repositório.
3. Build Command: deixe vazio.
4. Publish Directory: `.` (raiz do projeto).
5. Publique.

O arquivo `render.yaml` também contém uma configuração inicial para Render Blueprint.

## Antes de publicar
### 1. Confirmar WhatsApp
Abra `config.js` e ajuste `whatsapp` para o número correto, no formato internacional com apenas números. Exemplo: `5534999999999`.
O número atualmente preenchido é o WhatsApp comercial conhecido da Olivium Tecnologia; confirme se ele também deve ser usado para Gestão & Pessoas.

### 2. Domínio para compartilhamento
No `index.html`, substitua `https://SEU-DOMINIO.com` em `og:image` e `og:url` pelo domínio final. A imagem Open Graph pronta está em `assets/og-image.png` (1200×630), criada com a logo enviada.
A imagem já está em PNG 1200×630 para melhor compatibilidade com plataformas de compartilhamento.

### 3. Personalizar serviços
Os textos dos serviços estão em `index.html`. O formulário não armazena dados: ele abre o WhatsApp com uma mensagem pronta para a pessoa revisar e enviar.

## Arquivos
- `index.html` — página completa
- `styles.css` — visual premium e responsivo
- `script.js` — menu, formulário, animações e WhatsApp
- `config.js` — configuração de WhatsApp
- `assets/logo-olivium.png` — logo oficial enviada, usada no site
- `assets/favicon.png` — favicon criado a partir do símbolo da logo
- `assets/og-image.png` — imagem Open Graph 1200×630 com a logo oficial
- `render.yaml` — configuração de publicação no Render


## Logo e compartilhamento corrigidos
A logo oficial transparente está em `assets/logo-olivium.png`; o símbolo isolado é usado no cabeçalho/rodapé e no favicon. A imagem social `assets/og-image.png` é PNG 1200×630 sobre fundo azul-marinho. Antes de publicar, substitua `https://SEU-DOMINIO.com` no `index.html` pelo endereço público do site.
