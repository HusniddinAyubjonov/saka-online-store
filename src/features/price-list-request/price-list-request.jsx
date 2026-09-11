import { useState } from "react";
import { Modal, Button, Input, notify } from "@/shared/ui";

/**
 * Кнопка «Заказать прайс-лист» → модалка с формой Имя/Телефон.
 * props: trigger — своя кнопка/элемент вместо стандартной
 */
export const PriceListRequest = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setOpen(false);
    notify.success("Прайс-лист отправлен на почту");
  };

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ display: "contents", cursor: "pointer" }}>
        {trigger || <Button>Заказать прайс-лист</Button>}
      </span>
      <Modal open={open} onClose={() => setOpen(false)} title="Заказать прайс-лист" size="sm">
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input label="Имя" name="name" required />
          <Input label="Телефон" name="phone" required />
          <Input label="E-mail" name="email" type="email" required />
          <Button type="submit" fullWidth>Получить прайс-лист</Button>
        </form>
      </Modal>
    </>
  );
};
