import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import VertSeparatorImage from "../../assets/VertSeparator.png";

export const MarketInfoSection = ({ 
  id,
  title, 
  subtitle, 
  description, 
  rightContent 
}) => {
  return (
    <Grid 
      container 
      spacing={0}
      sx={{
        mb: {
          xs: "3rem",
          sm: "4rem",
          md: "5rem",
          lg: "6rem"
        }
      }}
    >
      {/* Left Column */}
      <Grid 
        item 
        xs={12} 
        md={5.5}
        sx={{
          pr: {
            xs: 0,
            md: "1rem",
            lg: "2rem"
          },
          mb: {
            xs: "2rem",
            md: 0
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            fontSize: {
              xs: "clamp(1.3rem, 4.5vw, 1.8rem)",
              sm: "clamp(1.5rem, 4vw, 2rem)",
              md: "clamp(1.6rem, 3.5vw, 2.2rem)",
              lg: "clamp(1.8rem, 3vw, 2.4rem)",
              xl: "clamp(2rem, 2.5vw, 2.6rem)"
            },
            color: "#00bfff",
            mb: {
              xs: "1rem",
              md: "1.5rem"
            },
            lineHeight: 1.2
          }}
        >
          {title}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 600,
            fontSize: {
              xs: "clamp(1rem, 3.5vw, 1.3rem)",
              sm: "clamp(1.1rem, 3vw, 1.4rem)",
              md: "clamp(1.2rem, 2.8vw, 1.5rem)",
              lg: "clamp(1.3rem, 2.5vw, 1.6rem)",
              xl: "clamp(1.4rem, 2.2vw, 1.7rem)"
            },
            color: "#ffffff",
            mb: {
              xs: "1rem",
              md: "1.5rem"
            },
            lineHeight: 1.3
          }}
        >
          {subtitle}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.8rem, 3vw, 1rem)",
              sm: "clamp(0.85rem, 2.8vw, 1.05rem)",
              md: "clamp(0.9rem, 2.5vw, 1.1rem)",
              lg: "clamp(0.95rem, 2.2vw, 1.15rem)",
              xl: "clamp(1rem, 2vw, 1.2rem)"
            },
            color: "#cccccc",
            lineHeight: {
              xs: 1.5,
              md: 1.6
            }
          }}
        >
          {description}
        </Typography>
      </Grid>

      {/* Vertical Separator */}
      <Grid 
        item 
        xs={12} 
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: {
            xs: "1rem",
            md: "2rem"
          },
          mb: {
            xs: "2rem",
            md: 0
          }
        }}
      >
        <Box
          component="img"
          src={VertSeparatorImage}
          alt="Vertical Separator"
          sx={{
            height: {
              xs: "2rem",
              sm: "3rem",
              md: "clamp(8rem, 15vw, 12rem)",
              lg: "clamp(10rem, 12vw, 14rem)",
              xl: "clamp(12rem, 10vw, 16rem)"
            },
            width: "auto",
            opacity: 0.7,
            transform: {
              xs: "rotate(90deg)",
              md: "rotate(0deg)"
            }
          }}
        />
      </Grid>

      {/* Right Column */}
      <Grid 
        item 
        xs={12} 
        md={5.5}
        sx={{
          pl: {
            xs: 0,
            md: "1rem",
            lg: "2rem"
          },
          display: "flex",
          alignItems: "flex-start"
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.8rem, 3vw, 1rem)",
              sm: "clamp(0.85rem, 2.8vw, 1.05rem)",
              md: "clamp(0.9rem, 2.5vw, 1.1rem)",
              lg: "clamp(0.95rem, 2.2vw, 1.15rem)",
              xl: "clamp(1rem, 2vw, 1.2rem)"
            },
            color: "#ffffff",
            lineHeight: {
              xs: 1.5,
              md: 1.6
            },
            whiteSpace: "pre-line"
          }}
        >
          {rightContent}
        </Typography>
      </Grid>
    </Grid>
  );
};
