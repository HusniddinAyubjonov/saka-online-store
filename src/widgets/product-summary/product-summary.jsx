import styles from "./product-summary.module.css";

export const ProductSummary = (props) => {
  return (
    <div className={styles.productSummary} {...props}>
      <p className={styles.todo}>ProductSummary — TODO: свёрстать по макету</p>
    </div>
  );
};
