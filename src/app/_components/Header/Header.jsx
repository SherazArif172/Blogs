"use client";

import React from "react";
import { assets } from "../../../../public/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide";
import { Input } from "@/components/ui/input";

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
        <Button>Get Started </Button>
      </div>
      <div className="text-center mt-20">
        <h1 className="md:text-4xl text-2xl font-bold ">Latest Blogs</h1>
        <p className="max-w-xl m-auto mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          nulla non dolor eveniet minima? Possimus optio
        </p>
      </div>
      <form
        action=""
        className=" flex justify-between items-center max-w-md border-background/40 shadow-lg mt-8 m-auto"
      >
        <Input type="email" placeholder="Email" className="rounded-none" />
        <Button className="rounded-none">Suscribe</Button>
      </form>
    </div>
  );
};

export default Header;
