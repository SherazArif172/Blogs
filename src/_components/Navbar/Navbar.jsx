import Image from "next/image";
import React from "react";
import { assets } from "../../../public/assets";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="lg:px-28 md:px-12 px-6 py-6">
      {" "}
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="image"
          className=" sm:w-[130px] w-auto"
        />
        <Button>Get Started </Button>
      </div>
    </div>
  );
};

export default Navbar;
