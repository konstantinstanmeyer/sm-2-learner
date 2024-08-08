"use client"

import { Dispatch, MouseEvent, SetStateAction } from "react"

interface Props {
    description: string;
    id: string;
    setSelection: Dispatch<SetStateAction<Array<string>>>;
    selection: Array<any>;
}

export default function PreviewCard({ description, id, setSelection, selection }: Props){
    function handleClick(e: MouseEvent){
        const content = (e.target as HTMLElement).textContent;
        console.log(content === description);
        if(!selection.includes(content)){
            setSelection([...selection, content]);
        } else {
            if(content){
                console.log("remove");
                const newSelection = selection.filter(item => item !== content)
                setSelection(newSelection);
            }
        }
    }

    return (
        <div onClick={(e: MouseEvent) => handleClick(e)} lang={id} className={`w-40 mx-2 bg-gray-300 ${selection.includes(description) ? "bg-red-500" : "bg-black"} py-3 min-h-[5rem] px-4 break-all flex items-center justify-center neumorphic mb-2`}>
            <p className="text-black text-center">{description}</p>
        </div>
    )
}