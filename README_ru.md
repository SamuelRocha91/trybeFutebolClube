
# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Футбольный клуб Trybe
<img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![Предпросмотр приложения](./capturaEnpoint.png)

## Описание

**Футбольный клуб Trybe** — это приложение для управления футбольными играми, разработанное в рамках модуля Backend курса веб-разработки Trybe. Этот проект позволяет пользователям управлять матчами, командами и турнирными таблицами простым и эффективным способом, используя надежный и контейнеризованный бэкенд.

## Возможности

- **Управление матчами**: Создание, обновление и завершение текущих матчей.
- **Управление командами**: Регистрация и манипулирование информацией о футбольных командах.
- **Система входа**: Аутентификация пользователей для обеспечения безопасности и целостности данных.
- **Турнирная таблица**: Получение информации о позиции команд в легкой для понимания форме.

## Используемые технологии

- **Node.js**: Среда выполнения для JavaScript на стороне сервера.
- **Express**: Фреймворк для построения RESTful API.
- **Sequelize**: ORM (Объектно-реляционное отображение) для работы с базами данных.
- **Docker**: Для контейнеризации приложения, упрощая настройку и управление зависимостями.
- **TypeScript**: Для статической типизации, повышающей качество и поддерживаемость кода.

## Структура маршрутов

API имеет следующие маршруты:

- **Команды**
  - `GET /teams`: Получает все команды.
  - `POST /teams`: Создает новую команду.

- **Вход**
  - `POST /login`: Аутентифицирует пользователя.

- **Матчи**
  - `GET /matches`: Получает все матчи.
  - `POST /matches`: Создает новый матч.
  - `PATCH /matches/:id`: Обновляет текущий матч.
  - `PATCH /matches/:id/finish`: Завершает текущий матч.

- **Турнирная таблица**
  - `GET /leaderboard`: Получает турнирную таблицу команд.

## Установка

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

4. Для запуска приложения используйте команду:

   ```bash
   cd app
   docker-compose up --build
   ```

   Приложение запустится на порту, указанном в переменной окружения `APP_PORT`, по умолчанию 3001.

## Другие проекты

- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)
- 🎮 [Trivia Game](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md)
- 🪧 [Blogs API](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)
