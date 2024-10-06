# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Trybe Futebol Clube <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Предварительный просмотр приложения](./capturaEnpoint.png)

<details>
  <summary><h2>📄 Описание</h2></summary>

  **Trybe Futebol Clube** — это приложение для управления футбольными матчами, разработанное в рамках модуля Backend курса веб-разработки Trybe. Этот проект позволяет пользователям управлять матчами, командами и таблицами в простой и эффективной манере, используя надежный и контейнеризированный бэкенд.

</details>

<details>
  <summary><h2>✨ Функциональности</h2></summary>

  - **Управление матчами**: Создание, обновление и завершение текущих матчей.
  - **Управление командами**: Регистрация и управление информацией о футбольных командах.
  - **Система входа**: Аутентификация пользователей для обеспечения безопасности и целостности данных.
  - **Таблица**: Получение информации о таблице команд в удобном формате.

</details>

<details>
  <summary><h2>🛠️ Используемые технологии</h2></summary>

  - **Node.js**: Среда выполнения для JavaScript на стороне сервера.
  - **Express**: Фреймворк для создания RESTful API.
  - **Sequelize**: ORM (Object-Relational Mapping) для работы с базами данных.
  - **Docker**: Для контейнеризации приложения, что упрощает настройку и управление зависимостями.
  - **TypeScript**: Для статической типизации, что увеличивает качество и удобство сопровождения кода.

</details>

<details>
  <summary><h2>📑 Структура маршрутов</h2></summary>

  API имеет следующие маршруты:

  - **Команды**
    - `GET /teams`: Получить все команды.
    - `POST /teams`: Создать новую команду.

  - **Вход**
    - `POST /login`: Выполнить аутентификацию пользователя.

  - **Матчи**
    - `GET /matches`: Получить все матчи.
    - `POST /matches`: Создать новый матч.
    - `PATCH /matches/:id`: Обновить текущий матч.
    - `PATCH /matches/:id/finish`: Завершить текущий матч.

  - **Таблица**
    - `GET /leaderboard`: Получить таблицу команд.

</details>

<details>
  <summary><h2>🚀 Установка</h2></summary>

  1. Клонируйте репозиторий:

     ```bash
     git clone <URL_РЕПОЗИТОРИЯ>
     cd trybe-futebol-clube
     ```

  2. Установите зависимости:

     ```bash
     npm install
     ```

  3. Настройте Docker:

     - Убедитесь, что Docker установлен и запущен на вашем компьютере.
     - Вы можете использовать `docker-compose` для инициализации необходимых сервисов.

  4. Чтобы запустить приложение, используйте команду:

     ```bash
     cd app
     docker-compose up --build
     ```

     Приложение будет запущено на порту, указанном в переменной окружения `APP_PORT`, по умолчанию — 3001.

</details>

<details>
  <summary><h2>🔗 Связанные репозитории</h2></summary>

  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)

</details>
