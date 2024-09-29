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
        <div onClick={(e: MouseEvent) => handleClick(e)} lang={id} className={`w-24 md:w-40 mx-2 rounded-md bg-[#fdf7ef] ${selection.includes(description) ? "bg-red-500" : "bg-[#fdf7ef]"} text-xl transition-all duration-300 py-3 min-h-[5rem] flex-col hyphens-manual break-words flex items-center justify-center neumorphic mb-4`}>
            {/* <div className="w-[95%] h-[3px] bg-red-600"/> */}
            <p className="text-black architects mx-1 ml-3">{description}</p>
        </div>
    )
}