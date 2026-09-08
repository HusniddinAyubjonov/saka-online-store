import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { CartSummary } from "@/widgets/cart-summary";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./cart-page.module.css";

export const CartPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Корзина" }]} />
      <h1 className={styles.title}>Корзина</h1>
      <CartSummary />
    </Container>
    <RecentlyViewed />
  </Layout>
);
