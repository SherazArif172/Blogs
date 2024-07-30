import { connectDb } from "@/lib/config/db";
import BlogModel from "@/lib/models/blogModel";
import { SourceCode } from "eslint";

const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadData = async () => {
  connectDb();
  console.log("connected");
};

LoadData();

//get request

export async function GET(res) {
  return NextResponse.json({ msg: "api is working" });
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
