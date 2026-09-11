import { Reveal } from "@/shared/ui";
import styles from "./payment-methods.module.css";

export const PaymentMethods = () => (
  <Reveal as="section" variant="up" className={styles.section}>
    <h2 className={styles.title}>Оплата товара</h2>
    <p className={styles.text}>
      Наиболее удобный для вас способ оплаты товара вы можете согласовать с
      менеджером: банковской картой, через Систему быстрых платежей, наличными
      или безналичным переводом для юридических лиц.
    </p>
  </Reveal>
);
