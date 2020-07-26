import React from "react";
import img1 from "../images/payment/01.png";
import img2 from "../images/payment/02.png";
import img3 from "../images/payment/03.png";
import img4 from "../images/payment/04.png";
import img5 from "../images/payment/05.png";
import img6 from "../images/payment/06.png";

export const Calculate = () => {
  return (
    <div className="Calculate">
      <div className="calYour">
        <button>Calculate Your</button>
        <br />
        <form>
          <label>Enter Ammount :</label>
          <br />
          <input type="number" placeholder="$20" />
        </form>
        <br />
        <form>
          <label>Total Profit :</label>
          <br />
          <input type="number" placeholder="$20" />
          <br />
        </form>
        <form>
          <label>Net Profit :</label>
          <br />
          <input type="number" placeholder="$20" />
        </form>
      </div>
      <div className="hisText">
        <h1>We Accepted these Payment Method</h1>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </p>
        <img src={img1} alt="h" />
        <img src={img2} alt="h" />
        <img src={img3} alt="h" />
        <img src={img4} alt="h" />
        <img src={img5} alt="h" />
        <img src={img6} alt="h" />
      </div>
    </div>
  );
};
