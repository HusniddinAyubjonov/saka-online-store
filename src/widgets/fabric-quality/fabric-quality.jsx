import styles from "./fabric-quality.module.css";

const fabrics = [
  {
    title: "Open end",
    text: "Бюджетный трикотаж, имеет ворсистую и шероховатую поверхность из-за коротких волокон.",
    img: "/images/home/fabric-1.png",
  },
  {
    title: "Пенье компакт",
    text: "Высшее качество трикотажной ткани, имеют гладкую поверхность без ворсинок.",
    img: "/images/home/fabric-2.png",
  },
  {
    title: "Пенье компакт Плюс EXCLUSIVE",
    text: "Полотно вяжется американскими нитками и окрашено немецкими красками высшего качества.",
    img: "/images/home/fabric-3.png",
  },
];

export const FabricQuality = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Saka Tekstil работает с трикотажными полотнами разного качества:
    </h2>
    <div className={styles.grid}>
      {fabrics.map((f) => (
        <div key={f.title} className={styles.card}>
          <img className={styles.img} src={f.img} alt={f.title} />
          <h3 className={styles.cardTitle}>{f.title}</h3>
          <p className={styles.cardText}>{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);
