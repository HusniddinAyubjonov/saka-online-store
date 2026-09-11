import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactForm } from "@/widgets/contact-form";
import { ContactsMap } from "@/widgets/contacts-map";
import { RecentlyViewed } from "@/widgets/recently-viewed";
import styles from "./contacts-page.module.css";

export const ContactsPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
      <h1 className={styles.title}>Контакты</h1>
      <ContactsInfo />
      <ContactsMap />
      <ContactForm />
    </Container>
    <RecentlyViewed />
  </Layout>
);
