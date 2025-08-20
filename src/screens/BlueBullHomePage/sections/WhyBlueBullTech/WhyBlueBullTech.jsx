import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

const benefitCards = [
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3674-1.svg",
    title: "LATAM\nmarkets-first",
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3674.svg",
    title: "Fully platform\nagnostic",
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3674-2.svg",
    title: "iGaming managed\nservices",
  },
];

const benefitPoints = [
  {
    title: "Unmatched",
    subtitle: "energy and drive",
  },
  {
    title: "Deep iGaming",
    subtitle: "and digital marketing expertise",
  },
  {
    title: "Proven ability",
    subtitle: "to scale brands fast",
  },
  {
    title: "Collaborative",
    subtitle: "and transparent partnerships",
  },
];

export const WhyBlueBullTech = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Stack spacing={{ xs: 12, md: 20 }} alignItems="center">
        {/* Header Section */}
        <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 600,
                color: "white",
                fontSize: { xs: "2rem", md: "3rem", lg: "3.75rem" },
                lineHeight: 1.2,
              }}
            >
              Why BlueBull Tech?
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

          {/* Benefit Cards */}
          <Grid 
            container 
            spacing={{ xs: 4, md: 8 }} 
            justifyContent="center"
            sx={{ maxWidth: "80rem" }}
          >
            {benefitCards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
                  <Box
                    component="img"
                    src={card.icon}
                    alt="Frame"
                    sx={{
                      width: { xs: "6rem", md: "8rem", lg: "10rem" },
                      height: { xs: "6rem", md: "8rem", lg: "10rem" },
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 600,
                      color: "white",
                      fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
                      lineHeight: 1.4,
                      textAlign: "center",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {card.title}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Benefit Points */}
        <Grid 
          container 
          spacing={{ xs: 4, md: 6 }} 
          sx={{ maxWidth: "76.625rem" }}
        >
          {benefitPoints.map((point, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Stack 
                direction="row" 
                spacing={{ xs: 2, md: 3 }} 
                alignItems="flex-start"
                sx={{ textAlign: "left" }}
              >
                <CheckCircle
                  sx={{
                    color: "white",
                    fontSize: { xs: "2rem", md: "2.5rem", lg: "2.6875rem" },
                    mt: 0.5,
                    flexShrink: 0,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 700,
                      color: "white",
                      fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
                      lineHeight: 1.25,
                      mb: 0.5,
                    }}
                  >
                    {point.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: { xs: "1.125rem", md: "1.375rem", lg: "1.5rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    {point.subtitle}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
