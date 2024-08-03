"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../public/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Ishfaq Ahmad",
    authorImg: "/public/profile_icon.png",
  });

  const onchangeHndler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authortImg", data.authorImg);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    // console.log("Response:", response.data); // Add this line
    if (response) {
      toast.success("data saved");
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Ishfaq Ahmad",
        authorImg: "/public/profile_icon.png",
      });
    } else {
      toast.error("error");
    }
  };
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="py-5 px-5 sm:pt-12 sm:pl-16"
      >
        <div>
          <ToastContainer theme="dark" />
        </div>
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
          name="title"
          onChange={onchangeHndler}
          value={data.title}
        />
        <p className="text-xl mt-5">Blog descriptiob</p>
        <textarea
          type="text"
          required
          className="w-full sm:w-[500px] py-3 px-3 border border-black mt-3"
          placeholder="Write content here"
          rows={6}
          name="description"
          onChange={onchangeHndler}
          value={data.description}
        />
        <p className="text-xl mt-5">Blog category</p>
        <select
          name="category"
          onChange={onchangeHndler}
          value={data.category}
          className="w-40 mt-5 px-4 py-2 border border-black text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
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
