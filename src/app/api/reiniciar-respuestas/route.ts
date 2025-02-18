import { NextResponse } from "next/server";
import { reiniciarDatos } from "@/app/lib/db";

export async function POST() {
    reiniciarDatos();
    return NextResponse.json({ success: true, message: "Datos reiniciados correctamente." });
}
