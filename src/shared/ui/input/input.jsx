import { useId } from "react";
import styles from "./input.module.css";

/**
 * Текстовое поле. По макету: скругление 16px.
 *   variant "light" — светлые страницы (белый фон, серая рамка)
 *   variant "dark"  — тёмный hero (полупрозрачный белый фон, светлый текст)
 *
 * props: label, hint, error, leftIcon, fullWidth, ...остальное уходит в <input>
 */
export const Input = ({
  label,
  hint,
  error,
  leftIcon,
  variant = "light",
  fullWidth = true,
  className = "",
  id,
  ...rest
}) => {
  const autoId = useId();
  const inputId = id || autoId;

  return (
    <div
      className={[
        styles.field,
        styles[variant],
        fullWidth ? styles.fullWidth : "",
        error ? styles.hasError : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className={styles.control}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        <input
          id={inputId}
          className={styles.input}
          aria-invalid={error ? "true" : undefined}
          {...rest}
        />
      </div>

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : hint ? (
        <p className={styles.hint}>{hint}</p>
      ) : null}
    </div>
  );
};
