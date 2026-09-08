import { Layout } from "@/widgets/layout";
import { HeroSlider } from "@/widgets/hero-slider";
import { NewsPreview } from "@/widgets/news-preview";
import { FabricVariety } from "@/widgets/fabric-variety";
import { AboutIntro } from "@/widgets/about-intro";
import { Reputation } from "@/widgets/reputation";
import { PaletteCatalog } from "@/widgets/palette-catalog";
import { DyeingCta } from "@/widgets/dyeing-cta";
import { RecentlyViewed } from "@/widgets/recently-viewed";

export const HomePage = () => (
  <Layout promo>
    <HeroSlider />
    <NewsPreview />
    <FabricVariety />
    <AboutIntro />
    <Reputation />
    <PaletteCatalog />
    <DyeingCta />
    <RecentlyViewed />
  </Layout>
);
