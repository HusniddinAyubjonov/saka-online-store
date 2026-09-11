import { useState } from "react";
import styles from "./product-gallery.module.css";

const images = [
  "/images/home/product-1.jpg",
  "/images/home/product-2.jpg",
  "/images/home/product-3.jpg",
  "/images/home/product-4.jpg",
  "/images/home/fabric-5.jpg",
  "/images/home/fabric-6.jpg",
];

export const ProductGallery = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <img src={images[active]} alt="Товар" />
      </div>
      <div className={styles.thumbs}>
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            className={`${styles.thumb} ${active === i ? styles.thumbActive : ""}`}
            onClick={() => setActive(i)}
          >
            <img src={img} alt="PRODUCT_GALLERY" />
          </button>
        ))}
      </div>
    </div>
  );
};
