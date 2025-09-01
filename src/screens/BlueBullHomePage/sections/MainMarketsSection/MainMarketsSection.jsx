import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import WorldmapImage from "../../../../assets/WorldMap.png";
import Separator from "../../../../assets/Separator.png";
import PopUpImage from "../../../../assets/Pop-Up.png";

export const MainMarketsSection = () => {
  const { t } = useTranslation();
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
        {t('mainMarkets.title')}
      </Typography>
      <Box
        component="img"
        src={Separator}
        alt="Separator line under Main Markets title"
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
        
        {/* Punto 1 - Mexico */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "6px", sm: "8px", md: "10px", lg: "16px" }, // Tamaño progresivo: móvil, tablet, desktop pequeño, desktop grande
            height: { xs: "6px", sm: "8px", md: "10px", lg: "16px" },
            backgroundColor: "white", // Color blanco por defecto
            borderRadius: "50%",
            top: { xs: "46%", sm: "46.5%", md: "47%", lg: "48%" }, // Posición específica para cada tamaño: móvil, tablet, desktop pequeño, desktop grande
            left: { xs: "15%", sm: "20.5%", md: "16%", lg: "17%" }, // Posición específica para cada tamaño
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)", // Sombra blanca
            cursor: "pointer",
            transition: "all 0.3s ease", // Transición suave
            animation: "pulse 4s infinite", // Animación de pulso más lenta (era 2s, ahora 4s)
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
              "50%": {
                transform: "scale(2.4)", // Doble del crecimiento anterior (era 1.2, ahora 2.4)
                opacity: 0.9,
                boxShadow: "0 0 25px rgba(255, 255, 255, 1), 0 0 35px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.6)", // Brillo mucho más intenso
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
            },
            "&:hover": {
              backgroundColor: "#00bfff", // Azul en hover
              transform: "scale(1.4)", // Crece al hacer hover
              boxShadow: "0 0 20px rgba(0, 191, 255, 0.8)", // Sombra azul en hover
              animation: "none", // Detiene la animación en hover
            },
          }}
          onMouseEnter={handlePointHover}
        />

        {/* Punto 2 - Argentina */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "6px", sm: "8px", md: "10px", lg: "16px" },
            height: { xs: "6px", sm: "8px", md: "10px", lg: "16px" },
            backgroundColor: "white", // Color blanco por defecto
            borderRadius: "50%",
            top: { xs: "70%", sm: "84%", md: "70%", lg: "72%" }, // Posición específica para cada tamaño
            left: { xs: "27%", sm: "31%", md: "28%", lg: "29%" }, // Posición específica para cada tamaño
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)", // Sombra blanca
            cursor: "pointer",
            transition: "all 0.3s ease", // Transición suave
            animation: "pulse 4s infinite 1s", // Animación de pulso más lenta con delay (era 2s, ahora 4s)
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
              "50%": {
                transform: "scale(2.4)", // Doble del crecimiento anterior (era 1.2, ahora 2.4)
                opacity: 0.9,
                boxShadow: "0 0 25px rgba(255, 255, 255, 1), 0 0 35px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.6)", // Brillo mucho más intenso
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
            },
            "&:hover": {
              backgroundColor: "#00bfff", // Azul en hover
              transform: "scale(1.4)", // Crece al hacer hover
              boxShadow: "0 0 20px rgba(0, 191, 255, 0.8)", // Sombra azul en hover
              animation: "none", // Detiene la animación en hover
            },
          }}
        />

       

        {/* Fondo con blur solo para el área del popup */}
        {showPopup && (
          <Box
            sx={{
              position: "absolute",
              width: { xs: "81%", sm: "69%", md: "65%", lg: "38rem" }, // Tablet: ajustado para coincidir con popup más pequeño
              height: { xs: "auto", md: "auto", lg: "39rem" },
              top: { xs: "5%", sm: "calc(5% - 150px)", md: "3%", lg: "0.5rem" }, // Tablet: 150px más arriba
              left: { xs: "35%", sm: "35%", md: "30%", lg: "30%" }, // Desplazado a la derecha como el popup
              transform: "translateX(-50%)",
              maxWidth: "36rem",
              backgroundColor: { xs: "rgba(0, 0, 0, 0.6)", sm: "rgba(0, 0, 0, 0.6)", md: "rgba(0, 0, 0, 0.4)", lg: "rgba(0, 0, 0, 0.4)" }, // Más opaco en móvil y tablet
              backdropFilter: { xs: "blur(8px)", sm: "blur(8px)", md: "blur(6px)", lg: "blur(6px)" }, // Más blur en móvil y tablet
              borderRadius: "12px",
              zIndex: 998,
              transition: "opacity 0.3s ease",
              animation: "popupPulse 2s ease-in-out infinite", // Misma animación que la card
              "@keyframes popupPulse": {
                "0%": {
                  transform: "translateX(-50%) scale(1)",
                },
                "50%": {
                  transform: "translateX(-50%) scale(1.05)", // Crece un poco
                },
                "100%": {
                  transform: "translateX(-50%) scale(1)",
                },
              },
            }}
            onMouseEnter={handlePopupHover}
            onMouseLeave={handlePopupLeave}
          />
        )}

        <Box
          component="img"
          src={PopUpImage}
          alt="Global Presence information popup displaying market details"
          className="popup-image"
          sx={{
            position: "absolute",
            width: { xs: "76.5%", sm: "65%", md: "60%", lg: "36.625rem" }, // Tablet: 15% más pequeño que móvil (76.5% -> 65%)
            height: { xs: "auto", lg: "37.9375rem" },
            top: { xs: "8%", sm: "calc(8% - 150px)", md: "5%", lg: "1.1875rem" }, // Tablet: 150px más arriba
            left: { xs: "35%", sm: "35%", md: "30%", lg: "30%" }, // Desplazado a la derecha en móvil y tablet
            transform: "translateX(-50%)",
            maxWidth: "36.625rem",
            opacity: showPopup ? 1 : 0,
            visibility: showPopup ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            zIndex: 999,
            animation: showPopup ? "popupPulse 2s ease-in-out infinite" : "none", // Animación de pulso solo cuando está visible
            "@keyframes popupPulse": {
              "0%": {
                transform: "translateX(-50%) scale(1)",
              },
              "50%": {
                transform: "translateX(-50%) scale(1.05)", // Crece un poco
              },
              "100%": {
                transform: "translateX(-50%) scale(1)",
              },
            },
          }}
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
        />
      </Box>
    </Box>
  );
};
