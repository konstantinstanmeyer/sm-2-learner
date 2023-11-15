import mongoDBConnection from "@/lib/mongodb/connection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { Card } from "@/types/models"
import sm2 from "@/lib/sm2"

export async function POST(request: NextRequest) {
    const { email, userGrade, cardID } = await request.json();
    const filter = { email: email };

    await mongoDBConnection();

    const user = await User.findOne(filter);
    const cardIndex = user.cards.findIndex((c: Card) => c._id === cardID);
    const card = user.cards[cardIndex];

    const newCard = sm2({card, userGrade});

    user.cards[cardIndex] = newCard;

    user.save();

    return NextResponse.json({ message: "User Card Updated" }, { status: 200 });
}