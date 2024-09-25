# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Trybe 足球俱乐部
<img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![应用程序预览](./capturaEnpoint.png)

## 描述

**Trybe 足球俱乐部** 是一个足球比赛管理应用程序，作为 Trybe 网络开发课程的后端模块的一部分开发。该项目允许用户以简单有效的方式管理比赛、球队和积分榜，利用强大且容器化的后端。

## 功能

- **比赛管理**：创建、更新和结束正在进行的比赛。
- **球队管理**：注册和操作足球队的信息。
- **登录系统**：用户认证以确保数据安全和完整性。
- **积分榜**：以易于理解的格式检索球队的积分信息。

## 使用的技术

- **Node.js**：用于服务器端执行的 JavaScript 运行时。
- **Express**：构建 RESTful API 的框架。
- **Sequelize**：用于数据库操作的 ORM（对象关系映射）。
- **Docker**：用于容器化应用程序，方便配置和依赖管理。
- **TypeScript**：用于静态类型，提高代码质量和可维护性。

## 路由结构

API 有以下路由：

- **球队**
  - `GET /teams`：检索所有球队。
  - `POST /teams`：创建新球队。

- **登录**
  - `POST /login`：验证用户。

- **比赛**
  - `GET /matches`：检索所有比赛。
  - `POST /matches`：创建新比赛。
  - `PATCH /matches/:id`：更新进行中的比赛。
  - `PATCH /matches/:id/finish`：结束进行中的比赛。

- **积分榜**
  - `GET /leaderboard`：检索球队的积分。

## 安装

1. 克隆仓库：

   ```bash
   git clone <仓库_URL>
   cd trybe-futebol-clube
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 配置 Docker：

   - 确保您的计算机上已安装并运行 Docker。
   - 您可以使用 `docker-compose` 初始化所需的服务。

4. 要运行应用程序，请使用以下命令：

   ```bash
   cd app
   docker-compose up --build
   ```

   应用程序将在 `APP_PORT` 环境变量指定的端口上启动，默认情况下为 3001。

## 其他项目

- 🌶️ [食谱应用](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
- 🐣 [宝可梦图鉴](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)
- 🏪 [前端在线商店](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md)
- 👛 [费用管理器](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)
- 🎮 [问答游戏](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md)
- 🪧 [博客 API](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md)
- 🐉 [Trybers 和 Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)
