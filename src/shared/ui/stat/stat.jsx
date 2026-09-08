import styles from "./stat.module.css";

export const Stat = (props) => {
  return (
    <div className={styles.stat} {...props}>
      <p className={styles.todo}>Stat — TODO: свёрстать по макету</p>
    </div>
  );
};
