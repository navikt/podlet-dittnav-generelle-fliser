import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import Status from "./status";

describe("tester Status komponenten", () => {
  test("komponenten rendres IKKE uten innhold", () => {
    const { container } = render(<Status />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES med status", () => {
    const status = "ikke registrert som arbeidssøker";
    render(<Status status={status} />);
    expect(screen.getByText(/arbeidssøker/)).toBeInTheDocument();
  });
});
