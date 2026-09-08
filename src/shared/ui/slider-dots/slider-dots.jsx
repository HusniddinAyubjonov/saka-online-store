import styles from "./slider-dots.module.css";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Пагинация hero-слайдера по макету: «01 / 05» + N полосок.
 *   count   — сколько слайдов
 *   active  — индекс активного (0-based)
 *   onChange(i)
 *   dark    — светлые полоски на тёмном фоне (по умолч. true — hero тёмный)
 */
export const SliderDots = ({ count, active = 0, onChange, dark = true, className = "" }) => (
  <div className={[styles.dots, dark ? styles.dark : "", className].filter(Boolean).join(" ")}>
    <span className={styles.count}>
      <b>{pad(active + 1)}</b>
      <i>/</i>
      <i>{pad(count)}</i>
    </span>
    <div className={styles.bars}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Слайд ${i + 1}`}
          aria-current={i === active}
          className={`${styles.bar} ${i === active ? styles.barActive : ""}`}
          onClick={() => onChange?.(i)}
        />
      ))}
    </div>
  </div>
);
