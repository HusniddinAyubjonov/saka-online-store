import { useInView } from "@/shared/lib";
import styles from "./reveal.module.css";

/**
 * Обёртка «появление при скролле». Ставит класс и, когда элемент во вьюпорте,
 * добавляет класс проявления.
 *
 * props:
 *   as       — тег/компонент (по умолчанию "div")
 *   variant  — "up" | "left" | "right" | "zoom" | "fade"  (default "up")
 *   delay    — задержка анимации, мс (для каскада)
 */
export const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${styles[variant]} ${
        inView ? styles.in : ""
      } ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
