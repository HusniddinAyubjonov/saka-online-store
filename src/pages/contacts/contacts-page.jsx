import { Layout } from "@/widgets/layout";
import { Container, Breadcrumbs } from "@/shared/ui";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactForm } from "@/widgets/contact-form";
import { ContactsMap } from "@/widgets/contacts-map";
import styles from "./contacts-page.module.css";

export const ContactsPage = () => (
  <Layout>
    <Container className={styles.page}>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
      <div className={styles.grid}>
        <ContactsInfo />
        <ContactForm />
      </div>
      <ContactsMap />
    </Container>
  </Layout>
);
