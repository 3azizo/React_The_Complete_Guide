import React from "react";
import { quotes } from "../assets";
function FeedBackCard({ content, name, title, img }) {
  return (
    <div className=" flex justify-between flex-col px-10 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className=" font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row items-center ">
        <img src={img} alt={name} className="w-[48px] h-[48px]" />
        <div className="font-poppins ml-4">
          <h4 className="text-white font-semibold text-[20px]">{name}</h4>
          <p className="text-dimWhite text-[16px]">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedBackCard;
