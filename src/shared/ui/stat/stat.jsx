import { Icon } from "@/shared/ui/icon";
import styles from "./stat.module.css";

export const Stat = ({ value, label, icon, className = "" }) => (
  <div className={[styles.stat, className].filter(Boolean).join(" ")}>
    {icon && (
      <span className={styles.icon}>
        <Icon name={icon} size={36} />
      </span>
    )}
    <b className={styles.value}>{value}</b>
    <span className={styles.label}>{label}</span>
  </div>
);
