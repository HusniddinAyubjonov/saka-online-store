import { useState } from "react";
import { Container, Icon, IconButton } from "@/shared/ui";
import { CallbackRequest } from "@/features/callback-request";
import styles from "./header.module.css";

const badges = [
  { src: "/images/badges/eros.png", alt: "EROS" },
  { src: "/images/badges/saka.png", alt: "SAKA" },
  { src: "/images/badges/tortex.png", alt: "TORTEX" },
];

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "О компании", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Доставка и оплата", href: "/delivery" },
  { label: "Контакты", href: "/contacts" },
];

const PHONE = "+90 212 547 08 26";

export const Header = ({ cartCount = 3 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* --- верхняя полоса --- */}
      <div className={styles.top}>
        <Container className={styles.topInner}>
          <a className={styles.brand} href="/" aria-label="Saka Tekstil — на главную">
            <img className={styles.logo} src="/brand/logo.png" alt="Saka Tekstil" />
            <span className={styles.badges}>
              {badges.map((b) => (
                <img key={b.alt} src={b.src} alt={b.alt} />
              ))}
            </span>
          </a>

          <a className={styles.phone} href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>
            <Icon name="phone" size={22} className={styles.phoneIcon} />
            <span>
              <b>{PHONE}</b>
              <small>Производитель турецкого трикотажного полотна</small>
            </span>
          </a>

          <div className={styles.actions}>
            <CallbackRequest
              trigger={
                <button type="button" className={styles.callback}>
                  Заказать звонок
                </button>
              }
            />

            <span className={styles.lang}>RU&nbsp;/&nbsp;EN</span>

            <a className={styles.login} href="/account">
              <Icon name="user" size={16} />
              <span>Войти</span>
            </a>

            <a className={styles.cart} href="/cart" aria-label="Корзина">
              <Icon name="cart" size={22} />
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </a>
          </div>
        </Container>
      </div>

      {/* --- меню --- */}
      <div className={styles.nav}>
        <Container className={styles.navInner}>
          <a className={styles.catalog} href="/catalog">
            <Icon name="menu" size={18} />
            Каталог
            <Icon name="chevron-down" size={16} />
          </a>

          <nav
            className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className={styles.linksCatalog}
              href="/catalog"
              onClick={() => setMenuOpen(false)}
            >
              Каталог
            </a>
          </nav>

          <IconButton
            className={styles.burger}
            icon={menuOpen ? "close" : "menu"}
            label="Меню"
            onClick={() => setMenuOpen((v) => !v)}
          />
        </Container>
      </div>
    </header>
  );
};
