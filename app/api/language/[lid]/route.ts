import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

interface Params {
    lid: string;
}

export async function GET(request: NextRequest, context: { params: Params }){
    // console.log(process.cwd());
    const textBlocks = (await fs.readFile(process.cwd() + "/lib/common-language/" + context.params.lid + "/basic.txt", 'utf-8'));

    return NextResponse.json(textBlocks, { status: 200 });
}