import styles from "./extra-info.module.css";

export const ExtraInfo = (props) => {
  return (
    <div className={styles.extraInfo} {...props}>
      <p className={styles.todo}>ExtraInfo — TODO: свёрстать по макету</p>
    </div>
  );
};
