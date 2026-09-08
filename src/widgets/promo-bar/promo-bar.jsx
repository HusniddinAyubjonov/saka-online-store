import styles from "./promo-bar.module.css";

export const PromoBar = (props) => {
  return (
    <div className={styles.promoBar} {...props}>
      <p className={styles.todo}>PromoBar — TODO: свёрстать по макету</p>
    </div>
  );
};
