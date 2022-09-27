import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import LandingPage from "./Pages/Landing/LandingPage";

import PrivateRoute from "./Components/TypeRoute/PrivateRoute";
import Navbar from "./Components/Navbar/NavBar";

import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Supervisor from "./Pages/Supervisor/Supervisor"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="auth" element={<Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="supervisor" element={<Supervisor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
