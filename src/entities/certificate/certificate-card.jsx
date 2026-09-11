import styles from "./certificate-card.module.css";

export const CertificateCard = ({ image, title, href }) => (
  <a className={styles.card} href={href} target="_blank" rel="noreferrer">
    <img className={styles.img} src={image} alt={title} />
    <span className={styles.title}>{title}</span>
  </a>
);
