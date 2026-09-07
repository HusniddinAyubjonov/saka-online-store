import { Container, Button, Icon, notify } from "@/shared/ui";
import styles from "./footer.module.css";

const navColumn = [
  { label: "Каталог", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Доставка и оплата", href: "/delivery" },
  { label: "Контакты", href: "/contacts" },
  { label: "Корзина", href: "/cart" },
];

const infoColumn = [
  { label: "Помощь", href: "/help" },
  { label: "Блог", href: "/blog" },
  { label: "Вопрос-ответ", href: "/faq" },
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Карта сайта", href: "/sitemap" },
];

const socials = [
  { label: "Instagram", href: "#", src: "/icons/instagram.svg" },
  { label: "Telegram", href: "#", src: "/icons/telegram.svg" },
  { label: "VK", href: "#", src: "/icons/vk.svg" },
  { label: "WhatsApp", href: "#", src: "/icons/whatsapp.svg" },
];

const PHONE = "+90 212 547 08 26";

export const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    notify.success("Вы подписались на новости Saka Tekstil");
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <a className={styles.brand} href="/" aria-label="Saka Tekstil">
            <img src="/brand/logo.png" alt="Saka Tekstil" />
          </a>

          <nav className={styles.col} aria-label="Навигация">
            <h3 className={styles.colTitle}>Навигация</h3>
            {navColumn.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <nav className={styles.col} aria-label="Информация">
            <h3 className={styles.colTitle}>Информация</h3>
            {infoColumn.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={`${styles.col} ${styles.subscribe}`}>
            <h3 className={styles.colTitle}>Следите за новостями</h3>

            <form className={styles.form} onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                required
                placeholder="Ваш E-mail"
                aria-label="Ваш E-mail"
              />
              <Button type="submit" size="md">
                Отправить
              </Button>
            </form>

            <a
              className={styles.phone}
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
            >
              <Icon name="phone" size={22} className={styles.phoneIcon} />
              {PHONE}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.online}>
            <span>
              Напишите нам,
              <br />
              мы онлайн:
            </span>
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                    <img src={s.src} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.copyright}>
            Copyright © 2023 Сака Текстиль. Все права защищены
          </p>
        </div>
      </Container>
    </footer>
  );
};
