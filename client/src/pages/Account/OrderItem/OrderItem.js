import React from "react";
import { Link } from "react-router-dom";
import * as styled from "./OrderItem.styles";

import { imageHostURL } from "../../../config/config";
import { formatStringToDate } from "../../../utils/dateUtils";

function OrderItem({ order }) {
  const { id, items, status, createdAt } = order;
  const total = items.reduce((prev, curr) => {
    return prev + Number(curr.price);
  }, 0);
  const totalAsFloat = total.toFixed(2);

  return (
    <li>
      <styled.Header>
        <styled.OrderNumber>Order #{id}</styled.OrderNumber>
        <styled.HeaderGroup>
          <styled.GroupTitle>Total</styled.GroupTitle>
          <styled.GroupBody>${totalAsFloat}</styled.GroupBody>
        </styled.HeaderGroup>
        <styled.HeaderGroup>
          <styled.GroupTitle>Placed On</styled.GroupTitle>
          <styled.GroupBody>{formatStringToDate(createdAt)}</styled.GroupBody>
        </styled.HeaderGroup>
      </styled.Header>
      <styled.Body>
        <styled.Status>{status}</styled.Status>
        <styled.ExpandedStatus>Your package is on the way</styled.ExpandedStatus>
        {items.map((orderItem) => {
          const images = orderItem.image_url.split(",");
          const imageUrl = imageHostURL + "/" + images[3];
          return (
            <styled.BodyContainer key={orderItem.id}>
              <div>
                <styled.ProductImage src={imageUrl}></styled.ProductImage>
              </div>
              <styled.InfoContainer>
                <styled.ProductName to={`/product/${orderItem.product_id}`}>
                  {orderItem.name}
                </styled.ProductName>
                <p>QTY: {orderItem.quantity}</p>
                <p>${orderItem.price * orderItem.quantity}</p>
              </styled.InfoContainer>
            </styled.BodyContainer>
          );
        })}
      </styled.Body>
    </li>
  );
}

export default OrderItem;
