import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./about-page.module.css";

export const AboutPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>О компании</h1>
        <p className={styles.todo}>О компании — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
