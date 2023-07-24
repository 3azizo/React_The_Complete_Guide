import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="reasons container" id="resons">
      <div className="left">
        <img src={image1} alt="img" />
        <img src={image2} alt="img" />
        <img src={image3} alt="img" />
        <img src={image4} alt="img" />
      </div>
      <div className="right">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>
        <div className="details">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="partners" />
          <img src={adidas} alt="partners" />
          <img src={nike} alt="partners" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
