"use client";

import React from "react";
import { assets } from "../../../../public/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide";

const Header = () => {
  return (
    <div className="lg:px-28 md:px-12 px-6 py-6">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="image"
          className=" sm:w-[130px] w-auto"
        />
        <Button>Get Started</Button> <ArrowRight />
      </div>
    </div>
  );
};

export default Header;
