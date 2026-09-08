import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { PromoBar } from "@/widgets/promo-bar";
import styles from "./layout.module.css";

/**
 * Общий каркас страницы: хедер + контент + футер.
 * promo — показать ли бегущую строку «АКЦИИ» под шапкой (только на главной).
 */
export const Layout = ({ children, promo = false }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {promo && <PromoBar />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
