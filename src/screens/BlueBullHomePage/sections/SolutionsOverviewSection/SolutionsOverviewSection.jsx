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
              width: "88px",
              height: "7px",
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
                  background:
                    "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
                  padding: "3.49px",
                  opacity: 0,
                  transform: "translateY(-1rem)",
                }}
                className="animate-fade-in"
                style={{ "--animation-delay": `${400 + index * 200}ms` }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(18,36,99,1)",
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
                      sx={{
                        fontFamily: "Montserrat, Helvetica",
                        fontWeight: 700,
                        color: "white",
                        fontSize: "30.2px",
                        textAlign: "center",
                        lineHeight: "50.3px",
                      }}
                      dangerouslySetInnerHTML={{ __html: solution.title }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Montserrat, Helvetica",
                        fontWeight: 500,
                        color: "white",
                        fontSize: "22px",
                        textAlign: "center",
                        lineHeight: "41px",
                        width: "301px",
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
            width: "232.56px",
            height: "54.22px",
            borderRadius: "5.17px",
            border: "3px solid #00bfff",
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            color: "white",
            fontSize: "22px",
            lineHeight: "21.7px",
            "&:hover": {
              border: "3px solid #00bfff",
              backgroundColor: "rgba(0, 191, 255, 0.1)",
            },
          }}
        >
          READ MORE
        </Button>
      </Stack>
    </Box>
  );
};
