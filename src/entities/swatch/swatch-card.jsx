import styles from "./swatch-card.module.css";

export const SwatchCard = (props) => {
  return (
    <div className={styles.swatchCard} {...props}>
      <p className={styles.todo}>SwatchCard — TODO: свёрстать по макету</p>
    </div>
  );
};
