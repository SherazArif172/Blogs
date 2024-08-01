"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../public/assets";

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Ishfaq Ahmad",
    authorImg: "/public/profile_icon.png",
  });
  return (
    <>
      <form action="" className="py-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image" className="">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={140}
            alt="IMAGE"
            className="mt-5"
          />
        </label>
        <input
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          type="file"
          name=""
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-5">Blog title</p>
        <input
          type="text"
          required
          className="w-full sm:w-[500px] py-3 px-3 border border-black mt-3"
          placeholder="Type here"
        />
        <p className="text-xl mt-5">Blog descriptiob</p>
        <textarea
          type="text"
          required
          className="w-full sm:w-[500px] py-3 px-3 border border-black mt-3"
          placeholder="Write content here"
          rows={6}
        />
        <p className="text-xl mt-5">Blog category</p>
        <select
          name="category"
          className="w-40 mt-5 px-4 py-2 border border-black text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>{" "}
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white font-semibold"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Page;
