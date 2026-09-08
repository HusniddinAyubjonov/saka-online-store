import { useState } from "react";
import { Container } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { CarouselArrows } from "@/shared/ui/carousel-arrows";
import { Reveal } from "@/shared/ui/reveal";
import { ProductCard } from "@/entities/product";
import { notify } from "@/shared/ui/toast";
import styles from "./recently-viewed.module.css";

const base = [
  { image: "/images/home/product-1.jpg", price: "11,4 $" },
  { image: "/images/home/product-2.jpg", price: "13 $" },
  { image: "/images/home/product-3.jpg", price: "122,4 $" },
  { image: "/images/home/product-4.jpg", price: "13,84 $" },
];
const products = [...base, ...base].map((p, i) => ({
  ...p,
  id: i,
  title: "Кулинарная гладь",
  width: "180 см",
  href: "/product/" + i,
}));

export const RecentlyViewed = () => {
  const [i, setI] = useState(0);
  const move = (d) => setI((v) => (v + d + products.length) % products.length);
  const shown = [0, 1, 2, 3].map((k) => products[(i + k) % products.length]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.head}>
            <SectionTitle>Недавно просмотренные</SectionTitle>
            <CarouselArrows tone="ghost" onPrev={() => move(-1)} onNext={() => move(1)} />
          </div>
          <div className={styles.row}>
            {shown.map((p, k) => (
              <Reveal key={p.id + "-" + k} variant="up" delay={k * 80}>
                <ProductCard
                  {...p}
                  onAddToCart={() => notify.success("Товар добавлен в корзину")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
