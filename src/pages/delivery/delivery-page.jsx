import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./delivery-page.module.css";

export const DeliveryPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Оплата и доставка</h1>
        <p className={styles.todo}>Оплата и доставка — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
