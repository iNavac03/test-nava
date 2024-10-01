import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../sections";


type FormElement = HTMLInputElement | HTMLTextAreaElement;

describe("Form", () => {
  it("renders the form labels correctly", () => {
    render(<Form />);

    const nameLabel = screen.getByText(/Name/i);
    const emailLabel = screen.getByText(/Email/i);
    const messageLabel = screen.getByText(/Message/i);

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  it("renders the form imputs correctly", () => {
    render(<Form />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const messageInput = screen.getByRole("textbox", { name: /message/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  it("allows user to change input values", () => {
    render(<Form />);

    const nameInput: FormElement = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput: FormElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    const messageInput: FormElement = screen.getByRole("textbox", {
      name: /message/i,
    });
    fireEvent.change(nameInput, { target: { value: "Luis Nava" } });
    fireEvent.change(emailInput, { target: { value: "lnava6@ucol.mx" } });
    fireEvent.change(messageInput, { target: { value: "Hello" } });

    expect(nameInput.value).toBe("Luis Nava");
    expect(emailInput.value).toBe("lnava6@ucol.mx");
    expect(messageInput.value).toBe("Hello");
  });

  it("shows error messages when fields are left empty", () => {
    render(<Form />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    const nameError = screen.getByText(/name is required/i);
    const emailError = screen.getByText(/email is required/i);
    const messageError = screen.getByText(/message is required/i);

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(messageError).toBeInTheDocument();
  });

  it("shows error message when email is not valid", () => {
    render(<Form />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    const emailInput: FormElement = screen.getByRole("textbox", {
      name: /email/i,
    });

    fireEvent.change(emailInput, { target: { value: "lnava6" } });
    fireEvent.click(submitButton);

    const emailError = screen.getByText(/the mail is not valid/i);

    expect(emailError).toBeInTheDocument();
  });
});
