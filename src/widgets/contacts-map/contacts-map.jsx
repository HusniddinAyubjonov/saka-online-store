import { Icon } from "@/shared/ui";
import styles from "./contacts-map.module.css";

export const ContactsMap = () => (
  <div className={styles.map}>
    {/* заглушка-схема; заменить на встраиваемую карту (Яндекс/Google Maps) с реальным адресом */}
    <img
      src="/images/contacts/map-placeholder.svg"
      alt="Карта — г. Москва, ул. Складская, 12"
      loading="lazy"
    />
    <span className={styles.pin}>
      <Icon name="location" size={22} />
    </span>
  </div>
);
