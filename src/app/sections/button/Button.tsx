"use client";
import styles from "./button.module.css";
import Link from "next/link";
import { UiIcon } from "@uireact/icons";

type ButtonProps = {
  text: string;
  href: string;
  icon?: string;
};

export const Button = ({ text, href, icon }: ButtonProps) => {
  const iconText = {icon}
  return (
    <>
      <Link className={styles.button} href={href}>
      <UiIcon
      icon={icon}
      category="primary"
      />
        {text}
      </Link>
    </>
  );
};
