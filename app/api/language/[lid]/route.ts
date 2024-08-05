import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

interface Params {
    lid: string;
}

export async function GET(request: NextRequest, context: { params: Params }){
    // console.log(process.cwd());
    const text = await fs.readFile(process.cwd() + "/lib/common-language/" + context.params.lid + "/basic.txt", 'utf-8');

    const textBlocks = text.split('\n');

    const result: Array<any> = [];

    for(let i = 0; i < 5; i++){
        let index = Math.floor(Math.random() * textBlocks.length - 1);
    
        let incoming = textBlocks[index];
    
        if(!result.includes(incoming)){
            result.push(incoming);
        }
    }

    return NextResponse.json({ textBlocks: result}, { status: 200 });
}