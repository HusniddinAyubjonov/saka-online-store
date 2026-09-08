import { useState } from "react";
import { Container } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { CarouselArrows } from "@/shared/ui/carousel-arrows";
import { Reveal } from "@/shared/ui/reveal";
import styles from "./reputation.module.css";

const shots = [
  "/images/home/reputation-1.jpg",
  "/images/home/reputation-2.jpg",
  "/images/home/reputation-3.jpg",
  "/images/home/about-building.jpg",
  "/images/home/fabric-1.jpg",
];

export const Reputation = () => {
  const [i, setI] = useState(0);
  const move = (d) => setI((v) => (v + d + shots.length) % shots.length);
  const shown = [0, 1, 2].map((k) => shots[(i + k) % shots.length]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionTitle>Saka Tekstil дорожит своей репутацией</SectionTitle>
          <CarouselArrows onPrev={() => move(-1)} onNext={() => move(1)} />
        </div>
        <div className={styles.row}>
          {shown.map((src, k) => (
            <Reveal key={src + k} variant="up" delay={k * 90} className={styles.cell}>
              <img src={src} alt="" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
