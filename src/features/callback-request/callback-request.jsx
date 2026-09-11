import { useState } from "react";
import { Modal, Button, Input, notify } from "@/shared/ui";

/**
 * Кнопка «Заказать звонок» → модалка с формой Имя/Телефон.
 * props: trigger — своя кнопка/элемент вместо стандартной
 */
export const CallbackRequest = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setOpen(false);
    notify.success("Заявка принята, мы перезвоним");
  };

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ display: "contents", cursor: "pointer" }}>
        {trigger || <Button>Заказать звонок</Button>}
      </span>
      <Modal open={open} onClose={() => setOpen(false)} title="Заказать звонок" size="sm">
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input label="Имя" name="name" required />
          <Input label="Телефон" name="phone" required />
          <Button type="submit" fullWidth>Отправить</Button>
        </form>
      </Modal>
    </>
  );
};
