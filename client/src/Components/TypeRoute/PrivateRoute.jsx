import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/Auth";

function PrivateRoute() {
  const isAuth = useSelector((state) => state.auth.token);
  const expires = useSelector((state) => state.auth.expires);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (expires) {
    if (new Date(Date.now()) > new Date(expires)) {
      dispatch(logout());
      alert("Session expired");
      return navigate("/auth");
    }
  }

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;
