import styles from "./about-hero.module.css";

export const AboutHero = (props) => {
  return (
    <div className={styles.aboutHero} {...props}>
      <p className={styles.todo}>AboutHero — TODO: свёрстать по макету</p>
    </div>
  );
};
