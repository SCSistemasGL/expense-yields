import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import LandingPage from "./Pages/Landing/LandingPage";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/Sigup/Signup";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./Components/TypeRoute/PrivateRoute";
import Navbar from "./Components/Navbar/NavBar";

import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} /> */}
        <Route path="auth" element={<Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
