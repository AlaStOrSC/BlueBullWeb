import React from "react";
import { Box, Typography } from "@mui/material";

export const SolutionCard = ({ 
  id,
  icon, 
  iconAlt, 
  title, 
  description 
}) => {
  return (
    <Box
      className="solution-card"
      sx={{
        width: "100%", // Usar 100% del espacio disponible del Grid item
        maxWidth: "280px", // Aumentado a 280px para aprovechar mejor el espacio
        minWidth: "240px", // Aumentado el mínimo también
        height: "301px", // Mantenemos la altura aumentada
        borderRadius: "1.09rem",
        position: "relative",
        backgroundColor: "transparent",
        transition: "color 0.3s ease",
        mx: "auto", 
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "1.09rem",
          padding: "3px",
          background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.25rem",
        }}
      >
        {/* Icono con altura fija para consistencia */}
        <Box
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1.5,
            flexShrink: 0, // No se reduce
          }}
        >
          <Box
            component="img"
            src={icon}
            alt={iconAlt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Título con altura fija para alineación */}
        <Box
          sx={{
            height: "3.5rem", // Altura fija para que todos los títulos estén alineados
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
            flexShrink: 0, // No se reduce
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              fontSize: "1.035rem", // Reducido 8% (1.125rem * 0.92 = 1.035rem)
              lineHeight: 1.4,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Descripción que ocupa el espacio restante */}
        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: "0.805rem", // Reducido 8% (0.875rem * 0.92 = 0.805rem)
            lineHeight: 1.5,
            color: "#cccccc",
            textAlign: "center",
            flex: 1, // Ocupa el espacio restante
            display: "flex",
            alignItems: "flex-start", // Texto comienza desde arriba
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
