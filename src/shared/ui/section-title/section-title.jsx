import styles from "./section-title.module.css";

/**
 * Заголовок секции по макету: Montserrat 26 / SemiBold, line-height 1.35.
 *   dark   — белый текст (на тёмном фоне)
 *   align  — "left" (по умолч.) | "center"
 *   as     — тег (h2 по умолчанию)
 */
export const SectionTitle = ({
  children,
  dark = false,
  align = "left",
  as: Tag = "h2",
  className = "",
  ...rest
}) => (
  <Tag
    className={[styles.title, dark ? styles.dark : "", styles[align], className]
      .filter(Boolean)
      .join(" ")}
    {...rest}
  >
    {children}
  </Tag>
);
