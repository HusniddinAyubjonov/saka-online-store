import { IconButton } from "@/shared/ui/icon-button";
import styles from "./carousel-arrows.module.css";

/**
 * Пара круглых стрелок для каруселей (как в макете: два кружка со стрелками).
 *   tone — "light" (кружок #f8f8f8, для светлых секций) | "ghost"
 */
export const CarouselArrows = ({
  onPrev,
  onNext,
  tone = "light",
  className = "",
}) => (
  <div className={[styles.arrows, styles[tone], className].filter(Boolean).join(" ")}>
    <IconButton
      className={styles.btn}
      icon="chevron-left"
      label="Назад"
      onClick={onPrev}
    />
    <IconButton
      className={styles.btn}
      icon="chevron-right"
      label="Вперёд"
      onClick={onNext}
    />
  </div>
);
