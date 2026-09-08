import { useMemo, useState } from "react";
import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { Pagination } from "@/shared/ui/pagination";
import { CatalogToolbar } from "@/widgets/catalog-toolbar";
import { CatalogFilters } from "@/widgets/catalog-filters";
import { CatalogGrid } from "@/widgets/catalog-grid";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./catalog-page.module.css";

const priceList = ["11,4 $", "13 $", "122,4 $", "13,84 $", "9,9 $", "15,2 $"];
const all = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  image: `/images/home/${["product-1", "product-2", "product-3", "product-4", "fabric-2", "fabric-4"][i % 6]}.jpg`,
  title: "Кулинарная гладь",
  price: priceList[i % priceList.length],
  width: "180 см",
  href: `/product/${i + 1}`,
}));

const PER_PAGE = 9;

export const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("По новизне");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const pageItems = useMemo(
    () => all.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [page],
  );

  return (
    <Layout>
      <Container className={styles.page}>
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]}
        />
        <h1 className={styles.title}>
          Позаботьтесь о себе и своих близких — выбирайте качественный турецкий
          трикотаж
        </h1>

        <CatalogToolbar
          count={all.length}
          activeFilters={0}
          sort={sort}
          onSortChange={setSort}
          onToggleFilters={() => setFiltersOpen((v) => !v)}
        />

        <div className={styles.body}>
          <CatalogFilters open={filtersOpen || undefined} className={styles.aside} />
          <div className={styles.content}>
            <CatalogGrid items={pageItems} />
            <Pagination
              className={styles.pagination}
              page={page}
              total={Math.ceil(all.length / PER_PAGE)}
              onChange={(p) => {
                setPage(p);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </Container>

      <RecentlyViewed />
    </Layout>
  );
};
