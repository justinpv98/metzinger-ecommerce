import React, { useState, useEffect } from "react";
import * as styled from "./CheckoutDisplay.styles";

import { useSelector } from "react-redux";

import CartItem from "../../../../components/CartItem/CartItem";

function CheckoutDisplay() {
  const { cartItems } = useSelector((state) => state.cart);

  const [subtotal, setSubtotal] = useState(
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const tax = subtotal * .095

  useEffect(() => {
    setSubtotal(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
  })

  return (
    <styled.CheckoutContainer>
      <styled.Title>My Cart</styled.Title>
      <styled.Prices>
        <styled.ListItem>
          <span>Subtotal</span>
          <span> ${subtotal.toFixed(2)}</span>
        </styled.ListItem>
        <styled.ListItem>
          <span>Shipping</span>
          <span>$0.00</span>
        </styled.ListItem>
        <styled.ListItem>
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </styled.ListItem>
        <styled.Total>
          <span>Total</span>
          <span>${(subtotal + tax).toFixed(2)}</span>
        </styled.Total>
      </styled.Prices>
      <styled.CartItemsContainer>
      {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
      </styled.CartItemsContainer>
    </styled.CheckoutContainer>
  );
}

export default CheckoutDisplay;
