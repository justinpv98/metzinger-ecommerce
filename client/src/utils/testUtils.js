import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../themes/theme";

function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
}

function renderWithWrapper(ui, options) {
  render(ui, { wrapper: Wrapper, options });
}

export * from "@testing-library/react";

export { renderWithWrapper as render };
