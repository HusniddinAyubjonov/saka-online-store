import { useEffect, useRef, useState } from "react";
import styles from "./contact-form.module.css";

export const ContactForm = () => {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);

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

  useEffect(() => {
    if (!visible) return;

    const timers = [
      setTimeout(() => setStep(1), 0),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 6000),
      setTimeout(() => setStep(4), 9000),
      setTimeout(() => setStep(5), 12000),
      setTimeout(() => setStep(6), 15000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [visible]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3500);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""} ${
        sent ? styles.sent : ""
      }`}
    >
      <div className={styles.grid} />
      <div className={styles.bigNumber}>02</div>
      <div className={styles.orangeOrb} />
      <div className={styles.lightBeam} />
      <div className={styles.scanner} />

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.sectionTag}>
            <span className={styles.dot} />
            CONTACT FORM
          </div>

          <div className={styles.topRight}>
            <span>02</span>
            <i />
            <span>LET'S TALK</span>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.intro}>
            <div className={styles.vertical}>
              BODAO
              <br />
              CONTACT
            </div>

            <div className={styles.eyebrow}>
              <span />
              START A CONVERSATION
            </div>

            <h2 className={styles.title}>
              <span>Давайте</span>
              <span>
                <em>поговорим</em>
                <b>.</b>
              </span>
            </h2>

            <p className={styles.description}>
              Расскажи нам, что тебе нужно.
              <br />
              Мы свяжемся с тобой и всё обсудим.
            </p>

            <div className={styles.introBottom}>
              <div className={styles.orbit}>
                <span className={styles.orbitDot} />
                <span className={styles.orbitRing} />
                <span>↗</span>
              </div>

              <div className={styles.response}>
                <small>RESPONSE TIME</small>
                <strong>24 — 48 H</strong>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGlow} />

            {/* ЗАГОЛОВОК */}
            <div
              className={`${styles.formIntro} ${
                step >= 1 ? styles.show : ""
              }`}
            >
              <span>START HERE / 01</span>

              <h3>
                Расскажи
                <br />
                <strong>о себе.</strong>
              </h3>

              <div className={styles.introPulse}>
                <i />
                <i />
                <i />
              </div>
            </div>

            {/* ИМЯ */}
            <div
              className={`${styles.field} ${
                step >= 2 ? styles.show : ""
              }`}
            >
              <div className={styles.fieldHead}>
                <span>01</span>
                <label htmlFor="name">КАК ТЕБЯ ЗОВУТ?</label>
              </div>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Введите имя..."
              />

              <div className={styles.fieldLine}>
                <span />
              </div>
            </div>

            {/* ТЕЛЕФОН */}
            <div
              className={`${styles.field} ${
                step >= 3 ? styles.show : ""
              }`}
            >
              <div className={styles.fieldHead}>
                <span>02</span>
                <label htmlFor="phone">ТВОЙ ТЕЛЕФОН</label>
              </div>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+992 ___ ___ __ __"
              />

              <div className={styles.fieldLine}>
                <span />
              </div>
            </div>

            {/* EMAIL */}
            <div
              className={`${styles.field} ${
                step >= 4 ? styles.show : ""
              }`}
            >
              <div className={styles.fieldHead}>
                <span>03</span>
                <label htmlFor="email">EMAIL</label>
              </div>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
              />

              <div className={styles.fieldLine}>
                <span />
              </div>
            </div>

            {/* СООБЩЕНИЕ */}
            <div
              className={`${styles.field} ${styles.messageField} ${
                step >= 5 ? styles.show : ""
              }`}
            >
              <div className={styles.fieldHead}>
                <span>04</span>
                <label htmlFor="message">ЧТО ХОЧЕШЬ СКАЗАТЬ?</label>
              </div>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Напиши сообщение..."
              />

              <div className={styles.fieldLine}>
                <span />
              </div>
            </div>

            {/* КНОПКА */}
            <div
              className={`${styles.formBottom} ${
                step >= 6 ? styles.show : ""
              }`}
            >
              <div className={styles.note}>
                <span>+</span>
                <p>
                  Ответим лично.
                  <br />
                  Без лишнего спама.
                </p>
              </div>

              <button className={styles.button} type="submit">
                <span className={styles.buttonLight} />

                <span className={styles.buttonText}>
                  {sent ? "ОТПРАВЛЕНО" : "ОТПРАВИТЬ"}
                </span>

                <span className={styles.buttonArrow}>
                  {sent ? "✓" : "↗"}
                </span>
              </button>
            </div>

            <div className={styles.corner}>
              BODAO / 2026
            </div>
          </form>
        </div>

        <div className={styles.bottom}>
          <span>LET'S CONNECT</span>

          <div className={styles.marquee}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          <span>DUSHANBE</span>
        </div>
      </div>
    </section>
  );
};