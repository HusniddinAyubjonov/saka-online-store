import styles from "./container.module.css";

/** Центрирующая обёртка контента: max-width 1400 + адаптивные поля. */
export const Container = ({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}) => {
  return (
    <Tag
      className={[styles.container, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
};
