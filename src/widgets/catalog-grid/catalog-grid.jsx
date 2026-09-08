import { Reveal } from "@/shared/ui/reveal";
import { ProductCard } from "@/entities/product";
import { notify } from "@/shared/ui/toast";
import styles from "./catalog-grid.module.css";

export const CatalogGrid = ({ items = [] }) => (
  <div className={styles.grid}>
    {items.map((p, i) => (
      <Reveal key={p.id} variant="up" delay={(i % 3) * 80}>
        <ProductCard
          {...p}
          ctaLabel="Подробнее"
          onAddToCart={() => notify.success("Товар добавлен в корзину")}
        />
      </Reveal>
    ))}
  </div>
);
