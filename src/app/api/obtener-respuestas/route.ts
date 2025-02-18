import { NextResponse } from "next/server";
import { obtenerRespuestas } from "@/app/lib/db";

export async function GET() {
    const respuestas = obtenerRespuestas();

    if (Object.keys(respuestas).length === 0) {
        return NextResponse.json({ error: "No hay respuestas almacenadas." }, { status: 400 });
    }

    return NextResponse.json({ respuestas });
}
