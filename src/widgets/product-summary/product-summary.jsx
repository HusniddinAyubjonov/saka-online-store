import { useState } from "react";
import { Icon } from "@/shared/ui";
import { ColorPicker } from "../../shared/ui/color-picker/color-picker";
import { AddToCart } from "@/features/add-to-cart";
import styles from "./product-summary.module.css";

const colors = [
  { name: "Серый", value: "#848381" },
  { name: "Черный", value: "#19242f" },
  { name: "Синий", value: "#263669" },
  { name: "Розовый", value: "#d8b4e2" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export const ProductSummary = () => {
  const [color, setColor] = useState(colors[0].value);
  const [size, setSize] = useState("M");

  return (
    <div className={styles.summary}>
      <h1 className={styles.title}>Кулинарная гладь</h1>
      <div className={styles.price}>
        13,84$ <span>/ м²</span>
      </div>

      <div className={styles.option}>
        <span className={styles.label}>Цвет</span>
        <ColorPicker value={color} onChange={setColor} options={colors} />
      </div>

      <div className={styles.option}>
        <span className={styles.label}>Размер</span>
        <div className={styles.sizes}>
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              className={`${styles.size} ${size === s ? styles.sizeActive : ""}`}
              onClick={() => setSize(s)}
            >
              <svg
                viewBox="0 0 104 90"
                width="24"
                height="22"
                aria-hidden="true"
              >
                <path
                  d="M33 4 40 12a16 16 0 0 0 24 0L71 4l17 10a5 5 0 0 1 2 6l-6 14-9-4v46a4 4 0 0 1-4 4H36a4 4 0 0 1-4-4V36l-9 4-6-14a5 5 0 0 1 2-6Z"
                  fill="currentColor"
                />
              </svg>
              {s}
            </button>
          ))}
        </div>
      </div>

      <AddToCart productId="1" />

      <div className={styles.actions}>
        <button type="button" className={styles.action}>
          <Icon name="heart" size={18} /> В избранное
        </button>
        <button type="button" className={styles.action}>
          <Icon name="star" size={18} /> В сравнение
        </button>
      </div>
    </div>
  );
};
