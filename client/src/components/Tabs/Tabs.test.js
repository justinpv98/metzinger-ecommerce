import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./Tabs";

afterEach(cleanup);

describe("Tabs", () => {
  it("should render children as tabs", () => {
    render(
      <Tabs>
        <div label="test1">test</div>
        <div label="test2">test123</div>
      </Tabs>
    );
    const tabs = screen.getAllByRole("presentation");
    expect(tabs.length).toBe(2)
  });
  

  it("should render the content of the first tab by default", () => {
    render(
        <Tabs>
          <div label="test1">test</div>
          <div label="test2">test123</div>
        </Tabs>
      );
      const firstTabContent = screen.getByText("test")
      expect(firstTabContent).toBeInTheDocument()

  })

  it("should render the content of the active tab only", () => {
    render(
        <Tabs>
          <div label="test1"><p>lab</p></div>
          <div label="test2"><p>test123</p></div>
        </Tabs>
      );
      const secondTab = screen.getAllByRole("presentation")[1]
      const firstTabContent = screen.getByText("lab")
      fireEvent.click(secondTab)
      const secondTabContent = screen.getByText("test123")
      expect(firstTabContent).not.toBeInTheDocument()
      expect(secondTabContent).toBeInTheDocument()
})
  
});
