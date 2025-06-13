# neoflex

Интернет-магазин на React с корзиной и маршрутизацией, деплоится на GitHub Pages.

## Описание

Проект реализует витрину товаров с возможностью добавления в корзину, просмотра корзины и удаления товаров. Используется React, React Router, хранение корзины в sessionStorage. Для деплоя используется пакет `gh-pages`.

## Структура

- `src/components/back/Data/Data.js` — данные о товарах
- `src/components/front/Header/Header.js` — шапка сайта
- `src/components/front/Routes/Rout.js` — маршрутизация (страницы: главная, корзина)
- `src/components/front/Products/Products.js` — список товаров
- `src/components/front/Cart/Cart.js` — корзина
- `src/components/front/Footer/Footer.js` — подвал сайта

## Запуск локально

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект:
   ```bash
   npm start
   ```
3. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Деплой на GitHub Pages

1. Убедитесь, что в `package.json` прописан корректный параметр `homepage`:
   ```json
   "homepage": "https://gladkym.github.io/neoflex"
   ```
2. Выполните сборку и деплой:
   ```bash
   npm run deploy
   ```
   После этого сайт будет доступен по адресу, указанному в `homepage`.

## Особенности

- Пути к изображениям должны быть корректными и учитывать размещение на GitHub Pages (используйте `process.env.PUBLIC_URL` или кладите изображения в папку `public`).
- Корзина хранится в `sessionStorage` и сохраняется между перезагрузками страницы.
- Для маршрутизации используется компонент `Routes` из `react-router-dom`.

## Пример использования изображений

Если изображения лежат в папке `public/images`, используйте:
```jsx
<img src={process.env.PUBLIC_URL + "/images/image.png"} alt="Example" />
```

## Лицензия

MIT
