import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "../sections";

const mockShowNotification = jest.fn();

jest.mock('@uireact/notifications', () => ({
  useNotifications: () => ({
    showNotification: mockShowNotification,
  }),
}));

// Simular el fetch globalmente
global.fetch = jest.fn();

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

  it("submits the form when all fields are valid and get success notification", async () => {
    // Simular una respuesta exitosa del fetch (estado 200)
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        status: 200,
      })
    );

    render(<Form />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const messageInput = screen.getByRole("textbox", { name: /message/i });

    fireEvent.change(nameInput, { target: { value: "Luis Nava" } });
    fireEvent.change(emailInput, { target: { value: "lnava6@ucol.mx" } });
    fireEvent.change(messageInput, { target: { value: "Hello" } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(mockShowNotification).toHaveBeenCalledWith({
      icon: 'Check',
      title: 'Success!',
      message: 'We got your information and an email was sent to your account.',
    });
  });
});
