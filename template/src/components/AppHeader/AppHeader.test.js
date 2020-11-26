import AppHeader from "./AppHeader";
import { render } from "@testing-library/react";

test("can render", () => {
  const { container } = render(
    <AppHeader>
      <p>Header</p>
    </AppHeader>
  );

  expect(container).toMatchSnapshot();
});
