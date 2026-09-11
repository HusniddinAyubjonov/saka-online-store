import { useState } from "react";
import { Button, notify } from "@/shared/ui";
import { QuantityStepper } from "@/shared/ui/quantity-stepper";
import styles from "./add-to-cart.module.css";

export const AddToCart = ({ productId, className = "" }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className={[styles.addToCart, className].filter(Boolean).join(" ")}>
      <QuantityStepper value={qty} onChange={setQty} min={1} />
      <Button onClick={() => notify.success("Товар добавлен в корзину")}>
        Добавить в корзину
      </Button>
    </div>
  );
};
