import styles from "./contacts-info.module.css";

const cards = [
  { label: "Адрес:", value: "г. Москва, МКР Котельники, ул. Яничкин проезд 7" },
  { label: "Телефон:", value: "+7 (999) 999-99-99" },
  { label: "Почта:", value: "info@mail.ru" },
  { label: "График работы:", value: "ПН–ПТ 09:00–18:00\nСБ 10:00–17:00\nВС Выходной" },
];

export const ContactsInfo = () => (
  <div className={styles.grid}>
    {cards.map((c) => (
      <div key={c.label} className={styles.card}>
        <span className={styles.label}>{c.label}</span>
        <p className={styles.value}>{c.value}</p>
      </div>
    ))}
  </div>
);
