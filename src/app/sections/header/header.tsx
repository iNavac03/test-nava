"use client";
import styles from './header.module.css'
import {Button} from '@/app/sections/'

type HeaderProps = {
  text: string 
  showButton?: boolean;
  btnText?:string
}

export const Header = ({text, showButton, btnText} : HeaderProps) => {
  return (
    <div className={styles.container}>
        <h1>{text}</h1>
        {showButton && (
        <Button
        text={btnText}
        href='/'
        icon='AngleSmallLeft'
        />
      )}
    </div>
  );
};
