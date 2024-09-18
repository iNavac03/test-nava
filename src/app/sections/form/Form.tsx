"use client";
import styles from "./form.module.css";
import { UiLabel } from "@uireact/text";
import { UiIcon } from "@uireact/icons";
import { useState } from "react";
import {
  UiValidator,
  UiValidatorErrors,
  UiValidatorResult,
} from "@uireact/validator";

const validator = new UiValidator();

const schema = {
  name: validator.ruler().isRequired("Name is required"),
  email: validator
    .ruler()
    .isRequired("Email is required")
    .type("email", "The mail is not valid"),
  message: validator.ruler().isRequired("Message is required"),
};

export const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<UiValidatorErrors>();

  const handleChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactInfo({
      ...contactInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, email, message } = contactInfo;

    const newContact = {
      name,
      email,
      message,
    };

    const result = validator.validate(schema, newContact, true);

    if (!result.passed) {
      console.log(result.errors);
      setErrors(result.errors);
      return;
    } else {
      console.log('succeded')
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Contact form</h1>
      <UiLabel className={styles.label}>Name</UiLabel>
      <input
        id="nameInput"
        name="name"
        className={styles.input}
        type="text"
        placeholder="Type your fullname"
        value={contactInfo.name}
        onChange={handleChangeInputs}
      ></input>
      {errors?.name && (
        <span className={styles.error}>{errors?.name?.[0].message} </span>
      )}
      <UiLabel className={styles.label}>Email</UiLabel>
      <input
        id="emailInput"
        name="email"
        className={styles.input}
        type="text"
        placeholder="Type your email"
        value={contactInfo.email}
        onChange={handleChangeInputs}
      ></input>
      {errors?.email?.map((error) => (<span className={styles.error}>{error.message} </span>))}
      <UiLabel className={styles.label}>Message</UiLabel>
      <textarea
        id="messageInput"
        name="message"
        className={`${styles.input} ${styles.textarea}`}
        maxLength={200}
        placeholder="Type your message"
        value={contactInfo.message}
        onChange={handleChangeInputs}
      ></textarea>
      {errors?.message && (
        <span className={styles.error}>{errors?.message?.[0].message} </span>
      )}
      <button className={styles.btnSubmit} type="submit">
        <UiIcon className={styles.icon} icon="Mail" category="primary" />
        Submit
      </button>
    </form>
  );
};
