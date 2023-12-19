import React from "react";

import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      className="relative flex bg-[url('./assets/hero-image.png')] w-full h-[250px] lg:h-[763px] xl:h-[780px] bg-cover bg-center bg-no-repeat
     mb-8 md:h-[489px]"
    >
      <div className="absolute box top-[354px] left-[80px] w-[630px] h-[306px] max-lg:left-0 sm:h-[294px] max-lg:top-[250px] max-lg:w-full">
        <div className="p-8">
          <p className="font-inter font-bold text-5xl text-white text-left mb-3 max-md:text-[36px]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <Button label="Get free consultation"  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
