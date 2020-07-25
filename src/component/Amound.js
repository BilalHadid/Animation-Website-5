import React from "react";
import "../App.css";
import img1 from "../images/fact1.png";
import img2 from "../images/fact2.png";
import CountUp from "react-countup";

export const Amound = () => {
  return (
    <div className="Amound">
      <div className="deposite">
        <img src={img1} alt="g" />
        <h1>Total Member</h1>
        <h2>
          <CountUp start={0} end={54535} duration={10} separator="," />
        </h2>
      </div>
      <div className="deposite">
        <img src={img2} alt="g" />
        <h1>Total Profit</h1>
        <h2>
          <CountUp start={0} end={88567} duration={10} separator="," />
        </h2>
      </div>
      <div className="deposite">
        <img src={img1} alt="g" />
        <h1>Total Deposite</h1>
        <h2>
          <CountUp start={0} end={302036} duration={10} separator="," />
        </h2>
      </div>
    </div>
  );
};
