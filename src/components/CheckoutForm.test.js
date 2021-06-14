import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/Checkout Form/i);

  expect(header).toBeVisible();
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const buttonCheckOut = screen.getByRole("button");
  userEvent.click(buttonCheckOut);
  const success = screen.getByTestId("successMessage");

  expect(success).toBeInTheDocument();
});
