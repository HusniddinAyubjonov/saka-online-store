import { Button, notify } from "@/shared/ui";
import styles from "./bulk-order-banner.module.css";

export const BulkOrderBanner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Заявка отправлена! Мы свяжемся с вами.");
  };

  return (
    <section className={styles.banner}>
      <h3 className={styles.title}>Требуется закупка ткани от 500кг?</h3>
      <p className={styles.subtitle}>
        Оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ваше имя" required />
        <input
          type="tel"
          name="phone"
          placeholder="+7 (___) ___-__-__"
          required
        />
        <input type="email" name="email" placeholder="Ваш E-mail" required />
        <Button type="submit" className={styles.btn}>
          Отправить
        </Button>
      </form>
      <p className={styles.note}>
        Нажимая на кнопку вы даете свое согласие на обработку персональных
        данных. Гарантируем! Спама не будет
      </p>
    </section>
  );
};
