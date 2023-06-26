import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route  path="/search" element={<Search />} />
        <Route exact path="/Game" element={<Game />} /> */}
    </Routes>
  );
}

export default Router;
