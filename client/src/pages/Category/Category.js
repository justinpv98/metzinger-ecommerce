import React, { useEffect } from "react";
import * as styled from "./Category.style";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { reset, getCategory } from "../../features/category/categorySlice";
import { useDocumentTitle } from "../../hooks";

import toCamelCase from "../../utils/toCamelCase";

import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";

function Category() {
  let params = useParams();
  const category = toCamelCase(params.category);
  useDocumentTitle(category)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isSuccess } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory(category));

    if (products.message) {
      navigate("/404");
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, params, products.message, category]);

  if (isSuccess) {
    return (
      <styled.Main>
        <styled.CategoryTitle>{category}</styled.CategoryTitle>
        <styled.GridContainer id="main">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </styled.GridContainer>
      </styled.Main>
    );
  } else {
    return <Loader />;
  }
}

export default Category;
