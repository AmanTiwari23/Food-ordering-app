import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load submit button inside contact", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("should load Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});


test("should load name inside contact component", ()=>{
    render(<Contact/>); 

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
})
it("should loadtwo input box in contact component", ()=>{
    render(<Contact/>); 

    const inputboxes= screen.getAllByRole("textbox");

    expect(inputboxes.length).toBe(2); 
})

