import React from "react";
import { Button, Typography } from "@mui/material";

export const ReadMoreButton = ({ 
  text = "Read More", 
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
        width: fullWidth ? "100%" : { xs: "5rem", sm: "5.5rem", md: "6.5rem", lg: "7rem", xl: "10rem" },
        height: { xs: "1.5rem", sm: "1.6rem", md: "1.8rem", lg: "2rem", xl: "3rem" },
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
          fontSize: { xs: "0.45rem", sm: "0.5rem", md: "0.55rem", lg: "0.6rem", xl: "0.85rem" },
          textTransform: "none",
          transition: "color 0.3s ease",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};
