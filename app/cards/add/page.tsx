"use client"

const WIDTH = 144;

import convertToBase64 from "@/util/convertToBase64";
import { ChangeEvent, useState } from "react";

export default function AddCards(){
    const [image, setImage] = useState<string>("")
    
    async function handleFileUpload(e: ChangeEvent){
        const target= e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        const image = (await convertToBase64(file)) as string;
        setImage(image);
    }
    
    return (
        <div className="mt-[10vh]">
            <form>
                <input 
                    type="file"
                    name="myFile"
                    id='file-upload'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e: ChangeEvent) => handleFileUpload(e)}
                />
            </form>
            <img src={image} />
        </div>
    )
}