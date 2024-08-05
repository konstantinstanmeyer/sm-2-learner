import { promises as fs } from "fs"

export default async function fetchLanguage(language: string){
    const enc = new TextDecoder("utf-8");
    
    // const start = await performance.now();

    const textBlocks = (await fs.readFile(process.cwd() + "/lib/common-language/" + language + "/basic.txt", 'utf-8')).split("\n");

    // const end = await performance.now();

    const results: Array<any> = [];

    for(let i = 0; i <= 5; i++){
        let index = Math.floor(Math.random() * textBlocks.length - 1);

        let incoming = textBlocks[index];

        if(!results.includes(incoming)){
            results.push(incoming);
        }
    }

    return results;
    // console.log(textBlocks);
}