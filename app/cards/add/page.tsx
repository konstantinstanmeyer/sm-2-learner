"use client"

import convertToBase64 from "@/util/convertToBase64";
import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "@/types/models";
import fetchLanguage from '@/util/language'
import PreviewCard from "./PreviewCard";

const WIDTH = 100;

function getData(currentLanguage: string): Promise<any>{
    return fetch("http://localhost:3000/api/language/" + currentLanguage)
    .then(r => r.json())
}

export default function AddCards(){
    const [image, setImage] = useState<string>("");
    const [cards, setCards] = useState<Array<Card>>([]);
    const [currLang, setCurrLang] = useState<string>("id");
    const [previousLanguage, setPreviousLanguage] = useState<string | undefined>(undefined);
    const [newCards, setNewCards] = useState<Array<string>>([]);
    const [previewCards, setPreviewCards] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isChange, setIsChange] = useState<boolean>(true);

    useEffect(() => {
        getData(currLang)
        .then(data => {
            console.log(data);
            setPreviewCards(emptySet => data.textBlocks);
        })
    }, [])

    console.log(newCards);
    
    async function handleFileUpload(e: ChangeEvent){
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        const imageString = (await convertToBase64(file));

        let img = document.createElement("img");
        img.src = imageString;

        img.onload = (e: any) => {
            let canvas = document.createElement("canvas");
            let ratio = WIDTH / e.target.width;

            canvas.width = WIDTH;
            canvas.height = (e.target as any).height * ratio;

            const context = canvas.getContext("2d") as CanvasRenderingContext2D;
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            let newImageUrl = context.canvas.toDataURL("image/gif", 50);
            setImage(newImageUrl);
            console.log(newImageUrl.length)
        }
    }
    
    return (
        <div id="card-container" className="mt-[40vh] card-container flex items-center flex-col justify-center">
            <h1 className="">Language Selected: Indonesian</h1>
            <div>
                <select onChange={(e: any) => setCurrLang
            (e.target.value)}>
                    <option>id</option>
                    <option>as</option>
                    <option>en</option>
                    <option>il</option>
                    <option>sp</option>
                </select>
            </div>
            <form id="testing" className="w-1/2 h-fit bg-white mb-4">
                <input type="text" placeholder="" />
            </form>
            <button className="bg-gray-300 justify-center items-center flex p-4">
                <h3 className="w-fit h-fit">Populate Cards (add 5)</h3>
            </button>
            <p>Preview Selection:</p>
            <div id="preview-cards" className="flex flex-wrap justify-center items-center">
                {previewCards?.map((cardInfo, i) => 
                    <PreviewCard key={ i + "previewCard"}id={"previewCard" + i} selection={newCards} setSelection={setNewCards} description={cardInfo} />
                )}
            </div>
            {/* <Keyboard /> */}
            <div id="previous-cards" className="">
                
            </div>
            <form>
                <input 
                    type="file"
                    name="myFile"
                    id='file-upload'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e: ChangeEvent) => handleFileUpload(e)}
                />
            </form>
            <h3 className="font-">image preview</h3>
            <img src={image} />
        </div>
    )
}

export async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}