import React from "react";
import { Button, Typography } from "@mui/material";

export const ReadMoreButton = ({ text = "READ MORE", onClick, sx = {} }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        borderRadius: "0.32rem",
        border: "0.1875rem solid white",
        width: { xs: "15.28rem", sm: "20rem", md: "15.28rem" }, // 20% reducción en xs: 244.5px * 0.8 = 195.6px ≈ 15.28rem
        height: { xs: "3.975rem", sm: "5rem", md: "3.975rem" }, // 20% reducción en xs: 63.5px * 0.8 = 50.8px ≈ 3.975rem
        "&:hover": {
          border: "0.1875rem solid #00bfff",
          backgroundColor: "rgba(0, 191, 255, 0.1)",
          "& .MuiTypography-root": {
            color: "#00bfff",
          },
        },
        ...sx, // Permitir override de estilos
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 700,
          color: "white",
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem", lg: "1.375rem" }, // Reducido 20% en xs
          textTransform: "none",
          transition: "color 0.3s ease",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};
