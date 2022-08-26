import React, { useState, useEffect } from "react";
import * as styled from "./CartItem.styles";
import { imageHostURL } from "../../config/config";

import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../features/cart/cartSlice";

import { NumberInput } from "../FormElements/FormElements";

import toCamelCase from "../../utils/toCamelCase";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(item.quantity);
  const { color, size } = item.attributes;

  useEffect(() => {
    if (!item.id) {
      return;
    } else {
      dispatch(updateCartItem({ id: item.id, quantity }));
    }
  }, [quantity, dispatch, item.id, item.quantity]);

  function onChange(e) {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  }

  function onClickRemove() {
    dispatch(removeCartItem(item.id));
  }

  if (item) {
    const images = item.image_url.split(",");
    const image = `${imageHostURL}/${images[0]}`;
    
    return (
      <styled.CartItem>
        <styled.ImageContainer src={image}></styled.ImageContainer>
        <styled.DetailsContainer>
          <styled.DetailsHeader>
            <div>
              <styled.Category>Metzinger</styled.Category>
              <styled.ProductName>{item.name}</styled.ProductName>
            </div>
            <styled.Button onClick={() => onClickRemove()}>
              Remove
            </styled.Button>
          </styled.DetailsHeader>
          <styled.Detail>Color: {toCamelCase(color)}</styled.Detail>
          <styled.Detail>Size: {size.toUpperCase()}</styled.Detail>
          <styled.PricingContainer>
            <NumberInput
              value={quantity}
              min="1"
              onChange={() => onChange}
              setQuantity={setQuantity}
              aria-label="quantity"
            />
            <styled.Price>${item.price * quantity}</styled.Price>
          </styled.PricingContainer>
        </styled.DetailsContainer>
      </styled.CartItem>
    );
  }
}

export default CartItem;
