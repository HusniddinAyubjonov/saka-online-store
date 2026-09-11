import { useState } from "react";
import styles from "./product-tabs.module.css";

const tabs = ["Описание", "Характеристики", "Доставка"];

export const ProductTabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabs}>
      <div className={styles.header}>
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`${styles.tab} ${active === i ? styles.active : ""}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {active === 0 && (
          <p>
            Описание ткани: Кулинарная гладь — это высококачественный трикотаж,
            который идеально подходит для пошива повседневной одежды. Он мягкий,
            дышащий и приятный на ощупь.
          </p>
        )}
        {active === 1 && (
          <ul>
            <li>Состав: 92% хлопок, 8% лайкра</li>
            <li>Плотность: 180 г/м²</li>
            <li>Ширина: 180 см</li>
          </ul>
        )}
        {active === 2 && (
          <p>
            Доставка осуществляется по всей России и странам СНГ. Сроки и
            стоимость уточняйте у менеджера.
          </p>
        )}
      </div>
    </div>
  );
};
