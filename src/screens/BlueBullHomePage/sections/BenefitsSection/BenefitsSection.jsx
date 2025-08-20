import CheckCircle from "@mui/icons-material/CheckCircle";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

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
    title: "Proven ability",
    subtitle: "to scale brands fast",
  },
  {
    title: "Deep iGaming",
    subtitle: "and digital marketing expertise",
  },
  {
    title: "Collaborative",
    subtitle: "and transparent partnerships",
  },
];

export const BenefitsSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        py: { xs: 8, md: 15 },
      }}
      className="translate-y-[-1rem] animate-fade-in opacity-0"
    >
      <Stack spacing={{ xs: 15, md: 30 }} alignItems="center">
        {/* Header Section */}
        <Stack
          alignItems="center"
          spacing={6}
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              color: "white",
              fontSize: { xs: "2.5rem", md: "4rem" },
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            Why BlueBull Tech?
          </Typography>

          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
            alt="Line"
            sx={{ width: 88, height: 7 }}
          />
        </Stack>

        {/* Benefit Cards */}
        <Grid
          container
          spacing={{ xs: 4, md: 15 }}
          justifyContent="center"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
        >
          {benefitCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack alignItems="center" spacing={4}>
                <Box
                  component="img"
                  src={card.icon}
                  alt="Frame"
                  sx={{ width: 162, height: 162 }}
                />

                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 600,
                    color: "white",
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                    textAlign: "center",
                    lineHeight: 1.75,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.title}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Benefit Points Grid */}
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ maxWidth: 1226 }}
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        >
          {benefitPoints.map((point, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Stack direction="row" alignItems="flex-start" spacing={5}>
                <CheckCircle
                  sx={{
                    color: "white",
                    fontSize: 43,
                    mt: 0.5,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 700,
                      color: "white",
                      fontSize: { xs: "1.75rem", md: "2.5rem" },
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
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      lineHeight: 1.67,
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
