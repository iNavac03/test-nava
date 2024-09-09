import { Header } from "../sections";
import styles from "./contact.module.css";
import { Form } from "../sections";

export default function ContactPage() {
  return (
    <div className={styles.body}>
      <Header text="CONTACT PAGE" showButton btnText="Go back home" />
      <main className={styles.container}>
        <Form />
      </main>
    </div>
  );
}
