import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./product-page.module.css";

export const ProductPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Карточка товара</h1>
        <p className={styles.todo}>Карточка товара — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
