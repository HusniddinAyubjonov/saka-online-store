import { Icon } from "@/shared/ui";
import styles from "./extra-info.module.css";

export const ExtraInfo = () => (
  <section className={styles.section}>
    <div>
      <h2 className={styles.title}>Остались вопросы?</h2>
      <p className={styles.text}>
        Уточните условия доставки и оплаты для вашего региона или объёма
        заказа — свяжемся и всё расскажем.
      </p>
    </div>
    <a className={styles.phone} href="tel:+902125470826">
      <Icon name="phone" size={22} />
      +90 212 547 08 26
    </a>
  </section>
);
