import React from "react";
import "./App.css";
import { Home } from "./component/Home";
import { Card } from "./component/card";
import { Invest } from "./component/Invest";
import { Amound } from "./component/Amound";
import { Transaction } from "./component/transaction";
import { Investor } from "./component/investor";
import { History } from "./component/history";
import { Calculate } from "./component/Calculate";
import { Forest } from "./component/Forest";
import { Footer } from "./component/Footer";

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
        <Transaction />
        <Investor />
        <History />
        <Calculate />
        <Forest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
