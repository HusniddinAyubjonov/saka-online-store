import styles from "./add-to-cart.module.css";

export const AddToCart = (props) => {
  return (
    <div className={styles.addToCart} {...props}>
      <p className={styles.todo}>AddToCart — TODO: свёрстать по макету</p>
    </div>
  );
};
