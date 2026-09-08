# Husniddin (лид) — Главная + Каталог + Корзина + Оформление заказа + Личный кабинет

Ты берёшь чуть больше остальных: 5 страниц + общие UI-компоненты, которых ждёт команда.

Сначала прочитай [README.md](./README.md) и [ui-kit.md](./ui-kit.md).

Ветка: `feat/home-catalog` (крупные части — отдельными ветками/PR).

Figma (открывай через `?node-id=`):
- Главная — `2-5` · планшет `499-5696` · мобайл `505-6888`
- Каталог — `89-167` · планшет `505-7328` · мобайл `505-7497`
- Фильтр (моб/планшет) — `505-8188`, `505-7933`
- Корзина — `102-1697`
- Оформление заказа / прайс-лист — `102-1575`, `102-1624`
- Личный кабинет — `158-871` (+ `418-2532`, `418-2785`) · планшет `615-5538` · мобайл `615-5662`

---

## 1. Общие компоненты (делаешь ты, ими пользуются все)

| Компонент | Папка | API |
|---|---|---|
| `SectionTitle` | `shared/ui/section-title` | `<SectionTitle align? as?>текст</SectionTitle>` — заголовок 26/32, SemiBold, `--navy` |
| `Pagination` | `shared/ui/pagination` | `<Pagination page total onChange />` |
| `CarouselArrows` | `shared/ui/carousel-arrows` | `<CarouselArrows onPrev onNext />` — 2 круглые кнопки (`IconButton` с `chevron-left/right`) |
| `SliderDots` | `shared/ui/slider-dots` | `<SliderDots count active onChange />` — «01 / 05» + 5 полосок из макета |

Сделай их в первую очередь — их ждут остальные.

---

## 2. Карточки-сущности

| Компонент | Папка | Где используется |
|---|---|---|
| `ProductCard` | `entities/product/product-card.jsx` | Каталог, «Недавно просмотренные», «Найдите ткань», «Похожие товары» |
| `NewsCard` | `entities/news/news-card.jsx` | Главная (превью новостей), страница Новости |
| `SwatchCard` | `entities/swatch/swatch-card.jsx` | блоки палитр («Актуальные каталоги», «Основной каталог», «Сезонная палитра») |

**ProductCard** (по макету): фото сверху, название («Кулинарная гладь»), цена («11,4 $»),
ширина («180 см»), кнопки действия (`Button` + `IconButton` корзина). Пропсы:
`{ image, title, price, width, href, onAddToCart }`.

**NewsCard**: фото (сверху, со стрелкой `arrow-up-right` в кружке), заголовок,
короткий текст, дата. Пропсы: `{ image, title, excerpt, date, href }`.

**SwatchCard**: цветной квадрат 130×130 + код («A-104 Dark Grey»).
Пропсы: `{ color, code }`.

---

## 3. Страница «Главная» — виджеты (папки уже созданы)

Собери страницу в `src/pages/home/home-page.jsx`:
`<Layout promo> <HeroSlider/> <NewsPreview/> <FabricVariety/> <AboutIntro/> <Reputation/> <PaletteCatalog/> <DyeingCta/> <RecentlyViewed/> </Layout>`

| Виджет | Что внутри (по макету) |
|---|---|
| `widgets/promo-bar` | тёмная полоса под шапкой: золотой ярлык «АКЦИИ» + бегущая строка типов тканей (кружок + название) |
| `widgets/hero-slider` | тёмный баннер: фото девушки со стопкой тканей, заголовок-плейсхолдер, кнопка «Подробнее», справа `SliderDots` |
| `widgets/news-preview` | `SectionTitle` + сетка 3 `NewsCard` (× 2 ряда) |
| `widgets/fabric-variety` | тёмный блок «Выбирайте из множества разновидностей тканей» + сетка цветных свотчей ткани + `Chip` с названиями |
| `widgets/about-intro` | фото здания + текст «Saka Tekstil – для тех, кто хочет…» + 2 абзаца с золотыми чёрточками + кнопка |
| `widgets/reputation` | «Saka Tekstil дорожит своей репутацией» + 3 фото (`image 8/9/10`) + `CarouselArrows` |
| `widgets/palette-catalog` | «Актуальная палитра… 45+ цветов», предупреждение о цветопередаче (иконка Warning), сетки `SwatchCard` рядами + «Сезонная палитра» |
| `widgets/dyeing-cta` | светлый блок «Фабрика осуществляет прокрас…» + форма (имя/телефон/e-mail + «Отправить») + мелкий текст про согласие |
| `widgets/recently-viewed` | `SectionTitle` «Недавно просмотренные» + `CarouselArrows` + ряд `ProductCard` |

---

## 4. Страница «Каталог»

`src/pages/catalog/catalog-page.jsx`:
`<Layout> <Breadcrumbs/> <CatalogToolbar/> <div двухколоночно> <CatalogFilters/> <CatalogGrid/> </div> <Pagination/> </Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/catalog-toolbar` | заголовок «Каталог», счётчик товаров, сортировка (`select`), переключатель вид сетки |
| `widgets/catalog-filters` | сайдбар: группы `Checkbox` (тип ткани, состав), выбор цвета (`ColorPicker` от Shukrulloh), диапазон цены, кнопка «Сбросить». На планшете/мобайле — прячется в модалку/выезжающую панель (макеты `505-7933`, `505-8188`) |
| `widgets/catalog-grid` | сетка `ProductCard` (desktop 3–4 в ряд → планшет 2 → мобайл 1) |

`Breadcrumbs` берёшь у Shukrulloh (или временно сверстай простой список ссылок).

---

## 5. Страницы «Корзина» и «Оформление заказа»

**Корзина** — `src/pages/cart/cart-page.jsx`:
`<Layout> <Breadcrumbs/> <CartSummary/> </Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/cart-summary` | список добавленных тканей (мини-`ProductCard`: фото + название + `QuantityStepper` от Shukrulloh + цена + иконка удалить), справа/снизу — блок «Итого» с суммой и `Button` «Оформить заказ» |

**Оформление заказа** — `src/pages/checkout/checkout-page.jsx`:
`<Layout> <Breadcrumbs/> <CheckoutForm/> </Layout>`

| Виджет | Что внутри |
|---|---|
| `widgets/checkout-form` | форма: ФИО, телефон, e-mail, адрес доставки, способ оплаты (radio); сбоку — краткий список товаров и сумма; `Button` «Подтвердить заказ» → `notify.success("Заказ оформлен")` |

Это по сути формы + список — просто. `QuantityStepper` берёшь у Shukrulloh.

---

## 6. Страница «Личный кабинет»

`src/pages/account/account-page.jsx`:
`<Layout> <Breadcrumbs/> <div две колонки> <AccountSidebar/> <div> <AccountProfile/> <AccountOrders/> </div> </div> </Layout>`

| Виджет | Что внутри (по макету) |
|---|---|
| `widgets/account-sidebar` | меню-вкладки: «Профиль», «Мои заказы», «Избранное», «Выход». Активная — золотая. |
| `widgets/account-profile` | фото пользователя (кружок), поля `Input` (имя, телефон, e-mail), кнопка «Сохранить», карточки со статистикой (`Stat` от Shukrulloh) |
| `widgets/account-orders` | таблица заказов (№, дата, сумма, статус) + миниатюры заказанных тканей |

В макете несколько состояний вкладок (`158-871`, `418-2532`, `418-2785`) — сделай
переключение вкладок локальным `useState`, контент справа меняется.

---

## Порядок работы

1. `SectionTitle`, `Pagination`, `CarouselArrows`, `SliderDots` — быстро, простые.
2. `ProductCard`, `NewsCard`, `SwatchCard`.
3. Виджеты Главной сверху вниз.
4. Каталог.
5. Корзина → Оформление заказа.
6. Личный кабинет.
7. Адаптив: desktop → планшет (≤1023px) → мобайл (≤600px). Меню уже адаптивное в `Header`.

`npm run build` + `npm run lint` перед каждым пушем.
