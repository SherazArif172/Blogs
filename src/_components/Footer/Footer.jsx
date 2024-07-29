import Image from "next/image";
import React from "react";
import { assets } from "../../../public/assets";

const Footer = () => {
  return (
    <div className="bg-black py-6 px-5">
      <div className=" flex justify-around items-center">
        <Image
          src={assets.logo_light}
          width={180}
          height={180}
          alt="image"
          className=""
        />
        <div className="flex gap-3">
          <Image
            src={assets.facebook_icon}
            width={40}
            height={40}
            alt="image"
          />
          <Image src={assets.twitter_icon} width={40} height={40} alt="image" />
          <Image
            src={assets.googleplus_icon}
            width={40}
            height={40}
            alt="image"
          />
        </div>
      </div>
      <div className="text-white text-center mt-8 text-lg">
        All rights reserved. @blogger
      </div>
    </div>
  );
};

export default Footer;
