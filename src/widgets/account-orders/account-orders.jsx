import styles from "./account-orders.module.css";

const orders = [
  { id: "1024", date: "31.03.2022", sum: "1 200 ₽", status: "Доставлен",
    thumbs: ["/images/home/product-1.jpg", "/images/home/product-2.jpg"] },
  { id: "1025", date: "12.04.2022", sum: "8 640 ₽", status: "В пути",
    thumbs: ["/images/home/product-3.jpg"] },
  { id: "1031", date: "02.05.2022", sum: "305 005 ₽", status: "В обработке",
    thumbs: ["/images/home/product-4.jpg", "/images/home/product-1.jpg", "/images/home/product-2.jpg"] },
];

const tone = { "Доставлен": "ok", "В пути": "go", "В обработке": "wait" };

export const AccountOrders = () => (
  <section className={styles.wrap}>
    <h2 className={styles.h2}>Мои заказы</h2>
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>№</th><th>Дата</th><th>Товары</th><th>Сумма</th><th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.date}</td>
              <td>
                <span className={styles.thumbs}>
                  {o.thumbs.map((t, i) => (
                    <img key={i} src={t} alt="" />
                  ))}
                </span>
              </td>
              <td className={styles.sum}>{o.sum}</td>
              <td>
                <span className={`${styles.badge} ${styles[tone[o.status]]}`}>{o.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
