# Разработчик 3 — Контакты + Оплата и доставка + Калькулятор + Личный кабинет

Не переживай — тут всё простое: текст, картинки, формы и таблицы. Никакой сложной логики.

Твои страницы в Figma (открой ссылку и добавь `?node-id=` из таблицы):
`https://www.figma.com/design/1Cuc4a8DHXiqYzKVgV1drz/Saka--Copy-`

| Страница | node-id |
|---|---|
| Контакты | `102-626` |
| Оплата и доставка | `97-1418` (мобайл `508-10549`) |
| Калькулятор | `102-957` (мобайл `615-5021`) |
| Личный кабинет | `158-871` (мобайл `615-5662`) |

---

## Как всё устроено (коротко)

- Один блок = одна папка в `src/widgets/`. Внутри 3 файла:
  - `имя.jsx` — сама вёрстка
  - `имя.module.css` — стили
  - `index.js` — не трогаешь
- Стили пишем в `.module.css`, классы называем в стиле `camelCase` (`.contactRow`, `.mapWrap`).
- Цвета не пишем числами. Берём готовые:
  `var(--navy)` тёмно-синий, `var(--gold)` золотой, `var(--white)`, `var(--page)` светлый фон,
  `var(--border)` серая рамка, `var(--muted)` серый текст.
  Радиусы: `var(--r-md)` (16px), `var(--r-pill)` (кнопки).
- Готовые кнопки/поля бери из UI-кита. **Не верстай кнопку руками.**

```jsx
import { Button, Input, Textarea, Checkbox, Icon, Container, notify } from "@/shared/ui";
```

Примеры использования — в [ui-kit.md](./ui-kit.md).

---

## Шаблон: как заполнять любой виджет

Сейчас в файле лежит заглушка:

```jsx
import styles from "./contact-form.module.css";

export const ContactForm = (props) => {
  return (
    <div className={styles.contactForm} {...props}>
      <p className={styles.todo}>ContactForm — TODO: свёрстать по макету</p>
    </div>
  );
};
```

Ты меняешь только то, что **внутри** `<div>`, и описываешь классы в css.
Удаляешь строчку с `.todo`. Имя компонента и имена файлов НЕ меняешь.

Стало (пример):

```jsx
import styles from "./contact-form.module.css";
import { Input, Textarea, Button, notify } from "@/shared/ui";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Сообщение отправлено");
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Напишите нам</h2>
      <Input label="Имя" name="name" required />
      <Input label="Телефон" name="phone" required />
      <Textarea label="Сообщение" name="message" rows={5} />
      <Button type="submit">Отправить</Button>
    </form>
  );
};
```

css:

```css
.contactForm {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
}
.title {
  font-size: 22px;
  font-weight: 600;
}
```

---

## Страница 1 — Контакты (`src/pages/contacts/contacts-page.jsx`)

Собери страницу так:

```jsx
import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactsMap } from "@/widgets/contacts-map";
import { ContactForm } from "@/widgets/contact-form";
import styles from "./contacts-page.module.css";

export const ContactsPage = () => (
  <Layout>
    <Container className={styles.page}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.grid}>
        <ContactsInfo />
        <ContactForm />
      </div>
      <ContactsMap />
    </Container>
  </Layout>
);
```

Виджеты:

| Файл | Что нарисовать |
|---|---|
| `widgets/contacts-info` | список: адрес (иконка `location`), телефон (иконка `phone`), e-mail (иконка `mail`), режим работы. Каждая строка — иконка + текст. |
| `widgets/contact-form` | форма как в шаблоне выше (Имя, Телефон, E-mail, Сообщение, `Checkbox` согласие, кнопка → тост). |
| `widgets/contacts-map` | просто картинка карты с точкой (в макете это картинка). Вставь `<img src="/images/…" />` в рамке с `border-radius: var(--r-md)`. Позже заменим на реальную карту. |

Внизу блока в макете — маленькие миниатюры тканей. Сделай ряд `<img>` одинакового размера.

---

## Страница 2 — Оплата и доставка (`src/pages/delivery/delivery-page.jsx`)

```jsx
<Layout>
  <Container className={styles.page}>
    <h1 className={styles.title}>Оплата и доставка</h1>
    <DeliveryMethods />
    <PaymentMethods />
    <ExtraInfo />
  </Container>
</Layout>
```

| Файл | Что нарисовать |
|---|---|
| `widgets/delivery-methods` | заголовок «Способы доставки товара» + ряд карточек: иконка коробки + название способа + короткий текст. Плюс фото грузового фургона сбоку. |
| `widgets/payment-methods` | заголовок «Оплата товара» + ряд иконок карт оплаты (`<img>` логотипы) + подписи. |
| `widgets/extra-info` | текстовый блок с условиями + телефон для уточнения (иконка `phone` + номер). |

Карточка способа доставки — это простой `<div>`:

```jsx
<div className={styles.card}>
  <Icon name="cart" size={28} />
  <h3>Самовывоз</h3>
  <p>Забрать со склада в Стамбуле…</p>
</div>
```

```css
.card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

Ряд карточек — `display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;`
На планшете `repeat(2, 1fr)`, на мобайле `1fr`.

---

## Страница 3 — Калькулятор (`src/pages/calculator/calculator-page.jsx`)

```jsx
<Layout>
  <Container className={styles.page}>
    <h1 className={styles.title}>Калькулятор</h1>
    <Calculator />
  </Container>
</Layout>
```

`widgets/calculator` — это форма расчёта + результат + 3 цветные карточки-иконки ткани.

```jsx
import { useState } from "react";
import { Input, Button } from "@/shared/ui";
import styles from "./calculator.module.css";

export const Calculator = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const price = Number(f.get("price")) || 0;
    const meters = Number(f.get("meters")) || 0;
    setResult(price * meters);
  };

  return (
    <div className={styles.calculator}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Цена за метр, $" name="price" type="number" />
        <Input label="Сколько метров" name="meters" type="number" />
        <Input label="Ширина, см" name="width" type="number" />
        <Button type="submit">Рассчитать</Button>
      </form>

      {result !== null && (
        <div className={styles.result}>
          Примерная стоимость: <b>{result.toFixed(2)} $</b>
        </div>
      )}

      <div className={styles.samples}>
        <div className={styles.sample} style={{ background: "var(--blue)" }} />
        <div className={styles.sample} style={{ background: "var(--orange)" }} />
        <div className={styles.sample} style={{ background: "var(--green)" }} />
      </div>
    </div>
  );
};
```

Формулу расчёта потом уточним — сейчас главное вёрстка полей и вид результата по макету.

---

## Страница 4 — Личный кабинет (`src/pages/account/account-page.jsx`)

В макете это несколько вкладок. Пока делаем ОДИН экран: слева меню, справа контент.

```jsx
<Layout>
  <Container className={styles.page}>
    <h1 className={styles.title}>Личный кабинет</h1>
    <div className={styles.grid}>
      <AccountSidebar />
      <div className={styles.content}>
        <AccountProfile />
        <AccountOrders />
      </div>
    </div>
  </Container>
</Layout>
```

| Файл | Что нарисовать |
|---|---|
| `widgets/account-sidebar` | список ссылок-вкладок: «Профиль», «Мои заказы», «Избранное», «Выход». Активная — золотая. |
| `widgets/account-profile` | фото пользователя (кружок) + поля: имя, телефон, e-mail (`Input`), кнопка «Сохранить». |
| `widgets/account-orders` | таблица заказов: номер, дата, сумма, статус. + маленькие картинки заказанных тканей. |

Таблицу делай обычным `<table>`:

```jsx
<table className={styles.table}>
  <thead>
    <tr><th>№</th><th>Дата</th><th>Сумма</th><th>Статус</th></tr>
  </thead>
  <tbody>
    <tr><td>1024</td><td>31.03.2022</td><td>1 200 $</td><td>Доставлен</td></tr>
  </tbody>
</table>
```

```css
.table { width: 100%; border-collapse: collapse; }
.table th, .table td {
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}
.table th { font-weight: 600; }
```

---

## Ещё 3 маленькие фичи (формы) — в `src/features/`

Это просто «форма → тост» и «кнопка → модалка → форма → тост». Код почти одинаковый.

### `features/subscribe-form`
Одна строка: поле e-mail + кнопка «Отправить». По отправке — `notify.success("Вы подписались")`.

```jsx
import { Button, notify } from "@/shared/ui";
import styles from "./subscribe-form.module.css";

export const SubscribeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Вы подписались на новости");
  };
  return (
    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
      <input type="email" name="email" required placeholder="Ваш E-mail" className={styles.input} />
      <Button type="submit" size="md">Отправить</Button>
    </form>
  );
};
```

### `features/callback-request` — «Заказать звонок»
Кнопка → открывает `Modal` с полями Имя + Телефон → по отправке `notify.success("Мы перезвоним")`.

```jsx
import { useState } from "react";
import { Modal, Button, Input, notify } from "@/shared/ui";
import styles from "./callback-request.module.css";

export const CallbackRequest = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setOpen(false);
    notify.success("Заявка принята, мы перезвоним");
  };
  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger || <Button>Заказать звонок</Button>}</span>
      <Modal open={open} onClose={() => setOpen(false)} title="Заказать звонок" size="sm">
        <form className={styles.form} onSubmit={submit}>
          <Input label="Имя" name="name" required />
          <Input label="Телефон" name="phone" required />
          <Button type="submit" fullWidth>Отправить</Button>
        </form>
      </Modal>
    </>
  );
};
```

### `features/price-list-request` — «Заказать прайс-лист»
То же самое, что `callback-request`, только заголовок «Заказать прайс-лист» и
тост «Прайс-лист отправлен на почту». Скопируй предыдущий и поменяй тексты.

---

## Чек-лист перед пушем (каждый раз)

- [ ] Убрал все `.todo` заглушки со своих виджетов
- [ ] Цвета через `var(--...)`, не числами
- [ ] Кнопки/поля — из `@/shared/ui`, не руками
- [ ] Классы camelCase, стили в `.module.css`
- [ ] `npm run build` — прошёл без ошибок
- [ ] `npm run lint` — без ошибок
- [ ] Проверил на трёх ширинах: широкий экран, ~800px, ~375px

```bash
git add -A
git commit -m "feat: contacts page"
git push
```

Если что-то непонятно по макету или не хватает компонента — сразу пиши в чат,
не гадай.
