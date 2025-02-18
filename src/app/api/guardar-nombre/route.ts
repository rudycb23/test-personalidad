import { NextResponse } from "next/server";
import { guardarNombre, obtenerNombre } from "@/app/lib/db";

export async function POST(request: Request) {
    const { nombre } = await request.json();
    guardarNombre(nombre);
    return NextResponse.json({ success: true });
}

export async function GET() {
    return NextResponse.json({ nombre: obtenerNombre() });
}
