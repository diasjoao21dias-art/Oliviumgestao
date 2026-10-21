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
No `index.html`, substitua `https://SEU-DOMINIO.com` em `og:image` e `og:url` pelo domínio final. A imagem está em `assets/og-image.svg`.
Para melhor compatibilidade com alguns aplicativos, depois de definir o domínio é recomendável exportar a imagem Open Graph para JPG/PNG 1200×630.

### 3. Personalizar serviços
Os textos dos serviços estão em `index.html`. O formulário não armazena dados: ele abre o WhatsApp com uma mensagem pronta para a pessoa revisar e enviar.

## Arquivos
- `index.html` — página completa
- `styles.css` — visual premium e responsivo
- `script.js` — menu, formulário, animações e WhatsApp
- `config.js` — configuração de WhatsApp
- `assets/logo.svg` — símbolo vetorial do site
- `assets/favicon.svg` — favicon vetorial
- `assets/og-image.svg` — imagem de compartilhamento
- `render.yaml` — configuração de publicação no Render
