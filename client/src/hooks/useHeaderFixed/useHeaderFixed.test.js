import { renderHook } from "@testing-library/react-hooks";
import { MemoryRouter } from "react-router-dom";
import useHeaderFixed from "./useHeaderFixed";

window.scrollTo = jest.fn();
const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("useHeaderFixed", () => {
  it("should return false by default", () => {
    const { result } = renderHook(() => useHeaderFixed(), { wrapper });
    expect(result.current).toBe(false);
  });

  it("should return true if the location pathname is not /", () => {
    const wrapper = ({ children }) => (
      <MemoryRouter initialEntries={["/test"]}>{children}</MemoryRouter>
    );
    const { result } = renderHook(() => useHeaderFixed(), { wrapper });
    expect(result.current).toBe(true);
  });

});
