import styles from "./swatch-card.module.css";

/**
 * Карточка цвета ткани: белый квадрат + силуэт футболки в цвете + код.
 * props: { code, color } — color: любое CSS-значение (hex или var(--...))
 */
export const SwatchCard = ({ code, color, className = "" }) => (
  <figure className={[styles.card, className].filter(Boolean).join(" ")}>
    <span className={styles.box}>
      <svg viewBox="0 0 104 90" className={styles.tee} style={{ color }} aria-hidden="true">
        <path
          d="M33 4 40 12a16 16 0 0 0 24 0L71 4l17 10a5 5 0 0 1 2 6l-6 14-9-4v46a4 4 0 0 1-4 4H36a4 4 0 0 1-4-4V36l-9 4-6-14a5 5 0 0 1 2-6Z"
          fill="currentColor"
        />
      </svg>
    </span>
    <figcaption className={styles.code}>{code}</figcaption>
  </figure>
);
