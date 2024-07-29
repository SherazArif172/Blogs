import { connectDb } from "@/lib/config/db";

const { NextResponse } = require("next/server");

const LoadData = async () => {
  connectDb();
  console.log("connected");
};

LoadData();

export async function GET(res) {
  return NextResponse.json({ msg: "api is working" });
}
