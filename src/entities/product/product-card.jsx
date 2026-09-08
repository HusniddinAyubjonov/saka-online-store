import styles from "./product-card.module.css";

export const ProductCard = (props) => {
  return (
    <div className={styles.productCard} {...props}>
      <p className={styles.todo}>ProductCard — TODO: свёрстать по макету</p>
    </div>
  );
};
