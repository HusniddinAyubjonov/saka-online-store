
import { Layout } from "@/widgets/layout";
import { ContactsInfo } from "@/widgets/contacts-info";
import { ContactForm } from "@/widgets/contact-form";
import { ContactsMap } from "@/widgets/contacts-map";
import styles from "./contacts-page.module.css";

export const ContactsPage = () => {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.circleOne} />
          <div className={styles.circleTwo} />

          <div className={styles.heroContent}>
            <div className={styles.label}>CONTACTS</div>

            <h1 className={styles.title}>
              Контакты
            </h1>

            <p className={styles.description}>
              Свяжитесь с нами — мы ответим на ваши вопросы
              и поможем подобрать подходящее решение.
            </p>
          </div>
        </section>

        <div className={styles.content}>
          <ContactsInfo />
          <ContactForm />
          <ContactsMap />
        </div>
      </main>
    </Layout>
  );
};
