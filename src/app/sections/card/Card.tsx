"use client";
import styles from "./photocard.module.css";
import { UiCard } from "@uireact/card";
import Image from "next/image";
import { UiSpacing } from "@uireact/foundation";
import { UiHeading, UiText } from "@uireact/text";
import { StaticImageData } from "next/image";

type PhotoCardProps = {
  src: StaticImageData;
  alt: string;
  heading: string;
  content: string;
};

export const Card = ({ src, alt, heading, content }: PhotoCardProps) => {
  return (
    <div className={styles.container}>
      <UiCard>
        <Image className={styles.image} src={src} alt={alt} priority/>
        <UiSpacing padding={{ all: "five" }}>
          <UiHeading>{heading}</UiHeading>
          <UiText margin={{ top : 'four' }}>{content}</UiText>
        </UiSpacing>
      </UiCard>
    </div>
  );
};
