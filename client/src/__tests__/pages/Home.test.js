import React from "react";
import "jest-dom/extend-expect";
import { render, cleanup, fireEvent } from "react-testing-library";
import { TestApp } from "config/testing";

import Home from "pages/home";

describe("<Home />", () => {
  afterEach(cleanup);

  let HomeComponent;

  beforeEach(() => {
    HomeComponent = render(
      <TestApp>
        <Home />
      </TestApp>
    );
  });
  test("Renders home and h2", async () => {
    const { getByText } = HomeComponent;
    expect(getByText("Home")).toHaveTextContent("Home");
  });

  test("clicking button triggers error", async () => {
    const { getByText } = HomeComponent;
    fireEvent.click(getByText("Error"));
    expect(getByText("secondary error message")).toHaveTextContent(
      "secondary error message"
    );
  });
});
