import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import WorldmapImage from "../../../../assets/Worldmap.png";

export const MainMarketsSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef(null);

  const handlePointHover = () => {
    // Mostrar el popup inmediatamente
    setShowPopup(true);
    
    // Limpiar cualquier timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Ocultar después de 5 segundos
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const handlePopupHover = () => {
    // Si el usuario hace hover sobre el popup, mantenerlo visible
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePopupLeave = () => {
    // Cuando salga del popup, ocultarlo después de un breve delay
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        pt: { xs: "6rem", md: "8rem" },
        pb: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 600,
          color: "white",
          fontSize: { xs: "1.8rem", md: "2.7rem", lg: "3.375rem" }, // Reducido 10%
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        Main Markets
      </Typography>
      <Box
        component="img"
        src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
        alt="Underline"
        sx={{ 
          width: { xs: "4rem", md: "5.5rem" }, 
          height: { xs: "0.3rem", md: "0.4375rem" } 
        }}
      />

      {/* World Map */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "90rem",
          height: { xs: "20rem", md: "30rem", lg: "44rem" },
          mx: "auto",
          mt: { xs: 4, md: 8 },
          backgroundImage: `url(${WorldmapImage})`, // Tu nueva imagen del mapa
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Custom Map Points - Puedes ajustar el tamaño cambiando width y height */}
        
        {/* Punto 1 - América con hover para mostrar pop-up */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "6px", md: "10px", lg: "16px" }, // Más pequeño en móvil
            height: { xs: "6px", md: "10px", lg: "16px" },
            backgroundColor: "#00bfff", // Azul claro original
            borderRadius: "50%",
            top: { xs: "45%", md: "47%", lg: "48%" }, // Ajustado para mobile
            left: { xs: "15%", md: "16%", lg: "17%" }, // Ajustado para mobile
            boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)", // Sombra más intensa
            animation: "pulse 2s infinite",
            cursor: "pointer",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)",
              },
              "50%": {
                transform: "scale(1.3)", // Escala más grande
                opacity: 0.8,
                boxShadow: "0 0 25px rgba(0, 191, 255, 1), 0 0 35px rgba(0, 191, 255, 0.6)", // Brillo más intenso
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)",
              },
            },
          }}
          onMouseEnter={handlePointHover}
        />

        {/* Punto 2 - Europa */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "6px", md: "10px", lg: "16px" },
            height: { xs: "6px", md: "10px", lg: "16px" },
            backgroundColor: "#00bfff", // Azul claro original
            borderRadius: "50%",
            top: { xs: "68%", md: "70%", lg: "72%" }, // Ajustado para mobile
            left: { xs: "26%", md: "28%", lg: "29%" }, // Ajustado para mobile
            boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)", // Sombra más intensa
            animation: "pulse 2s infinite 0.5s",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)",
              },
              "50%": {
                transform: "scale(1.3)", // Escala más grande
                opacity: 0.8,
                boxShadow: "0 0 25px rgba(0, 191, 255, 1), 0 0 35px rgba(0, 191, 255, 0.6)", // Brillo más intenso
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)",
              },
            },
          }}
        />

        {/* Punto 3 - Asia */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "6px", md: "10px", lg: "16px" },
            height: { xs: "6px", md: "10px", lg: "16px" },
            backgroundColor: "#00bfff", // Azul claro original
            borderRadius: "50%",
            top: { xs: "76%", md: "78%", lg: "80%" }, // Ajustado para mobile
            left: { xs: "27%", md: "29%", lg: "30%" }, // Ajustado para mobile
            boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)", // Sombra más intensa
            animation: "pulse 2s infinite 1s",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)",
              },
              "50%": {
                transform: "scale(1.3)", // Escala más grande
                opacity: 0.8,
                boxShadow: "0 0 25px rgba(0, 191, 255, 1), 0 0 35px rgba(0, 191, 255, 0.6)", // Brillo más intenso
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.8)",
              },
            },
          }}
        />

        {/* Fondo con blur solo para el área del popup */}
        {showPopup && (
          <Box
            sx={{
              position: "absolute",
              width: { xs: "90%", md: "65%", lg: "38rem" },
              height: { xs: "auto", md: "auto", lg: "39rem" },
              top: { xs: "5%", md: "3%", lg: "0.5rem" },
              left: "50%",
              transform: "translateX(-50%)",
              maxWidth: "38rem",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(6px)",
              borderRadius: "12px",
              zIndex: 998,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={handlePopupHover}
            onMouseLeave={handlePopupLeave}
          />
        )}

        <Box
          component="img"
          src="https://c.animaapp.com/mek1km8sOiUotz/img/pop-up.svg"
          alt="Global Presence Popup"
          className="popup-image"
          sx={{
            position: "absolute",
            width: { xs: "85%", md: "60%", lg: "36.625rem" },
            height: { xs: "auto", lg: "37.9375rem" },
            top: { xs: "8%", md: "5%", lg: "1.1875rem" },
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "36.625rem",
            opacity: showPopup ? 1 : 0,
            visibility: showPopup ? "visible" : "hidden",
            transition: "all 0.3s ease",
            zIndex: 999,
          }}
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
        />
      </Box>
    </Box>
  );
};
