import { useId } from "react";
import styles from "./textarea.module.css";

/** Многострочное поле. Те же варианты, что у Input: "light" | "dark". */
export const Textarea = ({
  label,
  hint,
  error,
  variant = "light",
  rows = 5,
  className = "",
  id,
  ...rest
}) => {
  const autoId = useId();
  const areaId = id || autoId;

  return (
    <div
      className={[
        styles.field,
        styles[variant],
        error ? styles.hasError : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label className={styles.label} htmlFor={areaId}>
          {label}
        </label>
      )}

      <textarea
        id={areaId}
        rows={rows}
        className={styles.area}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : hint ? (
        <p className={styles.hint}>{hint}</p>
      ) : null}
    </div>
  );
};
