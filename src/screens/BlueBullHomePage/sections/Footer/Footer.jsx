import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const contactData = [
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723-2.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723-1.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723-3.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111320",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        mt: { xs: 8, md: 12 },
        mx: { xs: "-4px", sm: "-8px", md: "-12px", lg: 0 }, // Neutralizar padding del contenedor padre
      }}
    >
      <Stack
        spacing={{ xs: 8, md: 12 }}
        alignItems="center"
        sx={{ 
          maxWidth: "80rem", 
          mx: "auto",
          px: { xs: "6px", sm: "12px", md: "16px", lg: 0 }, // Aplicar nuestro propio padding balanceado
        }}
      >
        {/* Header */}
        <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              fontSize: { xs: "2rem", md: "3rem", lg: "3.75rem" },
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Contacts
          </Typography>
          
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
            alt="Line"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
            }}
          />
        </Stack>

        {/* Contact Cards */}
        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }} 
          justifyContent="center"
          sx={{
            px: 0,
            mx: 0,
            width: "100%",
            position: "relative", // Agregar position relative
            left: { xs: "-10px", md: "-15px", lg: 0 }, // Mover hacia la izquierda para compensar el desbalance
          }}
        >
          {contactData.map((contact, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Stack 
                spacing={{ xs: 2, md: 3 }} 
                alignItems="center" 
                sx={{ 
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "250px",
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  src={contact.icon}
                  alt="Contact Icon"
                  sx={{
                    width: { xs: "4rem", md: "6.4375rem" },
                    height: { xs: "3.5rem", md: "5.75rem" },
                  }}
                />
                
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: { xs: "0.875rem", md: "1rem", lg: "1.25rem" },
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                    textAlign: "center", // Forzar centrado del texto
                    width: "100%", // Usar todo el ancho disponible
                    mx: "auto", // Centrado automático
                  }}
                >
                  {contact.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          mt: { xs: 6, md: 8 },
          pt: { xs: 4, md: 6 },
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid 
          container 
          alignItems="center" 
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-evenly"
          sx={{ 
            maxWidth: "80rem",
            width: "100%",
          }}
        >
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "0.875rem", md: "1rem", lg: "1.25rem" },
                textAlign: "center",
                width: "100%",
              }}
            >
              Blue Bull Ltd
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "0.875rem", md: "1rem", lg: "1.25rem" },
                textAlign: "center",
                width: "100%",
              }}
            >
              2025 All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Box
              sx={{
                width: { xs: "2.5rem", md: "3.625rem" },
                height: { xs: "2.5rem", md: "3.625rem" },
                borderRadius: "50%",
                border: "0.1875rem solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  fontSize: { xs: "0.875rem", md: "1rem", lg: "1.25rem" },
                }}
              >
                18+
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
