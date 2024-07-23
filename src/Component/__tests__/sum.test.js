import { Sum } from "../Sum";

test("expected the sum of the funtion is 5 ", () => {
  const result = Sum(2, 3);
  expect(result).toBe(5);
});
