
import { useEffect, useRef, useState } from "react";
import { Input, Button } from "@/shared/ui";
import { notify } from "@/shared/ui/toast";
import styles from "./checkout-form.module.css";

const order = [
  {
    id: 1,
    image: "/images/home/product-1.jpg",
    title: "Футер 2-х нитка",
    qty: 3,
    sum: 1350,
  },
  {
    id: 2,
    image: "/images/home/product-2.jpg",
    title: "Кулинарная гладь",
    qty: 16,
    sum: 4640,
  },
  {
    id: 3,
    image: "/images/home/product-3.jpg",
    title: "Кашкорсе к 3х нитке",
    qty: 1,
    sum: 305005,
  },
];

const pays = [
  {
    title: "Наличными при получении",
    description: "Оплата после получения заказа",
    number: "01",
  },
  {
    title: "Картой онлайн",
    description: "Visa / Mastercard",
    number: "02",
  },
  {
    title: "Банковский перевод",
    description: "Для юридических лиц",
    number: "03",
  },
];

const money = (n) => n.toLocaleString("ru-RU") + " ₽";
const total = order.reduce((sum, item) => sum + item.sum, 0);

export const CheckoutForm = () => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = formRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const submit = (event) => {
    event.preventDefault();

    notify.success(
      "Заказ оформлен! Мы свяжемся для подтверждения"
    );
  };

  return (
    <form
      ref={formRef}
      className={`${styles.wrap} ${visible ? styles.visible : ""}`}
      onSubmit={submit}
    >
      <div className={styles.main}>
        <section className={styles.block}>
          <div className={styles.number}>01</div>

          <div className={styles.content}>
            <h2 className={styles.h2}>Получатель</h2>

            <p className={styles.subtitle}>
              Оставьте контактные данные для оформления заказа
            </p>

            <div className={styles.grid2}>
              <Input label="Имя" name="firstName" required />
              <Input label="Фамилия" name="lastName" required />
              <Input label="Телефон" name="phone" required />
              <Input
                label="E-mail"
                name="email"
                type="email"
                required
              />
            </div>
          </div>
        </section>

        <section className={`${styles.block} ${styles.delivery}`}>
          <div className={styles.number}>02</div>

          <div className={styles.content}>
            <h2 className={styles.h2}>Доставка</h2>

            <p className={styles.subtitle}>
              Куда отправить ваш заказ?
            </p>

            <div className={styles.deliveryFields}>
              <Input label="Город" name="city" required />
              <Input label="Адрес" name="address" required />
            </div>
          </div>
        </section>

        <section className={`${styles.block} ${styles.payment}`}>
          <div className={styles.number}>03</div>

          <div className={styles.content}>
            <h2 className={styles.h2}>Оплата</h2>

            <p className={styles.subtitle}>
              Выберите удобный способ оплаты
            </p>

            <div className={styles.pays}>
              {pays.map((pay, index) => (
                <label
                  key={pay.title}
                  className={styles.pay}
                  style={{
                    "--delay": `${index * 180}ms`,
                  }}
                >
                  <input
                    type="radio"
                    name="pay"
                    value={pay.title}
                    defaultChecked={index === 0}
                  />

                  <span className={styles.radio}>
                    <span />
                  </span>

                  <span className={styles.payNumber}>
                    {pay.number}
                  </span>

                  <span className={styles.payText}>
                    <strong>{pay.title}</strong>
                    <small>{pay.description}</small>
                  </span>

                  <span className={styles.arrow}>→</span>
                </label>
              ))}
            </div>
          </div>
        </section>
      </div>

      <aside className={styles.summary}>
        <div className={styles.summaryLabel}>
          YOUR ORDER
        </div>

        <h2 className={styles.h2}>Ваш заказ</h2>

        <ul className={styles.items}>
          {order.map((item, index) => (
            <li
              key={item.id}
              className={styles.item}
              style={{
                "--item-delay": `${700 + index * 180}ms`,
              }}
            >
              <img src={item.image} alt="" />

              <span className={styles.iTitle}>
                {item.title}
              </span>

              <span className={styles.iQty}>
                × {item.qty}
              </span>

              <span className={styles.iSum}>
                {money(item.sum)}
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.total}>
          <span>Итого</span>
          <b>{money(total)}</b>
        </div>

        <div className={styles.buttonWrap}>
          <Button type="submit" fullWidth>
            Подтвердить заказ
          </Button>
        </div>

        <p className={styles.security}>
          Ваши данные защищены
        </p>
      </aside>
    </form>
  );
};
