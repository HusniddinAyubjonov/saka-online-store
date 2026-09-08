# Saka Tekstil — команда и правила

Собираем многостраничный сайт по макету Figma:
**https://www.figma.com/design/1Cuc4a8DHXiqYzKVgV1drz/Saka--Copy-**

Стек: **React + Vite**, роутинг — `react-router-dom`, модалки — `react-responsive-modal`
(обёрнута в `@/shared/ui/modal`), тосты — `react-toastify` (обёрнута в `@/shared/ui/toast`).

---

## Как запустить

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # перед пушем убедись что билд проходит
npm run lint     # oxlint, тоже должен быть чистым
```

---

## Структура проекта (FSD)

```
src/
├── app/            точка входа, роутинг, глобальные стили
│   ├── app.jsx             все <Route> тут
│   └── styles/index.css    reset + CSS-переменные (цвета, шрифт, радиусы)
├── pages/          страницы сайта (одна папка = одна страница)
│   └── <page>/<page>-page.jsx
├── widgets/        крупные блоки/секции страниц (hero, каталог-сетка, футер…)
│   └── <widget>/<widget>.jsx
├── entities/       карточки сущностей (товар, новость, свотч, сертификат)
│   └── <entity>/<entity>-card.jsx
├── features/       действия с формами/логикой (подписка, заказ звонка…)
│   └── <feature>/<feature>.jsx
└── shared/
    ├── ui/         базовые UI-компоненты — СМОТРИ docs/ui-kit.md
    ├── lib/        утилиты (scrollToId)
    └── assets/
```

**Правило импортов:** снизу вверх.
`pages` → используют `widgets` → используют `entities` / `features` / `shared/ui`.
`shared/ui` ни от кого не зависит. Наружу импортируем через `@/…` (алиас на `src/`).

---

## Соглашения по коду

| Что | Как | Пример |
|---|---|---|
| Папки и файлы | **kebab-case** | `product-card/`, `hero-slider.jsx` |
| Имя компонента | **PascalCase** | `export const HeroSlider = () => …` |
| CSS-классы | **camelCase**, только в `*.module.css` | `.heroSlider`, `.titleRow` |
| Стили | всегда **CSS Modules** | `import styles from "./x.module.css"` → `className={styles.heroSlider}` |
| Экспорт | именованный + `index.js` реэкспорт | `export { HeroSlider } from "./hero-slider.jsx"` |

Глобальный CSS (reset, `body`) — это НЕ модуль, он один: `src/app/styles/index.css`.

### Цвета и размеры — только через переменные

Не пиши хардкод `#19242f`. Бери из `:root` (`src/app/styles/index.css`):

```
--navy #19242f   --navy-blue #263669   --gold #dbc08d   --gold-dark #bfa470
--white  --page #f8f8f8  --border #dadada  --muted #848381
--blue --orange --yellow --purple --red --teal --green   (свотчи тканей)
--r-sm 4px   --r-md 16px   --r-pill 100px
--container 1400px
--font-sans (Montserrat)
```

Шрифт везде **Montserrat**. Размеры из макета: 32 / 26 / 22 / 18 / 16 / 14 / 12 / 10,
веса 300 / 400 / 500 / 600 / 700.

---

## Как работать со стабом

Каждый блок уже создан как заглушка:

```jsx
import styles from "./hero-slider.module.css";

export const HeroSlider = (props) => {
  return (
    <div className={styles.heroSlider} {...props}>
      <p className={styles.todo}>HeroSlider — TODO: свёрстать по макету</p>
    </div>
  );
};
```

Тебе нужно: заменить содержимое `<div>` на реальную вёрстку по макету,
описать классы в `hero-slider.module.css`, удалить `.todo`.
**Не переименовывай файлы и не трогай чужие папки.**

---

## Git

```bash
git checkout -b feat/<твоя-часть>      # напр. feat/catalog
# ...работаешь, коммитишь маленькими шагами...
git add -A
git commit -m "feat: catalog grid"     # коротко, без Co-Authored-By
git push -u origin feat/<твоя-часть>
```

Потом Pull Request в `main`. Перед пушем: `npm run build` и `npm run lint` — зелёные.

---

## Кто что делает

| Кто | Страницы | Общие компоненты | Файл-задание |
|---|---|---|---|
| **Husniddin (лид)** — берёт больше остальных | Главная, Каталог, Корзина, Оформление заказа, Личный кабинет | SectionTitle, Pagination, CarouselArrows, SliderDots; карточки Product / News / Swatch | [dev-1-husniddin.md](./dev-1-husniddin.md) |
| **Shukrulloh** | Карточка товара, О компании, Новости, Статья | Breadcrumbs, Stat, QuantityStepper, ColorPicker; CertificateCard; add-to-cart | [dev-2-shukrulloh.md](./dev-2-shukrulloh.md) |
| **Shahzod** — самый лёгкий объём | Контакты, Оплата и доставка, Калькулятор | subscribe-form, callback-request, price-list-request | [dev-3-shahzod.md](./dev-3-shahzod.md) |

Хедер, футер, Layout и базовый UI-кит (Button, Input, Modal, Toaster…) — уже готовы.

Общий справочник по UI-компонентам (нужен всем): [ui-kit.md](./ui-kit.md)
