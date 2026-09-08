import styles from "./breadcrumbs.module.css";

export const Breadcrumbs = (props) => {
  return (
    <div className={styles.breadcrumbs} {...props}>
      <p className={styles.todo}>Breadcrumbs — TODO: свёрстать по макету</p>
    </div>
  );
};
