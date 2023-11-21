import mongoDBConnection from "@/lib/mongodb/connection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "@/types/models";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  const { email, card } = await request.json();
  const filter = { email: email };
  await mongoDBConnection();
  console.log("2222")
  const user = await User.findOne(filter);
  console.log(user)
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const headersInstance = headers()

  const email = headersInstance.get("authorization");

  const filter = { email: email };

  await mongoDBConnection();
  const user = await User.findOne(filter);

  const cards = user.cards;

  return NextResponse.json(cards, { status: 200 });
}