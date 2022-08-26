import React, { useState } from "react";
import * as styled from "./Account.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useLogin, useDocumentTitle } from "../../hooks/index";

import {
  reset as authReset,
  logout,
  updatePersonalInfo,
} from "../../features/auth/authSlice";
import { resetAll as cartResetAll } from "../../features/cart/cartSlice";
import { resetAll as wishlistResetAll } from "../../features/wishlist/wishlistSlice";
import { resetAll as orderResetAll } from "../../features/order/orderSlice";

import Tabs from "../../components/Tabs/Tabs";
import ProductCard from "../../components/ProductCard/ProductCard";
import OrderItem from "./OrderItem/OrderItem";
import {
  Input,
  PasswordInput,
} from "../../components/FormElements/FormElements";
import Button from "../../components/Button/Button";

function Account() {
  useDocumentTitle("Account");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useLogin();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { orders } = useSelector((state) => state.order);

  const [formData, setFormData] = useState({
    ...user,
  });

  function onClickLogout() {
    dispatch(logout());
    dispatch(authReset());
    dispatch(cartResetAll());
    dispatch(wishlistResetAll());
    dispatch(orderResetAll());
    navigate("/");
  }

  function onClickUpdate(e) {
    e.preventDefault();
    dispatch(updatePersonalInfo({ ...formData }));

    // Indicate change by reloading page
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function renderWishlist() {
    if (wishlistItems.length > 0) {
      return (
        <styled.WishlistTab>
          {wishlistItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </styled.WishlistTab>
      );
    } else {
      return (
        <styled.EmptyTab>
          <h2>Your wishlist is currently empty.</h2>
          <styled.LinkButton to="/gifts-for-her">
            Browse Our Gifts
          </styled.LinkButton>
        </styled.EmptyTab>
      );
    }
  }

  function renderOrders() {
    if (!orders) {
      return (
        <styled.EmptyTab>
          <h2>You currently have 0 orders.</h2>
        </styled.EmptyTab>
      );
    } else {
      return (
        <styled.ActiveTab>
          <styled.Orders>
            {orders.map((order) => {
              return <OrderItem order={order} key={order.id} />;
            })}
          </styled.Orders>
        </styled.ActiveTab>
      );
    }
  }

  return (
    <styled.Main id="main">
      <styled.GreetingContainer>
        <button onClick={onClickLogout}>Logout</button>
      </styled.GreetingContainer>
      <Tabs>
        <div label="Account Details">
          <styled.ActiveTab>
            <styled.AccountForm>
              <styled.SharedGroup>
                <Input
                  type="text"
                  label="First Name"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  minLength="1"
                  onChange={onChange}
                  autocomplete="given-name"
                />
                <Input
                  type="text"
                  label="Last Name"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  minLength="1"
                  onChange={onChange}
                  autocomplete="family-name"
                />
              </styled.SharedGroup>
              <Input
                type="email"
                label="Email"
                id="email"
                disabled={true}
                value={user?.email}
                readOnly={true}
                autocomplete="email"
              />
              <PasswordInput
                label="Password"
                id="password"
                name="password"
                minLength="8"
                value={formData.password}
                onChange={onChange}
                disabled={user.id === 1}
                autocomplete="new-password"
              />
              <Button variant="primary" onClick={onClickUpdate}>
                Submit Changes
              </Button>
            </styled.AccountForm>
          </styled.ActiveTab>
        </div>
        <div label="Wishlist">{renderWishlist()}</div>
        <div label="Orders">{renderOrders()}</div>
      </Tabs>
    </styled.Main>
  );
}

export default Account;
