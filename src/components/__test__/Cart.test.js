import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("shouls load Restaurant component", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const acordian = screen.getByText("Gifting (14)");
  fireEvent.click(acordian);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);
});

it("shouls load Restaurant component and count of cart items", async () => {
  await act(() =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart/>
      </Provider>
      </BrowserRouter>
    )
  );
  expect(screen.getByText("Cart- (0 Items)")).toBeInTheDocument();

  const acordian = screen.getByText("Gifting (14)");
  fireEvent.click(acordian);

  const addBtn = screen.getAllByRole("button",{name:"Add +"})
  expect(addBtn.length).toBe(14)

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart- (1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart- (2 Items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  const clearcart = screen.getByRole("button",{name:"Clear Cart"});

  fireEvent.click(clearcart);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  expect(screen.getByText("Cart is empty add Items to the cart!"));

});
