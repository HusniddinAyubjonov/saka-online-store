import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { Calculator } from "@/widgets/calculator";
import styles from "./calculator-page.module.css";

export const CalculatorPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Калькулятор" }]} />
      <h1 className={styles.title}>Калькулятор стоимости</h1>
      <p className={styles.lead}>
        Рассчитайте примерную стоимость заказа по цене за метр и нужному
        количеству ткани.
      </p>
      <Calculator />
    </Container>
  </Layout>
);
