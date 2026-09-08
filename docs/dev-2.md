# Разработчик 2 — Карточка товара + О компании + Новости + Статья

Сначала прочитай [README.md](./README.md) и [ui-kit.md](./ui-kit.md).

Ветка: `feat/product-content`.

Figma:
- Карточка товара — `89-717` · планшет `506-8433` · мобайл `506-8534`
- О компании — `76-86` · планшет `504-6349`
- Новости и статьи — `97-474` · планшет `507-9406` · мобайл `507-9650`
- Страница статьи — `97-965` · планшет `508-10195` · мобайл `508-10284`

---

## 1. Общие компоненты (делаешь ты, ими пользуются все)

| Компонент | Папка | API |
|---|---|---|
| `Breadcrumbs` | `shared/ui/breadcrumbs` | `<Breadcrumbs items={[{label,href},{label}]} />` — последний без ссылки |
| `Stat` | `shared/ui/stat` | `<Stat value="40+" label="стран-партнёров" />` — крупная цифра + подпись |
| `QuantityStepper` | `shared/ui/quantity-stepper` | `<QuantityStepper value onChange min={1} max? />` — `−  [2]  +` |
| `ColorPicker` | `shared/ui/color-picker` | `<ColorPicker value onChange options={["--gray","--black",...]} />` — кружки-свотчи |

Сделай их первыми — `ColorPicker` ждёт Husniddin для фильтра каталога,
`Breadcrumbs` нужен всем на внутренних страницах.

---

## 2. Карточка-сущность

`CertificateCard` — `entities/certificate/certificate-card.jsx`.
Превью документа (картинка сертификата) + подпись. Пропсы: `{ image, title, href }`.
Используется на Главной у Husniddin и у тебя на «О компании».

---

## 3. Фича

`features/add-to-cart` — кнопка «Добавить в корзину» + `QuantityStepper`,
по клику показывает тост `notify.success("Товар добавлен в корзину")`.
Пропс: `{ productId }` (логику корзины пока не пишем — только UI + тост).

---

## 4. Страница «Карточка товара»

`src/pages/product/product-page.jsx`:
`<Layout> <Breadcrumbs/> <div две колонки> <ProductGallery/> <ProductSummary/> </div> <ProductTabs/> <SimilarProducts/> </Layout>`

| Виджет | Что внутри (по макету) |
|---|---|
| `widgets/product-gallery` | крупное фото ткани (оранжевая) + галерея миниатюр слева/снизу |
| `widgets/product-summary` | название, описание, цена **«100 245 ₽»**, `ColorPicker` (серый/чёрный/синий/розовый…), выбор размера (иконки-футболки), `features/add-to-cart` |
| `widgets/product-tabs` | вкладки: описание / характеристики / доставка (текстовые блоки) |
| `widgets/similar-products` | `SectionTitle` «Похожие товары» / «Также покупают» + ряд `ProductCard` (берёшь у Husniddin) + `CarouselArrows` |

`ProductCard`, `SectionTitle`, `CarouselArrows` — компоненты Husniddin. Если ещё не
готовы — временно заглушку, потом подключишь.

---

## 5. Страница «О компании»

`src/pages/about/about-page.jsx`:
`<Layout> <Breadcrumbs/> <AboutHero/> <Mission/> <Certificates/> </Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/about-hero` | заголовок, фото (здание/вышка на фоне неба), текст «Saka Tekstil — производство…» + ряд `Stat` (годы работы, кол-во клиентов…), ниже 3 фото зелёной ткани |
| `widgets/mission` | «Наша миссия» — текст о качестве и доступности, ряд иконок (медаль/качество/гарантия), декоративная фиолетовая «волна» |
| `widgets/certificates` | превью 2–3 `CertificateCard` + текст о документальном подтверждении качества |

---

## 6. Страницы «Новости» и «Статья»

**Новости** — `src/pages/news/news-page.jsx`:
`<Layout> <Breadcrumbs/> <NewsGrid/> <Pagination/> </Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/news-grid` | крупная обложка-баннер (мост/архитектура) с заголовком статьи и кнопкой, ниже сетка `NewsCard` (фото + заголовок + дата), в т.ч. с цветным паттерном тканей как обложка |

**Статья** — `src/pages/article/article-page.jsx`:
`<Layout> <Breadcrumbs/> <ArticleContent/> <NewsGrid variant="related"/> </Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/article-content` | фото на всю ширину (ночной город/мост), текст статьи (заголовки, абзацы), встроенные фото ткани; внизу — сетка похожих статей (переиспользуй `NewsCard`) |

`NewsCard` и `Pagination` — компоненты Husniddin.

---

## Порядок работы

1. `Breadcrumbs`, `Stat`, `QuantityStepper`, `ColorPicker`.
2. `CertificateCard`, `features/add-to-cart`.
3. Карточка товара (самая насыщенная — сначала она).
4. О компании.
5. Новости → Статья.
6. Адаптив: desktop → планшет (≤1023px) → мобайл (≤600px).

`npm run build` + `npm run lint` перед каждым пушем.
