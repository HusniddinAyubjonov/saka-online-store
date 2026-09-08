import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./catalog-page.module.css";

export const CatalogPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Каталог</h1>
        <p className={styles.todo}>Каталог — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
