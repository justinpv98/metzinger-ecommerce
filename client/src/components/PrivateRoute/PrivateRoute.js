import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, redirect}) {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={redirect ? redirect : "/login"} replace />
  } else {
    return children
  }
}

export default PrivateRoute;
