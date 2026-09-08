import styles from "./promo-bar.module.css";

const items = [
  "Кулинарная гладь", "Футер", "Кашкорсе, рибана", "Пике", "Интерлок",
  "Капитоний", "Селаник", "Велюр", "Вискоза", "Френч Терри", "Бифлекс",
];

export const PromoBar = () => (
  <div className={styles.bar}>
    <span className={styles.tag}>АКЦИИ</span>
    <div className={styles.viewport}>
      <ul className={styles.track}>
        {[...items, ...items].map((it, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
