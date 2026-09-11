import { Icon, notify } from "@/shared/ui";
import styles from "./contact-form.module.css";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Заявка отправлена, мы свяжемся с вами");
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Получите бесплатную консультацию от нашего специалиста
      </h2>
      <p className={styles.lead}>
        Заполните форму ниже и мы свяжемся с вами в ближайшее время
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" required placeholder="Ваше имя" />
        <input name="phone" required placeholder="+7 (___) ___-__-__" />
        <input name="email" type="email" required placeholder="Ваш E-mail" />
        <button type="submit" className={styles.submit}>
          Отправить
          <Icon name="arrow-right" size={18} />
        </button>
      </form>

      <p className={styles.note}>
        Нажимая на кнопку, вы даёте своё согласие на обработку персональных
        данных
      </p>
    </div>
  );
};
