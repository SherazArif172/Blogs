import Image from "next/image";
import React from "react";
import { assets } from "../../../../public/assets";

const Footer = () => {
  return (
    <div className="bg-black py-6 px-5">
      <Image
        src={assets.logo_light}
        width={180}
        height={180}
        alt="image"
        className="m-auto "
      />
    </div>
  );
};

export default Footer;
