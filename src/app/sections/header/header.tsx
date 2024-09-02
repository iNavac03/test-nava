"use client";
import styles from './header.module.css'
import Link from "next/link";

type HeaderProps = {
  text: string;
  showButton?: boolean;
}

export const Header = ({text, showButton} : HeaderProps) => {
  return (
    <div className={styles.container}>
        <h1>{text}</h1>
        {showButton && (
        <Link className={styles.button} href='/'>
          Go back
        </Link>
      )}
    </div>
  );
};
