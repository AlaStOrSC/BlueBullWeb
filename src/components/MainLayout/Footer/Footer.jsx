import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

// Import assets with corrected paths
import EmailIcon from "../../../assets/EmailIcon.png";
import LinkedinIcon from "../../../assets/LinkedinIcon.png";
import InstagramIcon from "../../../assets/InstagramIcon.png";
import GoogleMapsIcon from "../../../assets/GoogleMapsIcon.png";

export const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/bluebull-tech/posts/?feedView=all", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:business@bluebulltech.io", "_blank");
  };

  const handleInstagramClick = () => {
    // Puedes agregar la URL de Instagram aquí cuando esté disponible
    console.log("Instagram clicked");
  };

  const handleMapsClick = () => {
    window.open("https://maps.google.com/?q=Av+de+los+Canos+52+Pueblo+Nuevo+Cadiz+Spain", "_blank");
  };

  const contactData = [
    {
      icon: EmailIcon,
      text: "business@bluebulltech.io",
      onClick: handleEmailClick,
    },
    {
      icon: LinkedinIcon,
      text: "Blue Bull",
      onClick: handleLinkedInClick,
    },
    {
      icon: InstagramIcon,
      text: "@bluebulltech",
      onClick: handleInstagramClick,
    },
    {
      icon: GoogleMapsIcon,
      text: "Av de los Canos 52\nPueblo Nuevo\nCadiz\nSpain",
      onClick: handleMapsClick,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        color: "white",
        py: { xs: 4, md: 6, lg: 8 },
        px: { xs: 1.5, sm: 2, md: 4 },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Contact Cards Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "75rem",
          mb: { xs: 4, md: 6, lg: 8 },
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 6 }} 
          justifyContent="center"
          alignItems="stretch"
        >
          {contactData.map((contact, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Stack 
                alignItems="center" 
                spacing={{ xs: 1.5, md: 2 }}
                sx={{
                  height: "100%",
                  minHeight: { xs: "9rem", sm: "10rem", md: "12rem" },
                  justifyContent: "flex-start",
                  px: { xs: 1, sm: 1.5 },
                }}
              >
                <Box
                  onClick={contact.onClick}
                  sx={{
                    width: { xs: "3.5rem", sm: "4.5rem", md: "5.5rem", lg: "6.4375rem" },
                    height: { xs: "3rem", sm: "4rem", md: "5rem", lg: "5.75rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: "0.75rem", md: "1rem" },
                    cursor: "pointer",
                    borderRadius: "0.5rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transform: "scale(1.1)",
                      boxShadow: "0 4px 15px rgba(0, 191, 255, 0.3)",
                    },
                    "&:active": {
                      transform: "scale(0.95)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={contact.icon}
                    alt={`Contact icon ${index + 1} - ${index === 0 ? 'Email' : index === 1 ? 'LinkedIn' : index === 2 ? 'Instagram' : 'Google Maps'} contact method`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      transition: "filter 0.3s ease",
                      "&:hover": {
                        filter: "brightness(1.2)",
                      },
                    }}
                  />
                </Box>
                
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem" },
                    lineHeight: { xs: 1.3, md: 1.4 },
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    width: "100%",
                    mx: "auto",
                  }}
                >
                  {contact.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          pt: { xs: 3, md: 4, lg: 5 },
          width: "100%",
          maxWidth: "75rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid 
          container 
          alignItems="center" 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          sx={{ 
            width: "100%",
          }}
        >
          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem" },
                textAlign: "center",
                width: "100%",
              }}
            >
              Blue Bull Ltd
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem" },
                textAlign: "center",
                width: "100%",
              }}
            >
              2025 All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: { xs: "2.25rem", sm: "2.5rem", md: "3rem", lg: "3.625rem" },
                height: { xs: "2.25rem", sm: "2.5rem", md: "3rem", lg: "3.625rem" },
                borderRadius: "50%",
                border: { xs: "0.125rem solid white", md: "0.1875rem solid white" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 1, sm: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem" },
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
