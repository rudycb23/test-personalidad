"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Typography, Button, Grid, Paper } from "@mui/material";
import Confetti from "react-confetti";
import { preguntas, descripcionesAptitudes } from "@/data/preguntas_respuestas";
import { buscarElementos } from "@/app/utils/buscarElementos";
import { fetchData, postData } from "@/app/utils/apiHelpers";
import { capitalizar } from "@/app/utils/formatText";

export default function ResultadoClient() {
    const router = useRouter();
    const [nombre, setNombre] = useState<string>("");
    const [aptitudesSeleccionadas, setAptitudesSeleccionadas] = useState<string[]>([]);
    const [elementosQuimicos, setElementosQuimicos] = useState<string[]>([]);
    const [mostrarConfetti, setMostrarConfetti] = useState<boolean>(true);

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const nombreData = await fetchData("/api/guardar-nombre");
                if (!nombreData?.nombre) {
                    router.push("/");
                    return;
                }
                setNombre(nombreData.nombre);

                const data = await fetchData("/api/obtener-resultado");
                if (!data?.respuestas || Object.keys(data.respuestas).length === 0) {
                    router.push("/");
                    return;
                }

                const respuestas = Object.values(data.respuestas) as string[];
                const aptitudes = respuestas
                    .map((respuesta, index) =>
                        preguntas[index]?.opciones.find((opt) => opt.texto === respuesta)?.aptitud
                    )
                    .filter(Boolean) as string[];

                setAptitudesSeleccionadas(aptitudes);
                setElementosQuimicos(buscarElementos(nombreData.nombre).map((el) => `${el.simbolo} (${el.nombre})`));
            } catch (error) {
                console.error("Error obteniendo datos:", error);
                router.push("/");
            }
        };

        fetchDatos();

        const confettiTimer = setTimeout(() => setMostrarConfetti(false), 4000);
        return () => clearTimeout(confettiTimer);
    }, [router]);

    // Generar descripción final capitalizada
    const descripcionFinal = useMemo(() => {
        if (aptitudesSeleccionadas.length === 0) return "No se encontraron aptitudes.";
        return capitalizar(aptitudesSeleccionadas.map((apt) => descripcionesAptitudes[apt]).join(", "));
    }, [aptitudesSeleccionadas]);

    // Manejo del reinicio de datos
    const manejarReinicio = async () => {
        await postData("/api/reiniciar-respuestas", {});
        await postData("/api/guardar-nombre", { nombre: "" });
        router.push("/");
    };

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
            {mostrarConfetti && <Confetti numberOfPieces={250} />}
            <Card sx={{ p: 4, mb: 1 }}>
                <Typography variant="h5" sx={{ p: 1, mb: 1 }}>
                    ¡{nombre}! 😄 Tu resultado es:
                </Typography>
                <Typography variant="h6" color="secondary">{descripcionFinal}</Typography>

                <Typography variant="h6" sx={{ my: 3 }}>Tus aptitudes destacadas:</Typography>
                <Grid container spacing={2} justifyContent="center">
                    {aptitudesSeleccionadas.map((aptitud, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Paper elevation={4} sx={{ p: 1, textAlign: "start", fontWeight: "bold" }}>
                                🔹 {capitalizar(aptitud.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2"))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h6" sx={{ my: 3 }}>Elementos químicos encontrados en tu nombre:</Typography>
                <Grid container spacing={2} justifyContent="center">
                    {elementosQuimicos.length > 0 ? (
                        elementosQuimicos.map((elemento, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper elevation={4} sx={{ p: 1, textAlign: "start", fontWeight: "bold" }}>
                                    ⚛️ {elemento}
                                </Paper>
                            </Grid>
                        ))
                    ) : (
                        <Typography>No se encontraron elementos químicos en tu nombre.</Typography>
                    )}
                </Grid>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={manejarReinicio}
                    sx={{ mt: 4, mx: "auto", display: "block" }}
                >
                    Reiniciar
                </Button>
            </Card>
        </Container>
    );
}
