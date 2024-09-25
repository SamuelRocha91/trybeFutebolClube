# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Trybe Fútbol Club
<img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Vista previa de la aplicación](./capturaEnpoint.png)

## Descripción

**Trybe Fútbol Club** es una aplicación de gestión de juegos de fútbol desarrollada como parte del módulo de Backend del curso de Desarrollo Web de Trybe. Este proyecto permite a los usuarios gestionar partidos, equipos y clasificaciones de manera sencilla y eficiente, utilizando un backend robusto y dockerizado.

## Funcionalidades

- **Gestión de Partidos**: Crear, actualizar y finalizar partidos en curso.
- **Gestión de Equipos**: Registrar y manipular información sobre equipos de fútbol.
- **Sistema de Inicio de Sesión**: Autenticación de usuarios para garantizar la seguridad e integridad de los datos.
- **Clasificación**: Recuperar información sobre la clasificación de los equipos en un formato fácil de entender.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
- **Express**: Framework para construir APIs RESTful.
- **Sequelize**: ORM (Mapeo Objeto-Relacional) para manipulación de bases de datos.
- **Docker**: Para la contenedorización de la aplicación, facilitando la configuración y la gestión de dependencias.
- **TypeScript**: Para tipado estático, aumentando la calidad y mantenibilidad del código.

## Estructura de Rutas

La API tiene las siguientes rutas:

- **Equipos**
  - `GET /teams`: Recupera todos los equipos.
  - `POST /teams`: Crea un nuevo equipo.

- **Inicio de Sesión**
  - `POST /login`: Autentica al usuario.

- **Partidos**
  - `GET /matches`: Recupera todos los partidos.
  - `POST /matches`: Crea un nuevo partido.
  - `PATCH /matches/:id`: Actualiza un partido en curso.
  - `PATCH /matches/:id/finish`: Finaliza un partido en curso.

- **Clasificación**
  - `GET /leaderboard`: Recupera la clasificación de los equipos.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd trybe-futebol-clube
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura Docker:

   - Asegúrate de que Docker esté instalado y en ejecución en tu máquina.
   - Puedes usar `docker-compose` para inicializar los servicios necesarios.

4. Para ejecutar la aplicación, usa el comando:

   ```bash
   cd app
   docker-compose up --build
   ```

   La aplicación se iniciará en el puerto especificado por la variable de entorno `APP_PORT`, con un valor predeterminado de 3001.

## Otros Proyectos

- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)
- 🎮 [Trivia Game](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)
- 🪧 [Blogs API](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)