import { Input, Textarea, Checkbox, Button, notify } from "@/shared/ui";
import styles from "./contact-form.module.css";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Сообщение отправлено");
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Напишите нам</h2>
      <div className={styles.grid}>
        <Input label="Имя" name="name" required />
        <Input label="Телефон" name="phone" required />
      </div>
      <Input label="E-mail" name="email" type="email" required />
      <Textarea label="Сообщение" name="message" rows={5} />
      <Checkbox label="Согласен на обработку персональных данных" defaultChecked />
      <Button type="submit">Отправить</Button>
    </form>
  );
};
