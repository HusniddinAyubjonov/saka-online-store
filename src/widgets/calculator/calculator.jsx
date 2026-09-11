import { useState } from "react";
import { Icon } from "@/shared/ui";
import { fabrics } from "./fabrics-data.js";
import { CalculatorItem } from "./calculator-item.jsx";
import styles from "./calculator.module.css";

let uid = 1;
const emptyItem = () => ({ id: uid++, fabricId: fabrics[0].id, rolls: 1, packs: 1 });

export const Calculator = () => {
  const [items, setItems] = useState([emptyItem()]);

  const update = (next) =>
    setItems((list) => list.map((it) => (it.id === next.id ? next : it)));
  const remove = (id) => setItems((list) => list.filter((it) => it.id !== id));
  const add = () => setItems((list) => [...list, emptyItem()]);

  const totals = items.reduce(
    (acc, it) => {
      const fabric = fabrics.find((f) => f.id === it.fabricId) ?? fabrics[0];
      acc.rolls += it.rolls;
      acc.packs += it.packs;
      acc.sum += it.rolls * fabric.pricePerRoll + it.packs * fabric.pricePerPack;
      return acc;
    },
    { rolls: 0, packs: 0, sum: 0 },
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.list}>
        {items.map((it) => (
          <CalculatorItem
            key={it.id}
            item={it}
            onChange={update}
            onRemove={() => remove(it.id)}
            removable={items.length > 1}
          />
        ))}

        <button type="button" className={styles.add} onClick={add}>
          Добавить товар
          <Icon name="plus" size={18} />
        </button>
      </div>

      <aside className={styles.summary}>
        <div>
          <b>Количество рулонов:</b>
          <span>{totals.rolls}</span>
        </div>
        <div>
          <b>Количество пачек:</b>
          <span>{totals.packs}</span>
        </div>
        <div className={styles.grand}>
          <b>Итоговая сумма за все позиции:</b>
          <strong>{totals.sum.toLocaleString("ru-RU")} ₽</strong>
        </div>
      </aside>
    </div>
  );
};
