"use client";
import { UiIconProps } from "@uireact/icons";
import styles from "./header.module.css";
import { Button } from "@/app/sections/";

type HeaderProps = {
  text: string;
  btnText?: string;
  href?: string;
  icon?: UiIconProps["icon"];
};

export const Header = ({ text, btnText, icon, href }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
      {btnText && icon && href && <Button text={btnText} href={href} icon={icon} />}
    </div>
  );
};
