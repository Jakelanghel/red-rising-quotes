import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { GlobalStyles } from "./components/shared/Global";
import Router from "./components/router/Router";

function App() {
  return (
    <div className="h-100">
      <GlobalStyles />
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
