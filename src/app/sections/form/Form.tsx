"use client";
import styles from "./form.module.css";
import { UiLabel } from "@uireact/text";
import { UiIcon } from "@uireact/icons";
import { useState } from "react";
import { UiValidator, UiValidatorErrors } from "@uireact/validator";
import { useNotifications } from "@uireact/notifications";

const validator = new UiValidator();

const schema = {
  name: validator.ruler().isRequired("Name is required"),
  email: validator
    .ruler()
    .isRequired("Email is required")
    .type("email", "The mail is not valid"),
  message: validator.ruler().isRequired("Message is required"),
};

type Contact = {
  name: string;
  email: string;
  message: string;
};

export const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { showNotification } = useNotifications();

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
      setErrors(result.errors);
      return;
    }
    await sendMail(newContact);
  }

  const sendMail = async (contact: Contact) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      showNotification({
        icon: "X",
        title: "Error",
        message: "An error ocurred, try again."
      });
    } else {
      setContactInfo({
        name: "",
        email: "",
        message: "",
      });
      setErrors({})
      showNotification({
        icon: "Check",
        title: "Success!",
        message: "We got your information and an email was sent to your account."
      });
    }
  };

  return (
    <>
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
        {errors?.email?.map((error, index) => (
          <span key={`Error-message-${index}`} className={styles.error}>{error.message} </span>
        ))}
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
    </>
  );
};
