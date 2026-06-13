# 👨‍💻 Aplica-Jornal | Breaking Point News 

Portal de notícias com foco em política, ambiente, cultura, negócio e segurança.

![Breaking Point News](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4)

## 📋 Sobre o Projeto 

O **Breaking Point News** é um portal de notícias desenvolvido com React e Tailwind CSS, oferecendo uma experiência completa para leitura e gerenciamento de conteúdo jornalístico.

## 🎯 Funcionalidades 

#### 👥 Público (Site Principal)
- 🏠 **Página Inicial** - Carrossel com notícias em destaque e grid de artigos
- 📰 **Categorias** - Política, Ambiente, Cultura, Negócios e Segurança
- 🔍 **Busca** - Pesquise artigos por título, categoria ou tags
- 📱 **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- 🌓 **Tema Claro/Escuro** - Alternância entre temas com persistência
- 📹 **Podcast** - Seção de vídeos do YouTube
- ✉️ **Newsletter** - Formulário para assinatura (frontend)

#### 🔐 Administrativo (Painel Admin)
- 📊 **Dashboard** - Visão geral com estatísticas e gráficos
- ✏️ **Editor de Artigos** - Criação/edição com editor de texto rico
- 📑 **Gerenciar Artigos** - Listagem, edição e exclusão
- ⭐ **Principais Coberturas** - Gerenciamento de artigos em destaque
- 🎙️ **Gerenciar Podcast** - CRUD de episódios do podcast
- ⚡ **Notícias Urgentes** - Edição do ticker de notícias
- 📈 **Analytics** - Estatísticas de visualizações (demo)
- ⚙️ **Configurações** - Configurações do site

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para construção da UI
- **React Router DOM v6** - Roteamento da aplicação
- **Tailwind CSS** - Framework de CSS utilitário
- **Material Symbols** - Ícones do Google
- **Axios** - Cliente HTTP (para integração futura com backend)

### Armazenamento
- **LocalStorage** - Persistência local de dados (modo demo)

## 📁 Estrutura do Projeto
````
Aplica-Jornal/
├── public/
│ ├── index.html
│ └── logo.png
├── src/
│ ├── admin/ # Painel administrativo
│ │ ├── components/ # Componentes do admin
│ │ └── pages/ # Páginas do admin
│ ├── components/ # Componentes compartilhados
│ ├── context/ # Contextos (Auth, Theme)
│ ├── data/ # Dados e localStorage
│ ├── pages/ # Páginas públicas
│ │ ├── article/ # Página de artigo
│ │ ├── Home.jsx
│ │ ├── Politica.jsx
│ │ ├── Ambiente.jsx
│ │ ├── Cultura.jsx
│ │ ├── Negocios.jsx
│ │ ├── Seguranca.jsx
│ │ ├── TodasNoticias.jsx
│ │ └── Videos.jsx
│ └── styles/ # Estilos globais
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
````


## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior)

### Passos para rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/breaking-point-news.git

# 2. Entre na pasta do projeto
cd breaking-point-news

# 3. Instale as dependências
npm install

# 4. Execute o projeto
npm start

```
O sirte estará disponivel em http://localhost:3000

---

### 🔐 Acesso ao Painel Administrativo

|Campo | Valor |
|-------|-------|
|URL   | http://localhost:3000/admin/login
|E-mail | admin@breakingpointnews.com
|Senha |  admin123

### 📱 Páginas do Site

| Rota | Página | Descrição
|-------|--------|----------|
| /     | Home   | Página inicial com carrossel e destaques
|/politica | Política | Notícias da categoria Política
|/ambiente | Ambiente | Notícias da categoria Ambiente
| /cultura | Cultura  | Notícias da categoria Cultura 
| /negocios| Negócios | Notícias da categoria Negócios
| /seguranca | Segurança | Notícias da categoria Segurança
|/todas-noticias | Todas Notícias | Lista completa com busca e filtros
|/videos         | Podcast | Episódios do podcast
|/article/:id   | Detalhe do Artigo | Página completa do artigo

---
