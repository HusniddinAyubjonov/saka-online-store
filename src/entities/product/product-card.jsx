import { Button } from "@/shared/ui/button";
import styles from "./product-card.module.css";

/**
 * Карточка ткани/товара (каталог, «Недавно просмотренные», «Похожие»).
 * props: { image, title, price, width, href, ctaLabel, onAddToCart }
 */
export const ProductCard = ({
  image,
  title,
  price,
  width,
  href = "#",
  ctaLabel = "В корзину",
  onAddToCart,
  className = "",
}) => (
  <article className={[styles.card, className].filter(Boolean).join(" ")}>
    <a className={styles.media} href={href} aria-label={title}>
      {image ? <img src={image} alt={title} loading="lazy" /> : <span className={styles.ph} />}
    </a>
    <div className={styles.body}>
      <a className={styles.title} href={href}>{title}</a>
      <div className={styles.row}>
        <span className={styles.price}>{price}</span>
        {width && <span className={styles.width}>{width}</span>}
      </div>
      <Button size="md" fullWidth onClick={onAddToCart}>{ctaLabel}</Button>
    </div>
  </article>
);
