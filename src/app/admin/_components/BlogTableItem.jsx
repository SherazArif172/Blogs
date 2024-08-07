import Image from "next/image";
import React from "react";
import { assets } from "../../../../public/assets";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  mongoId,
  deleteBlog,
}) => {
  const Blogdate = new Date(date);
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-5 font-medium text-gray-900 whitespace-nowrap"
      >
        {/* <Image src={authorImg ? authorImg : assets.profile_icon}></Image> */}
        <p className="">{author ? author : "no author"}</p>
      </th>
      <td className="px-6 py-4 text-center">{title ? title : "no title"}</td>
      <td className="px-6 py-4 text-center">{Blogdate.toDateString()}</td>
      <td
        className="px-6 py-4 text-center cursor-pointer"
        onClick={() => deleteBlog(mongoId)}
      >
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
