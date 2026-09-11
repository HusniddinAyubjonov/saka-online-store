import { useEffect, useRef, useState } from "react";
import { Container } from "@/shared/ui";
import { NewsCard } from "@/entities/news";
import styles from "./news-preview.module.css";

const news = [
  {
    id: 1,
    image: "/images/home/news-1.jpg",
    title: "Новые коллекции трикотажного полотна",
    excerpt:
      "Рассказываем о новых материалах, коллекциях и возможностях производства.",
    date: "31.03.2022",
    href: "/news/1",
  },
  {
    id: 2,
    image: "/images/home/news-2.jpg",
    title: "Производство и качество",
    excerpt:
      "Как создаётся качественное трикотажное полотно и почему важен каждый этап.",
    date: "24.03.2022",
    href: "/news/2",
  },
  {
    id: 3,
    image: "/images/home/news-3.jpg",
    title: "Тренды текстильной индустрии",
    excerpt:
      "Главные направления и изменения текстильной отрасли.",
    date: "18.03.2022",
    href: "/news/3",
  },
  {
    id: 4,
    image: "/images/home/news-4.jpg",
    title: "Новые оттенки и палитры",
    excerpt:
      "Подборка актуальных цветов и решений для современных коллекций.",
    date: "12.03.2022",
    href: "/news/4",
  },
  {
    id: 5,
    image: "/images/home/news-5.jpg",
    title: "Технологии производства",
    excerpt:
      "Современные технологии помогают создавать стабильные материалы.",
    date: "05.03.2022",
    href: "/news/5",
  },
  {
    id: 6,
    image: "/images/home/news-6.jpg",
    title: "BODAO — о нас и нашей работе",
    excerpt:
      "Подробнее о компании, материалах, партнёрах и производстве.",
    date: "28.02.2022",
    href: "/news/6",
  },
];

const text = "НОВОСТИ";

export const NewsPreview = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${
        started ? styles.started : ""
      }`}
    >
      <Container>

        {/* =========================
            ВЕРХНЯЯ СЦЕНА
        ========================= */}

        <div className={styles.scene}>

          <div className={styles.sceneGlow} />

          {/* ЧЕЛОВЕК */}
          <div className={styles.person}>
            <div className={styles.personHead} />
            <div className={styles.personBody} />
            <div className={styles.personArm} />
          </div>

          {/* ТЕКСТ ПО БУКВАМ */}
          <div className={styles.bigText}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                style={{
                  "--letter-delay": `${index * 180}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div className={styles.subtitle}>
            LATEST STORIES / 2022
          </div>
        </div>

        {/* =========================
            КАРТОЧКИ
        ========================= */}

        <div className={styles.grid}>
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              style={{
                "--delay": `${index * 240}ms`,
              }}
            >
              <div className={styles.number}>
                0{index + 1}
              </div>

              <NewsCard {...item} />
            </div>
          ))}
        </div>

        {/* =========================
            ФИНАЛЬНАЯ НАДПИСЬ
        ========================= */}

        <div className={styles.finalText}>
          <span>KEEP</span>
          <strong>READING</strong>
          <i />
        </div>

      </Container>
    </section>
  );
};