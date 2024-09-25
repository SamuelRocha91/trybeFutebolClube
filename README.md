# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />  Trybe Futebol Clube
<img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />


## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Preview da aplicação](./capturaEnpoint.png)


## Descrição

**Trybe Futebol Clube** é uma aplicação de gerenciamento de jogos de futebol desenvolvida como parte do módulo de Backend do curso de Desenvolvimento Web da Trybe. Este projeto permite que os usuários gerenciem partidas, equipes e líderes de forma simples e eficiente, utilizando um backend robusto e dockerizado.

## Funcionalidades

- **Gerenciamento de Partidas**: Criação, atualização e finalização de partidas em andamento.
- **Gerenciamento de Equipes**: Registro e manipulação de informações sobre equipes de futebol.
- **Sistema de Login**: Autenticação de usuários para garantir a segurança e a integridade dos dados.
- **Classificação**: Obtenção de informações sobre a classificação das equipes em um formato fácil de entender.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs RESTful.
- **Sequelize**: ORM (Object-Relational Mapping) para manipulação de bancos de dados.
- **Docker**: Para contêinerização da aplicação, facilitando a configuração e o gerenciamento de dependências.
- **TypeScript**: Para tipagem estática, aumentando a qualidade e a manutenção do código.

## Estrutura de Rotas

A API possui as seguintes rotas:

- **Equipes**
  - `GET /teams`: Recupera todas as equipes.
  - `POST /teams`: Cria uma nova equipe.

- **Login**
  - `POST /login`: Realiza a autenticação do usuário.

- **Partidas**
  - `GET /matches`: Recupera todas as partidas.
  - `POST /matches`: Cria uma nova partida.
  - `PATCH /matches/:id`: Atualiza uma partida em andamento.
  - `PATCH /matches/:id/finish`: Finaliza uma partida em andamento.

- **Classificação**
  - `GET /leaderboard`: Recupera a classificação das equipes.

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd trybe-futebol-clube
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o Docker:

   - Certifique-se de que o Docker está instalado e em execução na sua máquina.
   - Você pode usar o `docker-compose` para inicializar os serviços necessários.

4. Para executar a aplicação, use o comando:

   ```bash
   cd app
   docker-compose up --build
   ```

   A aplicação será iniciada na porta especificada pela variável de ambiente `APP_PORT`, com um padrão para 3001.

- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons)