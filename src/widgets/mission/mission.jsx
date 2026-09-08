import styles from "./mission.module.css";

export const Mission = (props) => {
  return (
    <div className={styles.mission} {...props}>
      <p className={styles.todo}>Mission — TODO: свёрстать по макету</p>
    </div>
  );
};
