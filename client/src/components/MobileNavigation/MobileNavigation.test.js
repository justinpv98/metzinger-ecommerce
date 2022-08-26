import { fireEvent, render, screen, cleanup } from "../../utils/testUtils";
import navigationRoutes from "../../constants/navigationRoutes";

import MobileNavigation from "./MobileNavigation";

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

describe("MobileNavigation", () => {
  it("should open its navigation when the hamburger button is clicked", () => {
    render(<MobileNavigation />);
    const hamburgerButton = screen.getByTestId("hamburger");
    fireEvent.click(hamburgerButton);
    const navList = screen.queryByRole("list");
    expect(navList).toBeVisible();
  });

  it("should close its navigation when it is open and the close button is clicked", () => {
    render(<MobileNavigation />);
    const hamburgerButton = screen.getByTestId("hamburger");
    fireEvent.click(hamburgerButton);
    const closeButton = screen.queryByTestId("x");
    const navList = screen.queryByRole("list");
    fireEvent.click(closeButton);
    expect(navList).not.toBeVisible();
  });

  it("should close its navigation when it is open and the outside overlay is clicked", () => {
    render(<MobileNavigation />);
    const hamburgerButton = screen.getByTestId("hamburger");
    fireEvent.click(hamburgerButton);
    const overlay = screen.queryByTestId("overlay");
    const navList = screen.queryByRole("list");
    fireEvent.click(overlay);
    expect(navList).not.toBeVisible();
  });

  it("should render all the navigation routes", () => {
    render(<MobileNavigation />);
    const hamburgerButton = screen.getByTestId("hamburger");
    fireEvent.click(hamburgerButton);
    for (let i = 0; i < navigationRoutes.length - 1; i++) {
      const category = navigationRoutes[i].name;
      const categoryLink = screen.getByText(category);
      expect(categoryLink).toBeInTheDocument();
    }
  });
});
