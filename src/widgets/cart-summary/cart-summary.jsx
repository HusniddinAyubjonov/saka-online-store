import { useState } from "react";
import { Button, Icon } from "@/shared/ui";
import { QuantityStepper } from "@/shared/ui/quantity-stepper";
import { notify } from "@/shared/ui/toast";
import styles from "./cart-summary.module.css";

const initial = [
  { id: 1, image: "/images/home/product-1.jpg", title: "Футер 2-х нитка диагональ", price: 450, qty: 3 },
  { id: 2, image: "/images/home/product-2.jpg", title: "Кулинарная гладь", price: 290, qty: 16 },
  { id: 3, image: "/images/home/product-3.jpg", title: "Кашкорсе к 3х нитке", price: 305005, qty: 1 },
];

const money = (n) => n.toLocaleString("ru-RU") + " ₽";

export const CartSummary = () => {
  const [items, setItems] = useState(initial);

  const setQty = (id, qty) =>
    setItems((list) => list.map((it) => (it.id === id ? { ...it, qty } : it)));
  const remove = (id) => setItems((list) => list.filter((it) => it.id !== id));

  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  const checkout = (e) => {
    e.preventDefault();
    notify.success("Заказ оформлен, мы свяжемся с вами");
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        {items.length === 0 ? (
          <p className={styles.empty}>Корзина пуста</p>
        ) : (
          <ul className={styles.list}>
            {items.map((it) => (
              <li key={it.id} className={styles.item}>
                <img src={it.image} alt="" className={styles.thumb} />
                <span className={styles.name}>{it.title}</span>
                <QuantityStepper
                  size="sm"
                  value={it.qty}
                  onChange={(q) => setQty(it.id, q)}
                />
                <span className={styles.price}>{money(it.price * it.qty)}</span>
                <button
                  type="button"
                  className={styles.remove}
                  aria-label="Удалить"
                  onClick={() => remove(it.id)}
                >
                  <Icon name="close" size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.total}>
          <span>Итого</span>
          <b>{money(total)}</b>
        </div>
      </div>

      <form className={styles.checkout} onSubmit={checkout}>
        <label className={styles.field}>
          <Icon name="mail" size={18} />
          <input type="email" required placeholder="E-Mail" />
        </label>
        <label className={styles.field}>
          <Icon name="phone" size={18} />
          <input required placeholder="+7 (___) ___-__-__" />
        </label>
        <Button type="submit" fullWidth disabled={items.length === 0}>
          Оформить заказ
          <Icon name="cart" size={20} />
        </Button>
      </form>
    </div>
  );
};
