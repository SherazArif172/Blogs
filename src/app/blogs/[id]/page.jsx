"use client";

import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../public/assets";
import Image from "next/image";

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
  return data ? (
    <div>
      <div className="py-16 bg-slate-300 text-center">
        <h1 className="md:text-4xl text-2xl font-bold max-w-[800px] m-auto">
          {data.title}
        </h1>
        <Image
          src={data.author_img}
          width={80}
          height={80}
          alt="image"
          className="m-auto mt-8"
        />
      </div>
      <div className="my-10 lg:px-16 md:px-8 px-4 ">
        <div className="relative aspect-video max-w-3xl  m-auto mt-8 overflow-hidden ">
          <Image
            src={data.image}
            fill
            alt="image"
            className="w-full h-full object-cover hover:scale-110 duration-500 "
          />
        </div>
        <div className="max-w-[770px] m-auto mt-8">
          <p className="text-2xl font-bold">Introduction</p>
          <p className="text-lg mt-5">{data.description}</p>
          <h3 className="text-2xl font-bold my-3">
            Step 1: Enhancing your skills and capturing memorable moments
          </h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem.
          </p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem.
          </p>
          <h3 className="text-2xl font-bold my-3">
            Step 1: Enhancing your skills and capturing memorable moments
          </h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem.
          </p>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem.
          </p>
          <h3 className="text-2xl font-bold my-3">
            Step 1: Enhancing your skills and capturing memorable moments
          </h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem.
          </p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem.
          </p>
          <h3 className="text-2xl font-bold my-3">Conclusion</h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos iste
            architecto repellat eveniet facilis exercitationem eum, sunt
            deserunt dolorem dolores quibusdam voluptates placeat numquam, sit
            praesentium odio, aliquam autem. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Dolor, doloremque!
          </p>
          <div className="mt-20 w-full">
            <p className="text-lg font-semibold ">
              Share this article on your social media.
            </p>{" "}
            <div className="flex gap-3 mt-4">
              <Image
                src={assets.facebook_icon}
                width={40}
                height={40}
                alt="image"
              />
              <Image
                src={assets.twitter_icon}
                width={40}
                height={40}
                alt="image"
              />
              <Image
                src={assets.googleplus_icon}
                width={40}
                height={40}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default page;
