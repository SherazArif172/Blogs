"use client";

import React, { useEffect, useState } from "react";
import BlogTableItem from "../_components/BlogTableItem";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [blog, setBlog] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlog(response.data.blogs);
  };

  const DeleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.blog);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 lg:pt-12 sm:pl-16">
      <p className="text-2xl font-bold">All blogs</p>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-black">
        <table className="w-full text-sm text-gray-500">
          <thead className="uppercase bg-gray-400">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Aurthor Name
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog title
              </th>
              <th scope="col" className=" px-6 py-3">
                Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blog.map((item, index) => (
              <BlogTableItem
                key={index}
                mongoId={item._id}
                title={item.title}
                author={item.author}
                authorImg={item.authorImg}
                date={item.date}
                deleteBlog={DeleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
