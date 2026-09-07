import { Icon } from "@/shared/ui/icon";
import styles from "./icon-button.module.css";

/**
 * Круглая кнопка с одной иконкой (корзина в шапке, закрыть, +/− количества).
 *
 * props:
 *   icon      — имя иконки для <Icon />  (или children, если нужен свой глиф)
 *   label     — обязательная подпись для screen-reader
 *   variant   — "solid" | "outline" | "ghost"  (default "ghost")
 *   size      — "sm" | "md" | "lg"              (default "md")
 */
export const IconButton = ({
  icon,
  label,
  variant = "ghost",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  const px = { sm: 16, md: 20, lg: 24 }[size] ?? 20;

  return (
    <button
      type="button"
      aria-label={label}
      className={[styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children ?? <Icon name={icon} size={px} />}
    </button>
  );
};
