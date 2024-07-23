import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should body component length has been render or not", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  console.log(MOCK_DATA);
});
// it("should body component length has been render or not", () => {
//   act(async() =>
//      await render(
//        <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );
//   // console.log(MOCK_DATA);
// });
