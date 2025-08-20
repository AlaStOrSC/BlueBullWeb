import React from "react";
import { Box, Typography } from "@mui/material";

export const MainMarketsSection = () => {
  return (
    <Box
      sx={{
        pt: { xs: "6rem", md: "8rem" },
        pb: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 600,
          color: "white",
          fontSize: { xs: "2rem", md: "3rem", lg: "3.75rem" },
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        Main Markets
      </Typography>
      <Box
        component="img"
        src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
        alt="Underline"
        sx={{ 
          width: { xs: "4rem", md: "5.5rem" }, 
          height: { xs: "0.3rem", md: "0.4375rem" } 
        }}
      />

      {/* World Map */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "90rem",
          height: { xs: "20rem", md: "30rem", lg: "44rem" },
          mx: "auto",
          mt: { xs: 4, md: 8 },
          backgroundImage: "url(https://c.animaapp.com/mek1km8sOiUotz/img/vector.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          component="img"
          src="https://c.animaapp.com/mek1km8sOiUotz/img/pop-up.svg"
          alt="Global Presence Popup"
          sx={{
            position: "absolute",
            width: { xs: "80%", md: "60%", lg: "36.625rem" },
            height: { xs: "auto", lg: "37.9375rem" },
            top: { xs: "10%", md: "5%", lg: "1.1875rem" },
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "36.625rem",
          }}
        />
      </Box>
    </Box>
  );
};
