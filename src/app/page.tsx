import styles from "./page.module.css";
import { Menu, Header } from "./sections";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header text="HOME PAGE" />
      <div className={styles.main}>
        <Menu />
      </div>
    </div>
  );
}
