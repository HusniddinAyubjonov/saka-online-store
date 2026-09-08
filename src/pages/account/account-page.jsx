import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./account-page.module.css";

export const AccountPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Личный кабинет</h1>
        <p className={styles.todo}>Личный кабинет — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
