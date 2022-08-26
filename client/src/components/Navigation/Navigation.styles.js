import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { TransparentButton } from "../Button/Button.styles";

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  color: var(--color-background);
  font-size: var(--fs-300);
`;

export const ScrollWrapper = styled.div`
  position: ${({ fixed }) => (fixed === true ? "fixed" : "initial")};
  top: 0;
  background: ${({ fixed }) => (fixed === true ? "#000" : "transparent")};
  width: 100%;
  transition: background ease-in-out 300ms;

  &:hover {
    background: #000;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: auto;
  padding: 0.125rem 2.5rem;
  text-transform: uppercase;
  button {
    padding: 0.5rem;
    }
  }
`;

export const CartStatus = styled.p`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export const CartButton = styled(TransparentButton)`
  position: relative;

  &::before {
    content: "${({ numberOfItems }) =>
      numberOfItems > 0 ? `${numberOfItems}` : ""}";
    position: absolute;
    background-color: var(--color-accent);
    border-radius: 50%;
    display: ${({ numberOfItems }) => (numberOfItems > 0 ? `flex` : "none")};
    justify-content: center;
    align-items: center;
    font-size: var(--fs-200);
    padding: 0.375rem;
    width: 1px;
    height: 1px;
    top: 1rem;
    right: 0.25rem;
  }
`;

export const NavList = styled.ul`
  display: inline-block;
  margin-left: 1rem;
`;
export const NavItem = styled.li`
  display: inline-block;
  margin: 1rem;
  font-weight: 500;
`;
export const NavLink = styled(Link)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.075rem;
    left: 0;
    bottom: -0.25rem;
    transition: width 0.2s ease-in-out;
    visibility: hidden;
    background-color: var(--color-background);

    @media (prefers-reduced-motion) {
      transition: none;
    }
  }

  &:hover,
  &:focus {
    font-weight: 700;
  }

  &:hover::after {
    width: 100%;
    visibility: visible;
  }
`;

export const IconLink = styled(Link)`
  padding: 0.5rem;
  font-size: var(--fs-300);
  text-transform: uppercase;
  font-weight: 600;
`;

export const SkipToMain = styled.a`
position: absolute;
top: 0;
left: 2rem;
padding: .5rem;
background-color: white;
font-weight: 600;
border: 2px black;
color: black;
opacity: 0;

&:focus-within {
  opacity: 1;
}
`