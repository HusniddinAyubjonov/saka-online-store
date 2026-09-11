import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { NewsGrid } from "@/widgets/news-grid";
import { Pagination } from "@/shared/ui/pagination";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./news-page.module.css";

export const NewsPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Новости" }]}
      />
      <h1 className={styles.title}>Новости</h1>
      <NewsGrid />
      <Pagination className={styles.pagination} page={1} total={4} />
    </Container>
    <RecentlyViewed />
  </Layout>
);
