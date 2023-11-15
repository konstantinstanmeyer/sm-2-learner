import mongoDBConnection from "@/lib/mongodb/connection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, EF, repitition, interval, cardID } = await request.json();
  console.log("hello there")
  await mongoDBConnection();
  console.log("2222")
  await User.create({ email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}