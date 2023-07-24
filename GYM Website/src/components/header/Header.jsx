import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      {menuOpened == false && mobile == true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt="bars"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </div>
      ) : (
        <ul className="header--menu">
          <li>
            <a onClick={() => setMenuOpened(false)} href="#">
              Home
            </a>{" "}
          </li>
          <li>
            <a onClick={() => setMenuOpened(false)} href="#programs">
              Programs
            </a>{" "}
          </li>
          <li>
            <a onClick={() => setMenuOpened(false)} href="#resons">
              {" "}
              Why us
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpened(false)} href="#plans">
              Plans
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpened(false)} href="#testimonials">
              Testimonials
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
