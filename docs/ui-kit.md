# UI-kit — как пользоваться (нужно всем)

Всё лежит в `src/shared/ui/`. Импортировать удобнее из общего бочонка:

```jsx
import { Button, Input, Modal, notify, Icon, Container } from "@/shared/ui";
```

Готовые компоненты (можно использовать прямо сейчас): **Button, IconButton, Chip,
Input, Textarea, Checkbox, Container, Icon, Modal, Toaster + notify**.

Компоненты «в работе» (кто-то из команды пилит, но API уже фиксирован — см. низ файла):
SectionTitle, Breadcrumbs, Pagination, CarouselArrows, SliderDots, Stat,
QuantityStepper, ColorPicker.

---

## Button

```jsx
<Button>Смотреть каталог</Button>
<Button size="md">Подробнее</Button>
<Button variant="outline">В корзину</Button>
<Button variant="ghost" size="sm">Сбросить</Button>
<Button fullWidth onClick={handleSubmit}>Отправить</Button>
<Button as="a" href="/catalog">Ссылка-кнопкой</Button>
<Button disabled>Недоступно</Button>
```

| prop | значения | по умолчанию |
|---|---|---|
| `variant` | `primary` (золотая), `outline`, `ghost` | `primary` |
| `size` | `lg`, `md`, `sm` | `lg` |
| `fullWidth` | `true` / `false` | `false` |
| `as` | `"button"` / `"a"` | `"button"` |

`onClick`, `type`, `disabled` и прочее — пробрасываются как обычно.

---

## IconButton — круглая кнопка с иконкой

```jsx
<IconButton icon="cart" label="Корзина" variant="solid" />
<IconButton icon="search" label="Поиск" variant="outline" />
<IconButton icon="chevron-right" label="Вперёд" onClick={next} />
```

`icon` — имя из набора иконок (см. Icon). `label` обязателен (для доступности).
`variant`: `solid` / `outline` / `ghost`. `size`: `sm` / `md` / `lg`.

---

## Chip — тег (типы тканей)

```jsx
<Chip>Френч Терри</Chip>
<Chip tone="navy">Пике</Chip>
```

`tone`: `gold` (по умолчанию) / `navy` / `muted`.

---

## Input

```jsx
<Input label="Ваше имя" placeholder="Ваше имя" />

<Input
  label="Телефон"
  placeholder="+7 (___) ___-__-__"
  leftIcon={<Icon name="phone" size={18} />}
/>

<Input label="E-mail" type="email" error="Неверный формат" />

{/* на тёмном фоне (hero, футер) */}
<Input variant="dark" placeholder="Ваш E-mail" />
```

| prop | зачем |
|---|---|
| `label` | подпись сверху |
| `hint` | серая подсказка снизу |
| `error` | текст ошибки (поле краснеет) |
| `leftIcon` | иконка слева внутри поля |
| `variant` | `light` (по умолч.) / `dark` |

Всё остальное (`value`, `onChange`, `type`, `name`, `required`…) — в `<input>` напрямую.

---

## Textarea

```jsx
<Textarea label="Комментарий" placeholder="Ваш вопрос..." rows={5} />
```

Пропсы как у Input (`label`, `hint`, `error`, `variant`).

---

## Checkbox

```jsx
<Checkbox label="Согласен на обработку данных" />
<Checkbox label="Хлопок" checked={v} onChange={(e) => setV(e.target.checked)} />
```

---

## Container — центрирует контент (max-width 1400 + поля)

```jsx
<Container>...контент...</Container>
<Container as="section" className={styles.section}>...</Container>
```

Внутри секций ВСЕГДА оборачивай контент в `<Container>`, иначе он расплывётся
на весь экран.

---

## Icon

```jsx
<Icon name="cart" />
<Icon name="phone" size={20} />
<Icon name="chevron-down" size={16} className={styles.arrow} />
```

Иконка наследует цвет текста (`currentColor`). Доступные имена:

```
cart  phone  mail  search  location  user  heart  star
close  check  plus  minus  menu
chevron-down  chevron-right  arrow-right
whatsapp
```

Соцсети (Instagram / Telegram / VK / WhatsApp с фирменными цветами) — это НЕ Icon,
это картинки: `<img src="/icons/telegram.svg" />` из `public/icons/`.

---

## Modal — модальное окно

```jsx
import { useState } from "react";
import { Modal, Button, Input } from "@/shared/ui";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Заказать прайс-лист</Button>

<Modal open={open} onClose={() => setOpen(false)} title="Заказать прайс-лист" size="md">
  <p>Оставьте контакты — вышлем прайс.</p>
  <Input label="Имя" />
  <Input label="Телефон" />
  <Button fullWidth onClick={() => setOpen(false)}>Отправить</Button>
</Modal>
```

`size`: `sm` / `md` / `lg`. Крестик, закрытие по клику вне окна и по Esc — уже внутри.

---

## Тосты — notify

`<Toaster />` уже смонтирован в `App`. Просто вызывай:

```jsx
import { notify } from "@/shared/ui";

notify.success("Товар добавлен в корзину");
notify.error("Проверьте поля формы");
notify.info("Заявка принята");
notify("простой текст");
```

Типовой сценарий формы:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  e.currentTarget.reset();
  notify.success("Заявка отправлена");
};
```

---

## Компоненты «в работе» — фиксированный API

Пока не готовы, но верстай под этот интерфейс (кто-то из команды доделает):

```jsx
// SectionTitle — заголовок секции (26/32, SemiBold). Делает Husniddin.
<SectionTitle>Выбирайте из множества разновидностей тканей</SectionTitle>
<SectionTitle align="center" as="h1">Каталог</SectionTitle>

// Breadcrumbs — хлебные крошки. Делает Разработчик 2.
<Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]} />

// Pagination. Делает Husniddin.
<Pagination page={1} total={5} onChange={setPage} />

// CarouselArrows — пара круглых стрелок. Делает Husniddin.
<CarouselArrows onPrev={prev} onNext={next} />

// SliderDots — «01 / 05» + полоски. Делает Husniddin.
<SliderDots count={5} active={0} onChange={setActive} />

// Stat — цифра + подпись («30 лет на рынке»). Делает Разработчик 2.
<Stat value="40+" label="стран-партнёров" />

// QuantityStepper — − [ 2 ] +. Делает Разработчик 2.
<QuantityStepper value={qty} onChange={setQty} min={1} />

// ColorPicker — кружки-свотчи выбора цвета. Делает Разработчик 2.
<ColorPicker value={color} onChange={setColor} options={["--gray","--black","--blue"]} />
```

Если компонент нужен раньше, чем его доделали — напиши в чат, ускорим.
