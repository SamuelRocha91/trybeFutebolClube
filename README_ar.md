
# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> نادي كرة القدم Trybe
<img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)

![معاينة التطبيق](./capturaEnpoint.png)

## الوصف

**نادي كرة القدم Trybe** هو تطبيق لإدارة مباريات كرة القدم تم تطويره كجزء من وحدة الخلفية في دورة تطوير الويب Trybe. يتيح هذا المشروع للمستخدمين إدارة المباريات والفرق والنتائج بطريقة بسيطة وفعالة، باستخدام خلفية قوية ومحتواة داخل حاويات.

## الميزات

- **إدارة المباريات**: إنشاء وتحديث وإنهاء المباريات الجارية.
- **إدارة الفرق**: تسجيل ومعالجة المعلومات حول فرق كرة القدم.
- **نظام تسجيل الدخول**: مصادقة المستخدم لضمان أمان البيانات وسلامتها.
- **النتائج**: استرجاع المعلومات حول نتائج الفرق بطريقة سهلة الفهم.

## التقنيات المستخدمة

- **Node.js**: وقت تشغيل JavaScript للتنفيذ على الخادم.
- **Express**: إطار عمل لبناء واجهات برمجة التطبيقات RESTful.
- **Sequelize**: ORM (تعيين كائنات-علاقات) للتلاعب بقاعدة البيانات.
- **Docker**: لتعبئة التطبيق، مما يسهل التكوين وإدارة الاعتماديات.
- **TypeScript**: لتوفير نوع ثابت، مما يزيد من جودة الكود وقابليته للصيانة.

## هيكل الروتين

تحتوي واجهة برمجة التطبيقات على المسارات التالية:

- **الفرق**
  - `GET /teams`: استرجاع جميع الفرق.
  - `POST /teams`: إنشاء فريق جديد.

- **تسجيل الدخول**
  - `POST /login`: مصادقة المستخدم.

- **المباريات**
  - `GET /matches`: استرجاع جميع المباريات.
  - `POST /matches`: إنشاء مباراة جديدة.
  - `PATCH /matches/:id`: تحديث مباراة جارية.
  - `PATCH /matches/:id/finish`: إنهاء مباراة جارية.

- **النتائج**
  - `GET /leaderboard`: استرجاع نتائج الفرق.

## التثبيت

1. استنساخ المستودع:

   ```bash
   git clone <رابط_المستودع>
   cd trybe-futebol-clube
   ```

2. تثبيت التبعيات:

   ```bash
   npm install
   ```

3. تكوين Docker:

   - تأكد من تثبيت Docker وتشغيله على جهازك.
   - يمكنك استخدام `docker-compose` لتهيئة الخدمات اللازمة.

4. لتشغيل التطبيق، استخدم الأمر:

   ```bash
   cd app
   docker-compose up --build
   ```

   سيبدأ التطبيق على المنفذ المحدد بواسطة متغير البيئة `APP_PORT`، والذي يكون الافتراضي 3001.

## مشاريع أخرى

- 🌶️ [تطبيق الوصفات](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
- 🐣 [بوكيمون](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)
- 🏪 [متجر على الإنترنت FrontEnd](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)
- 👛 [منظم النفقات](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)
- 🎮 [لعبة الأسئلة](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)
- 🪧 [API المدونات](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)
- 🐉 [Trybers و Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
