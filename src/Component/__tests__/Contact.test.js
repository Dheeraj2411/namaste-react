import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // // });
  // afterAll(() => {
  //   console.log("AfterA ALL");
  // });
  // afterEach(() => {
  //   // console.log("after each");
  // });
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //   assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button in Contact", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    //assertion
    expect(button).toBeInTheDocument();
  });

  it("should load placeHolder in Contact", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  });

  it("should load placeHolder in contact", () => {
    render(<Contact />);
    // Querying
    const input = screen.getByPlaceholderText("write Msg here");
    // assertion/
    expect(input).toBeInTheDocument();
  });

  it("should load the input box", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    // console.log(input.length);
    // assertion
    expect(input.length).toBe(2);
  });

  it("should load the length of input", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    // console.log(inputBox.length);
    expect(inputBox.length).toBeTruthy();
  });
});
