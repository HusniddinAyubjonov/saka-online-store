import { Icon } from "@/shared/ui/icon";
import styles from "./news-card.module.css";

/**
 * Карточка новости/статьи (тёмная, по макету).
 * props: { image, title, excerpt, date, href }
 */
export const NewsCard = ({ image, title, excerpt, date, href = "#", className = "" }) => (
  <article className={[styles.card, className].filter(Boolean).join(" ")}>
    <a className={styles.media} href={href} aria-label={title}>
      {image ? <img src={image} alt="" loading="lazy" /> : <span className={styles.ph} />}
      <span className={styles.badge} aria-hidden="true">
        <Icon name="arrow-up-right" size={22} />
      </span>
    </a>
    <div className={styles.body}>
      <a className={styles.title} href={href}>{title}</a>
      {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      {date && <time className={styles.date}>{date}</time>}
    </div>
  </article>
);
