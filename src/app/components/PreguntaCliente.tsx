"use client";
import { fetchData, postData } from "@/app/utils/apiHelpers";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Container,
    Card,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    LinearProgress,
} from "@mui/material";
import { preguntas } from "@/data/preguntas_respuestas";
import { motion } from "framer-motion";

interface PreguntaProps {
    preguntaActual: number;
}

export default function Pregunta({ preguntaActual }: PreguntaProps) {
    const router = useRouter();
    const pregunta = preguntas[preguntaActual - 1];
    const cantidadPreguntas = preguntas.length;
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);

    useEffect(() => {
        const cargarRespuesta = async () => {
            const data = await fetchData("/api/obtener-respuestas");
            if (data) {
                setRespuestaSeleccionada(data.respuestas[preguntaActual] || null);
            }
        };
        cargarRespuesta();
    }, [preguntaActual]);

    const manejarRespuesta = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setRespuestaSeleccionada(e.target.value);

        await postData("/api/guardar-respuesta", {
            pregunta: preguntaActual,
            respuesta: e.target.value,
        });

        router.push(`/pregunta/${preguntaActual + 1}`);
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <Card sx={{ p: 4 }}>
                    <Typography variant="h5" color="textSecondary">
                        Pregunta {preguntaActual}/{cantidadPreguntas}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {pregunta.pregunta}
                    </Typography>
                    <RadioGroup value={respuestaSeleccionada || ""} onChange={manejarRespuesta}>
                        {pregunta.opciones.map((opcion, index) => (
                            <FormControlLabel key={index} value={opcion.texto} control={<Radio />} label={opcion.texto} />
                        ))}
                    </RadioGroup>
                    <LinearProgress
                        variant="determinate"
                        value={(preguntaActual / cantidadPreguntas) * 100}
                        sx={{ mt: 2 }}
                    />
                </Card>
            </motion.div>
        </Container>
    );
}
