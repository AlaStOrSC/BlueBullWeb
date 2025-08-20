import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const solutionsData = [
  {
    title: "Acquisition & CRM",
    description: "Campaign setup, journey automation, customer segmentation, email/SMS",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-2.svg",
  },
  {
    title: "360° Marketing Management",
    description: "From strategy to execution: digital, affiliate, retention, cross-channel",
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3636-3.svg",
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
                  sx={{
                    height: { xs: "auto", md: "26.375rem" },
                    borderRadius: "1.09rem",
                    overflow: "hidden",
                    position: "relative",
                    background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
                    padding: "0.22rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-0.5rem)",
                      boxShadow: "0 1rem 2rem rgba(0, 191, 255, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(18,36,99,1)",
                      borderRadius: "0.875rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: { xs: "1.5rem", md: "2rem" },
                      minHeight: { xs: "20rem", md: "auto" },
                    }}
                  >
                    <Box
                      component="img"
                      src={solution.icon}
                      alt="Frame"
                      sx={{
                        width: { xs: "3rem", md: "4.375rem" },
                        height: { xs: "3rem", md: "4.375rem" },
                        mb: { xs: 2, md: 3 },
                      }}
                    />

                    <Stack spacing={{ xs: 2, md: 3 }} alignItems="center" sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Montserrat, Helvetica",
                          fontWeight: 700,
                          color: "white",
                          fontSize: { xs: "1.25rem", md: "1.5rem", lg: "1.75rem" },
                          lineHeight: 1.3,
                        }}
                      >
                        {solution.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat, Helvetica",
                          fontWeight: 500,
                          color: "white",
                          fontSize: { xs: "0.875rem", md: "1rem", lg: "1.125rem" },
                          lineHeight: 1.5,
                        }}
                      >
                        {solution.description}
                      </Typography>
                    </Stack>
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
              px: { xs: 3, md: 4 },
              py: { xs: 1.5, md: 2 },
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
