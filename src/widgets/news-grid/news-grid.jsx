import { Button, Icon, Chip } from "@/shared/ui";
import { NewsCard } from "@/entities/news";
import styles from "./news-grid.module.css";

const categories = [
  "Ткани",
  "Уход",
  "Стирка",
  "Выбор материала",
  "Выбор цвета",
  "Ткани",
];

const news = [
  {
    id: 1,
    image: "/images/home/news-1.jpg",
    title: "Пример текста для заголовка новости",
    excerpt:
      "Здесь будет находиться небольшое триггерное описание новости или статьи",
    date: "31.03.2022",
  },
  {
    id: 2,
    image: "/images/home/news-2.jpg",
    title: "Пример текста для заголовка новости",
    excerpt:
      "Здесь будет находиться небольшое триггерное описание новости или статьи",
    date: "31.03.2022",
  },
  {
    id: 3,
    image: "/images/home/news-3.jpg",
    title: "Пример текста для заголовка новости",
    excerpt:
      "Здесь будет находиться небольшое триггерное описание новости или статьи",
    date: "31.03.2022",
  },
  {
    id: 4,
    image: "/images/home/news-4.jpg",
    title: "Пример текста для заголовка новости",
    excerpt:
      "Здесь будет находиться небольшое триггерное описание новости или статьи",
    date: "31.03.2022",
  },
  {
    id: 5,
    image: "/images/home/news-5.jpg",
    title: "Пример текста для заголовка новости",
    excerpt:
      "Здесь будет находиться небольшое триггерное описание новости или статьи",
    date: "31.03.2022",
  },
  {
    id: 6,
    image: "/images/home/news-6.jpg",
    title: "Пример текста для заголовка новости",
    excerpt:
      "Здесь будет находиться небольшое триггерное описание новости или статьи",
    date: "31.03.2022",
  },
];

export const NewsGrid = () => (
  <div className={styles.wrap}>
    <article className={styles.heroCard}>
      <img src="/images/home/hero-big.png" alt="Большая новость" />

      <div className={styles.heroContent}>
        <h3>Презентация о Saka Tekstil</h3>
        <p>
          Посмотрите презентацию о том, какие возможности открывает компания
          Saka Tekstil
        </p>
        <Button as="a" href="/news/1" variant="primary">
          Смотреть презентацию <Icon name="arrow-right" size={20} />
        </Button>
      </div>
    </article>

    <div className={styles.categories}>
      {categories.map((c) => (
        <Chip key={c} tone={c === "Выбор материала" ? "navy" : "gold"}>
          {c}
        </Chip>
      ))}
    </div>

    <div className={styles.grid}>
      {news.map((n) => (
        <NewsCard key={n.id} {...n} href={`/news/${n.id}`} />
      ))}
    </div>
  </div>
);
