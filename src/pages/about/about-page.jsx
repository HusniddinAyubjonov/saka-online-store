import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { AboutHero } from "@/widgets/about-hero";
import { FabricQuality } from "@/widgets/fabric-quality";
import { Mission } from "@/widgets/mission";
import { Certificates } from "@/widgets/certificates";
import { Reviews } from "@/widgets/reviews";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./about-page.module.css";

export const AboutPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs
        items={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />
      <h1 className={styles.title}>О компании</h1>
      <AboutHero />
      <FabricQuality />
      <Mission />
      <Certificates />
      <Reviews />
    </Container>
    <RecentlyViewed />
  </Layout>
);
