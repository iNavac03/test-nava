import { Header } from "../sections";
import styles from './contact.module.css';
import { Form } from "../sections";

export default function ContactPage() {
    return (
      <main className={styles.container}>
          <Header
          text='CONTACT PAGE'
          showButton
          btnText="Go back home"
          />
          <Form></Form>
      </main>
    );
  }
  