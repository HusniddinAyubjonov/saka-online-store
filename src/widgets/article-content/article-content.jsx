import styles from "./article-content.module.css";

export const ArticleContent = () => (
  <article className={styles.article}>
    <div className={styles.meta}>
      <span>ТЕМА, 09 ЯНВАРЯ 2022</span>
      <a href="#">
        ПОДЕЛИТЬСЯ{" "}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H8M17 7V16" />
        </svg>
      </a>
    </div>
    <h1 className={styles.title}>
      Здесь будет находиться большой понятный и триггерный заголовок с названием
      новости
    </h1>

    <img
      className={styles.heroImage}
      src="/images/home/news-4.jpg"
      alt="Главное фото"
    />

    <p className={styles.paragraph}>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English.
    </p>
    <p className={styles.paragraph}>
      Many desktop publishing packages now use Lorem Ipsum as their default
      model text, and a search for 'lorem ipsum' will uncover many web sites
      still in their infancy.
    </p>

    <img
      className={styles.inlineImage}
      src="/images/home/news-5.jpg"
      alt="Фото"
    />

    <p className={styles.paragraph}>
      Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).
    </p>

    <div className={styles.tags}>
      <span>#Ткани</span>
      <span>#Качество</span>
    </div>
  </article>
);
