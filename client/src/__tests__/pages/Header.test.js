import React from "react";
import { TestApp, mockData } from "config/testing";
import "jest-dom/extend-expect";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
  getAllByTestId
} from "react-testing-library";
import Header from "components/navigation/Header";

describe("<Header />", () => {
  afterEach(cleanup);

  test("Not logged in", async () => {
    const mocks = mockData.USER({ data: { user: null } });
    const { getByText, debug } = render(
      <TestApp mocks={mocks}>
        <Header />
      </TestApp>
    );
    await waitForElement(() => getByText("Log in"));

    expect(getByText("Home")).toBeVisible();
    expect(getByText("Log in")).toBeVisible();
    expect(getByText("Sign Up")).toBeVisible();
  });

  describe("Logged in", () => {
    let loggedInHeader;
    beforeEach(() => {
      const mocks = mockData.USER({});
      loggedInHeader = render(
        <TestApp mocks={mocks}>
          <Header />
        </TestApp>
      );
    });
    test("Show user and logout options", async () => {
      const { getByText } = loggedInHeader;
      await waitForElement(() => getByText("User"));

      expect(getByText("Home")).toBeVisible();
      expect(getByText("User")).toBeVisible();
      expect(getByText("Logout")).toBeVisible();
    });

    // test("click logout will redirect to login page", async () => {
    //   const { getByText, debug } = loggedInHeader;

    //   await waitForElement(() => getByText("User"));
    //   fireEvent.click(getByText("Logout"));
    // //   await waitForElement(() => getByText("Log in"));
    // });
  });
});
