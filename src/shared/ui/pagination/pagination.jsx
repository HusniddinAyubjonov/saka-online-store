import { IconButton } from "@/shared/ui/icon-button";
import styles from "./pagination.module.css";

/**
 * Пагинация списков (Каталог, Новости).
 *   page (1-based), total, onChange(page)
 */
export const Pagination = ({ page = 1, total = 1, onChange, className = "" }) => {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const go = (p) => p >= 1 && p <= total && p !== page && onChange?.(p);

  return (
    <nav className={[styles.pagination, className].filter(Boolean).join(" ")} aria-label="Страницы">
      <IconButton icon="chevron-left" label="Назад" onClick={() => go(page - 1)} disabled={page === 1} />
      <ul className={styles.list}>
        {pages.map((p) => (
          <li key={p}>
            <button
              type="button"
              aria-current={p === page ? "page" : undefined}
              className={`${styles.page} ${p === page ? styles.pageActive : ""}`}
              onClick={() => go(p)}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
      <IconButton icon="chevron-right" label="Вперёд" onClick={() => go(page + 1)} disabled={page === total} />
    </nav>
  );
};
