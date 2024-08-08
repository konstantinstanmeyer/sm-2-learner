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

        // crude handling to check index before and after randomly generated value to avoid repeated entries and avoid recursion
        if(!results.includes(incoming)){
            results.push(incoming);
        } else if(!results?.includes(textBlocks[index + 1])){
            // this and next condition should rarely if ever run, chance depends on how many entries are generated by a given language
            results.push(textBlocks[index + 1]);
        } else if(!results?.includes(textBlocks[index - 1])){
            results.push(textBlocks[index - 1])
        }
    }

    return results;
    // console.log(textBlocks);
}