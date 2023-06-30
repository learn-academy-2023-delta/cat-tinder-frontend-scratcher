import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Meet the Cats"))
    expect(screen.getByText("Meet the Cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("Add a New Cat"))
    expect(screen.getByText("Add a New Cat")).toBeInTheDocument()
  })
})

