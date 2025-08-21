import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const teamData = [
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3637.svg",
    title: "Vision",
    description:
      "Our goal is to be the leading digital force in iGaming and customer acquisition, known for fearless creativity and results",
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3638-1.svg",
    title: "Mission",
    description:
      "To engage, retain, and excite players with personalized, innovative campaigns that make every experience count",
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3638.svg",
    title: "Culture & values",
    description:
      "Creativity meets execution speed & agility data-driven decisions accountability & ownership. Work Hard, Play Fair",
  },
];

export const OurTeamSection = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", py: 8 }}>
      <Stack spacing={7} alignItems="center">
        <Stack spacing={7} alignItems="center" sx={{ maxWidth: 988 }}>
          <Box
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
            sx={{ position: "relative", textAlign: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 600,
                color: "white",
                fontSize: "4rem",
                lineHeight: "110.4px",
                mb: 2,
              }}
            >
              Who we are?
            </Typography>
            <Box
              component="img"
              src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
              alt="Line"
              sx={{
                width: { xs: '4rem', md: '5.5rem' },
                height: { xs: '0.3rem', md: '0.4375rem' },
                mx: "auto",
                display: "block",
              }}
            />
          </Box>

          <Typography
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              color: "white",
              fontSize: "1.5rem",
              lineHeight: "50px",
              textAlign: "center",
              maxWidth: "100%",
            }}
          >
            We combine data-driven strategy, creative storytelling and
            performance tech to drive player engagement and business growth
          </Typography>
        </Stack>

        <Grid
          container
          spacing={14}
          justifyContent="center"
          sx={{ maxWidth: 1400 }}
        >
          {teamData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack
                spacing={5}
                alignItems="center"
                className="translate-y-[-1rem] animate-fade-in opacity-0"
                sx={{
                  "--animation-delay": `${400 + index * 200}ms`,
                  maxWidth: 454,
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt="Frame"
                  sx={{
                    width: 80,
                    height: 80,
                  }}
                />

                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "2.5rem",
                    lineHeight: "40.9px",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    color: "white",
                    fontSize: "1.375rem",
                    lineHeight: "41px",
                    textAlign: "center",
                    maxWidth: 386,
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
