# AI Hub

AI Hub é uma aplicação em React para explorar ferramentas de inteligência artificial por categoria, com busca e favoritos salvos no navegador.

## Funcionalidades

- Busca por nome de ferramenta
- Filtro por categoria
- Cards interativos com botão de favorito
- Persistência dos favoritos no `localStorage`
- Layout dark mode com visual premium
- Interface responsiva para desktop e mobile

## Stack

- React
- Vite
- JavaScript

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o projeto:
   ```bash
   npm run dev -- --host 0.0.0.0
   ```

3. Acesse no navegador:
   ```bash
   http://localhost:5173
   ```

## Build de produção

```bash
npm run build
```

## Estrutura principal

- `src/App.jsx` — página principal e lógica de busca/filtros
- `src/data.js` — lista de ferramentas
- `src/components/ToolCard.jsx` — card de cada ferramenta
- `src/index.css` — estilos da interface

## GitHub

- Repositório: https://github.com/Igor-A-Souza/AI-Hub

## Observação

Este projeto foi pensado como um mini diretório de ferramentas de IA para descoberta rápida e organização pessoal.
