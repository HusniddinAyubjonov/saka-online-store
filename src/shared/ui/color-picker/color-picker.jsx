import styles from "./color-picker.module.css";

export const ColorPicker = ({
  value,
  onChange,
  options = [],
  className = "",
}) => (
  <div className={[styles.picker, className].filter(Boolean).join(" ")}>
    {options.map((c) => (
      <button
        key={c.value}
        type="button"
        aria-label={c.name}
        aria-pressed={value === c.value}
        className={`${styles.color} ${value === c.value ? styles.active : ""}`}
        style={{ background: c.value }}
        onClick={() => onChange?.(c.value)}
      />
    ))}
  </div>
);
