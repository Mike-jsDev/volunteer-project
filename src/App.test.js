import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const mainTitle = screen.getByText(/Experience is/i);
  expect(mainTitle).toBeInTheDocument();
});
