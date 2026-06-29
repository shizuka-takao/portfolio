import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio name", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /curious about how things work\. careful about how they are built\./i,
  });
  expect(heading).toBeInTheDocument();
});
