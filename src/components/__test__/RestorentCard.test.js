import RestorentCard from "../RestorentCard"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"

it("should render restorent card component", ()=>{
    render(
        <RestorentCard resdata = {MOCK_DATA}/>
    );

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
}) 