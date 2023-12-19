import React from "react";

import { PcImage, searchIcon } from "../assets";
import Button from "../components/Button";

const Services = () => {
  return (
    <section className="flex justify-center max-md:mt-[300px] flex-col items-center">
      <div className="mt-[108px] w-[1064px] h-[414px] max-md: max-md:w-[335px] justify-items-center flex flex-row items-center gap-[108px] max-md:flex max-md:flex-col sm:gap-[20px] max-lg:w-[750px]">
        <img src={PcImage} alt="pcimage" width={414} height={414} />
        <div className="w-[542px] h-[187px] max-md:w-[337px]  text-left">
          <h3 className="font-Poppins text-primary font-semibold text-[27px] leading-[33px] sm:flex max-md:justify-center max-md:text-center">
            Web & Mobile App Development
          </h3>
          <p
            className="font-inter font-normal text-[16px] 
            leading-[19px] mt-3 mb-3 max-md:text-center"
          >
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div className="sm:flex max-md:justify-center">
            <Button label="LEARN MORE" />
          </div>
        </div>
      </div>

      <div
        className="mt-[108px] max-md:mt-[208px] w-[1064px] h-[414px] max-md:w-[335px] flex flex-row 
      items-center max-md:flex max-md:flex-col max-lg:w-[688px] "
      >
        <div className="w-[542px] h-[187px] max-md:w-[337px] text-left">
          <h3
            className="font-Poppins text-primary font-semibold text-[27px] 
          leading-[33px] sm:flex max-md:justify-center max-md:text-center"
          >
            Web & Mobile App Development
          </h3>
          <p
            className="font-inter font-normal text-[16px] 
          leading-[19px] mt-3 mb-3 max-md:text-center"
          >
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div className="sm:flex max-md:justify-center">
            <Button label="LEARN MORE" />
          </div>
        </div>
        <img
          className="max-xl:object-right max-md:mt-[100px] max-md:order-first"
          src={searchIcon}
          alt="pcimage"
          width={414}
          height={414}
        />
      </div>
    </section>
  );
};

export default Services;
