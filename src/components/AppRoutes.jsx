import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";

import { ROUTE_AUTH } from "_/constants/auth";
import { ROUTE_HOME } from "_/constants/app";
import AuthLayout from "_/components/Layouts/AuthLayout";
import AppLayout from "_/components/Layouts/AppLayout";

const AppRoutes = () => {
  const { isLoggedIn, jwtToken, status } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_AUTH}
          element={isLoggedIn ? <Redirect to={ROUTE_HOME} /> : <AuthLayout />}
        />
        <Route
          path={ROUTE_HOME}
          element={!isLoggedIn ? <Redirect to={ROUTE_AUTH} /> : <AppLayout />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
