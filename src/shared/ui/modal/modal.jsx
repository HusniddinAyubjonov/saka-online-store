import { Modal as RRModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Icon } from "@/shared/ui/icon";
import styles from "./modal.module.css";

/**
 * Модалка сайта поверх react-responsive-modal, стилизованная под макет.
 *
 * props:
 *   open       — bool
 *   onClose    — () => void
 *   title      — заголовок в шапке (опц.)
 *   size       — "sm" | "md" | "lg"   (default "md")
 *   children   — контент
 *   ...rest    — пробрасывается в <RRModal /> (classNames переопределять не нужно)
 */
export const Modal = ({
  open,
  onClose,
  title,
  size = "md",
  children,
  ...rest
}) => {
  return (
    <RRModal
      open={open}
      onClose={onClose}
      center
      closeIcon={<Icon name="close" size={22} />}
      classNames={{
        root: styles.root,
        overlay: styles.overlay,
        modalContainer: styles.container,
        modal: `${styles.modal} ${styles[size]}`,
        closeButton: styles.close,
      }}
      {...rest}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.body}>{children}</div>
    </RRModal>
  );
};
