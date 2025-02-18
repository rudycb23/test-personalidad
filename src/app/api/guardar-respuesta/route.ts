import { NextResponse } from "next/server";
import { guardarRespuesta } from "@/app/lib/db";

export async function POST(request: Request) {
    const { pregunta, respuesta } = await request.json();
    guardarRespuesta(pregunta, respuesta);
    return NextResponse.json({ success: true });
}
