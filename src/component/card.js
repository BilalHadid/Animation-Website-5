import React from "react";
import img1 from "../images/icons/01.png";
import img2 from "../images/icons/02.png";
import img3 from "../images/icons/04.png";
import "../App.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export const Card = () => {
  return (
    <div>
      <div className="outlet">
        <div className="card">
          <img src={img1} alt="g" />
          <h1>Open An Account</h1>
          <p>
            You can open bank accounts entirely online, with no need for
            signatures or branch ... you can complete most banking tasks
            online—even opening your account....
          </p>
          <h2>+</h2>
        </div>

        <div className="card2">
          <img src={img2} alt="g" />
          <h1>Give Interest</h1>
          <p>
            You can open bank accounts entirely online, with no need for
            signatures or branch ... you can complete most banking tasks
            online—even opening your account....
          </p>
          <h2>+</h2>
        </div>
        <div className="card3">
          <img src={img3} alt="g" />
          <h1>Get Deposite</h1>
          <p>
            You can open bank accounts entirely online, with no need for
            signatures or branch ... you can complete most banking tasks
            online—even opening your account....
          </p>
          <h2>+</h2>
        </div>
      </div>
      <AnimatedOnScroll animationIn="bounceInRight">
        <div className="GoOn">
          <input type="email" placeholder="Inter Your Email Address" />
          <button className="btngo">GO ON</button>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};
