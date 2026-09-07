import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "@/shared/ui/icon";
import styles from "./toast.module.css";

/**
 * Контейнер тостов сайта поверх react-toastify.
 * Смонтировать один раз в App:  <Toaster />
 * Для вызова уведомлений использовать `notify` из "@/shared/ui/toast".
 */
export const Toaster = (props) => (
  <ToastContainer
    position="top-right"
    autoClose={3200}
    newestOnTop
    hideProgressBar
    closeButton={({ closeToast }) => (
      <button
        type="button"
        className={styles.close}
        onClick={closeToast}
        aria-label="Закрыть уведомление"
      >
        <Icon name="close" size={16} />
      </button>
    )}
    className={styles.stack}
    toastClassName={styles.toast}
    {...props}
  />
);
