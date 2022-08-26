import { fireEvent, render, screen, cleanup } from "../../utils/testUtils";
import navigationRoutes from "../../constants/navigationRoutes";

import Navigation from "./Navigation";

jest.mock("@n8tb1t/use-scroll-position", () => ({
  ...jest.requireActual("@n8tb1t/use-scroll-position"),
  useScrollPosition: jest
    .fn()
    .mockImplementationOnce((cb) => cb({ currPos: { y: 500 } })),
}));

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

describe("Navigation", () => {
  it("should render all the navigation routes", () => {
    render(<Navigation />);
    for (let i = 0; i < navigationRoutes.length - 1; i++) {
      const category = navigationRoutes[i].name;
      const categoryLink = screen.getByText(category);
      expect(categoryLink).toBeInTheDocument();
    }
  });
});
