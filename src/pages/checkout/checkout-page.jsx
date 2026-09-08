import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./checkout-page.module.css";

export const CheckoutPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Оформление заказа</h1>
        <p className={styles.todo}>Оформление заказа — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
