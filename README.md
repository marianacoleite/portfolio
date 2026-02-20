# Portfolio - Mariana Leite

Portfolio pessoal desenvolvido em React, inspirado no template Kane.

## Sobre

Este é um portfolio moderno e responsivo para mostrar projetos e habilidades de desenvolvimento.

## Tecnologias Utilizadas

- React 18
- CSS3
- React Icons

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build para Produção

```bash
npm run build
```

## Estrutura do Projeto

```
src/
  components/
    Header.js
    Hero.js
    About.js
    Services.js
    Resume.js
    Projects.js
    Contact.js
  App.js
  index.js
```

## Personalização

Edite os componentes em `src/components/` para personalizar as informações e conteúdo.

## Integração com GitHub API

O portfólio busca automaticamente os repositórios do GitHub. Por padrão, a API do GitHub permite **60 requisições por hora** sem autenticação.

### Usando Token do GitHub (Opcional - Recomendado)

Para aumentar o limite para **5.000 requisições por hora**, você pode usar um token pessoal:

1. **Criar um Token:**
   - Acesse: https://github.com/settings/tokens
   - Clique em "Generate new token" → "Generate new token (classic)"
   - Dê um nome descritivo (ex: "Portfolio Token")
   - Selecione o escopo: `public_repo` (apenas leitura de repositórios públicos)
   - Clique em "Generate token"
   - **Copie o token** (você só verá ele uma vez!)

2. **Configurar o Token:**
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione a linha:
     ```
     REACT_APP_GITHUB_TOKEN=seu_token_aqui
     ```
   - Substitua `seu_token_aqui` pelo token que você copiou
   - **Importante:** O arquivo `.env` já está no `.gitignore` e não será commitado

3. **Reiniciar o servidor:**
   - Pare o servidor (Ctrl+C)
   - Execute `npm start` novamente

### Sem Token

Se você não configurar o token, o portfólio funcionará normalmente, mas com limite de 60 requisições por hora. Isso geralmente é suficiente para uso pessoal.

### Segurança

- ⚠️ **NUNCA** compartilhe seu token do GitHub
- ⚠️ **NUNCA** faça commit do arquivo `.env`
- ✅ O token é usado apenas no frontend para aumentar o limite de requisições
- ✅ Apenas repositórios públicos são acessíveis

