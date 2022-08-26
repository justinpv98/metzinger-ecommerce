import React from "react";
import * as styled from "./ProductCard.styles";
import { Link, useNavigate } from "react-router-dom";
import { imageHostURL } from "../../config/config";

import { useSelector, useDispatch } from "react-redux";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../features/wishlist/wishlistSlice";

import Button from "../Button/Button";

function ProductCard({ product }) {
  const { wishlist, wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = product.image_url.split(",");

  function isInWishlist() {
    return (
      wishlistItems.filter(
        (item) => item.product_id === product.id || product.product_id
      ).length > 0
    );
  }

  function handleWishlist() {
    if (!wishlist) {
      navigate("/account");
    }

    if (isInWishlist()) {
      dispatch(removeWishlistItem(product.product_id || product.id));
    } else {
      const wishlistItem = { wishlistId: wishlist.id, productId: product.id };
      dispatch(addWishlistItem(wishlistItem));
    }
  }

  const overlayImage = `${imageHostURL}/${images[2]}`;
  const underlayImage = `${imageHostURL}/${images[3]}`;
  return (
    <styled.Container>
      <Link
        to={`/product/${product.product_id ? product.product_id : product.id}`}
      >
        {overlayImage && (
          <styled.OverlayImage
            src={overlayImage}
            loading="lazy"
          ></styled.OverlayImage>
        )}
        {underlayImage && (
          <styled.Image src={underlayImage} loading="lazy"></styled.Image>
        )}
        <styled.Body>
          <styled.Name>{product.name}</styled.Name>
          <styled.Price>${product.price}</styled.Price>
        </styled.Body>
      </Link>
      <Button
        variant="transparent"
        iconSize={"20"}
        icon={isInWishlist() ? "heartFilled" : "heartOutline"}
        onClick={handleWishlist}
        tabindex={0}
        aria-pressed={isInWishlist()}
      />
    </styled.Container>
  );
}

export default ProductCard;
