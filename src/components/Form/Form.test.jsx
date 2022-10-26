import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("renders with the correct number of inputs", () => {
    const fields = [
      { label: "email", type: "email" },
      { label: "password", type: "password" },
    ];
    const button = {
      txt: "Login",
      type: "submit",
    };

    render(<Form fields={fields} button={button} />);

    const emailInput = screen.getByLabelText("email");
    const passwordInput = screen.getByLabelText("password");
    const buttonElement = screen.getByRole("button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
