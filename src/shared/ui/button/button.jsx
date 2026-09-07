import styles from "./button.module.css";

/**
 * Кнопка. По макету: золотой фон (#dbc08d), тёмный текст, пилюля (r=100),
 * Montserrat SemiBold. Есть контурный и «призрачный» варианты.
 *
 * props:
 *   variant   — "primary" | "outline" | "ghost"  (default "primary")
 *   size      — "lg" | "md" | "sm"               (default "lg")
 *   fullWidth — растянуть на всю ширину
 *   as        — тег ("button" по умолчанию, можно "a")
 */
export const Button = ({
  children,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className = "",
  as: Tag = "button",
  type,
  ...rest
}) => {
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={cls}
      type={Tag === "button" ? (type ?? "button") : type}
      {...rest}
    >
      {children}
    </Tag>
  );
};
