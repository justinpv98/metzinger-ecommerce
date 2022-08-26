import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Tab from "./Tab";

afterEach(cleanup);

describe("Tab", () => {
  it("should call its onClick event if the tab is clicked", () => {
    const mockOnClick = jest.fn();
    render(<Tab activeTab={"test"} label="test" onClick={mockOnClick} />);
    const tab = screen.getByRole("presentation");
    fireEvent.click(tab);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
