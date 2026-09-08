import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./cart-page.module.css";

export const CartPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Корзина</h1>
        <p className={styles.todo}>Корзина — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
