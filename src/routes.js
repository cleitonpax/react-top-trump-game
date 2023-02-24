import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Lobby from "./components/Lobby";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lobby" element={<Lobby />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
