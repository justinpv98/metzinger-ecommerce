import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as styled from "./MobileNavigation.styles";
import { ReactComponent as Logo } from "../../assets/logoSm.svg";
import { useSelector } from "react-redux";

import {useHeaderFixed} from "../../hooks";

import Cart from "../Cart/Cart";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import navigationRoutes from "../../constants/navigationRoutes";

function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const isHeaderFixed = useHeaderFixed();
  const location = useLocation();

  function toggle(state, setState) {
    setState(!state);
    state
      ? (document.body.style = "")
      : (document.body.style.overflow = "hidden");
  }

  const toggleCart = () => toggle(cartOpen, setCartOpen);

  const { user } = useSelector((state) => state.auth);

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    return () => {
      document.body.style = "";
    };
  }, []);

  if (location.pathname.includes("checkout")) {
    return;
  } else {
    return (
      <styled.Header>
        <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
        <styled.ScrollWrapper fixed={isHeaderFixed} navOpen={navOpen}>
          <styled.Nav>
            <Button
              variant="transparent"
              icon={navOpen ? "x" : "hamburger"}
              iconSize="20"
              onClick={() => {
                toggle(navOpen, setNavOpen);
              }}
              aria-expanded={navOpen}
              aria-controls="nav"
              aria-label={navOpen ? "close nav" : "open nav"}
            />
            <styled.LogoContainer>
              <Link to="/">
                <Logo />
              </Link>
            </styled.LogoContainer>
            <styled.HeaderRight>
              <styled.CartButton
                numberOfItems={cartItems.length}
                onClick={() => toggle(cartOpen, setCartOpen)}
                aria-expanded={cartOpen}
                aria-controls="cart"
                aria-label="open cart"
              >
                <Icon icon="cart" size="20" />
              </styled.CartButton>
            </styled.HeaderRight>
            <styled.NavList navOpen={navOpen} id="nav">
              {navigationRoutes.map((route) => (
                <styled.NavItem key={route.name}>
                  <styled.NavLink to={route.url}>{route.name}</styled.NavLink>
                </styled.NavItem>
              ))}
              <styled.SideNavItem>
                <styled.SideNavHeader>Account</styled.SideNavHeader>
                <styled.NavLink to={user ? "/account" : "login"}>
                  <span>Sign Up / Login</span>
                </styled.NavLink>
                <styled.NavLink to={user ? "/account" : "login"}>
                  <span>Wishlist</span>
                </styled.NavLink>
              </styled.SideNavItem>
            </styled.NavList>
          </styled.Nav>
          <styled.Overlay
            onClick={() => toggle(navOpen, setNavOpen)}
            navOpen={navOpen}
            data-testid="overlay"
          ></styled.Overlay>
        </styled.ScrollWrapper>
      </styled.Header>
    );
  }
}

export default MobileNavigation;
