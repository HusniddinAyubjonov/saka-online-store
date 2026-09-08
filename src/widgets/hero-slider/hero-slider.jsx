import styles from "./hero-slider.module.css";

export const HeroSlider = (props) => {
  return (
    <div className={styles.heroSlider} {...props}>
      <p className={styles.todo}>HeroSlider — TODO: свёрстать по макету</p>
    </div>
  );
};
