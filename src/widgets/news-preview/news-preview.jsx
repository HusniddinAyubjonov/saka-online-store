import styles from "./news-preview.module.css";

export const NewsPreview = (props) => {
  return (
    <div className={styles.newsPreview} {...props}>
      <p className={styles.todo}>NewsPreview — TODO: свёрстать по макету</p>
    </div>
  );
};
