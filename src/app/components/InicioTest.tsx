"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Button, Typography, TextField, CircularProgress } from "@mui/material";

export default function InicioTest() {
    const [nombre, setNombre] = useState<string>("");
    const [cargando, setCargando] = useState<boolean>(false);
    const router = useRouter();

    const iniciaTest = useCallback(async () => {
        if (!nombre.trim()) return;

        try {
            setCargando(true);
            const res = await fetch("/api/guardar-nombre", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre }),
            });

            if (!res.ok) {
                console.error("Error al guardar el nombre.");
                return;
            }

            router.push("/pregunta/1");
        } catch (error) {
            console.error("Error al iniciar el test:", error);
        } finally {
            setCargando(false);
        }
    }, [nombre, router]);

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
                🔮 Test de personalidad 🔮
            </Typography>
            <Card sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Ingresa tu nombre para comenzar
                </Typography>
                <TextField
                    label="Escribe un nombre aquí..."
                    variant="outlined"
                    fullWidth
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    sx={{ mb: 2 }}
                    disabled={cargando}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={iniciaTest}
                    disabled={!nombre.trim() || cargando}
                >
                    {cargando ? <CircularProgress size={24} /> : "Comenzar"}
                </Button>
            </Card>
        </Container>
    );
}
