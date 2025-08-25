import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "center", lg: "flex-start" }, // Centrado en móvil y tablet, izquierda en desktop
        minHeight: "665px",
        px: { xs: 2, md: 4, lg: 0 }, // Padding lateral para móviles y tablets
      }}
    >
      <Stack
        spacing={6}
        sx={{
          maxWidth: "862px",
          zIndex: 2,
          pl: { xs: 0, md: 0, lg: 4 }, // Sin padding left en móvil y tablet, padding en desktop
          textAlign: { xs: "center", md: "center", lg: "left" }, // Texto centrado en móvil y tablet, izquierda en desktop
        }}
        className="translate-y-[-1rem] animate-fade-in opacity-0"
      >
        <Stack spacing={7}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'var(--headline-header-1-font-family, "Montserrat")',
              fontWeight: "var(--headline-header-1-font-weight, 700)",
              fontSize: "var(--headline-header-1-font-size, 4rem)",
              letterSpacing: "var(--headline-header-1-letter-spacing, 0)",
              lineHeight: "var(--headline-header-1-line-height, 1.2)",
              color: "white",
            }}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          >
            {t('hero.title')}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--headline-header-2-font-family, "Montserrat")',
              fontWeight: "var(--headline-header-2-font-weight, 600)",
              fontSize: "var(--headline-header-2-font-size, 2.5rem)",
              letterSpacing: "var(--headline-header-2-letter-spacing, 0)",
              lineHeight: "var(--headline-header-2-line-height, 1.3)",
              color: "#01beff",
              maxWidth: "858px",
            }}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
          >
            {t('hero.subtitle')}
          </Typography>

          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1.svg"
            alt="Line"
            sx={{
              width: "49.64px",
              height: "6.95px",
            }}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          />

          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              fontSize: "39.7px",
              color: "white",
              lineHeight: "69.5px",
              maxWidth: "100%",
            }}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          >
            {t('hero.description')}
          </Typography>

          <Button
            variant="outlined"
            sx={{
              height: "69px",
              px: "50px",
              border: "4px solid white",
              borderRadius: 1,
              "&:hover": {
                border: "4px solid #00bfff",
                backgroundColor: "rgba(0, 191, 255, 0.1)",
                "& .MuiTypography-root": {
                  color: "#00bfff",
                },
              },
            }}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
          >
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: "32px",
                color: "white",
                lineHeight: "58px",
                textTransform: "none",
                transition: "color 0.3s ease",
              }}
            >
              {t('hero.caseStudiesButton')}
            </Typography>
          </Button>
        </Stack>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          right: "-280px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1348px",
          height: "665px",
          backgroundColor: "rgba(143, 65, 182, 0.4)",
          borderRadius: "674px / 332.5px",
          filter: "blur(459.68px)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};
