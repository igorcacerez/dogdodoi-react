# Dog Dodói - Clínica Veterinária 🐶

Site institucional em **React + Vite** para a clínica veterinária **Dog Dodói**, com navegação entre páginas usando **React Router DOM** e interface responsiva em CSS puro.

## Funcionalidades

- Página inicial com banner, seção sobre, serviços e diferenciais.
- Página "Quem Somos" com história, missão, visão, valores e equipe.
- Página de contato com dados da clínica e formulário com validação simples.
- Rota dinâmica de detalhes do serviço (`/servicos/:id`).
- Página de fallback para rotas não encontradas.

## Rotas

- `/` → Início
- `/quem-somos` → Quem Somos
- `/contato` → Contato
- `/servicos/:id` → Detalhes do serviço
- `*` → Página não encontrada

## Como rodar o projeto

```bash
npm install
npm run dev
```

Após iniciar, acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

## Estrutura

- `src/componentes` → Componentes reutilizáveis da interface.
- `src/paginas` → Páginas principais do site.
- `src/dados/dadosServicos.js` → Dados usados na Home e detalhes de serviços.
- `src/estilos/global.css` → Estilos globais e responsividade.
