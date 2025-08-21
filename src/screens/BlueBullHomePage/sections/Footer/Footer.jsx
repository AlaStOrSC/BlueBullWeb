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
      }}
    >
      <Stack
        spacing={{ xs: 8, md: 12 }}
        alignItems="center"
        sx={{ maxWidth: "80rem", mx: "auto" }}
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
          spacing={{ xs: 4, md: 6 }} 
          justifyContent="center"
        >
          {contactData.map((contact, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack spacing={{ xs: 2, md: 3 }} alignItems="center" sx={{ textAlign: "center" }}>
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
        }}
      >
        <Grid 
          container 
          alignItems="center" 
          justifyContent="space-between"
          spacing={{ xs: 2, md: 0 }}
          sx={{ maxWidth: "80rem", mx: "auto" }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "0.875rem", md: "1rem", lg: "1.25rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Blue Bull Ltd
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "0.875rem", md: "1rem", lg: "1.25rem" },
                textAlign: "center",
              }}
            >
              2025 All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
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
