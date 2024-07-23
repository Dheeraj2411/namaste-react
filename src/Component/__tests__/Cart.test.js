import RestaurantMenu from "../RestaurentMenu";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../Utlis/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should item Add to Cart", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const accordianHeader = screen.getByText(/Recommended/);
});
