import { NextResponse } from "next/server";
import { obtenerRespuestas, obtenerNombre } from "@/app/lib/db";
import { preguntas, descripcionesAptitudes } from "@/data/preguntas_respuestas";

export async function GET() {
    const nombre = obtenerNombre();
    const respuestas = obtenerRespuestas();

    if (!nombre || Object.keys(respuestas).length === 0) {
        return NextResponse.json({ error: "No hay datos almacenados." }, { status: 400 });
    }

    // Obtener las aptitudes basadas en las respuestas
    const aptitudes = Object.values(respuestas)
        .map((respuesta: string, index: number) =>
            preguntas[index]?.opciones.find((opt) => opt.texto === respuesta)?.aptitud
        )
        .filter(Boolean) as string[];

    // Generar la descripción final basada en las aptitudes
    const descripcionFinal = aptitudes.length > 0
        ? aptitudes.map((apt) => descripcionesAptitudes[apt]).join(", ")
        : "No se encontraron aptitudes.";

    return NextResponse.json({
        nombre,
        respuestas,
        aptitudes,
        descripcionFinal,
    });
}
