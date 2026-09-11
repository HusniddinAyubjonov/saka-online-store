import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { ArticleContent } from "@/widgets/article-content";
import { NewsGrid } from "@/widgets/news-grid";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./article-page.module.css";

export const ArticlePage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Новости", href: "/news" },
          { label: "Пример статьи" },
        ]}
      />
      <ArticleContent />
    </Container>
    <Container className={styles.more}>
      <h2>Читайте также:</h2>
      <NewsGrid />
    </Container>
    <RecentlyViewed />
  </Layout>
);
