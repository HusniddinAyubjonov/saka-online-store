import { Container, Button } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui/section-title";
import { notify } from "@/shared/ui/toast";
import styles from "./dyeing-cta.module.css";

export const DyeingCta = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Заявка отправлена, мы свяжемся с вами");
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <SectionTitle dark className={styles.title}>
            Фабрика «Saka Tekstil» осуществляет прокрас текстиля в любой цвет
          </SectionTitle>
          <p className={styles.text}>
            Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
            для обсуждения деталей заказа.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input name="name" required placeholder="Ваше имя" />
            <input name="phone" required placeholder="+7 (___) ___-__-__" />
            <input name="email" type="email" required placeholder="Ваш E-mail" />
            <Button type="submit">Отправить</Button>
          </form>

          <p className={styles.note}>
            Нажимая на кнопку, вы даёте своё согласие на обработку персональных
            данных.
          </p>
        </div>
      </Container>
    </section>
  );
};
