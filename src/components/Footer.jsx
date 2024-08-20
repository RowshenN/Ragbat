import React from "react";

import logo from "../images/footer-logo.svg";

const Footer = () => {
  return (
    <div className="w-[75%] lg:block hidden bg-[#A0FB00D9] mx-auto rounded-[20px] py-[50px] mb-[50px] px-[70px]">
      <div className="flex items-start justify-between w-full gap-3">
        <div className="w-[40%] flex flex-col gap-[47px] items-baseline justify-start">
          <p className="font-[outfit-regular] text-[#00391A] text-[20px]">
            Hero of Turkmenistan Atamurat Niyazov 154/4, Aşgabat, Turkmenistan
          </p>

          <div>
            <img src={logo} alt="logo" />
          </div>

          <p className="font-[outfit-regular] text-[#00391A] text-[20px]">
            © 2024 Ragbat-dag, All rights reserved
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-[50%] items-start justify-between">
          <p className="font-[outfit-regular] text-[#00391A] text-[20px]">
            +993 64 75 48 46
          </p>
          <p className="font-[outfit-regular] text-[#00391A] text-[20px]">
            inbox@ragbat.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
