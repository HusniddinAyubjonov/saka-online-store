import { Container } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { Chip } from "@/shared/ui/chip";
import { Reveal } from "@/shared/ui/reveal";
import styles from "./fabric-variety.module.css";

const fabrics = [
  { image: "/images/home/fabric-1.jpg", label: "Футер 3-х Нитка", span: "wide" },
  { image: "/images/home/fabric-2.jpg", label: "Френч Терри", span: "narrow" },
  { image: "/images/home/fabric-3.jpg", label: "Вискоза", span: "mid" },
  { image: "/images/home/fabric-4.jpg", label: "Пике", span: "mid" },
  { image: "/images/home/fabric-5.jpg", label: "Бифлекс", span: "narrow" },
  { image: "/images/home/fabric-6.jpg", label: "Кулинарная гладь", span: "wide" },
];

export const FabricVariety = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.card}>
        <SectionTitle dark className={styles.title}>
          Выбирайте из множества разновидностей тканей
        </SectionTitle>
        <div className={styles.grid}>
          {fabrics.map((f, i) => (
            <Reveal
              key={f.label}
              variant="zoom"
              delay={(i % 3) * 90}
              className={`${styles.cell} ${styles[f.span]}`}
            >
              <img src={f.image} alt={f.label} loading="lazy" />
              <Chip className={styles.chip}>{f.label}</Chip>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
