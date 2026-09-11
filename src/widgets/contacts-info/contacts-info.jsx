import { Icon } from "@/shared/ui";
import styles from "./contacts-info.module.css";

const rows = [
  { icon: "location", title: "Адрес", text: "г. Москва, ул. Складская, 12, офис 4" },
  { icon: "phone", title: "Телефон", text: "+90 212 547 08 26" },
  { icon: "mail", title: "E-mail", text: "info@saka-tekstil.ru" },
  { icon: "chevron-down", title: "Режим работы", text: "Пн–Пт: 9:00–18:00, Сб-Вс — выходной" },
];

export const ContactsInfo = () => (
  <div className={styles.info}>
    <h2 className={styles.title}>Контакты</h2>
    <ul className={styles.list}>
      {rows.map((r) => (
        <li key={r.title} className={styles.row}>
          <span className={styles.icon}>
            <Icon name={r.icon} size={20} />
          </span>
          <span>
            <b>{r.title}</b>
            <p>{r.text}</p>
          </span>
        </li>
      ))}
    </ul>
  </div>
);
