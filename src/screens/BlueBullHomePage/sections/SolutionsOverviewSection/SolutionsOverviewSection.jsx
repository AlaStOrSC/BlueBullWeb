import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const solutionsData = [
  {
    title: "360° Marketing Management",
    description:
      "From strategy to execution: digital, affiliate, retention, cross-channel",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-3.svg",
  },
  {
    title: "Acquisition & CRM",
    description:
      "Campaign setup, journey automation, customer segmentation, email/SMS",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-2.svg",
  },
  {
    title: "Promotions & campaigns",
    description:
      "Custom calendars, daily/weekly/monthly promos, cashback and tournaments",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636.svg",
  },
  {
    title: "Social Media & Content",
    description:
      "Custom calendars, daily/weekly/monthly promos, cashback and tournaments",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-1.svg",
  },
];

export const SolutionsOverviewSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        position: "relative",
      }}
    >
      <Stack spacing={10} alignItems="center" sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            opacity: 0,
            transform: "translateY(-1rem)",
          }}
          className="animate-fade-in"
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              color: "white",
              fontSize: "4rem",
              textAlign: "center",
              lineHeight: "110.4px",
              mb: 1,
            }}
          >
            Solutions
          </Typography>
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
            alt="Line"
            sx={{
              width: { xs: '4rem', md: '5.5rem' },
              height: { xs: '0.3rem', md: '0.4375rem' },
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 500,
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
            lineHeight: "50px",
            maxWidth: "958px",
            opacity: 0,
            transform: "translateY(-1rem)",
          }}
          className="animate-fade-in"
          style={{ "--animation-delay": "200ms" }}
        >
          At BlueBull, we specialise in integrating seamlessly with your
          existing tech stack to deliver high-performance managed services
          tailored for growth
        </Typography>

        <Grid container spacing={8} justifyContent="center">
          {solutionsData.map((solution, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  width: "365px",
                  height: "422px",
                  borderRadius: "17.47px",
                  overflow: "hidden",
                  position: "relative",
                  border: "2px solid #6F8DF7", // Borde delgado azul
                  background: "transparent", // Interior completamente transparente
                  padding: "31px 29px",
                  opacity: 0,
                  transform: "translateY(-1rem)",
                  "&:hover": {
                    "& .solution-title": { // Hover específico para el título
                      color: "#00bfff !important",
                    },
                    "& .solution-description": { // Hover específico para la descripción
                      color: "#00bfff !important",
                    },
                  },
                }}
                className="animate-fade-in"
                style={{ "--animation-delay": `${400 + index * 200}ms` }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent", // Interior transparente
                    borderRadius: "14px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "31px 29px",
                  }}
                >
                  <Box
                    component="img"
                    src={solution.icon}
                    alt="Frame"
                    sx={{
                      width: "70px",
                      height: "70px",
                      mb: 2,
                    }}
                  />

                  <Stack spacing={4} alignItems="center" sx={{ mt: 4 }}>
                    <Typography
                      variant="h5"
                      className="solution-title" // Clase para el hover específico
                      sx={{
                        fontFamily: "Montserrat, Helvetica",
                        fontWeight: 700,
                        color: "white",
                        fontSize: "30.2px",
                        textAlign: "center",
                        lineHeight: "50.3px",
                        transition: "color 0.3s ease", // Transición suave
                      }}
                      dangerouslySetInnerHTML={{ __html: solution.title }}
                    />

                    <Typography
                      variant="body1"
                      className="solution-description" // Clase para el hover específico
                      sx={{
                        fontFamily: "Montserrat, Helvetica",
                        fontWeight: 500,
                        color: "white",
                        fontSize: "22px",
                        textAlign: "center",
                        lineHeight: "41px",
                        width: "301px",
                        transition: "color 0.3s ease", // Transición suave
                      }}
                      dangerouslySetInnerHTML={{ __html: solution.description }}
                    />
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack
        spacing={7}
        alignItems="center"
        sx={{
          width: "489px",
          opacity: 0,
          transform: "translateY(-1rem)",
        }}
        className="animate-fade-in"
        style={{ "--animation-delay": "1200ms" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 500,
            color: "white",
            fontSize: "26.9px",
            textAlign: "center",
            lineHeight: "49.5px",
          }}
        >
          We're agile, bold, and battle-tested
        </Typography>

        <Button
          variant="outlined"
          sx={{
            minWidth: { xs: "15rem", md: "20rem", lg: "30.5rem" }, // 489px ≈ 30.5rem
            height: { xs: "5rem", md: "6rem", lg: "7.9rem" }, // 127px ≈ 7.9rem
            borderRadius: "5.17px",
            border: "3px solid white",
            "&:hover": {
              border: "3px solid #00bfff",
              backgroundColor: "rgba(0, 191, 255, 0.1)",
              "& .MuiTypography-root": {
                color: "#00bfff",
              },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              color: "white",
              fontSize: { xs: "1rem", md: "1.25rem", lg: "1.375rem" },
              lineHeight: "21.7px",
              textTransform: "none",
              transition: "color 0.3s ease",
            }}
          >
            READ MORE
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};
