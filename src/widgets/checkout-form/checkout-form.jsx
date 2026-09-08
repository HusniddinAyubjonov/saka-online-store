import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { notify } from "@/shared/ui/toast";
import styles from "./checkout-form.module.css";

const order = [
  { id: 1, image: "/images/home/product-1.jpg", title: "Футер 2-х нитка", qty: 3, sum: 1350 },
  { id: 2, image: "/images/home/product-2.jpg", title: "Кулинарная гладь", qty: 16, sum: 4640 },
  { id: 3, image: "/images/home/product-3.jpg", title: "Кашкорсе к 3х нитке", qty: 1, sum: 305005 },
];
const money = (n) => n.toLocaleString("ru-RU") + " ₽";
const total = order.reduce((s, o) => s + o.sum, 0);

const pays = ["Наличными при получении", "Картой онлайн", "Банковский перевод"];

export const CheckoutForm = () => {
  const submit = (e) => {
    e.preventDefault();
    notify.success("Заказ оформлен! Мы свяжемся для подтверждения");
  };

  return (
    <form className={styles.wrap} onSubmit={submit}>
      <div className={styles.main}>
        <section className={styles.block}>
          <h2 className={styles.h2}>Получатель</h2>
          <div className={styles.grid2}>
            <Input label="Имя" name="firstName" required />
            <Input label="Фамилия" name="lastName" required />
            <Input label="Телефон" name="phone" required />
            <Input label="E-mail" name="email" type="email" required />
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h2}>Доставка</h2>
          <Input label="Город" name="city" required />
          <Input label="Адрес" name="address" required />
        </section>

        <section className={styles.block}>
          <h2 className={styles.h2}>Оплата</h2>
          <div className={styles.pays}>
            {pays.map((p, i) => (
              <label key={p} className={styles.pay}>
                <input type="radio" name="pay" defaultChecked={i === 0} />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </section>
      </div>

      <aside className={styles.summary}>
        <h2 className={styles.h2}>Ваш заказ</h2>
        <ul className={styles.items}>
          {order.map((o) => (
            <li key={o.id}>
              <img src={o.image} alt="" />
              <span className={styles.iTitle}>{o.title}</span>
              <span className={styles.iQty}>× {o.qty}</span>
              <span className={styles.iSum}>{money(o.sum)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <span>Итого</span>
          <b>{money(total)}</b>
        </div>
        <Button type="submit" fullWidth>Подтвердить заказ</Button>
      </aside>
    </form>
  );
};
