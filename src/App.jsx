import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { GlobalStyles } from "./shared/Global";
import Router from "./router/Router";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
