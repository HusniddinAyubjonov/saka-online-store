import styles from "./payment-methods.module.css";

const methods = ["Visa", "Mastercard", "МИР", "СБП", "Наличными"];

export const PaymentMethods = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Оплата товара</h2>
    <p className={styles.text}>
      Принимаем оплату банковскими картами, через Систему быстрых платежей,
      а также наличными или банковским переводом для юридических лиц.
    </p>
    <ul className={styles.list}>
      {methods.map((m) => (
        <li key={m} className={styles.badge}>{m}</li>
      ))}
    </ul>
  </section>
);
