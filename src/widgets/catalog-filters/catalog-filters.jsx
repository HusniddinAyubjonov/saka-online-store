import { useState } from "react";
import { Checkbox, Icon, Button } from "@/shared/ui";
import styles from "./catalog-filters.module.css";

const kinds = ["Кулирная гладь", "Рибана", "Пике", "Интерлок", "Футер 2-х нитка",
  "Футер 3-х нитка", "Кашкорсе к 2х нитке", "Кашкорсе к 3х нитке", "Double Face"];
const qualities = ["Стандарт", "Оптима", "Премиум"];
const colors = [
  { name: "Жёлтый", value: "#f5dc41" }, { name: "Тёмно-зелёный", value: "#007c7a" },
  { name: "Синий", value: "#263669" }, { name: "Тёмно-голубой", value: "#4a7ab8" },
  { name: "Бордовый", value: "#b2092c" }, { name: "Сиреневый", value: "#b5a0c9" },
  { name: "Оранжевый", value: "#fc8b23" }, { name: "Серый", value: "#c8c8c8" },
  { name: "Золотой", value: "#dbc08d" }, { name: "Белый", value: "#ffffff" },
];

const Group = ({ title, children, open: defOpen = true }) => {
  const [open, setOpen] = useState(defOpen);
  return (
    <div className={`${styles.group} ${open ? styles.groupOpen : ""}`}>
      <button type="button" className={styles.groupHead} onClick={() => setOpen((v) => !v)}>
        {title}
        <Icon name="chevron-down" size={16} />
      </button>
      {open && <div className={styles.groupBody}>{children}</div>}
    </div>
  );
};

export const CatalogFilters = ({ open = true, onReset, className = "" }) => {
  const [color, setColor] = useState(null);

  return (
    <aside className={[styles.filters, open ? "" : styles.hidden, className].filter(Boolean).join(" ")}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Фильтры</h2>
        <button type="button" className={styles.reset} onClick={onReset}>Сбросить</button>
      </div>

      <Group title="Цена">
        <div className={styles.price}>
          <label><span>от</span><input type="number" defaultValue={0} min={0} /></label>
          <label><span>до</span><input type="number" defaultValue={100000} min={0} /></label>
        </div>
      </Group>

      <Group title="Тип полотна" open={false}>
        <div className={styles.list}>
          {kinds.slice(0, 5).map((k) => <Checkbox key={k} label={k} />)}
        </div>
      </Group>

      <Group title="Качество">
        <div className={styles.list}>
          {qualities.map((q) => <Checkbox key={q} label={q} />)}
          {kinds.map((k) => <Checkbox key={k} label={k} />)}
        </div>
      </Group>

      <Group title="Цвет">
        <div className={styles.colors}>
          {colors.map((c) => (
            <button
              key={c.name}
              type="button"
              aria-label={c.name}
              aria-pressed={color === c.value}
              className={`${styles.color} ${color === c.value ? styles.colorActive : ""}`}
              style={{ background: c.value }}
              onClick={() => setColor((v) => (v === c.value ? null : c.value))}
            />
          ))}
        </div>
      </Group>

      <Button fullWidth className={styles.apply}>Применить</Button>
    </aside>
  );
};
