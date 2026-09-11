import { Reveal } from "@/shared/ui";
import styles from "./contacts-info.module.css";

const cards = [
  { label: "Адрес:", value: "г. Москва, МКР Котельники, ул. Яничкин проезд 7" },
  { label: "Телефон:", value: "+7 (999) 999-99-99" },
  { label: "Почта:", value: "info@mail.ru" },
  { label: "График работы:", value: "ПН–ПТ 09:00–18:00\nСБ 10:00–17:00\nВС Выходной" },
];

export const ContactsInfo = () => (
  <div className={styles.grid}>
    {cards.map((c, i) => (
      <Reveal key={c.label} as="div" className={styles.card} delay={i * 80}>
        <span className={styles.label}>{c.label}</span>
        <p className={styles.value}>{c.value}</p>
      </Reveal>
    ))}
  </div>
);
