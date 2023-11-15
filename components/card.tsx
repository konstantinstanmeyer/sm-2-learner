"use client"

import { useState } from "react";

interface sample {
    original: string;
    translation: string;
}

const sample1: sample = {
    original: "La ensalada lleva berro y espinaca",
    translation: "The salad has watercress and spinach"
}

export default function Card(){
    const [isClicked, setIsClicked] = useState<boolean>(false);

    return (
        <div onClick={() => setIsClicked(!isClicked)} className="card card-1">
            {isClicked ? 
            <p>{sample1.original}</p>
            :
            <p>{sample1.translation}</p>}
        </div>
    )
}