import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const AboutHeaderInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCaseStudiesClick = () => {
    navigate('/case-studies');
  };
  
  return (
    <Box
      sx={{
        flex: { xs: "none", lg: 1 },
        maxWidth: { xs: "100%", lg: "50rem" },
        zIndex: 2,
        marginLeft: { xs: "auto", md: "auto", lg: "5%" },
        marginRight: { xs: "auto", md: "auto", lg: "0" },
        marginTop: {
          xs: "calc(4rem + 2rem)",      // Altura navbar (4rem) + separación (2rem) = 6rem
          md: "calc(4.5rem + 1.5rem)",  // Altura navbar (4.5rem) + separación (1.5rem) = 6rem
          lg: "calc(5rem + 0rem)",      // Altura navbar (5rem) + separación (0rem) = 5rem (posición más alta)
          xl: "calc(5.625rem + -7rem)"  // Altura navbar (5.625rem) + separación negativa = overlay
        },
        px: { xs: 2, md: 4, lg: 0 },
      }}
    >
      <Stack 
        spacing={{ xs: 3, md: 4 }}
        sx={{ 
          alignItems: { xs: "center", lg: "flex-start" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "var(--headline-header-1-font-family)",
            fontSize: "clamp(2.8rem, 4vw + 1rem, 4.48rem)", // Escalado continuo basado en viewport
            fontWeight: "var(--headline-header-1-font-weight)",
            lineHeight: "var(--headline-header-1-line-height)",
            letterSpacing: "var(--headline-header-1-letter-spacing)",
          }}
        >
          {t('hero.title')}
        </Typography>

        <Typography
          sx={{
            color: "#01beff",
            fontFamily: "var(--headline-header-2-font-family)",
            fontSize: "var(--headline-header-2-font-size)",
            fontWeight: 600, // Semi-bold en vez de bold
            lineHeight: "var(--headline-header-2-line-height)",
            letterSpacing: "var(--headline-header-2-letter-spacing)",
          }}
        >
          {t('hero.subtitle')}
        </Typography>

        <Box
          sx={{
            width: "clamp(2rem, 2vw + 1rem, 3.1rem)", // Escalado continuo del ancho
            height: "clamp(0.25rem, 0.5vw + 0.1rem, 0.43rem)", // Escalado continuo del alto
            background: "linear-gradient(90deg, #8F41B6 0%, #01BEFF 100%)",
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "Montserrat, Helvetica",
            fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.8rem)", // Escalado continuo
            fontWeight: 500,
            lineHeight: 1.4,
            maxWidth: { xs: "100%", lg: "90%" },
          }}
        >
          {t('hero.description')}
        </Typography>

        <Button
          variant="outlined"
          onClick={handleCaseStudiesClick}
          sx={{
            height: "clamp(3rem, 2vw + 2rem, 4.3125rem)", // Escalado continuo del botón
            px: { xs: 3, md: 6 },
            border: "0.25rem solid white",
            borderRadius: 1,
            alignSelf: { xs: "center", lg: "flex-start" },
            "&:hover": {
              border: "0.25rem solid #00bfff",
              backgroundColor: "rgba(0, 191, 255, 0.1)",
              "& .MuiTypography-root": {
                color: "#00bfff",
              },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              fontSize: "clamp(0.8rem, 1vw + 0.5rem, 1.44rem)", // Escalado continuo del texto del botón
              color: "white",
              textTransform: "none",
              transition: "color 0.3s ease",
            }}
          >
            {t('hero.caseStudiesButton')}
          </Typography>
        </Button>
      </Stack>

      {/* Background Ellipse */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "-50%", lg: "-35%" },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: "100vw", lg: "84.25rem" },
          height: { xs: "50vh", lg: "41.5625rem" },
          backgroundColor: "rgba(143, 65, 182, 0.4)",
          borderRadius: "50%",
          filter: "blur(28.73rem)",
          zIndex: -1,
          display: { xs: "none", lg: "block" },
        }}
      />
    </Box>
  );
};
