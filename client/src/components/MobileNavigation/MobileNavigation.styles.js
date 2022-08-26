import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const HeaderRight = styled.div`
  button {
    padding: 0.5rem;
  }
`;

export const ScrollWrapper = styled.div`
  position: ${({ fixed, navOpen }) =>
    fixed === true || navOpen === true ? "fixed" : "initial"};
  top: 0;
  background: ${({ fixed, navOpen }) =>
    fixed === true || navOpen === true ? "#000" : "transparent"};
  width: 100%;

  &:hover {
    background: #000;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.125rem 0.5rem;
  text-transform: uppercase;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0.125rem 1rem;
  }

  button {
    padding: 0.5rem;
  }

  ul {
  }
`;

export const CartButton = styled(TransparentButton)`
position: relative;

&::before {
  content: "${({numberOfItems}) => (numberOfItems > 0 ? `${numberOfItems}` : "")}";
  position: absolute;
  background-color: var(--color-accent);
  border-radius: 50%;
  display: ${({numberOfItems}) => (numberOfItems > 0 ? `flex` : "none")};
  justify-content: center;
  align-items: center;
  font-size: var(--fs-200);
  padding: .375rem;
  width: 1px;
  height: 1px;
  top: 1rem;
  right: .25rem;

}
`

export const NavList = styled.ul`
  visibility: ${({ navOpen }) => (navOpen === true ? "initial" : "hidden")};
  position: fixed;
  z-index: 5;
  list-style-type: none;
  height: calc(100vh - 44px);
  width: 90%;
  bottom: 0;
  background: var(--color-background);
  color: var(--color-text);
  left: ${({ navOpen }) => (navOpen === true ? "0" : "-100vh")};
  transition: ${({ navOpen }) =>
    navOpen === true
      ? "visibility 0s ease-out 0s, left 200ms"
      : "visibility 0s ease-in 300ms, left 200ms"};

  @media (min-width: 375px) {
    width: 352px;
  }
`;

export const NavItem = styled.li`
  border-bottom: 1px solid var(--color-neutral-200);
`;

export const LogoContainer = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
`

export const SideNavHeader = styled.h4`
  margin: 1rem 0;
  font-size: var(--fs-400);
`;
export const SideNavItem = styled.li`
  border-bottom: 0;
  padding: 0 1rem 0;
  font-size: var(--fs-200);

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: inline-block;
  font-weight: 500;
  font-size: var(--fs-300);
  width: 100%;
  padding: 1rem 1rem;
`;

export const Overlay = styled.div`
  display: ${({ navOpen }) => (navOpen === true ? "block" : "none")};
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  z-index: -1;
`;
