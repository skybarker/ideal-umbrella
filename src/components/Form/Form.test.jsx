import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("renders with the correct number of inputs", () => {
    const fields = [
      { label: "email", type: "email" },
      { label: "password", type: "password" },
    ];
    render(<Form label={fields} />);

    const emailInput = screen.getByLabelText("email");
    const passwordInput = screen.getByLabelText("password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
