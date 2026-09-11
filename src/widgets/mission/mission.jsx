import { Icon } from "@/shared/ui";
import styles from "./mission.module.css";

const items = [
  {
    title: "Логистика",
    text: "Весь ассортимент в наличии на складе в Москве. Вам не потребуется тратить свои ресурсы на доставку ткани из Турции.",
    icon: "location",
  },
  {
    title: "Производство",
    text: "Регулярное наличие ткани позволяет не останавливать процесс вашего производства и минимизировать финансовые потери.",
    icon: "cart",
  },
  {
    title: "Дополнительные материалы",
    text: "Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара со склада и бесплатные образцы.",
    icon: "check",
  },
  {
    title: "Лояльность",
    text: "Наш трикотаж закупают известные бренды. Это позволит вам создать собственный качественный бренд одежды.",
    icon: "heart",
  },
  {
    title: "Уникальность",
    text: "Мы предоставляем клиентам широкую палитру цветов, что позволяет создавать уникальные коллекции одежды.",
    icon: "star",
  },
  {
    title: "Качество",
    text: "Наша ткань обрабатывается специальным силиконовым составом, что позволяет ей не терять своей структуры с течением времени.",
    icon: "user",
  },
];

export const Mission = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Наша главная задача – не просто предоставить качественную ткань, но и
      оказать каждому заказчику высокий уровень клиентского сервиса
    </h2>
    <div className={styles.gridWrap}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title} className={styles.card}>
            <span className={styles.iconWrap}>
              <Icon name={item.icon} size={28} />
            </span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
      <img className={styles.wave} src="/images/about/wave-bg.png" alt="" />
    </div>
  </section>
);
