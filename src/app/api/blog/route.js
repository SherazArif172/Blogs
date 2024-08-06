import { connectDb } from "@/lib/config/db";
import BlogModel from "@/lib/models/blogModel";
// import { SourceCode } from "eslint";

const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadData = async () => {
  await connectDb();
  // console.log("connected");
};

LoadData();

//get request

export async function GET(req) {
  const url = new URL(req.url); // Create a URL instance from req.url
  const blogId = url.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// post request
export async function POST(req) {
  const formData = await req.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Data has been saved");

  return NextResponse.json({ Success: true, msg: "blog added" });
}
