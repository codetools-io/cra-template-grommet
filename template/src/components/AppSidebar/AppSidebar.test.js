import AppSidebar from "./AppSidebar";
import React from "react";
import { render } from "@testing-library/react";

test("can render", () => {
  const { container } = render(
    <AppSidebar>
      <p>Sidebar</p>
    </AppSidebar>
  );

  expect(container).toMatchSnapshot();
});

test("can show", () => {
  const { container } = render(
    <AppSidebar showSidebar={true}>
      <p>Sidebar shown</p>
    </AppSidebar>
  );

  expect(container).toMatchSnapshot();
});

test("can hide", () => {
  const { container } = render(
    <AppSidebar showSidebar={false}>
      <p>Sidebar not shown</p>
    </AppSidebar>
  );

  expect(container).toMatchSnapshot();
});

test("can show small", () => {
  const { baseElement } = render(
    <AppSidebar size="small" showSidebar={true}>
      <p>Small sidebar shown</p>
    </AppSidebar>
  );

  expect(baseElement).toMatchSnapshot();
});

test("can show large", () => {
  const { container } = render(
    <AppSidebar size="large" showSidebar={true}>
      <p>Large sidebar shown</p>
    </AppSidebar>
  );

  expect(container).toMatchSnapshot();
});
