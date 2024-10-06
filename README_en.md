# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Trybe Football Club <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Application Preview](./capturaEnpoint.png)

<details>
  <summary><h2>📄 Description</h2></summary>

  **Trybe Football Club** is a football game management application developed as part of the Backend module of the Web Development course at Trybe. This project allows users to manage matches, teams, and leaders simply and efficiently, using a robust and dockerized backend.

</details>

<details>
  <summary><h2>✨ Features</h2></summary>

  - **Match Management**: Creation, update, and finishing of ongoing matches.
  - **Team Management**: Registration and manipulation of information about football teams.
  - **Login System**: User authentication to ensure data security and integrity.
  - **Leaderboard**: Retrieval of information about team standings in an easy-to-understand format.

</details>

<details>
  <summary><h2>🛠️ Technologies Used</h2></summary>

  - **Node.js**: JavaScript runtime environment on the server side.
  - **Express**: Framework for building RESTful APIs.
  - **Sequelize**: ORM (Object-Relational Mapping) for database manipulation.
  - **Docker**: For containerization of the application, facilitating configuration and dependency management.
  - **TypeScript**: For static typing, increasing code quality and maintainability.

</details>

<details>
  <summary><h2>📑 Route Structure</h2></summary>

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

  - **Leaderboard**
    - `GET /leaderboard`: Retrieves the standings of the teams.

</details>

<details>
  <summary><h2>🚀 Installation</h2></summary>

  1. Clone the repository:

     ```bash
     git clone git@github.com:SamuelRocha91/trybeFutebolClube.git
     cd trybe-futebol-clube
     ```

  2. Install the dependencies:

     ```bash
     npm install
     ```

  3. Configure Docker:

     - Ensure that Docker is installed and running on your machine.
     - You can use `docker-compose` to initialize the necessary services.

  4. To run the application, use the command:

     ```bash
     cd app
     docker-compose up --build
     ```

     The application will start on the port specified by the environment variable `APP_PORT`, defaulting to 3001.

</details>

<details>
  <summary><h2>🔗 Related Repositories</h2></summary>

  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)

</details>
