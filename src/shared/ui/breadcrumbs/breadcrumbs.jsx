import { Icon } from "@/shared/ui/icon";
import styles from "./breadcrumbs.module.css";

/**
 * Хлебные крошки. items: [{ label, href }] — у последнего href можно опустить.
 */
export const Breadcrumbs = ({ items = [], className = "" }) => (
  <nav
    className={[styles.crumbs, className].filter(Boolean).join(" ")}
    aria-label="Хлебные крошки"
  >
    <ol>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <li key={it.label}>
            {last || !it.href ? (
              <span aria-current={last ? "page" : undefined}>{it.label}</span>
            ) : (
              <a href={it.href}>{it.label}</a>
            )}
            {!last && (
              <Icon name="chevron-right" size={12} className={styles.sep} />
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
