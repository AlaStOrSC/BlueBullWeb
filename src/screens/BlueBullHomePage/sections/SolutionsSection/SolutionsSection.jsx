import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const solutionsData = [
  {
    title: "360° Marketing Management",
    description: "From strategy to execution: digital, affiliate, retention, cross-channel",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-3.svg",
  },
  {
    title: "Acquisition & CRM",
    description: "Campaign setup, journey automation, customer segmentation, email/SMS",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-2.svg",
  },
  {
    title: "Promotions & campaigns",
    description: "Custom calendars, daily/weekly/monthly promos, cashback and tournaments",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636.svg",
  },
  {
    title: "Social Media & Content",
    description: "Custom calendars, daily/weekly/monthly promos, cashback and tournaments",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-1.svg",
  },
];

export const SolutionsSection = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Stack spacing={{ xs: 8, md: 12 }} alignItems="center">
        {/* Header */}
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
              Solutions
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
            At BlueBull, we specialise in integrating seamlessly with your existing tech stack to deliver high-performance managed services tailored for growth
          </Typography>

          {/* Solution Cards */}
          <Grid 
            container 
            spacing={{ xs: 3, md: 4 }} 
            justifyContent="center"
            sx={{ maxWidth: "80rem" }}
          >
            {solutionsData.map((solution, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Box
                  className="solution-card"
                  sx={{
                    width: "237px",
                    height: "274px",
                    borderRadius: "1.09rem",
                    position: "relative",
                    backgroundColor: "transparent",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "1.09rem",
                      padding: "3px",
                      background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                    },
                    "&:hover": {
                      transform: "translateY(-0.5rem)",
                      boxShadow: "0 1rem 2rem rgba(0, 191, 255, 0.2)",
                      "& .solution-icon": {
                        filter: "brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(3044%) hue-rotate(182deg) brightness(101%) contrast(101%)",
                      },
                      "& .solution-title": {
                        color: "#01beff",
                      },
                      "& .solution-description": {
                        color: "#01beff",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "1.25rem",
                    }}
                  >
                    <Box
                      component="img"
                      src={solution.icon}
                      alt="Frame"
                      className="solution-icon"
                      sx={{
                        width: "2.875rem",
                        height: "2.875rem",
                        mb: 1.5,
                        alignSelf: "center",
                      }}
                    />

                    <Box sx={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      textAlign: "center",
                      flex: 1,
                      justifyContent: "space-between"
                    }}>
                      <Typography
                        variant="h5"
                        className="solution-title"
                        sx={{
                          fontFamily: "Montserrat, Helvetica",
                          fontWeight: 700,
                          color: "white",
                          fontSize: "1.22rem",
                          lineHeight: 1.3,
                          height: "3rem",
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5,
                        }}
                      >
                        {solution.title}
                      </Typography>

                      <Typography
                        className="solution-description"
                        sx={{
                          fontFamily: "Montserrat, Helvetica",
                          fontWeight: 500,
                          color: "white",
                          fontSize: "0.89rem",
                          lineHeight: 1.4,
                          flex: 1,
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        {solution.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Bottom CTA */}
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              color: "white",
              fontSize: { xs: "1.125rem", md: "1.5rem", lg: "1.75rem" },
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            We're agile, bold, and battle-tested
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "0.32rem",
              border: "0.1875rem solid #00bfff",
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              color: "white",
              fontSize: { xs: "1rem", md: "1.25rem", lg: "1.375rem" },
              textTransform: "none",
              width: "244.5px",
              height: "63.5px",
              "&:hover": {
                border: "0.1875rem solid #00bfff",
                backgroundColor: "rgba(0, 191, 255, 0.1)",
              },
            }}
          >
            READ MORE
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
