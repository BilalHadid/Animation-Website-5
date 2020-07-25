import React from "react";
import "./App.css";
import { Home } from "./component/Home";
import { Card } from "./component/card";
import { Invest } from "./component/Invest";
import { Amound } from "./component/Amound";

function App() {
  return (
    <div className="App">
      <Home />
      <Card />
      <div>
        <br />
        <Invest />
        <br />
        <Amound />
      </div>
    </div>
  );
}

export default App;
