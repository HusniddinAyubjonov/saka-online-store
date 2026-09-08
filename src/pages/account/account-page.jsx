import { useState } from "react";
import { Layout } from "@/widgets/layout";
import { Container } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { AccountSidebar } from "@/widgets/account-sidebar";
import { AccountProfile } from "@/widgets/account-profile";
import { AccountOrders } from "@/widgets/account-orders";
import styles from "./account-page.module.css";

export const AccountPage = () => {
  const [tab, setTab] = useState("profile");

  return (
    <Layout>
      <Container className={styles.page}>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Личный кабинет" }]} />
        <h1 className={styles.title}>Личный кабинет</h1>

        <div className={styles.grid}>
          <AccountSidebar active={tab} onChange={setTab} />
          <div className={styles.content}>
            {tab === "profile" && <AccountProfile />}
            {tab === "orders" && <AccountOrders />}
            {tab === "favorites" && (
              <p className={styles.empty}>В избранном пока пусто</p>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};
