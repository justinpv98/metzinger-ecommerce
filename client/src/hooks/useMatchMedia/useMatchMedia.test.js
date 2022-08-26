import { renderHook, act } from "@testing-library/react-hooks";
import useMatchMedia from "./useMatchMedia";
import matchMediaPolyfill from "mq-polyfill";

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event("resize"));
  };
});

describe("useMatchMedia", () => {
  it("should return false by default", () => {
    const { result } = renderHook(() => useMatchMedia("(min-width: 1100px)"));

    expect(result.current).toBe(false);
  });


  it(`should return true if media query matches condition`, () => {
    act(() => {
      window.resizeTo(1600, 500);
    });

    const { result } = renderHook(() => useMatchMedia("(min-width: 1100px)"));

    expect(result.current).toBe(true);
  });

  it("should return false if media query does not match condition", () => {
    act(() => {
      window.resizeTo(400, 500);
    });

    const { result } = renderHook(() => useMatchMedia("(min-width: 1100px)"));

    expect(result.current).toBe(false);
  });
});
