# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Trybe Futebol Clube <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![应用程序预览](./capturaEnpoint.png)

<details>
  <summary><h2>📄 描述</h2></summary>

  **Trybe Futebol Clube** 是一款足球比赛管理应用，作为 Trybe 网络开发课程后端模块的一部分开发。该项目使用户能够以简单高效的方式管理比赛、球队和排名，采用强大的 Docker 化后端。

</details>

<details>
  <summary><h2>✨ 功能</h2></summary>

  - **比赛管理**：创建、更新和结束正在进行的比赛。
  - **球队管理**：注册和处理有关足球队的信息。
  - **登录系统**：用户身份验证以确保数据的安全性和完整性。
  - **排名**：以易于理解的格式获取球队的排名信息。

</details>

<details>
  <summary><h2>🛠️ 使用的技术</h2></summary>

  - **Node.js**：用于服务器端 JavaScript 的执行环境。
  - **Express**：构建 RESTful API 的框架。
  - **Sequelize**：用于数据库操作的 ORM（对象关系映射）。
  - **Docker**：用于应用的容器化，简化配置和依赖管理。
  - **TypeScript**：用于静态类型检查，提高代码质量和可维护性。

</details>

<details>
  <summary><h2>📑 路由结构</h2></summary>

  API 具有以下路由：

  - **球队**
    - `GET /teams`：获取所有球队。
    - `POST /teams`：创建新球队。

  - **登录**
    - `POST /login`：进行用户身份验证。

  - **比赛**
    - `GET /matches`：获取所有比赛。
    - `POST /matches`：创建新比赛。
    - `PATCH /matches/:id`：更新正在进行的比赛。
    - `PATCH /matches/:id/finish`：结束正在进行的比赛。

  - **排名**
    - `GET /leaderboard`：获取球队排名。

</details>

<details>
  <summary><h2>🚀 安装</h2></summary>

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

     - 确保 Docker 已安装并在您的计算机上运行。
     - 您可以使用 `docker-compose` 来初始化所需的服务。

  4. 要运行应用程序，请使用以下命令：

     ```bash
     cd app
     docker-compose up --build
     ```

     应用程序将在环境变量 `APP_PORT` 指定的端口上启动，默认为 3001。

</details>

<details>
  <summary><h2>🔗 相关仓库</h2></summary>

  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)

</details>