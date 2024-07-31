import React from "react";
import { assets } from "../../../../../public/assets";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-100 ">
      <div className="px-2 pl-14 py-4 border border-black">
        <Image
          src={assets.logo}
          alt="image"
          width={120}
          height={120}
          className="m-auto"
        />
      </div>
      <div className="w-28 sm:w-80  h-screen relative py-12 border border-black">
        <Link href="/admin/addproduct" className=" w-[50%] sm:w-[80%]">
          <div className="flex items-center gap-3 border border-black px-3 py-2 font-medium">
            <Image src={assets.add_icon} width={28} alt="image" />
            Add Blog
          </div>
        </Link>
        <Link href="/admin/bloglist" className="w-[50%] sm:w-[80%] mt-5">
          <div className="flex items-center gap-3 border border-black px-3 py-2 font-medium">
            <Image src={assets.blog_icon} width={28} alt="image" />
            Blog List
          </div>
        </Link>
        <Link href="/admin/subscription" className=" w-[50%] sm:w-[80%] mt-5">
          <div className="flex items-center gap-3 border border-black px-3 py-2 font-medium">
            <Image src={assets.email_icon} width={28} alt="image" />
            Subscription
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
