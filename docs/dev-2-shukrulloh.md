# Shukrulloh — Карточка товара + О компании + Новости + Статья

Этот файл самодостаточный: здесь и общие правила, и твои задачи. Открывать другие
доки не обязательно.

Твоя ветка: `feat/product-content`.

Макет Figma (открывай через `?node-id=` из таблицы):
`https://www.figma.com/design/1Cuc4a8DHXiqYzKVgV1drz/Saka--Copy-`

| Страница | node-id (desktop · планшет · мобайл) |
|---|---|
| Карточка товара | `89-717` · `506-8433` · `506-8534` |
| О компании | `76-86` · `504-6349` · — |
| Новости и статьи | `97-474` · `507-9406` · `507-9650` |
| Страница статьи | `97-965` · `508-10195` · `508-10284` |

---

## 0. Запуск и git

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # перед пушем — должен пройти без ошибок
npm run lint     # oxlint — тоже чистый
```

```bash
git checkout -b feat/product-content
# ...работаешь, коммитишь маленькими шагами...
git add -A
git commit -m "feat: product page gallery"   # коротко, без Co-Authored-By
git push -u origin feat/product-content
```
Потом Pull Request в `main`.

---

## 1. Правила кода

| Что | Как |
|---|---|
| Папки и файлы | **kebab-case** — `product-gallery/`, `product-gallery.jsx` |
| Имя компонента | **PascalCase** — `export const ProductGallery = () => …` |
| CSS-классы | **camelCase**, только в `*.module.css` — `.galleryMain`, `.thumbRow` |
| Стили | всегда **CSS Modules** |
| Экспорт | именованный + `index.js` реэкспорт (уже создан, не трогай) |
| Импорт наружу | через алиас `@/…` (это `src/`) |

Порядок зависимостей: `pages` → `widgets` → `entities` / `features` / `shared/ui`.
`shared/ui` ни от кого не зависит.

### Цвета и размеры — только переменными (не хардкодь `#…`)

Они уже объявлены в `src/app/styles/index.css`:

```
--navy #19242f   --navy-blue #263669   --gold #dbc08d   --gold-dark #bfa470
--white   --page #f8f8f8   --border #dadada   --muted #848381
--blue --orange --yellow --purple --red --teal --green   (свотчи тканей)
--r-sm 4px   --r-md 16px   --r-pill 100px
--container 1400px
--font-sans   (Montserrat)
```

Шрифт везде **Montserrat**. Размеры из макета: 32 / 26 / 22 / 18 / 16 / 14 / 12 / 10;
веса 300 / 400 / 500 / 600 / 700.

### Как заполнять стаб

Сейчас в файле заглушка:

```jsx
import styles from "./product-gallery.module.css";

export const ProductGallery = (props) => {
  return (
    <div className={styles.productGallery} {...props}>
      <p className={styles.todo}>ProductGallery — TODO: свёрстать по макету</p>
    </div>
  );
};
```

Меняешь только содержимое `<div>`, описываешь классы в `.module.css`, удаляешь `.todo`.
Имена файлов и компонента не меняешь. Чужие папки не трогаешь.

---

## 2. UI-компоненты, которые тебе понадобятся

Импорт из общего бочонка:

```jsx
import { Button, IconButton, Chip, Input, Textarea, Checkbox,
         Container, Icon, Modal, notify } from "@/shared/ui";
```

### Button
```jsx
<Button>Добавить в корзину</Button>
<Button size="md">Подробнее</Button>
<Button variant="outline">В корзину</Button>
<Button variant="ghost" size="sm">Сбросить</Button>
<Button fullWidth type="submit">Отправить</Button>
<Button as="a" href="/catalog">Ссылка-кнопкой</Button>
```
`variant`: `primary` (золотая, по умолч.) / `outline` / `ghost`.
`size`: `lg` (по умолч.) / `md` / `sm`. Ещё: `fullWidth`, `disabled`, `onClick`.

### IconButton (круглая кнопка с иконкой)
```jsx
<IconButton icon="cart" label="Корзина" variant="solid" />
<IconButton icon="chevron-right" label="Вперёд" onClick={next} />
```
`variant`: `solid` / `outline` / `ghost`. `size`: `sm` / `md` / `lg`. `label` обязателен.

### Chip (тег)
```jsx
<Chip>Френч Терри</Chip>
<Chip tone="navy">Пике</Chip>
```

### Input / Textarea
```jsx
<Input label="Имя" name="name" placeholder="Ваше имя" required />
<Input label="Телефон" leftIcon={<Icon name="phone" size={18} />} />
<Input label="E-mail" type="email" error="Неверный формат" />
<Textarea label="Комментарий" rows={5} />
```
Пропсы: `label`, `hint`, `error`, `leftIcon` (только Input), `variant` (`light` по умолч. / `dark`).
Остальное (`value`, `onChange`, `name`, `type`…) — напрямую в поле.

### Checkbox
```jsx
<Checkbox label="Хлопок" checked={v} onChange={(e) => setV(e.target.checked)} />
```

### Container (центрирует контент, max-width 1400 + поля)
```jsx
<Container>...</Container>
<Container as="section" className={styles.section}>...</Container>
```
Внутри секций ВСЕГДА оборачивай контент в `<Container>`.

### Icon
```jsx
<Icon name="cart" />
<Icon name="phone" size={20} />
```
Имена: `cart phone mail search location user heart star close check plus minus
menu chevron-down chevron-right arrow-right whatsapp`.
Наследует цвет текста (`currentColor`).

### Modal
```jsx
import { useState } from "react";
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Открыть</Button>

<Modal open={open} onClose={() => setOpen(false)} title="Заголовок" size="md">
  <p>Контент…</p>
  <Button fullWidth onClick={() => setOpen(false)}>Ок</Button>
</Modal>
```
`size`: `sm` / `md` / `lg`. Крестик, Esc и клик вне — уже внутри.

### Тосты — notify
`<Toaster />` уже смонтирован в App. Просто:
```jsx
notify.success("Товар добавлен в корзину");
notify.error("Проверьте поля формы");
notify.info("Заявка принята");
```
Типовая форма:
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  e.currentTarget.reset();
  notify.success("Заявка отправлена");
};
```

### Готовое (не делай сам)
`Layout` (Header + контент + Footer), `Header`, `Footer` — уже готовы. Страницы
оборачивай в `<Layout>…</Layout>`.

---

## 3. Общие компоненты — делаешь ты, ими пользуется вся команда

Сделай их в первую очередь. Каждый — папка `src/shared/ui/<name>/` с
`<name>.jsx` + `<name>.module.css` + `index.js` (файлы уже созданы как заглушки).

| Компонент | Папка | API и что нарисовать |
|---|---|---|
| `Breadcrumbs` | `shared/ui/breadcrumbs` | `<Breadcrumbs items={[{label:"Главная",href:"/"},{label:"Каталог"}]} />` — ссылки через разделитель `/` или `chevron-right`, последний элемент — серый текст без ссылки |
| `Stat` | `shared/ui/stat` | `<Stat value="40+" label="стран-партнёров" />` — крупная цифра (28–40px, SemiBold, `--navy`) + подпись снизу (14px, `--muted`) |
| `QuantityStepper` | `shared/ui/quantity-stepper` | `<QuantityStepper value={qty} onChange={setQty} min={1} max={99} />` — `IconButton minus` · число · `IconButton plus`; не даёт выйти за `min`/`max` |
| `ColorPicker` | `shared/ui/color-picker` | `<ColorPicker value={c} onChange={setC} options={["--gray","--black","--blue","--pink"]} />` — ряд кружков 28–32px, у выбранного — золотое кольцо (`box-shadow: 0 0 0 2px var(--gold)`) |

`ColorPicker` ждёт Husniddin (фильтр каталога), `Breadcrumbs` — вся команда.

---

## 4. Карточка-сущность

`CertificateCard` — `src/entities/certificate/certificate-card.jsx`.
Превью документа (картинка сертификата в рамке) + подпись снизу.
Пропсы: `{ image, title, href }`. По клику открывает картинку крупно (можно в `Modal`).
Нужен тебе на «О компании» и Husniddin на Главной.

```jsx
export const CertificateCard = ({ image, title, href }) => (
  <a className={styles.card} href={href} target="_blank" rel="noreferrer">
    <img className={styles.img} src={image} alt={title} />
    <span className={styles.title}>{title}</span>
  </a>
);
```

---

## 5. Фича

`features/add-to-cart` — `src/features/add-to-cart/add-to-cart.jsx`.
`QuantityStepper` + `Button` «Добавить в корзину». По клику — тост.
Пропс: `{ productId }` (логику корзины не пишем — только UI + тост).

```jsx
import { useState } from "react";
import { Button, notify } from "@/shared/ui";
import { QuantityStepper } from "@/shared/ui/quantity-stepper";
import styles from "./add-to-cart.module.css";

export const AddToCart = ({ productId }) => {
  const [qty, setQty] = useState(1);
  return (
    <div className={styles.addToCart}>
      <QuantityStepper value={qty} onChange={setQty} min={1} />
      <Button onClick={() => notify.success("Товар добавлен в корзину")}>
        Добавить в корзину
      </Button>
    </div>
  );
};
```

---

## 6. Страница «Карточка товара»

`src/pages/product/product-page.jsx`:

```jsx
import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { ProductGallery } from "@/widgets/product-gallery";
import { ProductSummary } from "@/widgets/product-summary";
import { ProductTabs } from "@/widgets/product-tabs";
import { SimilarProducts } from "@/widgets/similar-products";
import styles from "./product-page.module.css";

export const ProductPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[
        { label: "Главная", href: "/" },
        { label: "Каталог", href: "/catalog" },
        { label: "Кулинарная гладь" },
      ]} />
      <div className={styles.top}>
        <ProductGallery />
        <ProductSummary />
      </div>
      <ProductTabs />
      <SimilarProducts />
    </Container>
  </Layout>
);
```

| Виджет | Что внутри (по макету) |
|---|---|
| `widgets/product-gallery` | крупное фото ткани (оранжевая) + столбец/ряд миниатюр, клик по миниатюре меняет главное фото (`useState`) |
| `widgets/product-summary` | название, короткое описание, цена **«100 245 ₽»**, `ColorPicker` (серый/чёрный/синий/розовый), выбор размера (иконки-футболки, тоже `useState`), `<AddToCart productId={…} />` |
| `widgets/product-tabs` | вкладки «Описание / Характеристики / Доставка» (переключение `useState`, снизу текстовый блок) |
| `widgets/similar-products` | `SectionTitle` «Похожие товары» + `CarouselArrows` + ряд `ProductCard` |

`ProductCard`, `SectionTitle`, `CarouselArrows` — компоненты Husniddin. Не готовы —
поставь временную заглушку, потом импортируешь.

---

## 7. Страница «О компании»

`src/pages/about/about-page.jsx`:
`<Layout><Container><Breadcrumbs/><AboutHero/><Mission/><Certificates/></Container></Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/about-hero` | заголовок, фото (здание/вышка на фоне неба), текст «Saka Tekstil — производство…», ряд `Stat` (годы работы, кол-во клиентов), ниже 3 фото зелёной ткани |
| `widgets/mission` | «Наша миссия» — текст о качестве и доступности, ряд иконок (медаль / качество / гарантия), декоративная фиолетовая «волна» (можно `<img>` или CSS-фигура) |
| `widgets/certificates` | 2–3 `CertificateCard` + текст о документальном подтверждении качества |

---

## 8. Страницы «Новости» и «Статья»

**Новости** — `src/pages/news/news-page.jsx`:
`<Layout><Container><Breadcrumbs/><NewsGrid/><Pagination/></Container></Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/news-grid` | крупная обложка-баннер (мост/архитектура) с заголовком статьи и кнопкой; ниже сетка `NewsCard` (фото + заголовок + дата), в т.ч. с цветным паттерном тканей как обложка. Сетка: desktop 3 в ряд → планшет 2 → мобайл 1 |

**Статья** — `src/pages/article/article-page.jsx`:
`<Layout><Container><Breadcrumbs/><ArticleContent/><NewsGrid/></Container></Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/article-content` | фото на всю ширину (ночной город/мост), текст статьи (заголовки h2/h3, абзацы, макс. ширина ~760px), встроенные фото ткани; внизу — сетка похожих статей из `NewsCard` |

`NewsCard` и `Pagination` — компоненты Husniddin.

---

## 9. Порядок работы

1. `Breadcrumbs`, `Stat`, `QuantityStepper`, `ColorPicker`.
2. `CertificateCard`, `features/add-to-cart`.
3. Карточка товара (самая насыщенная — сначала она).
4. О компании.
5. Новости → Статья.
6. Адаптив каждой страницы: сначала desktop, потом планшет (`@media (max-width: 1023px)`),
   потом мобайл (`@media (max-width: 600px)`).

## Чек-лист перед пушем

- [ ] Убрал все `.todo` со своих виджетов
- [ ] Цвета/радиусы через `var(--…)`
- [ ] Кнопки/поля — из `@/shared/ui`
- [ ] Классы camelCase, стили в `.module.css`
- [ ] `npm run build` — без ошибок
- [ ] `npm run lint` — без ошибок
- [ ] Проверил на 3 ширинах: широкий экран, ~800px, ~375px
