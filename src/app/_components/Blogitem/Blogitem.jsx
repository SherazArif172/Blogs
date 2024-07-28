import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogitem = ({ image, title, description, category }) => {
  return (
    <div className="m-auto group">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <div className="relative aspect-[12/8] overflow-hidden">
          {" "}
          <Image
            className="rounded-t-lg object-cover w-full h-full group-hover:scale-105 duration-500 "
            fill
            alt="image"
            src={image}
          />
        </div>
        <div className="p-5">
          <Link href="#" className="">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 hover:text-blue-800 duration-500">
              {title}
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-3">{description}</p>
          <div className="flex justify-start items-center gap-8">
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </Link>
            <Button>{category}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogitem;
