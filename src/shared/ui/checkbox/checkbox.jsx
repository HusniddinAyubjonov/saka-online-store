import { useId } from "react";
import styles from "./checkbox.module.css";

/** Чекбокс для фильтров каталога. */
export const Checkbox = ({ label, className = "", id, ...rest }) => {
  const autoId = useId();
  const cbId = id || autoId;

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <input id={cbId} type="checkbox" className={styles.native} {...rest} />
      <label htmlFor={cbId} className={styles.label}>
        <span className={styles.box} aria-hidden="true">
          <svg viewBox="0 0 16 16" className={styles.tick}>
            <path
              d="M3 8.5 L6.5 12 L13 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {label && <span className={styles.text}>{label}</span>}
      </label>
    </div>
  );
};
