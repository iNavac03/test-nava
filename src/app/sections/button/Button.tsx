"use client";
import styles from "./button.module.css";
import Link from "next/link";
import { UiIcon, UiIconProps } from "@uireact/icons";

type ButtonProps = {
  text: string;
  href: string;
  icon: UiIconProps['icon'];
};

export const Button = ({ text, href, icon }: ButtonProps) => {
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
