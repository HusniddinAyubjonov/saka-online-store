import styles from "./recently-viewed.module.css";

export const RecentlyViewed = (props) => {
  return (
    <div className={styles.recentlyViewed} {...props}>
      <p className={styles.todo}>RecentlyViewed — TODO: свёрстать по макету</p>
    </div>
  );
};
