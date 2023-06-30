import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it("displays the 'Made By Padge & Michael' text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const linkElement = screen.getByText("Made By Padge & Michael");

    expect(linkElement).toBeInTheDocument();
  });
});

