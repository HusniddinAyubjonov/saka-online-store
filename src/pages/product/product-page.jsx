import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { ProductGallery } from "@/widgets/product-gallery";
import { ProductSummary } from "@/widgets/product-summary";
import { ProductTabs } from "@/widgets/product-tabs";
import { ProductCalculator } from "@/widgets/product-calculator";
import { ProductColors } from "@/widgets/product-colors";
import { BulkOrderBanner } from "@/widgets/bulk-order-banner";
import { SimilarProducts } from "@/widgets/similar-products";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./product-page.module.css";

export const ProductPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: "Кулинарная гладь" },
        ]}
      />
      <div className={styles.top}>
        <ProductGallery />
        <ProductSummary />
      </div>
      <ProductTabs />
      <ProductCalculator />
      <ProductColors />
      <BulkOrderBanner />
      <SimilarProducts />
    </Container>
    <RecentlyViewed />
  </Layout>
);
