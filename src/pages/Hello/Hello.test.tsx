import { describe } from "@jest/globals";
import { render } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello World test", () => {
  render(<Hello />);
});
