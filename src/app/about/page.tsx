"use client";
import { Header } from "@/app/sections";
import styles from "./about.module.css";
import { Card } from "@/app/sections";

import pic1 from "@/../public/images/pic1.jpeg";
import pic2 from "@/../public/images/pic2.jpeg";
import pic3 from "@/../public/images/pic3.jpeg";

export default function AboutPage() {
  return (
    <div className={styles.body}>
      <Header text="Luis Eduardo Nava Covarrubias" showButton btnText="Go back home"
      />
      <div className={styles.container}>
        <Card
          src={pic1}
          alt="Foto mia"
          heading="Picture 1"
          content="Picture of me on USA "
        />
        <Card
          src={pic2}
          alt="Foto mia"
          heading="Picture 2"
          content="Picture of me with friends"
        />
        <Card
          src={pic3}
          alt="Foto mia"
          heading="Picture 3"
          content="Picture of me with Alexis Vega"
        />
      </div>
    </div>
  );
}
