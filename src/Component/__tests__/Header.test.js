import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utlis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header Component with a login  Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  // const loginButton = screen.getByText("login");
  // expect(loginButton.length).toBeGreaterThan(0);
  expect(loginButton).toBeInTheDocument();
});
it("should lod Header component with a cartButton", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //  we ssign the id in the icon and then get it the icon
  const cartBtn = screen.getByTestId("cartIcon");
  expect(cartBtn).toBeVisible();
});
it("should chnage login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logOut" });
  expect(logoutButton).toBeInTheDocument();
});

it("should chnage the value of btnClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const btnclick = screen.getByTestId("menuIcon");
  fireEvent.click(btnclick);
  const btnclickA = screen.getByTestId("menuIcon");
  expect(btnclickA).toBeVisible;
});
