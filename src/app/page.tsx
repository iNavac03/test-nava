import styles from "./page.module.css";
import { Menu, Header } from "./sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header text="HOME PAGE" />
      <Menu />
    </main>
  );
}
