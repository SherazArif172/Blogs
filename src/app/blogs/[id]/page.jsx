"use client";

import React, { useEffect, useState } from "react";
import { blog_data } from "../../../../public/assets";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const FetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => FetchBlogData(), []);
  return <div>{params.id}</div>;
};

export default page;
