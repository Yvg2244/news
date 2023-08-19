import { NextResponse } from "next/server";
export async function GET(req:Request) {
    const data=new URL(req.url)
    return NextResponse.json(data)
}