import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

beforeEach(() => {
  render(<Form />);
});

test("test 2 + 2", () => {
  expect(2 + 2).toBe(4);
});

test("should be in the document", () => {
  const divElem = screen.getByTestId("form");
  expect(divElem).toBeInTheDocument;
});

test("should has empty value on start", () => {
  //select the element to test
  const emailInputElem = screen.getByRole("textbox");
  const passwordInputElem = screen.getByLabelText("Password");
  const confirmPasswordInputElem = screen.getByLabelText(/confirm password/i);
  //test
  expect(emailInputElem.value).toBe("");
  expect(passwordInputElem.value).toBe("");
  expect(confirmPasswordInputElem.value).toBe("");
});

//check and allowing users to type into input
test("should be able to type into the input box", () => {
  const emailInputElem = screen.getByRole("textbox");
  const passwordInputElem = screen.getByLabelText("Password");
  const confirmPasswordInputElem = screen.getByLabelText(/confirm password/i);

  userEvent.type(emailInputElem, "giphty@email.com");
  userEvent.type(passwordInputElem, "password");
  userEvent.type(confirmPasswordInputElem, "password");
  expect(emailInputElem.value).toBe("giphty@email.com");
  expect(passwordInputElem.value).toBe("password");
  expect(confirmPasswordInputElem.value).toBe(passwordInputElem.value);
});

//confirm password typed by user
