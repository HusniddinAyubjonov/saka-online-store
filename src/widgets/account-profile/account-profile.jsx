import { Input, Button } from "@/shared/ui";
import { notify } from "@/shared/ui/toast";
import styles from "./account-profile.module.css";

const stats = [
  { value: "12", label: "заказов" },
  { value: "3", label: "в избранном" },
  { value: "45 200 ₽", label: "потрачено" },
];

export const AccountProfile = () => {
  const save = (e) => {
    e.preventDefault();
    notify.success("Данные сохранены");
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <form className={styles.form} onSubmit={save}>
        <h2 className={styles.h2}>Личные данные</h2>
        <div className={styles.grid2}>
          <Input label="Имя" defaultValue="Алексей" />
          <Input label="Фамилия" defaultValue="Петров" />
          <Input label="Телефон" defaultValue="+7 (900) 123-45-67" />
          <Input label="E-mail" type="email" defaultValue="a.petrov@mail.ru" />
        </div>
        <Button type="submit">Сохранить</Button>
      </form>
    </section>
  );
};
