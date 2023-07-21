import React from "react";
import { Routes, Route } from "react-router-dom";
import { useGetCharacterNames } from "../../hooks/useGetCharacterNames";
import Home from "../pages/Home/Home";
import Search from "../pages/search/Search";
import Game from "../pages/game/Game";
import { useFetch } from "../../hooks/useFetch";

function Router() {
  const allCharacters = useGetCharacterNames();
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/search"
        element={<Search allCharacters={allCharacters} />}
      />
      <Route
        exact
        path="/Game"
        element={<Game allCharacters={allCharacters} />}
      />
    </Routes>
  );
}

export default Router;
