import { Icon } from "@/shared/ui";
import styles from "./delivery-methods.module.css";

const methods = [
  { icon: "cart", title: "Самовывоз", text: "Забрать заказ со склада в Москве в удобное время, бесплатно." },
  { icon: "location", title: "Курьером по Москве", text: "Доставим по указанному адресу в течение 1–2 дней." },
  { icon: "arrow-right", title: "Транспортной компанией", text: "Отправка в любой регион России — СДЭК, ПЭК, Деловые линии." },
];

export const DeliveryMethods = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Способы доставки товара</h2>
    <div className={styles.grid}>
      {methods.map((m) => (
        <div key={m.title} className={styles.card}>
          <span className={styles.icon}>
            <Icon name={m.icon} size={26} />
          </span>
          <h3>{m.title}</h3>
          <p>{m.text}</p>
        </div>
      ))}
    </div>
  </section>
);
