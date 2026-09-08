import styles from "./news-card.module.css";

export const NewsCard = (props) => {
  return (
    <div className={styles.newsCard} {...props}>
      <p className={styles.todo}>NewsCard — TODO: свёрстать по макету</p>
    </div>
  );
};
