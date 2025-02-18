import { esNumeroValido } from "@/app/utils/validaciones";
import { redirect } from "next/navigation";
import Pregunta from "@/app/components/PreguntaCliente";
import { preguntas } from "@/data/preguntas_respuestas";

interface PreguntaPageProps {
    params: Promise<{ id: string }>;
}

export default async function PreguntaPage({ params }: PreguntaPageProps) {
    const { id } = await params;
    const cantidadPreguntas = preguntas.length;
    const preguntaActual = Number(id);

    if (isNaN(preguntaActual) || !esNumeroValido(preguntaActual, cantidadPreguntas)) {
        redirect("/resultado");
    }

    return <Pregunta preguntaActual={preguntaActual} />;
}
