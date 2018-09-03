import React from "react";
import { TestApp, mockData } from "config/testing";
import "jest-dom/extend-expect";
import {
  render,
  cleanup,
  waitForElement,
  wait,
  fireEvent,
  getAllByTestId
} from "react-testing-library";
import Auth from "pages/Auth";

describe("<Auth />", () => {
  afterEach(cleanup);

  test("Not logged in", async () => {
    const mocks = mockData.USER({ data: { user: null } });
    const { getByText, debug, getByPlaceholderText, queryByText } = render(
      <TestApp mocks={mocks}>
        <Auth />
      </TestApp>
    );

    // await waitForElement(() => queryByText("Log In"));

    // expect(getByText("Home")).toBeVisible();
    // expect(getByText("Log in")).toBeVisible();
    // expect(getByText("Sign Up")).toBeVisible();
  });

  // describe("Logged in", () => {
  //     let loggedInAuth;
  //     beforeEach(() => {
  //         const mocks = mockData.USER({});
  //         loggedInAuth = render(
  //             <TestApp mocks={mocks}>
  //                 <Auth />
  //             </TestApp>
  //         );
  //     });
  // });
});
