import React from "react";
import { Box } from "@mui/material";
import BlueBullElegant from "../../../../assets/BlueBull-Elegant.png";

export const HeroImageContent = () => {
  return (
    <Box
      sx={{
        flex: { xs: "none", lg: 1 },
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-end" },
        alignItems: "center",
        position: "relative",
        minHeight: { xs: "20rem", md: "30rem", lg: "40rem" },
        marginRight: { xs: "auto", md: "auto", lg: "5%" }, // Centrado automático en móvil y tablet, margen derecho en desktop
        marginLeft: { xs: "auto", md: "auto", lg: "0" }, // Centrado automático en móvil y tablet
        marginTop: "100px", // Desplazar 50px hacia abajo
        px: { xs: 2, md: 4, lg: 0 }, // Padding horizontal para móviles y tablets
      }}
    >
      <Box
        component="img"
        src={BlueBullElegant}
        alt="BlueBull Elegant"
        sx={{
          width: { xs: "100%", md: "80%", lg: "90%" },
          height: "auto",
          maxWidth: "54.5rem",
          objectFit: "contain",
          filter: "drop-shadow(0 0 2rem rgba(0, 191, 255, 0.3))",
        }}
      />
    </Box>
  );
};
