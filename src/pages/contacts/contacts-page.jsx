import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./contacts-page.module.css";

export const ContactsPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.todo}>Контакты — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
