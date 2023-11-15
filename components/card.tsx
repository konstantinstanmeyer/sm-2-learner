"use client"
import { useState } from "react";
import { Sample } from "@/lib/samples";
import CardOptions from "./CardOptions";

interface Props {
    cardInfo: Sample
}

export default function Card({ cardInfo }: Props){
    const [isClicked, setIsClicked] = useState<boolean>(false);

    return (
        <div onClick={() => setIsClicked(!isClicked)} className="card card-1 relative">
            {!cardInfo.isCharacter && cardInfo?.phonetic && !cardInfo.isNative ? 
                <p className="text-xs">{cardInfo.phonetic}</p> : null
            }
            <p className="font-[500] text-xl">{cardInfo.original}</p>
            {!isClicked ? null :
            <>
                <div className="h-[1px] w-1/2 mb-1.5 mt-1 bg-gray-400" />
                <p className="font-normal text-sm">{`${cardInfo.translation}`}</p>
                {cardInfo.isNative ? <p className="text-xs">{cardInfo.phonetic}</p> : null}
            </>
            }
            <CardOptions />
            <p className="absolute text-gray-500 -bottom-6 text-sm">click card to reveal answer</p>
        </div>
    )
}