import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./article-page.module.css";

export const ArticlePage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Страница статьи</h1>
        <p className={styles.todo}>Страница статьи — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
