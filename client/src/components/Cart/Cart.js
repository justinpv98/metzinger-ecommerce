import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./Cart.styles";

import { useSelector } from "react-redux";

import FocusTrap from "focus-trap-react";

import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

function Cart({ cartOpen, toggleCart }) {
  const { cart, cartItems } = useSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();

  function renderCartContent() {
    if (cart && cartItems.length > 0) {
      return (
        <Fragment>
          <styled.CartItemContainer>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </styled.CartItemContainer>
          <styled.Pricing>
            <p>Subtotal</p>
            <p>
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
          </styled.Pricing>
        </Fragment>
      );
    } else if (cart && cartItems.length === 0) {
      return <styled.Reminder>Add items to your cart</styled.Reminder>;
    } else {
      return <styled.Reminder>Login to access your cart</styled.Reminder>;
    }
  }

  return (
    <FocusTrap active={cartOpen}>
      <span>
        <styled.Overlay
          onClick={() => toggleCart()}
          cartOpen={cartOpen}
          data-testid="overlay"
        />
        <styled.CartContainer cartOpen={cartOpen} id="cart">
          <Button variant="transparent" icon="x" onClick={() => toggleCart()} />
          <styled.Title>Shopping Cart</styled.Title>
          <p>
            You have{" "}
            <styled.TotalQuantity>
              {cart ? cartItems.length : "0"}
            </styled.TotalQuantity>{" "}
            items in your shopping cart
          </p>
          {renderCartContent()}
          <styled.CheckoutContainer cartOpen={cartOpen}>
            {!cart ? (
              <styled.LinkButton to="/Login" onClick={() => toggleCart()}>
                Login
              </styled.LinkButton>
            ) : (
              <styled.LinkButton
                to="/checkout"
                onClick={(e) => {
                  cartItems.length === 0 && e.preventDefault()
                  toggleCart();
                }}
              >
                Checkout
              </styled.LinkButton>
            )}
          </styled.CheckoutContainer>
        </styled.CartContainer>
      </span>
    </FocusTrap>
  );
}

export default Cart;
