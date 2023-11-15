import mongoDBConnection from "@/lib/mongodb/connection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { Card } from "@/types/models";

export async function POST(request: NextRequest) {
  const { email, card } = await request.json();
  const filter = { email: email };
  await mongoDBConnection();
  console.log("2222")
  const user = await User.findOne(filter);
  console.log(user)
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}