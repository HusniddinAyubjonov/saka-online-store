import styles from "./chip.module.css";

/**
 * Небольшой тег (по макету — типы тканей: «Френч Терри», «Пике» и т.п.).
 * Золотой фон, скругление 4px.
 *
 * props:
 *   tone     — "gold" | "navy" | "muted"  (default "gold")
 *   as       — тег ("span" по умолчанию, можно "button")
 */
export const Chip = ({
  children,
  tone = "gold",
  className = "",
  as: Tag = "span",
  ...rest
}) => {
  return (
    <Tag
      className={[styles.chip, styles[tone], className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
};
