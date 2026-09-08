import styles from "./calculator.module.css";

export const Calculator = (props) => {
  return (
    <div className={styles.calculator} {...props}>
      <p className={styles.todo}>Calculator — TODO: свёрстать по макету</p>
    </div>
  );
};
