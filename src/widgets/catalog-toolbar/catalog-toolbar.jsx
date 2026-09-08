import { Icon } from "@/shared/ui";
import styles from "./catalog-toolbar.module.css";

const sorts = ["По новизне", "Сначала дешевле", "Сначала дороже", "По названию"];

export const CatalogToolbar = ({
  count = 0,
  activeFilters = 0,
  onResetFilters,
  onToggleFilters,
  sort,
  onSortChange,
}) => (
  <div className={styles.toolbar}>
    <button type="button" className={styles.filters} onClick={onToggleFilters}>
      Фильтры
      {activeFilters > 0 && <span className={styles.badge}>{activeFilters}</span>}
    </button>

    {activeFilters > 0 && (
      <button type="button" className={styles.reset} onClick={onResetFilters}>
        Сбросить <Icon name="close" size={14} />
      </button>
    )}

    <span className={styles.count}>{count} товаров</span>

    <label className={styles.sort}>
      <span>Сортировка:</span>
      <select value={sort} onChange={(e) => onSortChange?.(e.target.value)}>
        {sorts.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <Icon name="chevron-down" size={16} />
    </label>
  </div>
);
