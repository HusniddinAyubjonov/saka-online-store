import styles from "./pagination.module.css";

export const Pagination = (props) => {
  return (
    <div className={styles.pagination} {...props}>
      <p className={styles.todo}>Pagination — TODO: свёрстать по макету</p>
    </div>
  );
};
