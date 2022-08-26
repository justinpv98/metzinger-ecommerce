import { cleanup, render, screen, waitFor } from "../../../../utils/testUtils";
import Hero from "./Hero";

afterEach(cleanup);

jest.setTimeout(30000);

describe("Hero", () => {
  it("should be able to switch between slides", async () => {
    render(<Hero />);
    //implementation matters here as it relies on an outide dependency
    const firstSlide =
      screen.getByRole("img").parentElement.parentElement.parentElement
        .parentElement;

    expect(firstSlide).toHaveAttribute("aria-hidden", "false");

    await waitFor(() => {
      new Promise((r) => setTimeout(r, 8000));
      const secondSlide =
        screen.getByRole("img").parentElement.parentElement.parentElement
          .parentElement;
      expect(secondSlide).toHaveAttribute("aria-hidden", "false");
    });
  });
});
