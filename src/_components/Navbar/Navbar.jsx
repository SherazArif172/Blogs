import Image from "next/image";
import React from "react";
import { assets } from "../../../public/assets";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="lg:px-28 md:px-12 px-6 py-6">
      {" "}
      <div className="flex justify-between items-center">
        <Link href="/">
          {" "}
          <Image
            src={assets.logo}
            width={180}
            alt="image"
            className=" sm:w-[130px] w-auto"
          />
        </Link>
        <Button>Get Started </Button>
      </div>
    </div>
  );
};

export default Navbar;
