import React from "react";
import { Box } from "@mui/material";

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
        marginRight: { xs: "5%", md: "5%", lg: "5%" }, // Misma separación que AboutHeaderInfo del izquierdo
        marginTop: "100px", // Desplazar 100px hacia abajo
      }}
    >
      <Box
        component="img"
        src="https://c.animaapp.com/mek1km8sOiUotz/img/bull-2---faded-1.png"
        alt="Bull faded"
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
