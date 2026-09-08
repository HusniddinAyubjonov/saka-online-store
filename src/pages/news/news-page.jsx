import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./news-page.module.css";

export const NewsPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Новости и статьи</h1>
        <p className={styles.todo}>Новости и статьи — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
