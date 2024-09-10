import { Header } from "../sections";
import styles from "./contact.module.css";
import { Form } from "../sections";

export default function ContactPage() {
  return (
    <div className={styles.body}>
      <Header text="CONTACT PAGE" btnText="Go back home" href="/" icon="AngleSmallLeft"/>
      <main className={styles.container}>
        <Form />
      </main>
    </div>
  );
}
