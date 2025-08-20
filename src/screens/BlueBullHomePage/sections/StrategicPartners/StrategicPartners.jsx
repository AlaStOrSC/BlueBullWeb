import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const strategicPartners = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" },
];

export const StrategicPartners = () => {
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
            Strategic partners
          </Typography>
          
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-7.svg"
            alt="Line"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
            }}
          />
        </Stack>

        {/* Partner Logos */}
        <Grid 
          container 
          spacing={{ xs: 2, md: 4 }} 
          justifyContent="center"
          sx={{ maxWidth: "80rem" }}
        >
          {strategicPartners.map((partner) => (
            <Grid item xs={6} sm={4} md={2} key={partner.id}>
              <Box
                sx={{
                  backgroundColor: "#282729",
                  height: { xs: "3rem", md: "4.4rem" },
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-0.25rem)",
                    backgroundColor: "#3a3a3c",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: { xs: "0.75rem", md: "1rem" },
                  }}
                >
                  {partner.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
