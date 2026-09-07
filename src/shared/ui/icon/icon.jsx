import { icons } from "./icons.jsx";
import styles from "./icon.module.css";

/**
 * Иконка из набора.
 *
 * props:
 *   name  — ключ из icons (cart, phone, mail, search, close, check, plus,
 *           minus, menu, user, heart, star, location, whatsapp,
 *           chevron-down, chevron-right, arrow-right)
 *   size  — px (default 24)
 */
export const Icon = ({ name, size = 24, className = "", ...rest }) => {
  const glyph = icons[name];
  if (!glyph) return null;

  return (
    <svg
      className={[styles.icon, className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden={rest["aria-label"] ? undefined : "true"}
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  );
};
