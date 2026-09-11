import { SectionTitle } from "@/shared/ui";
import { CertificateCard } from "@/entities/certificate";
import styles from "./certificates.module.css";

const certs = [
  {
    id: 1,
    image: "/images/home/reputation-1.jpg",
    title: "Сертификат качества",
  },
  { id: 2, image: "/images/home/reputation-2.jpg", title: "Свидетельство" },
  {
    id: 3,
    image: "/images/home/reputation-3.jpg",
    title: "Сертификат соответствия",
  },
];

export const Certificates = () => (
  <section className={styles.section}>
    <SectionTitle className={styles.title}>
      Saka Tekstil дорожит своей репутацией
    </SectionTitle>
    <div className={styles.grid}>
      {certs.map((c) => (
        <CertificateCard key={c.id} {...c} />
      ))}
    </div>
  </section>
);
