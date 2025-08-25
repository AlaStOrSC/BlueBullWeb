import React from "react";
import { Box, Typography } from "@mui/material";

export const SolutionsPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        pt: { xs: "5rem", md: "6rem" }, // Padding top para compensar navbar fijo
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "rgba(79, 172, 254, 0.08)",
          borderRadius: "50%",
          filter: "blur(12rem)",
          width: { xs: "55vw", md: "35vw", lg: "25vw" },
          height: { xs: "55vw", md: "35vw", lg: "25vw" },
          top: "20%",
          left: "10%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "rgba(30, 58, 138, 0.12)",
          borderRadius: "50%",
          filter: "blur(15rem)",
          width: { xs: "45vw", md: "30vw", lg: "20vw" },
          height: { xs: "45vw", md: "30vw", lg: "20vw" },
          bottom: "20%",
          right: "10%",
        }}
      />

      {/* Main Content */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 700,
          color: "white",
          fontSize: { xs: "3rem", md: "4rem", lg: "5rem" },
          textAlign: "center",
          zIndex: 1,
          textShadow: "0 0 20px rgba(0, 191, 255, 0.3)",
        }}
      >
        Hello World
      </Typography>
    </Box>
  );
};
