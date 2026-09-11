import { Icon } from "@/shared/ui";
import styles from "./extra-info.module.css";

export const ExtraInfo = () => (
  <section className={styles.card}>
    <h2 className={styles.title}>
      Более подробную информацию можно уточнить по телефону
    </h2>

    <div className={styles.row}>
      <div>
        <span className={styles.label}>Звоните сейчас:</span>
        <a className={styles.phone} href="tel:+79999999999">+7 (999) 999-99-99</a>
      </div>

      <div>
        <span className={styles.label}>Или напишите нашему менеджеру напрямую:</span>
        <div className={styles.socials}>
          <a href="#" aria-label="Telegram" className={styles.social}>
            <Icon name="mail" size={22} />
          </a>
          <a href="#" aria-label="WhatsApp" className={styles.social}>
            <Icon name="whatsapp" size={22} />
          </a>
        </div>
        <span className={styles.hint}>Среднее время ответа 5 минут</span>
      </div>
    </div>
  </section>
);
