import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../screens/BlueBullHomePage/sections/Navbar";
import { Footer } from "../../screens/BlueBullHomePage/sections/Footer";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Aquí se renderizan las páginas específicas */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
