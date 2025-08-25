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
        mx: { xs: "-0.25rem", sm: "-0.5rem", md: "-0.75rem", lg: 0 }, // Convertido a rem
        px: { xs: "0.25rem", sm: "0.5rem", md: "0.75rem", lg: 0 }, // Convertido a rem
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
          spacing={{ xs: 3, md: 6, lg: 8 }} 
          justifyContent="center"
          sx={{ 
            maxWidth: "90rem",
            px: 0,
            mx: { xs: 0, lg: "-1.5rem" }, // Margin negativo en rem
            width: "100%",
            position: "relative",
            left: { xs: "-0.3125rem", md: "-0.4375rem", lg: "-1rem" }, // Convertido a rem
          }}
        >
          {benefitCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Stack 
                spacing={{ xs: 2, md: 3, lg: 4 }} 
                alignItems="center"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "18.75rem", md: "22rem", lg: "25rem" }, // Convertido a rem y aumentado
                  mx: "auto", // Centrado automático
                  px: { xs: "0.5rem", md: "1rem" }, // Padding interno para mejor espaciado
                }}
              >
                <Box
                  sx={{
                    width: { xs: "12rem", md: "18rem", lg: "22rem" },
                    height: { xs: "8rem", md: "12rem", lg: "15rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: "1rem", md: "2rem", lg: "2.5rem" },
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
                    fontSize: { xs: "1.1rem", md: "1.5rem", lg: "1.575rem" }, // Reducido ligeramente
                    lineHeight: { xs: 1.3, md: 1.4, lg: 1.5 }, // Línea más espaciada
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    width: "100%", // Usar todo el ancho disponible
                    mx: "auto", // Centrado automático
                    px: { xs: "0.5rem", md: "1rem" }, // Padding lateral para evitar cortes
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
