"use client";
import styles from "./menu.module.css";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <Link href="/about" className={styles.link}>
        <h2 className={styles.heading}>About</h2>
      </Link>
      <Link href="https://maps.app.goo.gl/L89AGT1Yxp1ev2id8" target='_blank' className={styles.link}>
        <h2 className={styles.heading}>Address</h2>
      </Link>
      <Link href="/contact" className={styles.link}>
        <h2 className={styles.heading}>Contact</h2>
      </Link>
    </div>
  );
};
