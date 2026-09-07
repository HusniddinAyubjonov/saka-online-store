import { toast } from "react-toastify";
import { Icon } from "@/shared/ui/icon";
import styles from "./toast.module.css";

const base = { className: styles.toast };

/**
 * Хелпер уведомлений:
 *   notify.success("Товар добавлен в корзину")
 *   notify.error("Что-то пошло не так")
 *   notify.info("...")   /   notify("простой текст")
 *   notify.dismiss()
 */
export const notify = Object.assign(
  (message, options) => toast(message, { ...base, ...options }),
  {
    success: (message, options) =>
      toast.success(message, {
        ...base,
        icon: <Icon name="check" size={18} />,
        ...options,
      }),
    error: (message, options) =>
      toast.error(message, {
        ...base,
        icon: <Icon name="close" size={18} />,
        ...options,
      }),
    info: (message, options) => toast.info(message, { ...base, ...options }),
    dismiss: toast.dismiss,
  },
);
