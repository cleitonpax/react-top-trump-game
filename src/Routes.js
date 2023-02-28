import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import Board from "./components/Board";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lobby" element={<Lobby />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
