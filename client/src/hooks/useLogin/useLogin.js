import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset as authReset, logout } from "../../features/auth/authSlice";
import {
  reset as cartReset,
  createCart,
  getAllCartItems,
} from "../../features/cart/cartSlice";
import {
  reset as wishlistReset,
  createWishlist,
  getAllWishlistItems,
} from "../../features/wishlist/wishlistSlice";
import {
  reset as orderReset,
  getOrders,
} from "../../features/order/orderSlice";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (!user) {
      dispatch(logout());
      dispatch(authReset());
      navigate("/");
    }

    dispatch(getOrders(user?.id));

    if (cart?.id) {
      dispatch(getAllCartItems(cart?.id));
    } else {
      dispatch(createCart(user?.id));
    }

    if (wishlist?.id) {
      dispatch(getAllWishlistItems(wishlist?.id));
    } else {
      dispatch(createWishlist(user?.id));
    }

    return () => {
      dispatch(orderReset());
      dispatch(cartReset());
      dispatch(wishlistReset());
    };
  }, [user, dispatch, navigate, user?.id, cart?.id, wishlist?.id]);

  return user;
}

export default useLogin;
