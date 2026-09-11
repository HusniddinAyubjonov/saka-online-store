import { useEffect, useRef, useState } from "react";
import styles from "./contacts-info.module.css";

const CONTACTS = [
  {
    number: "01",
    label: "АДРЕС",
    title: "Наш офис",
    value: "Душанбе, Таджикистан",
    mark: "01",
  },
  {
    number: "02",
    label: "EMAIL",
    title: "Напишите нам",
    value: "info@example.com",
    mark: "@",
  },
  {
    number: "03",
    label: "ТЕЛЕФОН",
    title: "Позвоните нам", 
    value: "+992 00 000 00 00",
    mark: "03",
  },
  {
    number: "04",
    label: "ВРЕМЯ",
    title: "Пн — Пт",
    value: "09:00 — 18:00",
    mark: "04",
  },
];

export const ContactsInfo = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.noise} />
      <div className={styles.gridLines} />
      <div className={styles.orangeGlow} />

      <div className={styles.backgroundWord}>
        CONTACT
      </div>

      <div className={styles.lightSweep} />

      <div className={styles.container}>
        <div className={styles.topLine}>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            BODAO FIGHT TEAM
          </div>

          <div className={styles.topRight}>
            <span>CONTACT / 01</span>
            <i />
            <span>
              DU<em>S</em>HANBE
            </span>
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>LET'S TALK</span>
            <div className={styles.metaLine}>
              <i />
            </div>
          </div>

          <h2 className={styles.title}>
            <span className={styles.titleSmall}>
              СВЯЖИТЕСЬ
            </span>

            <span className={styles.titleMain}>
              <span className={styles.letter}>С</span>
              <span className={styles.letter}>Н</span>
              <span className={styles.letter}>А</span>
              <span className={styles.letter}>М</span>
              <span className={`${styles.letter} ${styles.orangeLetter}`}>
                И
              </span>
            </span>

            <span className={styles.titleDot}>.</span>
          </h2>

          <div className={styles.heroBottom}>
            <p className={styles.description}>
              Есть вопрос?
              <br />
              Давай обсудим.
            </p>

            <div className={styles.heroDecoration}>
              <div className={styles.ring}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.arrow}>↘</div>
            </div>

            <div className={styles.scrollHint}>
              <span>SCROLL TO EXPLORE</span>

              <div className={styles.scrollLine}>
                <i />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <span>КОНТАКТЫ</span>
          <div>
            <i />
          </div>
          <span>04 CHANNELS</span>
        </div>

        <div className={styles.grid}>
          {CONTACTS.map((contact, index) => (
            <article
              key={contact.number}
              className={`${styles.card} ${
                styles[`card${index + 1}`]
              }`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>
                  {contact.number}
                </span>

                <span className={styles.cardLabel}>
                  {contact.label}
                </span>

                <span className={styles.cardMark}>
                  {contact.mark}
                </span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  <span />
                  <b />
                </div>

                <div>
                  <h3>{contact.title}</h3>
                  <p>{contact.value}</p>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <span>OPEN CHANNEL</span>
                <b>↗</b>
              </div>

              <div className={styles.cardGlow} />
              <div className={styles.cardLine} />
            </article>
          ))}
        </div>

        <div className={styles.bottomStatement}>
          <span className={styles.statementNumber}>
            / 001
          </span>

          <h3>
            Твой следующий
            <br />
            <span>шаг начинается здесь.</span>
          </h3>

          <div className={styles.statementMark}>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};
