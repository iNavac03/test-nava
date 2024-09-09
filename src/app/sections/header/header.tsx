"use client";
import styles from './header.module.css'
import {Button} from '@/app/sections/'

type HeaderProps = {
  text: string;
  showButton?: boolean;
}

export const Header = ({text, showButton} : HeaderProps) => {
  return (
    <div className={styles.container}>
        <h1>{text}</h1>
        {showButton && (
        <Button
        text='Go back home'
        href='/'
        icon='AngleSmallLeft'
        />
      )}
    </div>
  );
};
