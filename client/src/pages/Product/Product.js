import React, { Fragment, useEffect, useState } from "react";
import * as styled from "./Product.styles";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import { reset, getProduct } from "../../features/product/productSlice";
import { addCartItem } from "../../features/cart/cartSlice";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../features/wishlist/wishlistSlice";

import calculateInstallments from "../../utils/calculateInstallments";

import Loader from "../../components/Loader/Loader";

import Icon from "../../components/Icon/Icon";
import ColorInput from "./components/ColorInput/ColorInput";
import SizeInput from "./components/SizeInput/SizeInput";
import Button from "../../components/Button/Button";

function Product() {
  let params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, isError, isSuccess } = useSelector(
    (state) => state.product
  );

  const {
    id: productId,
    name,
    description,
    quantity,
    price,
    attributes,
    image_url,
  } = product;

  useDocumentTitle(name)
  

  const { cart } = useSelector((state) => state.cart);
  const { wishlist, wishlistItems } = useSelector((state) => state.wishlist);
  const [options, setOptions] = useState({});

  useEffect(() => {
    dispatch(getProduct(params.id));

    if (isError) {
      navigate("/404");
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, params, isError]);

  useEffect(() => {
    setOptions({ color: attributes?.colors[0], size: attributes?.sizes[0] });
  }, [attributes]);

  function onWishlistClick() {
    if (!cart) {
      navigate("/login");
    }

    const wishlistItem = { wishlistId: wishlist.id, productId: productId };

    if (isInWishlist()) {
      dispatch(removeWishlistItem(productId));
    } else {
      dispatch(addWishlistItem(wishlistItem));
    }
  }

  function isInWishlist() {
    return (
      wishlistItems.filter((item) => item.product_id === product.id).length > 0
    );
  }

  function onAddToCartClick() {
    if (!user?.id) {
        navigate("/login")
      }

    if (quantity > 0) {
      const cartItem = {
        cartId: cart.id,
        productId: productId,
        savedAttributes: JSON.stringify(options),
      };

      if (isInWishlist()) {
        dispatch(removeWishlistItem(productId));
      }

      dispatch(addCartItem(cartItem));
    }
  }

  if (isSuccess) {
    const images = image_url.split(",");

    const image1 = `${process.env.REACT_APP_IMAGE_HOST_URL}/${images[0]}`;
    const image2 = `${process.env.REACT_APP_IMAGE_HOST_URL}/${images[1]}`;

    return (
      <styled.PageWrapper>
        <styled.ImagesContainer>
          <styled.ProductImage src={image1} alt="" draggable="false" />
          <styled.ProductImage src={image2} alt="" draggable="false" />
        </styled.ImagesContainer>
        <styled.ContentWrapper>
          <styled.StickyContainer>
            <styled.Heading>Metzinger</styled.Heading>
            <styled.TitleContainer>
              <styled.Title>{name}</styled.Title>
              <Button
                onClick={onWishlistClick}
                variant="transparent"
                icon={isInWishlist() ? "heartFilled" : "heartOutline"}
                iconSize={"24"}
                aria-pressed={isInWishlist()}
              />
            </styled.TitleContainer>
            <styled.PriceContainer>${price}</styled.PriceContainer>
            <styled.PriceContainer>
              <span>
                4 interest-free payments of ${calculateInstallments(price, 4)}{" "}
                with
              </span>
              <Icon
                icon="afterpay"
                size="4.5rem"
                title="Afterpay"
                desc="Buy now, pay later service"
              />
            </styled.PriceContainer>
            <styled.Subheader>Colors</styled.Subheader>
            <styled.OptionsContainer role="radiogroup">
              {attributes.colors.map((color, index) => (
                <ColorInput
                  label={color}
                  key={color}
                  name="color"
                  id={color}
                  value={color}
                  color={color}
                  onChange={() => {
                    setOptions({ ...options, color });
                  }}
                  defaultChecked={index === 0}
                />
              ))}
            </styled.OptionsContainer>
            {attributes.sizes[0] !== "one size" && (
              <Fragment>
                <styled.Subheader>Sizes</styled.Subheader>
                <styled.OptionsContainer role="radiogroup">
                  <SizeInput
                    availableSizes={attributes.sizes}
                    disabled={quantity === 0}
                    options={options}
                    setOptions={setOptions}
                  />
                </styled.OptionsContainer>
              </Fragment>
            )}
            <styled.ButtonsContainer>
              <Button
                onClick={onAddToCartClick}
                disabled={quantity === 0 ? true : false}
              >
                {quantity === 0 ? "Product Unavailable" : "Add to Cart"}
              </Button>
            </styled.ButtonsContainer>
            <styled.ShippingInfo>
              Free Shipping for Orders over $50
            </styled.ShippingInfo>
            <styled.HorizontalRule />
            <styled.Subheader>Details</styled.Subheader>
            <styled.ProductDetails><p>{description}</p></styled.ProductDetails>
          </styled.StickyContainer>
        </styled.ContentWrapper>
      </styled.PageWrapper>
    );
  } else {
    return <Loader />;
  }
}

export default Product;
