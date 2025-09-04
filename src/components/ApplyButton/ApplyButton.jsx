import React from "react";
import { Button, Typography } from "@mui/material";

export const ApplyButton = ({ 
  text = "Apply", 
  onClick, 
  sx = {},
  variant = "outlined",
  fullWidth = false,
  ...props 
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        borderRadius: "0.32rem",
        border: "0.1875rem solid white",
        width: fullWidth ? "100%" : { 
          xs: "4.25rem",   // 85% de 5rem
          sm: "4.6rem",    // 92% de 5rem
          md: "5rem",      // 100% original
          lg: "5.5rem",    // Escala con lg
          xl: "6rem"       // Escala con xl
        },
        height: { 
          xs: "1.275rem",  // 85% de 1.5rem
          sm: "1.38rem",   // 92% de 1.5rem
          md: "1.5rem",    // 100% original
          lg: "1.6rem",    // Escala con lg
          xl: "1.8rem"     // Escala con xl
        },
        "&:hover": {
          border: "0.1875rem solid #00bfff",
          backgroundColor: "rgba(0, 191, 255, 0.1)",
          "& .MuiTypography-root": {
            color: "#00bfff",
          },
        },
        ...sx,
      }}
      {...props}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 700,
          color: "white",
          fontSize: { 
            xs: "0.3825rem",  // 85% de 0.45rem
            sm: "0.414rem",   // 92% de 0.45rem
            md: "0.45rem",    // 100% original
            lg: "0.5rem",     // Escala con lg
            xl: "0.55rem"     // Escala con xl
          },
          textTransform: "none",
          transition: "color 0.3s ease",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};
