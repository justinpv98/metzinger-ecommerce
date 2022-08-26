import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import { useMatchMedia } from "./hooks";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const desktop = useMatchMedia("(min-width: 1100px)");
  return (
    <BrowserRouter>
      <ScrollToTop>
        {desktop ? <Navigation /> : <MobileNavigation />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:category" element={<Category />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to={"/404"} />} />
          <Route exact path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
