# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Trybe Football Club
<img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Application Preview](./capturaEnpoint.png)

## Description

**Trybe Football Club** is a football game management application developed as part of the Backend module of the Trybe Web Development course. This project allows users to manage matches, teams, and standings in a simple and efficient manner, utilizing a robust and dockerized backend.

## Features

- **Match Management**: Create, update, and finish ongoing matches.
- **Team Management**: Register and manipulate information about football teams.
- **Login System**: User authentication to ensure data security and integrity.
- **Standings**: Retrieve information about the teams' standings in an easy-to-understand format.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express**: Framework for building RESTful APIs.
- **Sequelize**: ORM (Object-Relational Mapping) for database manipulation.
- **Docker**: For containerizing the application, facilitating configuration and dependency management.
- **TypeScript**: For static typing, increasing code quality and maintainability.

## Route Structure

The API has the following routes:

- **Teams**
  - `GET /teams`: Retrieves all teams.
  - `POST /teams`: Creates a new team.

- **Login**
  - `POST /login`: Authenticates the user.

- **Matches**
  - `GET /matches`: Retrieves all matches.
  - `POST /matches`: Creates a new match.
  - `PATCH /matches/:id`: Updates an ongoing match.
  - `PATCH /matches/:id/finish`: Finishes an ongoing match.

- **Standings**
  - `GET /leaderboard`: Retrieves the teams' standings.

## Installation

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   cd trybe-futebol-clube
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Docker:

   - Make sure Docker is installed and running on your machine.
   - You can use `docker-compose` to initialize the necessary services.

4. To run the application, use the command:

   ```bash
   cd app
   docker-compose up --build
   ```

   The application will start on the port specified by the `APP_PORT` environment variable, defaulting to 3001.

## Other Projects

- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md)
- 🎮 [Trivia Game](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md)
- 🪧 [Blogs API](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
```
