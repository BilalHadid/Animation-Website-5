import React from "react";
import img1 from "../images/partner/01.png";
import img2 from "../images/partner/02.png";
import img3 from "../images/partner/03.png";
import img4 from "../images/partner/04.png";

export const Investor = () => {
  return (
    <div className="Investor">
      <div className="mainText1" id="newText">
        <h1>
          <span>--{"  "}Top Investor</span>
          <br />
          Fast Smart think
        </h1>
        <p style={{ fontSize: "2.5vh" }}>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web
        </p>
      </div>
      <div className="investorCard">
        <div className="client">
          <img src={img1} alt="g" />
          <h2>Bradon Crithia Founder</h2>
          <hr></hr>
          <div className="classic">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>

        <div className="client">
          <img src={img2} alt="g" />
          <h2>Bradon Crithia Founder</h2>
          <hr></hr>
          <div className="classic">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>

        <div className="client">
          <img src={img3} alt="g" />
          <h2>Bradon Crithia Founder</h2>
          <hr></hr>
          <div className="classic">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>

        <div className="client">
          <img src={img4} alt="g" />
          <h2>Bradon Crithia Founder</h2>
          <hr></hr>
          <div className="classic">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
