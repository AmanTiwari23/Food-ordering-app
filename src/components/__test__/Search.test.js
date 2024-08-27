import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "../mocks/ResListMock";
import { act } from "react";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});


it("shouls render body component with search funcationality", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardbefore = screen.getAllByTestId("resCard");
  expect(cardbefore.length).toBe(20);
  const button = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(button);

  const resCard = screen.getAllByTestId("resCard");

  expect(resCard.length).toBe(1);
});

it("should render top rated restro button", async () => {
  await act(() =>
    render(
      <BrowserRouter>
          <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforeFillter = screen.getAllByTestId("resCard");

  expect(cardsbeforeFillter.length).toBe(20);

  const topRatedbtn= screen.getByRole("button",{name:"Top rated Restorent"});

  fireEvent.click(topRatedbtn);

  const cardsafterFilter = screen.getAllByTestId("resCard");

  expect(cardsafterFilter.length).toBe(8);

 });
