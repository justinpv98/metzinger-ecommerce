import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as styled from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useSelector } from "react-redux";

import {useHeaderFixed} from "../../hooks";

import Icon from "../Icon/Icon";
import Cart from "../Cart/Cart";

import navigationRoutes from "../../constants/navigationRoutes";

function Navigation() {
  const isHeaderFixed = useHeaderFixed();
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    return () => {
      document.body.style = "";
    };
  }, [cartItems.length]);

  function toggle(state, setState) {
    setState(!state);
    state
      ? (document.body.style = "")
      : (document.body.style.overflow = "hidden");
  }

  const toggleCart = () => toggle(cartOpen, setCartOpen);

  const { user } = useSelector((state) => state.auth);

  if (location.pathname.includes("checkout")) {
    return;
  } else {
    return (
      <styled.Header>
        <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
        <styled.ScrollWrapper fixed={isHeaderFixed}>
          <styled.Nav>
            <styled.HeaderLeft>
              <Link to="/">
                <Logo />
              </Link>
              <styled.SkipToMain href='#main'>Skip To Main</styled.SkipToMain>
              <nav>
                <styled.NavList>
                  {navigationRoutes.map((route) => (
                    <styled.NavItem key={route.name}>
                      <styled.NavLink to={route.url}>
                        {route.name}
                      </styled.NavLink>
                    </styled.NavItem>
                  ))}
                </styled.NavList>
              </nav>
            </styled.HeaderLeft>
            <div>
              <styled.IconLink
                to={user ? "/account" : "login"}
                aria-label="to wishlist"
              >
                <Icon icon="heartOutline" size="20" />
              </styled.IconLink>
              <styled.IconLink
                to={user ? "/account" : "login"}
                aria-label="to account page"
              >
                <Icon icon="user" size="20" />
              </styled.IconLink>
              <styled.CartStatus role="status">Shopping cart - {cartItems.length} items</styled.CartStatus>
              <styled.CartButton
                numberOfItems={cartItems.length}
                onClick={() => toggle(cartOpen, setCartOpen)}
                aria-expanded={cartOpen}
                aria-controls="cart"
                aria-label="open cart"
              >
                <Icon icon="cart" size="20" />
              </styled.CartButton>
            </div>
          </styled.Nav>
        </styled.ScrollWrapper>
      </styled.Header>
    );
  }
}

export default Navigation;
