import { useState } from "react";
import {
  Button,
  IconButton,
  Chip,
  Input,
  Textarea,
  Checkbox,
  Container,
  Icon,
  Modal,
  notify,
} from "@/shared/ui";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import styles from "./home-page.module.css";

const fabrics = ["Френч Терри", "Пике", "Футер 3-х Нитка", "Вискоза", "Бифлекс"];
const swatches = [
  "--blue",
  "--orange",
  "--yellow",
  "--purple",
  "--red",
  "--teal",
  "--navy",
];

export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Container as="main" className={styles.page}>
        <header className={styles.head}>
        <h1 className={styles.h1}>Saka — UI kit</h1>
        <p className={styles.lead}>
          Базовые компоненты по макету Figma: Montserrat, navy&nbsp;#19242f,
          золото&nbsp;#dbc08d, скругления 4&nbsp;/&nbsp;16&nbsp;/&nbsp;pill.
        </p>
      </header>

      <section className={styles.block}>
        <h2 className={styles.h2}>Buttons</h2>
        <div className={styles.row}>
          <Button>Смотреть каталог</Button>
          <Button size="md">Подробнее</Button>
          <Button variant="outline">В корзину</Button>
          <Button variant="ghost" size="sm">
            Сбросить
          </Button>
          <Button disabled>Недоступно</Button>
        </div>
        <div className={styles.row}>
          <Button>
            Написать <Icon name="whatsapp" size={18} />
          </Button>
          <IconButton icon="cart" label="Корзина" variant="solid" />
          <IconButton icon="search" label="Поиск" variant="outline" />
          <IconButton icon="user" label="Профиль" />
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>Chips / свотчи</h2>
        <div className={styles.row}>
          {fabrics.map((f) => (
            <Chip key={f}>{f}</Chip>
          ))}
        </div>
        <div className={styles.row}>
          {swatches.map((v) => (
            <span
              key={v}
              className={styles.swatch}
              style={{ background: `var(${v})` }}
            />
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>Форма</h2>
        <div className={styles.form}>
          <Input label="Ваше имя" placeholder="Ваше имя" />
          <Input
            label="Телефон"
            placeholder="+7 (___) ___-__-__"
            leftIcon={<Icon name="phone" size={18} />}
          />
          <Input label="E-mail" type="email" placeholder="Ваш E-mail" />
          <Textarea label="Комментарий" placeholder="Ваш вопрос..." />
          <Checkbox label="Согласен на обработку данных" defaultChecked />
          <div className={styles.row}>
            <Button
              onClick={() => notify.success("Заявка отправлена")}
            >
              Отправить
            </Button>
            <Button
              variant="outline"
              onClick={() => notify.error("Проверьте поля формы")}
            >
              Показать ошибку
            </Button>
            <Button variant="ghost" onClick={() => setModalOpen(true)}>
              Открыть модалку
            </Button>
          </div>
        </div>
      </section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Заказать прайс-лист"
      >
        <p>
          Оставьте контакты — вышлем актуальный прайс-лист Saka Tekstil в течение
          рабочего дня.
        </p>
        <div className={styles.modalForm}>
          <Input label="Имя" placeholder="Ваше имя" />
          <Input label="Телефон" placeholder="+7 (___) ___-__-__" />
          <Button
            fullWidth
            onClick={() => {
              setModalOpen(false);
              notify.success("Прайс-лист отправлен на почту");
            }}
          >
            Получить прайс-лист
          </Button>
        </div>
      </Modal>
      </Container>
      <Footer />
    </>
  );
};
