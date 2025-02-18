import { esNumeroValido } from "@/app/utils/validaciones";
import { redirect } from "next/navigation";
import Pregunta from "@/app/components/PreguntaCliente";
import { preguntas } from "@/data/preguntas_respuestas";

interface PreguntaPageProps {
    params: { id: string };
}

export default function PreguntaPage({ params }: PreguntaPageProps) {
    const cantidadPreguntas = preguntas.length;

    if (!esNumeroValido(params.id, cantidadPreguntas)) {
        redirect("/resultado");
    }

    return <Pregunta preguntaActual={parseInt(params.id)} />;
}
