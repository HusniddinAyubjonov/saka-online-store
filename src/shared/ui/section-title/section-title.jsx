import styles from "./section-title.module.css";

export const SectionTitle = (props) => {
  return (
    <div className={styles.sectionTitle} {...props}>
      <p className={styles.todo}>SectionTitle — TODO: свёрстать по макету</p>
    </div>
  );
};
