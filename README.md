# CRM (Vite + React + TypeScript)

## Быстрый старт

1) Установка зависимостей
```bash
npm install
```

2) Запуск в разработке
```bash
npm run dev
```
Откройте `http://localhost:5173`.

3) Сборка и предпросмотр
```bash
npm run build
npm run preview
```

4) Тесты (если установлены dev‑зависимости vitest/RTL)
```bash
npm run test
```

## Тестовые учётки (mock)
- admin@test.com / admin123 (company_admin)
- manager@test.com / manager123
- client@test.com / client123
- support@test.com / support123

## Архитектура (кратко)

- `src/context`:
  - `AuthContext.ts` — типы и сам React Context (`AuthContext`).
  - `AuthProvider` (в `src/context/AuthProvider.tsx`) — провайдер аутентификации: хранит `user/token/loading`, валидирует токен, реализует `login/logout` (через `src/api/mockAuth.ts`).
- `src/hooks`:
  - `useAuth.ts` — тонкий хук над контекстом. Гарантирует использование внутри провайдера.
- `src/api`:
  - `mockAuth.ts` — имитация API: логин (возврат `token,user`), валидация токена. Base64 UTF‑8‑safe, задержки для реалистичности.
- `src/components`:
  - `ProtectedRoute.tsx` — пускает только авторизованных (token). Показ спиннера при `loading`.
  - `RequireRole.tsx` — проверка ролей. `company_admin` имеет доступ везде, иначе — сообщение «Недостаточно прав».
  - `NavBar/` — адаптивная навигация (mobile‑first), ссылки по дашбордам, выход.
  - `LoginForm/` — форма входа (email/password), редирект на `/` после успеха.
- `src/pages`:
  - `Home.tsx` — главная страница.
  - `Admin/Manager/Client/Support Dashboard` — примеры дашбордов, mobile‑first сетка.
  - `Forbidden.tsx` — страница 403/404 (catch‑all).
- `src/utils`:
  - `storage.ts` — работа с токеном в `localStorage`.
- `src/index.css` — глобальные стили (утилиты, сетка, кнопки, страницы, спиннер).

## Маршрутизация
- `/login` — вход.
- `/` — домашняя (защищённая).
- `/admin|/manager|/client|/support` — защищённые маршруты с проверкой роли.
- `*` — `Forbidden` (страница ошибки для неизвестных путей).

## Примечания
- React StrictMode активен только в dev.
- Стек тестов: Vitest + Testing Library (jsdom). Примеры тестов для `ProtectedRoute` и `RequireRole` в `src/components/*.test.tsx`.
