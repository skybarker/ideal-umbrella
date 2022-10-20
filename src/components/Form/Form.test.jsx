import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("renders with the correct number of inputs", () => {
    const fields = ["email", "password"];
    render(<Form label={fields} />);

    const form = screen.getAllByRole(myLabel);

    expect(input).toBeInTheDocument();
  });
});
