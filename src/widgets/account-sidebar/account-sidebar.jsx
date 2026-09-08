import styles from "./account-sidebar.module.css";

export const AccountSidebar = (props) => {
  return (
    <div className={styles.accountSidebar} {...props}>
      <p className={styles.todo}>AccountSidebar — TODO: свёрстать по макету</p>
    </div>
  );
};
