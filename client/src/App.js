import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import LandingPage from "./Pages/Landing/LandingPage";

import PrivateRoute from "./Components/TypeRoute/PrivateRoute";
import Navbar from "./Components/Navbar/NavBar";

import Home from "./Pages/Home/Home";
import Supervisor from "./Pages/Supervisor/Supervisor";
import Login from "./Pages/Auth/Login";
import EnableAccount from "./Pages/Account/EnableAccount";
import ForgotPasswordAccount from "./Pages/Account/ForgotPasswordAccount";
import { useSelector } from "react-redux";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="account">
          <Route path="enable" element={<EnableAccount />} />
          <Route path="forgot" element={<ForgotPasswordAccount />} />
        </Route>
          <Route path="supervisor" element={<Supervisor />} />
          <Route path="home" element={<Home />} />
        <Route element={<PrivateRoute />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
