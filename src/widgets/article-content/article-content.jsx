import styles from "./article-content.module.css";

export const ArticleContent = (props) => {
  return (
    <div className={styles.articleContent} {...props}>
      <p className={styles.todo}>ArticleContent — TODO: свёрстать по макету</p>
    </div>
  );
};
