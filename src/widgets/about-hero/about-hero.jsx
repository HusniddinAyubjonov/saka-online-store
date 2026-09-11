import { Stat } from "../../shared/ui/stat/stat";
import styles from "./about-hero.module.css";

export const AboutHero = () => (
  <section className={styles.hero}>
    <div className={styles.image}>
      <img src="/images/home/rectangle.png" alt="Saka Tekstil" />
    </div>
    <div className={styles.content}>
      <h2 className={styles.h2}>
        Saka Tekstil - производство и продажа турецкого трикотажного полотна
      </h2>
      <p>
        Мы осуществляем продажу ткани от рулона и нарезку кашкорсе от 5%-20%.
      </p>
      <p>
        Наша команда следит за трендами в мире трикотажа, мы постоянно обновляем
        наш ассортимент и регулярно контролируем наличие ткани на складе.
      </p>
      <p>
        Мы предлагаем клиентам различные виды трикотажных полотен высокого
        качества более, чем в 45 цветовых вариациях.
      </p>

      <div className={styles.stats}>
        <Stat value="30" label="Лет на рынке текстиля" icon="star" />
        <Stat value="40+" label="Ассортимент товаров в наличии" icon="check" />
        <Stat
          value="10 000+"
          label="Клиентов выбирают нашу компанию"
          icon="heart"
        />
      </div>
    </div>
  </section>
);
