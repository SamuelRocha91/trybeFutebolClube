# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Trybe Futebol Clube <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Vista previa de la aplicación](./capturaEnpoint.png)

<details>
  <summary><h2>📄 Descripción</h2></summary>

  **Trybe Futebol Clube** es una aplicación de gestión de partidos de fútbol desarrollada como parte del módulo de Backend del curso de Desarrollo Web de Trybe. Este proyecto permite a los usuarios gestionar partidos, equipos y líderes de forma simple y eficiente, utilizando un backend robusto y dockerizado.

</details>

<details>
  <summary><h2>✨ Funcionalidades</h2></summary>

  - **Gestión de Partidos**: Creación, actualización y finalización de partidos en curso.
  - **Gestión de Equipos**: Registro y manipulación de información sobre equipos de fútbol.
  - **Sistema de Login**: Autenticación de usuarios para garantizar la seguridad y la integridad de los datos.
  - **Clasificación**: Obtención de información sobre la clasificación de los equipos en un formato fácil de entender.

</details>

<details>
  <summary><h2>🛠️ Tecnologías Utilizadas</h2></summary>

  - **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
  - **Express**: Framework para construir APIs RESTful.
  - **Sequelize**: ORM (Object-Relational Mapping) para manipulación de bases de datos.
  - **Docker**: Para la contenedorización de la aplicación, facilitando la configuración y la gestión de dependencias.
  - **TypeScript**: Para tipado estático, aumentando la calidad y el mantenimiento del código.

</details>

<details>
  <summary><h2>📑 Estructura de Rutas</h2></summary>

  La API tiene las siguientes rutas:

  - **Equipos**
    - `GET /teams`: Recupera todos los equipos.
    - `POST /teams`: Crea un nuevo equipo.

  - **Login**
    - `POST /login`: Realiza la autenticación del usuario.

  - **Partidos**
    - `GET /matches`: Recupera todos los partidos.
    - `POST /matches`: Crea un nuevo partido.
    - `PATCH /matches/:id`: Actualiza un partido en curso.
    - `PATCH /matches/:id/finish`: Finaliza un partido en curso.

  - **Clasificación**
    - `GET /leaderboard`: Recupera la clasificación de los equipos.

</details>

<details>
  <summary><h2>🚀 Instalación</h2></summary>

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

     - Asegúrate de que Docker esté instalado y en funcionamiento en tu máquina.
     - Puedes usar `docker-compose` para inicializar los servicios necesarios.

  4. Para ejecutar la aplicación, usa el comando:

     ```bash
     cd app
     docker-compose up --build
     ```

     La aplicación se iniciará en el puerto especificado por la variable de entorno `APP_PORT`, con un valor predeterminado de 3001.

</details>

<details>
  <summary><h2>🔗 Repositorios Relacionados</h2></summary>

  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)

</details>
