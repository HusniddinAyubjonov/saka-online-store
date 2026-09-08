import { Container, Icon } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { Reveal } from "@/shared/ui/reveal";
import { SwatchCard } from "@/entities/swatch";
import { palette } from "./palette-data.js";
import styles from "./palette-catalog.module.css";

const Grid = ({ items }) => (
  <div className={styles.grid}>
    {items.map((s, i) => (
      <Reveal key={s.code} variant="zoom" delay={(i % 6) * 60}>
        <SwatchCard {...s} />
      </Reveal>
    ))}
  </div>
);

export const PaletteCatalog = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.head}>
        <SectionTitle className={styles.title}>
          Актуальная палитра «Saka Tekstil» из 45+ цветов — основной каталог
        </SectionTitle>
        <div className={styles.warn}>
          <Icon name="star" size={22} className={styles.warnIcon} />
          <p>
            ВНИМАНИЕ! Цветопередача на вашем мониторе может значительно отличаться
            от реального цвета ткани.
          </p>
        </div>
      </div>

      <Grid items={palette} />

      <SectionTitle className={styles.subTitle}>Сезонная палитра</SectionTitle>
      <Grid items={palette} />
    </Container>
  </section>
);
