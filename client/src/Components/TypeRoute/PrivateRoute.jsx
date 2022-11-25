import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/Auth";

function PrivateRoute() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth);
  const { role, expires, token } = isAuth;

  if (expires) {
    if (new Date(Date.now()) > new Date(isAuth.expires)) {
      dispatch(logout());
      alert("Session expired");
      return navigate("/auth/login");
    }
  }

  console.log("role", isAuth);
  if (!role) {
    return navigate("/auth/login");
  }

  if (role === "supervisor") {
    return navigate("/supervisor");
  }
  if (role === "user") {
    return navigate("/home");
  }
}

export default PrivateRoute;
