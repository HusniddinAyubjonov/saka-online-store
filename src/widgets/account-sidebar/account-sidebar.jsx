import { Icon } from "@/shared/ui";
import styles from "./account-sidebar.module.css";

const tabs = [
  { id: "profile", label: "Профиль", icon: "user" },
  { id: "orders", label: "Мои заказы", icon: "cart" },
  { id: "favorites", label: "Избранное", icon: "heart" },
];

export const AccountSidebar = ({ active = "profile", onChange }) => (
  <nav className={styles.sidebar} aria-label="Личный кабинет">
    <div className={styles.user}>
      <span className={styles.avatar}>
        <Icon name="user" size={26} />
      </span>
      <div>
        <b>Алексей Петров</b>
        <span>+7 (900) 123-45-67</span>
      </div>
    </div>

    <ul className={styles.list}>
      {tabs.map((t) => (
        <li key={t.id}>
          <button
            type="button"
            className={`${styles.tab} ${active === t.id ? styles.tabActive : ""}`}
            onClick={() => onChange?.(t.id)}
          >
            <Icon name={t.icon} size={18} />
            {t.label}
          </button>
        </li>
      ))}
      <li>
        <button type="button" className={styles.tab}>
          <Icon name="arrow-right" size={18} />
          Выход
        </button>
      </li>
    </ul>
  </nav>
);
