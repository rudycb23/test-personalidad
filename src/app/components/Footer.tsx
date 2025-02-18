import Link from "next/link";
import { Container, Typography, Box } from "@mui/material";

const currentYear: number = new Date().getFullYear();

export default function Footer() {
    return (
        <Box className="footer" component="footer" sx={{ textAlign: "center", mt: 5, py: 3 }}>
            <Container maxWidth="sm">
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <img src="/next.svg" alt="Next.js logo" width={180} height={38} />
                </Box>

                <Typography variant="body1" component="p">
                    <Link href="https://www.linkedin.com/in/rudy-campos-badilla-85a26a159/" passHref>
                        <Box
                            component="span"
                            sx={{
                                textDecoration: "none",
                                cursor: "pointer",
                                color: "inherit",
                            }}
                        >
                            <strong>Rudy Campos</strong>
                        </Box>
                    </Link>{" "}
                    | <code>Front-end Engineer</code> | React/Next.js | {currentYear}
                </Typography>

                <Typography variant="body2" component="p" sx={{ mt: 1 }}>
                    <code>Trained Web Developer</code> – Universidad Cenfotec & Universidad Americana.
                </Typography>
            </Container>
        </Box>
    );
}
