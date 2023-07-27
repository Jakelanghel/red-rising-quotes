import React from "react";
import { Routes, Route } from "react-router-dom";
import { useGetCharacterNames } from "../../hooks/useGetCharacterNames";
import Home from "../pages/Home/Home";
import Search from "../pages/search/Search";
import Game from "../pages/game/Game";
import ErrorMsg from "../shared/error/ErrorMsg";

function Router() {
  const { error, allCharacters } = useGetCharacterNames();

  return error ? (
    <ErrorMsg
      error="Something went wrong... Please Try again later."
      apiError={true}
    />
  ) : (
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
