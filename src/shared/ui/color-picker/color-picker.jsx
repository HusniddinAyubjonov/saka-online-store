import styles from "./color-picker.module.css";

export const ColorPicker = (props) => {
  return (
    <div className={styles.colorPicker} {...props}>
      <p className={styles.todo}>ColorPicker — TODO: свёрстать по макету</p>
    </div>
  );
};
