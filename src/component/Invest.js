import React from "react";
import "../App.css";
import Avator from "../images/feature.png";
import useWebAnimation from "@wellyshen/use-web-animations";

export const Invest = () => {
  const { ref } = useWebAnimation({
    keyframes: [
      { transform: "translateY(5px)" },
      { transform: "translateY(-5px)" },
    ],
    timing: {
      delay: 500,
      duration: 1000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  return (
    <div className="Invest">
      <div className="mainText">
        <h2>
          <span>
            ---
            {"  "}Invest Now
          </span>
          <br></br>
          Get Featured!
        </h2>
        <p style={{ fontSize: "2vh" }}>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many
        </p>
        <div className="Sponsor">
          <input type="email" placeholder="Inter Your Email" />
          <button>Sponsor</button>
        </div>
      </div>

      <div className="HomeSet">
        <img className="set" src={Avator} alt="g" ref={ref} />
      </div>
    </div>
  );
};
