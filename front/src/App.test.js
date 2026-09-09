import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the homepage headline immediately", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /curious about perception, robotics, and applied ai/i,
  });
  expect(heading).toBeInTheDocument();
});
