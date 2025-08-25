import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Separator from "../../../../assets/Separator.png";
import Latam from "../../../../assets/Latam.png";
import Platform from "../../../../assets/platform.png";
import IGaming from "../../../../assets/iGaming.png";

const benefitCards = [
  {
    icon: Latam,
    title: "LATAM\nmarkets-first",
  },
  {
    icon: Platform,
    title: "Fully platform\nagnostic",
  },
  {
    icon: IGaming,
    title: "iGaming managed\nservices",
  },
];

export const WhyBlueBullTech = () => {
  return (
    <Box 
      sx={{ 
        width: "100%", 
        textAlign: "center",
        mx: { xs: "-4px", sm: "-8px", md: "-12px", lg: 0 }, // Neutralizar padding del contenedor padre
        px: { xs: "4px", sm: "8px", md: "12px", lg: 0 }, // Aplicar nuestro propio padding balanceado
      }}
    >
      <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
        <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              color: "white",
              fontSize: { xs: "1.8rem", md: "2.7rem", lg: "3.375rem" }, // Reducido 10%
              lineHeight: 1.2,
            }}
          >
            Why BlueBull Tech?
          </Typography>
          
          <Box
            component="img"
            src={Separator}
            alt="Separator line under Why BlueBull Tech title"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
            }}
          />
        </Stack>

        {/* Benefit Cards */}
        <Grid 
          container 
          spacing={{ xs: 2, md: 4 }} 
          justifyContent="center"
          sx={{ 
            maxWidth: "85rem",
            px: 0,
            mx: { xs: 0, lg: "-24px" }, // Margin negativo más agresivo para desktop
            width: "100%",
            position: "relative",
            left: { xs: "-5px", md: "-7px", lg: "-16px" }, // Mover más hacia la izquierda en desktop
          }}
        >
          {benefitCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Stack 
                spacing={{ xs: 2, md: 3 }} 
                alignItems="center"
                sx={{
                  width: "100%",
                  maxWidth: "300px", // Limitar ancho máximo
                  mx: "auto", // Centrado automático
                }}
              >
                <Box
                  sx={{
                    width: { xs: "12rem", md: "16rem", lg: "18rem" },
                    height: { xs: "8rem", md: "10rem", lg: "12rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: "1rem", md: "1.5rem" },
                  }}
                >
                  <Box
                    component="img"
                    src={card.icon}
                    alt={`${card.title.replace('\n', ' ')} icon - representing our ${card.title.replace('\n', ' ').toLowerCase()} approach`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 600,
                    color: "white",
                    fontSize: { xs: "1.2rem", md: "1.6rem", lg: "2rem" }, // Reducido 20%
                    lineHeight: 1.4,
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    width: "100%", // Usar todo el ancho disponible
                    mx: "auto", // Centrado automático
                  }}
                >
                  {card.title}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
