import { Button, notify } from "@/shared/ui";
import styles from "./subscribe-form.module.css";

export const SubscribeForm = ({ className = "" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Вы подписались на новости");
  };
  return (
    <form
      className={[styles.subscribeForm, className].filter(Boolean).join(" ")}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Ваш E-mail"
        className={styles.input}
      />
      <Button type="submit" size="md">Отправить</Button>
    </form>
  );
};
