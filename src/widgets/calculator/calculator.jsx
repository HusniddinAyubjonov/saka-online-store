import { useState } from "react";
import { Input, Button } from "@/shared/ui";
import styles from "./calculator.module.css";

const samples = [
  { color: "var(--blue)", code: "A-107 Blue" },
  { color: "var(--orange)", code: "A-135 Orange" },
  { color: "var(--green)", code: "A-136 Green" },
];

export const Calculator = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const price = Number(f.get("price")) || 0;
    const meters = Number(f.get("meters")) || 0;
    setResult(price * meters);
  };

  return (
    <div className={styles.calculator}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <Input label="Цена за метр, ₽" name="price" type="number" min={0} required />
          <Input label="Сколько метров" name="meters" type="number" min={0} required />
          <Input label="Ширина полотна, см" name="width" type="number" min={0} />
        </div>
        <Button type="submit">Рассчитать стоимость</Button>
      </form>

      {result !== null && (
        <div className={styles.result}>
          Примерная стоимость заказа:{" "}
          <b>{result.toLocaleString("ru-RU")} ₽</b>
        </div>
      )}

      <div className={styles.samples}>
        {samples.map((s) => (
          <div key={s.code} className={styles.sample}>
            <span className={styles.swatch} style={{ background: s.color }} />
            <span>{s.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
