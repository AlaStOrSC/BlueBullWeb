import React from "react";
import { Box, Typography } from "@mui/material";
import MexicoPopUp from "../../assets/MexicoPopUp.png";
import { ReadMoreButton } from "../ReadMoreButton";

export const PopUpCard = ({ 
  icon = MexicoPopUp,
  title = "Mexico Market",
  subtitle = "Leading iGaming Hub", 
  description = "Explore opportunities in one of Latin America's fastest-growing gaming markets"
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(1, 8, 21, 0.7)",
        backdropFilter: "blur(12px)",
        border: "2px solid rgba(0, 191, 255, 0.3)",
        borderRadius: {
          xs: "1rem",
          sm: "1.25rem", 
          md: "1.5rem",
          lg: "1.75rem",
          xl: "2rem"
        },
        padding: {
          xs: "0.8rem",
          sm: "0.9rem",
          md: "1rem",
          lg: "1.12rem",
          xl: "2rem"
        },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: {
          xs: "0.6rem",
          sm: "0.7rem",
          md: "0.8rem",
          lg: "0.882rem",
          xl: "1.575rem"
        },
        maxWidth: {
          xs: "18rem",
          sm: "20rem",
          md: "23rem",
          lg: "25.2rem",
          xl: "36.625rem"
        },
        minHeight: {
          xs: "18.6rem",
          sm: "20.7rem",
          md: "23.8rem",
          lg: "27.1rem",
          xl: "37.9375rem"
        },
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)",
          zIndex: 0
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{
            width: {
              xs: "5rem",
              sm: "6rem",
              md: "6.5rem",
              lg: "7.2rem",
              xl: "11.57rem"
            },
            height: {
              xs: "5rem",
              sm: "6rem",
              md: "6.5rem",
              lg: "7.2rem",
              xl: "11.57rem"
            },
            objectFit: "contain",
            filter: "drop-shadow(0 4px 8px rgba(0, 191, 255, 0.3))",
            mb: {
              xs: "0.6rem",
              sm: "0.7rem",
              md: "0.8rem",
              lg: "0.882rem"
            }
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            fontSize: {
              xs: "clamp(1rem, 3vw, 1.2rem)",
              sm: "clamp(1.1rem, 3.2vw, 1.3rem)",
              md: "clamp(1.2rem, 3.4vw, 1.5rem)",
              lg: "clamp(1.4rem, 3vw, 1.7rem)",
              xl: "clamp(1.8rem, 2.5vw, 2.2rem)"
            },
            color: "#00bfff",
            lineHeight: 1.2,
            textAlign: "center",
            mb: {
              xs: "0.5rem",
              sm: "0.6rem",
              md: "0.7rem",
              lg: "0.735rem"
            }
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 600,
            fontSize: {
              xs: "clamp(0.85rem, 2.8vw, 1rem)",
              sm: "clamp(0.9rem, 2.9vw, 1.05rem)",
              md: "clamp(1rem, 3vw, 1.1rem)",
              lg: "clamp(1.1rem, 2.2vw, 1.3rem)",
              xl: "clamp(1.3rem, 1.8vw, 1.6rem)"
            },
            color: "#ffffff",
            lineHeight: 1.3,
            textAlign: "center",
            mb: {
              xs: "0.5rem",
              sm: "0.6rem",
              md: "0.7rem",
              lg: "0.735rem"
            }
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.7rem, 2.2vw, 0.85rem)",
              sm: "clamp(0.75rem, 2.4vw, 0.9rem)",
              md: "clamp(0.8rem, 2.6vw, 0.95rem)",
              lg: "clamp(0.9rem, 2vw, 1.1rem)",
              xl: "clamp(1.1rem, 1.8vw, 1.3rem)"
            },
            color: "#e0e0e0",
            lineHeight: 1.4,
            textAlign: "center",
            mb: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.15rem",
              lg: "1.176rem",
              xl: "2.1rem"
            }
          }}
        >
          {description}
        </Typography>

        <ReadMoreButton />
      </Box>
    </Box>
  );
};
