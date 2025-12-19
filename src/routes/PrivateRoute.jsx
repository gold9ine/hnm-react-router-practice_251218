import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";

const PrivateRoute = ({ authenticate }) => {
  const location = useLocation();
  // console.log("location", location);
  // return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Navigate to="/login" replace state={{ to: location }} />
  );
};

export default PrivateRoute;
