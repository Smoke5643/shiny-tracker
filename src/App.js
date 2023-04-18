import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dex from "./components/Dex";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/shiny-tracker/" element={<Home />} />
          <Route exact path="/shiny-tracker/dex" element={<Dex />} />
          <Route exact path="/shiny-tracker/shiny" element={<Dex />} />
          <Route exact path="/shiny-tracker/lucky" element={<Dex />} />
          <Route exact path="/shiny-tracker/unown" element={<Dex />} />
          <Route exact path="/shiny-tracker/shadow" element={<Dex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function NotFound() {
  return <h1>404!</h1>;
}

export default App;
