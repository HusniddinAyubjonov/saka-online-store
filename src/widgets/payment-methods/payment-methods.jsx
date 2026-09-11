import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { CheckoutForm } from "@/widgets/checkout-form";
import styles from "./delivery-page.module.css";

export const DeliveryPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
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

          <div
            style={{
              marginTop: "40px",
              height: "2px",
              width: "100%",
              background:
                "linear-gradient(90deg, #14b8b0, transparent)",
            }}
          />
        </section>

        <section
          style={{
            marginTop: "80px",
            marginBottom: "100px",
            padding: "70px 40px",
            background: "#f5f7f6",
            border: "1px solid rgba(20, 184, 176, 0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: "800",
              letterSpacing: "0.2em",
              color: "#14b8b0",
              marginBottom: "25px",
            }}
          >
            SECURE CHECKOUT
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(55px, 10vw, 130px)",
              lineHeight: "0.8",
              fontWeight: "900",
              letterSpacing: "-0.07em",
            }}
          >
            СПОСОБ
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #111",
              }}
            >
              ОПЛАТЫ
            </span>
            <span style={{ color: "#14b8b0" }}>.</span>
          </h2>

          <p
            style={{
              marginTop: "45px",
              color: "rgba(17,17,17,0.55)",
              lineHeight: "1.7",
            }}
          >
            Выберите удобный способ оплаты вашего заказа.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                padding: "30px",
                minHeight: "170px",
                background: "#151919",
                color: "#fff",
                borderRadius: "14px",
                border: "1px solid #14b8b0",
              }}
            >
              <span style={{ color: "#14b8b0" }}>01</span>
              <h3>Банковская карта</h3>
              <p>Visa / Mastercard</p>
            </div>

            <div
              style={{
                padding: "30px",
                minHeight: "170px",
                background: "#151919",
                color: "#fff",
                borderRadius: "14px",
                border: "1px solid #14b8b0",
              }}
            >
              <span style={{ color: "#14b8b0" }}>02</span>
              <h3>Онлайн-оплата</h3>
              <p>Быстро и безопасно</p>
            </div>

            <div
              style={{
                padding: "30px",
                minHeight: "170px",
                background: "#151919",
                color: "#fff",
                borderRadius: "14px",
                border: "1px solid #14b8b0",
              }}
            >
              <span style={{ color: "#14b8b0" }}>03</span>
              <h3>Банковский перевод</h3>
              <p>Для юридических лиц</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "80px" }}>
          <CheckoutForm />
        </section>
      </Container>
    </Layout>
  );
};
