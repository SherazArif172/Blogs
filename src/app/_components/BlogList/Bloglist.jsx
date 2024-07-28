import React, { useState } from "react";
import Blogitem from "../Blogitem/Blogitem";
import { Button } from "@/components/ui/button";
import { blog_data } from "../../../../public/assets";

const Bloglist = () => {
  const [menue, setMenue] = useState("All");
  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <Button
          onClick={() => {
            setMenue("All");
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            setMenue("LifeStyle");
          }}
        >
          Life Style
        </Button>
        <Button
          onClick={() => {
            setMenue("Technology");
          }}
        >
          Technology
        </Button>
        <Button
          onClick={() => {
            setMenue("Startup");
          }}
        >
          Startup
        </Button>
      </div>
      <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center m-auto">
        {blog_data.map((item, index) => (
          <Blogitem
            key={index}
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
