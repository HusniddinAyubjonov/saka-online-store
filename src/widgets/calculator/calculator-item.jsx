import { Icon } from "@/shared/ui";
import { QuantityStepper } from "@/shared/ui/quantity-stepper";
import { fabrics } from "./fabrics-data.js";
import styles from "./calculator.module.css";

export const CalculatorItem = ({ item, onChange, onRemove, removable }) => {
  const fabric = fabrics.find((f) => f.id === item.fabricId) ?? fabrics[0];
  const total = item.rolls * fabric.pricePerRoll + item.packs * fabric.pricePerPack;

  return (
    <div className={styles.item}>
      {removable && (
        <button type="button" className={styles.remove} onClick={onRemove} aria-label="Удалить позицию">
          <Icon name="close" size={16} />
        </button>
      )}

      <label className={styles.step}>
        <span>1. Выберите необходимую ткань</span>
        <select
          value={item.fabricId}
          onChange={(e) => onChange({ ...item, fabricId: e.target.value })}
        >
          {fabrics.map((f) => (
            <option key={f.id} value={f.id}>{f.name}</option>
          ))}
        </select>
      </label>

      <label className={styles.step}>
        <span>2. Введите общее количество рулонов</span>
        <QuantityStepper
          value={item.rolls}
          onChange={(v) => onChange({ ...item, rolls: v })}
          min={0}
        />
      </label>

      <label className={styles.step}>
        <span>3. Введите общее количество пачек</span>
        <QuantityStepper
          value={item.packs}
          onChange={(v) => onChange({ ...item, packs: v })}
          min={0}
        />
      </label>

      <div className={styles.prices}>
        <div>
          <b>Цена за рулон:</b>
          <span>{fabric.pricePerRoll.toLocaleString("ru-RU")} ₽</span>
        </div>
        <div>
          <b>Цена за пачку:</b>
          <span>{fabric.pricePerPack.toLocaleString("ru-RU")} ₽</span>
        </div>
        <div>
          <b>Общая сумма:</b>
          <span>{total.toLocaleString("ru-RU")} ₽</span>
        </div>
      </div>
    </div>
  );
};
