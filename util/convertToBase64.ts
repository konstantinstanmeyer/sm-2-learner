import { ChangeEvent } from "react";

export default function convertToBase64(file: File): Promise<string>{
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            // let imageUrl = e.target?.result;

            // const string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApEAAAJlCAYAAACCKKnEAAAMP2lDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBogVCkhN4EkV6khNAiCEgVbIQkQCgxJgQVOyIquHaxg"

            // console.log(string.slice(0, 51))

            // console.log(imageUrl)

            // let image = document.createElement('img');
            // image.src = imageUrl as string;

            // image.onload = () => {
            //     let canvas = document.createElement('canvas');

            // }

            resolve(fileReader.result as string);
        }

        fileReader.onerror = (e) => reject(e);
    })
}