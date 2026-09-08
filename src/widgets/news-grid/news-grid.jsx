import styles from "./news-grid.module.css";

export const NewsGrid = (props) => {
  return (
    <div className={styles.newsGrid} {...props}>
      <p className={styles.todo}>NewsGrid — TODO: свёрстать по макету</p>
    </div>
  );
};
