import React from "react";
import img1 from "../images/history.png";
import useWebAnimation from "@wellyshen/use-web-animations";

export const History = () => {
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
    <div className="History">
      <div className="mainText2" id="newText">
        <h1>
          <span className="spna">--{"  "}Investon History</span>
          <br />
          Know More Us
        </h1>
        <p style={{ fontSize: "2.5vh" }}>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text,{" "}
          <span className="hidden">
            and a search for 'lorem ipsum' will uncover many
          </span>
        </p>
        <div className="counter">
          <div className="count">
            <h1>234</h1>
            <p style={{ fontSize: "2.5vh" }}>Every week Investor logins</p>
          </div>
          <div className="count">
            <h1>542</h1>
            <p style={{ fontSize: "2.5vh" }}>Every week Investor logins</p>
          </div>
          <div className="count">
            <h1>132</h1>
            <p style={{ fontSize: "2.5vh" }}>Every week Investor logins</p>
          </div>
        </div>
      </div>
      <div className="HomeSet2">
        <img className="set2" src={img1} alt="g" ref={ref} />
      </div>
    </div>
  );
};
