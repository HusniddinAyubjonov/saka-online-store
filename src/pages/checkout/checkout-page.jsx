import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { CheckoutForm } from "@/widgets/checkout-form";
import styles from "./checkout-page.module.css";

export const CheckoutPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Корзина", href: "/cart" },
          { label: "Оформление заказа" },
        ]}
      />
      <h1 className={styles.title}>Оформление заказа</h1>
      <CheckoutForm />
    </Container>
  </Layout>
);
