import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PopUpCard } from "../../../../components/PopUpCard";
import WorldmapImage from "../../../../assets/WorldMap.png";
import Separator from "../../../../assets/Separator.png";

export const MainMarketsSection = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef(null);

  const handlePointHover = () => {
    setShowPopup(true);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const handlePopupHover = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePopupLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };

  const handleLearnMore = () => {
    console.log("Learn more clicked for Mexico market");
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
          fontSize: { xs: "1.8rem", md: "2.7rem", lg: "3.375rem" },
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
          backgroundImage: `url(${WorldmapImage})`,
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
            width: { xs: "6px", sm: "8px", md: "10px", lg: "16px" },
            height: { xs: "6px", sm: "8px", md: "10px", lg: "16px" },
            backgroundColor: "white",
            borderRadius: "50%",
            top: { xs: "46%", sm: "46.5%", md: "47%", lg: "48%" },
            left: { xs: "15%", sm: "20.5%", md: "16%", lg: "17%" },
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            animation: "pulse 4s infinite",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
              "50%": {
                transform: "scale(2.4)",
                opacity: 0.9,
                boxShadow: "0 0 25px rgba(255, 255, 255, 1), 0 0 35px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.6)",
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
            },
            "&:hover": {
              backgroundColor: "#00bfff",
              transform: "scale(1.4)",
              boxShadow: "0 0 20px rgba(0, 191, 255, 0.8)",
              animation: "none",
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
            backgroundColor: "white",
            borderRadius: "50%",
            top: { xs: "70%", sm: "84%", md: "70%", lg: "72%" },
            left: { xs: "27%", sm: "31%", md: "28%", lg: "29%" },
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            animation: "pulse 4s infinite 1s",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
              "50%": {
                transform: "scale(2.4)",
                opacity: 0.9,
                boxShadow: "0 0 25px rgba(255, 255, 255, 1), 0 0 35px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.6)",
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
              },
            },
            "&:hover": {
              backgroundColor: "#00bfff",
              transform: "scale(1.4)",
              boxShadow: "0 0 20px rgba(0, 191, 255, 0.8)",
              animation: "none",
            },
          }}
        />

       

        {/* PopUp Card Component */}
        {showPopup && (
          <Box
            sx={{
              position: "absolute",
              top: { xs: "5%", sm: "calc(5% - 150px)", md: "3%", lg: "1rem", xl: "1.5rem" },
              left: { xs: "35%", sm: "35%", md: "30%", lg: "30%" },
              transform: "translateX(-50%)",
              zIndex: 999,
              opacity: showPopup ? 1 : 0,
              visibility: showPopup ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
              animation: showPopup ? "popupPulse 2s ease-in-out infinite" : "none",
              "@keyframes popupPulse": {
                "0%": {
                  transform: "translateX(-50%) scale(1)",
                },
                "50%": {
                  transform: "translateX(-50%) scale(1.02)",
                },
                "100%": {
                  transform: "translateX(-50%) scale(1)",
                },
              },
            }}
            onMouseEnter={handlePopupHover}
            onMouseLeave={handlePopupLeave}
          >
            <PopUpCard
              title="Mexico Market"
              subtitle="Leading iGaming Hub"
              description="Explore opportunities in one of Latin America's fastest-growing gaming markets with over 120 million potential players"
              onReadMore={handleLearnMore}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
