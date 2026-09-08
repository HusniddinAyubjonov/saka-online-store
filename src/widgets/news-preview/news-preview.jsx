import { Container } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { Reveal } from "@/shared/ui/reveal";
import { NewsCard } from "@/entities/news";
import styles from "./news-preview.module.css";

const news = [
  { id: 1, image: "/images/home/news-1.jpg" },
  { id: 2, image: "/images/home/news-2.jpg" },
  { id: 3, image: "/images/home/news-3.jpg" },
  { id: 4, image: "/images/home/news-4.jpg" },
  { id: 5, image: "/images/home/news-5.jpg" },
  { id: 6, image: "/images/home/news-6.jpg" },
].map((n) => ({
  ...n,
  title: "Пример текста для заголовка новости",
  excerpt:
    "Здесь будет находиться небольшое триггерное описание новости или статьи",
  date: "31.03.2022",
  href: "/news/" + n.id,
}));

export const NewsPreview = () => (
  <section className={styles.section}>
    <Container>
      <SectionTitle className={styles.title}>Новости и статьи</SectionTitle>
      <div className={styles.grid}>
        {news.map((n, i) => (
          <Reveal key={n.id} variant="up" delay={(i % 3) * 90}>
            <NewsCard {...n} />
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
