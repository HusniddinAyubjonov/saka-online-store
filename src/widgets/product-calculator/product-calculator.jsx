import { useState } from "react";
import { Icon } from "@/shared/ui";
import styles from "./product-calculator.module.css";

export const ProductCalculator = () => {
  const [rolls, setRolls] = useState(10);
  const [packs, setPacks] = useState(24);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Рассчитайте стоимость ткани, ответив на три вопроса
      </h2>

      <div className={styles.calcWrap}>
        {/* Левая колонка: Выбор */}
        <div className={styles.leftCol}>
          <div className={styles.field}>
            <label className={styles.label}>
              1. Выберите необходимую ткань
            </label>
            <select className={styles.select}>
              <option>Кулинарная гладь</option>
              <option>Футер 3-х нитка</option>
              <option>Пике</option>
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              2. Введите общее количество рулонов
            </label>
            <div className={styles.stepper}>
              <button onClick={() => setRolls((r) => Math.max(1, r - 1))}>
                —
              </button>
              <span>{rolls}</span>
              <button onClick={() => setRolls((r) => r + 1)}>+</button>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              3. Введите общее количество пачек
            </label>
            <div className={styles.stepper}>
              <button onClick={() => setPacks((p) => Math.max(1, p - 1))}>
                —
              </button>
              <span>{packs}</span>
              <button onClick={() => setPacks((p) => p + 1)}>+</button>
            </div>
          </div>
        </div>

        {/* Правая колонка: Картинка и цены */}
        <div className={styles.rightCol}>
          <img
            className={styles.calcImg}
            src="/images/home/product-1.jpg"
            alt="Ткань"
          />
          <div className={styles.calcInfo}>
            <p>
              Цена за КГ: <b>10 рублей</b>
            </p>
            <p>
              Цена за МЕТР: <b>11 рублей</b>
            </p>
            <p>
              Общая сумма: <b>11 рублей</b>
            </p>
          </div>
        </div>
      </div>

      {/* Кнопка добавить */}
      <button className={styles.addBtn}>
        Добавить товар <Icon name="plus" size={18} />
      </button>

      {/* Итоговый блок */}
      <div className={styles.totalBlock}>
        <div className={styles.totalItem}>
          <span>Общее количество рулонов:</span>
          <b>{rolls}</b>
        </div>
        <div className={styles.totalItem}>
          <span>Общее количество пачек:</span>
          <b>{packs}</b>
        </div>
        <div className={styles.totalPrice}>
          <span>Итоговая сумма за все позиции:</span>
          <b>100 245 ₽</b>
        </div>
      </div>
    </section>
  );
};
