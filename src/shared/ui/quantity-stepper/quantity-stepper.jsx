import { Icon } from "@/shared/ui/icon";
import styles from "./quantity-stepper.module.css";

/**
 * − [ N ] +  — управление количеством.
 * props: value, onChange(next), min=1, max, size ("sm" | "md")
 */
export const QuantityStepper = ({
  value = 1,
  onChange,
  min = 1,
  max = 999,
  size = "md",
  className = "",
}) => {
  const set = (v) => onChange?.(Math.min(max, Math.max(min, v)));

  return (
    <div
      className={[styles.stepper, styles[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        aria-label="Убрать"
        onClick={() => set(value - 1)}
        disabled={value <= min}
      >
        <Icon name="minus" size={size === "sm" ? 12 : 16} />
      </button>
      <span className={styles.value}>{value}</span>
      <button
        type="button"
        aria-label="Добавить"
        onClick={() => set(value + 1)}
        disabled={value >= max}
      >
        <Icon name="plus" size={size === "sm" ? 12 : 16} />
      </button>
    </div>
  );
};
