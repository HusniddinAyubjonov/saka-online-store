import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { DeliveryMethods } from "@/widgets/delivery-methods";
import { PaymentMethods } from "@/widgets/payment-methods";
import { ExtraInfo } from "@/widgets/extra-info";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./delivery-page.module.css";

export const DeliveryPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Доставка и оплата" }]} />
      <DeliveryMethods />
      <PaymentMethods />
      <ExtraInfo />
    </Container>
    <RecentlyViewed />
  </Layout>
);
