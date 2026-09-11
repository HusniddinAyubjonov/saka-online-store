import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { Calculator } from "@/widgets/calculator";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./calculator-page.module.css";

export const CalculatorPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Калькулятор" }]} />
      <h1 className={styles.title}>Калькулятор расчёта стоимости ткани</h1>
      <p className={styles.lead}>
        Рассчитайте стоимость ткани, ответив на три вопроса
      </p>
      <Calculator />
    </Container>
    <RecentlyViewed />
  </Layout>
);
