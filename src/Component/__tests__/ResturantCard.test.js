import ResturantCard from "../ResturantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { WithOffer } from "../ResturantCard";

it("should render Resturant component with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  // console.log(name);
  expect(name).toBeInTheDocument();
});
