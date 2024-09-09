"use client";
import styles from "./form.module.css";
import { UiLabel } from "@uireact/text";
import { UiIcon } from "@uireact/icons";
import { useState } from "react";

export const Form = () => {

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Contact form</h1>
      <UiLabel className={styles.label}>Name</UiLabel>
      <input
        className={styles.input}
        type="text"
        placeholder="Type your fullname"
      ></input>

      <UiLabel className={styles.label}>Email</UiLabel>
      <input
        className={styles.input}
        type="text"
        placeholder="Type your email"
      ></input>

      <UiLabel className={styles.label}>Message</UiLabel>
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        maxLength={200}
        placeholder="Type your message"
      ></textarea>
      <button className={styles.btnSubmit} type="submit">
        <UiIcon className={styles.icon} icon="Mail" category="primary" />
        Submit
      </button>
    </form>
  );
};

function handleSubmit() {}
