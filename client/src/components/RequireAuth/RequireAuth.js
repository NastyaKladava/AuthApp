import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/common";
import { isLoggedInSelector } from "../../store/selectors";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn) return <Navigate to="/" state={{ from: location }} />;

  return children;
};

export default RequireAuth;
