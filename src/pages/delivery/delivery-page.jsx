
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { CheckoutForm } from "@/widgets/checkout-form";
import styles from "./delivery-page.module.css";

export const DeliveryPage = () => {
  const stepsRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Container className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <span className={styles.label}>CHECKOUT / 05</span>

          <h1 className={styles.title}>
            Оплата
            <br />
            <span>и доставка.</span>
          </h1>

          <p className={styles.description}>
            Оформите заказ, выберите способ доставки
            <br />
            и удобный способ оплаты.
          </p>
        </section>

        {/* ANIMATED STEPS */}
        <section
          ref={stepsRef}
          className={`${styles.stepsScene} ${
            started ? styles.sceneStarted : ""
          }`}
        >
          <div className={styles.sceneGlow} />

          {/* STEP 1 */}
          <div className={`${styles.step} ${styles.orderStep}`}>
            <div className={styles.stepNumber}>01</div>

            <div className={styles.stepText}>
              <span>ПЕРВЫЙ ЭТАП</span>
              <strong>ЗАКАЗ</strong>
            </div>

            <div className={styles.package}>
              <div className={styles.packageTop} />
              <div className={styles.packageFront} />
              <div className={styles.packageTape} />
            </div>
          </div>

          {/* ROAD 1 */}
          <div className={styles.road}>
            <div className={styles.roadLine} />

            <div className={styles.car}>
              <div className={styles.carBody}>
                <div className={styles.carWindow} />
                <div className={styles.carLight} />
              </div>

              <div className={styles.wheelLeft} />
              <div className={styles.wheelRight} />
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`${styles.step} ${styles.deliveryStep}`}>
            <div className={styles.stepNumber}>02</div>

            <div className={styles.stepText}>
              <span>ВТОРОЙ ЭТАП</span>
              <strong>ДОСТАВКА</strong>
            </div>

            <div className={styles.location}>
              <div className={styles.locationCore} />
              <div className={styles.locationRing} />
            </div>
          </div>

          {/* ROAD 2 */}
          <div className={`${styles.road} ${styles.roadSecond}`}>
            <div className={styles.roadLine} />

            <div className={`${styles.car} ${styles.carSecond}`}>
              <div className={styles.carBody}>
                <div className={styles.carWindow} />
                <div className={styles.carLight} />
              </div>

              <div className={styles.wheelLeft} />
              <div className={styles.wheelRight} />
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`${styles.step} ${styles.paymentStep}`}>
            <div className={styles.stepNumber}>03</div>

            <div className={styles.stepText}>
              <span>ТРЕТИЙ ЭТАП</span>
              <strong>ОПЛАТА</strong>
            </div>

            {/* CSS BANK CARD */}
            <div className={styles.bankCard}>
              <div className={styles.cardChip}>
                <i />
                <i />
                <i />
              </div>

              <div className={styles.cardCircle} />

              <span className={styles.cardBrand}>BODAO</span>

              <div className={styles.cardNumber}>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>

            {/* COINS */}
            <div className={styles.coins}>
              <div className={styles.coin}>₽</div>
              <div className={styles.coin}>₽</div>
              <div className={styles.coin}>₽</div>
            </div>
          </div>

          <div className={styles.finishLine}>
            <span />
            PAYMENT COMPLETE
          </div>
        </section>

        {/* CHECKOUT */}
        <section className={styles.checkout}>
          <div className={styles.checkoutTitle}>
            <span>03</span>
            ОФОРМЛЕНИЕ ЗАКАЗА
          </div>

          <CheckoutForm />
        </section>
      </Container>
    </Layout>
  );
};
