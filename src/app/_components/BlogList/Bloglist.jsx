"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Blogitem from "../Blogitem/Blogitem";
import { Button } from "@/components/ui/button";
// import { blog_data } from "../../../../public/assets";
import axios from "axios";

const Bloglist = () => {
  const [menue, setMenue] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <Button
          onClick={() => {
            setMenue("All");
          }}
          className={`${
            menue === "All"
              ? "bg-black rounded-none border border-black w-20 px-16 py-2 "
              : "bg-white border border-black w-20 text-black px-16 py-2 rounded-none hover:text-white"
          }`}
        >
          All
        </Button>
        <Button
          onClick={() => {
            setMenue("Lifestyle");
          }}
          className={`${
            menue === "Lifestyle"
              ? "bg-black rounded-none border border-black w-20 px-16 py-2"
              : "bg-white border border-black w-20 text-black px-16 py-2 rounded-none hover:text-white"
          }`}
        >
          Life Style
        </Button>
        <Button
          className={`${
            menue === "Technology"
              ? "bg-black rounded-none border border-black w-20 px-16 py-2"
              : "bg-white border border-black w-20 text-black px-16 py-2 rounded-none hover:text-white"
          }`}
          onClick={() => {
            setMenue("Technology");
          }}
        >
          Technology
        </Button>
        <Button
          className={`${
            menue === "Startup"
              ? "bg-black rounded-none border border-black w-20 px-16 py-2 text-white"
              : "bg-white border border-black w-20 text-black px-16 py-2 rounded-none hover:text-white"
          }`}
          onClick={() => {
            setMenue("Startup");
          }}
        >
          Startup
        </Button>
      </div>
      <div className="mt-16 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center m-auto px-4">
        {blogs
          .filter((item) => (menue === "All" ? true : item.category === menue))
          .map((item, index) => (
            <Blogitem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
