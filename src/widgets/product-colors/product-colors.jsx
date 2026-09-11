import styles from "./product-colors.module.css";

const colors = [
  { code: "A-104 Dark Grey", color: "#4b4f52" },
  { code: "A-101 Grey", color: "#9a9c9e" },
  { code: "A-115 White", color: "#f1f1ef" },
  { code: "A-123 Black", color: "#1b1f24" },
  { code: "A-106 Dark Blue", color: "#263669" },
  { code: "A-107 Blue", color: "#4a7ab8" },
  { code: "A-118 Light Blue", color: "#94b7d5" },
  { code: "A-135 Orange", color: "#fc8b23" },
  { code: "A-136 Green", color: "#2f9e5f" },
  { code: "A-125 Yellow", color: "#f5dc41" },
  { code: "A-201 Purple", color: "#b5a0c9" },
  { code: "A-100 Red", color: "#b2092c" },
];

export const ProductColors = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Все цвета</h2>
    <div className={styles.grid}>
      {colors.map((c) => (
        <div key={c.code} className={styles.item}>
          <div className={styles.teeWrap}>
            <svg
              viewBox="0 0 104 90"
              className={styles.tee}
              style={{ color: c.color }}
            >
              <path
                d="M33 4 40 12a16 16 0 0 0 24 0L71 4l17 10a5 5 0 0 1 2 6l-6 14-9-4v46a4 4 0 0 1-4 4H36a4 4 0 0 1-4-4V36l-9 4-6-14a5 5 0 0 1 2-6Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className={styles.code}>{c.code}</span>
        </div>
      ))}
    </div>
  </section>
);
