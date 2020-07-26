import React from "react";
import img1 from "../images/icons/tree.png";
import imgmain from "../images/partner/ahjax.png";
import useWebAnimation from "@wellyshen/use-web-animations";

export const Transaction = () => {
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
    <div className="profit">
      <div className="HomeSet1">
        <img className="set1" src={imgmain} alt="G" ref={ref} />
      </div>
      <div className="Allcardo">
        <div className="Cardo">
          <div className="cardoImg">
            <p>1</p>
            <img src={img1} alt="g" />
          </div>
          <div className="portfitable">
            <h1>Stable & Portfitable</h1>
            <p>
              Experienced business owners and managers know that 3 things are
              necessary to ensure{" "}
              <span className="hidden">
                the long- term success of any business: growth, profit and
                stability
              </span>
            </p>
          </div>
        </div>

        <div className="Cardo">
          <div className="cardoImg">
            <p>2</p>
            <img src={img1} alt="g" />
          </div>
          <div className="portfitable">
            <h1>Instant Withdraw</h1>
            <p>
              Withdrawal Speed: Up to 4 hours .General rules for depositing and
              withdrawing funds{" "}
              <span className="hidden">
                {" "}
                . If a deposit or withdrawal is not subject to instant execution
              </span>
            </p>
          </div>
        </div>

        <div className="Cardo">
          <div className="cardoImg">
            <p>3</p>
            <img src={img1} alt="g" />
          </div>
          <div className="portfitable">
            <h1>Referral Provides</h1>
            <p>
              A referral program is an organized process in which customers{" "}
              <span className="hidden">
                {" "}
                are rewarded for spreading the word.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
