import { useState } from "react";
import { Container, Button, Icon } from "@/shared/ui";
import { SliderDots } from "@/shared/ui/slider-dots";
import styles from "./hero-slider.module.css";

const slides = [
  {
    title: "Здесь будет слайдер\nс различными акциями или спецпредложениями",
    cta: "Подробнее",
  },
  {
    title: "Турецкий хлопковый трикотаж\nоптом напрямую с фабрики",
    cta: "Смотреть каталог",
  },
  {
    title: "Прокрас ткани в любой цвет\nиз палитры 45+ оттенков",
    cta: "Оставить заявку",
  },
];

export const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <img
          className={styles.photo}
          src="/images/home/hero-laundry.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className={styles.card}>
          <div className={styles.content} key={active}>
            <h1 className={styles.title}>{slide.title}</h1>
            <Button className={styles.cta}>
              {slide.cta}
              <Icon name="arrow-right" size={20} />
            </Button>
          </div>
          <SliderDots
            className={styles.dots}
            count={slides.length}
            active={active}
            onChange={setActive}
          />
        </div>
      </Container>
    </section>
  );
};
