import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const teamData = [
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3637.svg",
    title: "Vision",
    description: "Our goal is to be the leading digital force in iGaming and customer acquisition, known for fearless creativity and results",
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3638-1.svg",
    title: "Mission",
    description: "To engage, retain, and excite players with personalized, innovative campaigns that make every experience count",
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3638.svg",
    title: "Culture & values",
    description: "Creativity meets execution speed & agility data-driven decisions accountability & ownership. Work Hard, Play Fair",
  },
];

export const WhoWeAreSection = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
        {/* Header */}
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
            Who we are?
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

        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 500,
            color: "white",
            fontSize: { xs: "1.125rem", md: "1.5rem", lg: "1.875rem" },
            lineHeight: 1.6,
            maxWidth: { xs: "100%", md: "80%", lg: "60rem" },
          }}
        >
          We combine data-driven strategy, creative storytelling and performance tech to drive player engagement and business growth
        </Typography>

        {/* Team Cards */}
        <Grid 
          container 
          spacing={{ xs: 4, md: 6, lg: 8 }} 
          justifyContent="center"
          sx={{ mt: { xs: 4, md: 6 } }}
        >
          {teamData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack
                spacing={{ xs: 3, md: 4 }}
                alignItems="center"
                sx={{
                  maxWidth: "28rem",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt="Frame"
                  sx={{
                    width: { xs: "4rem", md: "5rem" },
                    height: { xs: "4rem", md: "5rem" },
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    color: "white",
                    fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    color: "white",
                    fontSize: { xs: "1rem", md: "1.25rem", lg: "1.375rem" },
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
