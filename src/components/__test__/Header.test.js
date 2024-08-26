import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../Utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });

  expect(button).toBeInTheDocument();
});

it("should render header component with a cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart- (0 Items)");

  expect(cartItem).toBeInTheDocument();
});

it("should render header component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart =screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("should be render heder component with login logout", ()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn =screen.getByRole("button", {name:"Login"});
  
  fireEvent.click(loginBtn)

  const logoutbtn = screen.getByRole("button",{name:"Logout"});
  expect(logoutbtn).toBeInTheDocument();

})