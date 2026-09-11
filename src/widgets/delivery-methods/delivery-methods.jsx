import { Icon, Button } from "@/shared/ui";
import { notify } from "@/shared/ui/toast";
import styles from "./delivery-methods.module.css";

export const DeliveryMethods = () => {
  const submit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    notify.success("Заявка отправлена, мы свяжемся с вами");
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Способы доставки товара</h1>

      <div className={styles.bento}>
        <div className={`${styles.card} ${styles.pickup}`}>
          <h3>Самовывоз</h3>
          <p>
            Со склада по адресу: г. Москва, ул. Верхние поля, д. 48а, стр. 1.
            <br />
            График работы склада: ПН–ПТ 09:00–18:00.
          </p>
          <img
            className={styles.pickupImg}
            src="/images/home/product-1.jpg"
            alt=""
            loading="lazy"
          />
        </div>

        <div className={`${styles.card} ${styles.ask}`}>
          <h3>Возникли вопросы по доставке?</h3>
          <p>Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
          <form onSubmit={submit}>
            <input name="name" required placeholder="Ваше имя" />
            <input name="phone" required placeholder="+7 (___) ___-__-__" />
            <Button type="submit" size="md">
              Отправить <Icon name="arrow-right" size={16} />
            </Button>
          </form>
          <span className={styles.fine}>
            Нажимая на кнопку, вы даёте своё согласие на обработку персональных
            данных
          </span>
        </div>

        <div className={`${styles.card} ${styles.transport}`}>
          <h3>Доставка до транспортной компании</h3>
          <p>
            Бесплатная доставка до терминала ТК «Деловые Линии», «Байкал-Сервис»,
            «ПЭК» и других по согласованию.
          </p>
          <img src="/images/home/reputation-1.jpg" alt="" loading="lazy" />
          <span className={styles.fine}>
            * Действует только для крупных заказов от 5000&nbsp;кг
          </span>
        </div>

        <div className={`${styles.card} ${styles.city}`}>
          <h3>Доставка по Москве</h3>
          <p>Стоимость доставки уточняйте у менеджера</p>
        </div>

        <div className={`${styles.card} ${styles.cashless}`}>
          <h3>Безналичный расчёт</h3>
          <p>Безналичный расчёт осуществляется для юридических лиц</p>
          <img src="/images/home/reputation-2.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
