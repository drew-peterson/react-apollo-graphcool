import React from "react";
import "jest-dom/extend-expect";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "react-testing-library";
import User from "pages/User";

import { TestApp, mockData } from "config/testing";

describe("<User />", () => {
  afterEach(cleanup);
  let UserComponent;

  beforeEach(() => {
    const mocks = mockData.USER({});
    UserComponent = render(
      <TestApp mocks={mocks}>
        <User />
      </TestApp>
    );
  });

  test("renders home with no user", async () => {
    const { getByText, getByTestId } = UserComponent;
    await waitForElement(() => getByTestId("user-page"));
    expect(getByText("Hello drew@test.com")).toHaveTextContent(
      "Hello drew@test.com"
    );
  });
});
