import React from "react";
import { Button, Typography } from "@mui/material";
import { createPreloadHandler } from "../../utils/preloader";

export const ReadMoreButton = ({ 
  text = "Read More", 
  onClick, 
  sx = {},
  variant = "outlined",
  fullWidth = false,
  scale = 1,
  preloadRoute = null, // Nueva prop para preloading
  ...props 
}) => {
  // Crear handlers de preloading si se proporciona una ruta
  const preloadHandlers = preloadRoute ? createPreloadHandler(preloadRoute) : {};

  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      {...preloadHandlers}
      sx={{
        borderRadius: "0.32rem",
        border: "0.1875rem solid white",
        width: fullWidth ? "100%" : { 
          xs: `${5 * scale}rem`, 
          sm: `${5.5 * scale}rem`, 
          md: `${6.5 * scale}rem`, 
          lg: `${7 * scale}rem`, 
          xl: `${10 * scale}rem` 
        },
        height: { 
          xs: `${1.5 * scale}rem`, 
          sm: `${1.6 * scale}rem`, 
          md: `${1.8 * scale}rem`, 
          lg: `${2 * scale}rem`, 
          xl: `${3 * scale}rem` 
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
            xs: `${0.45 * scale}rem`, 
            sm: `${0.5 * scale}rem`, 
            md: `${0.55 * scale}rem`, 
            lg: `${0.6 * scale}rem`, 
            xl: `${0.85 * scale}rem` 
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
