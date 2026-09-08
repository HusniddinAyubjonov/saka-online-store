import { Container, Button } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { Reveal } from "@/shared/ui/reveal";
import styles from "./about-intro.module.css";

const paras = [
  "Предоставляем возможность закупки широкого ассортимента хлопкового трикотажа напрямую с производства в Турции.",
  "Наша компания является надёжным поставщиком качественного полотна для швейных и текстильных предприятий.",
];

export const AboutIntro = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.card}>
        <Reveal variant="left" className={styles.media}>
          <img src="/images/home/about-building.jpg" alt="Производство Saka Tekstil" loading="lazy" />
        </Reveal>
        <Reveal variant="right" className={styles.body}>
          <SectionTitle className={styles.title}>
            Saka Tekstil — для тех, кто хочет быстро и комфортно закупать турецкий текстиль
          </SectionTitle>
          <ul className={styles.paras}>
            {paras.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Button as="a" href="/about">Подробнее о компании</Button>
        </Reveal>
      </div>
    </Container>
  </section>
);
