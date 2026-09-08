import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import styles from "./calculator-page.module.css";

export const CalculatorPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <h1 className={styles.title}>Калькулятор</h1>
        <p className={styles.todo}>Калькулятор — TODO: собрать из виджетов по макету</p>
      </Container>
    </Layout>
  );
};
