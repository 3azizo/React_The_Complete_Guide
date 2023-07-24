import React from "react";
import classes from "./Hero.module.css";
import Header from "../header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className={`${classes.hero} container`}>
      <div className={`${classes["hero-blur"]} blur `}></div>
      <div className={classes.left}>
        <Header />
        <div className={classes["the-best"]}>
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className={classes["hero-text"]}>
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your idea body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className={classes.figures}>
          <div>
            <span>+140</span>
            <span>export coachs</span>
          </div>
          <div>
            <span>+948</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className={classes["hero-buttons"]}>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className={classes.right}>
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className={classes["heart-rate"]}
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="img" className={classes["hero-image"]} />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="img"
          className={classes["hero-image-back"]}
        />
        {/* calores */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className={classes.calories}
        >
          <img src={calories} alt="calories" />
          <div>
            <span>calories Burned </span>
            <span>220 kcal </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
