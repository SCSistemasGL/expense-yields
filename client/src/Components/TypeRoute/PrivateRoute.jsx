import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/Auth";

function PrivateRoute() {
  const isAuth = useSelector((state) => state.auth.token);
  const expires = useSelector((state) => state.auth.expires);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useLocation().pathname;

  if (expires) {
    if (new Date(Date.now()) > new Date(expires)) {
      dispatch(logout());
      alert("Session expired");
      return navigate("/login");
    }
  }

  return (isAuth ? <Outlet /> : <Navigate to="/login" />)
}

export default PrivateRoute;
