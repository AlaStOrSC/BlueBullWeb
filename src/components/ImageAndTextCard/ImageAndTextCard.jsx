import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const ImageAndTextCard = ({ 
  image, 
  imageAlt, 
  title, 
  description, 
  reverseOrder = false,
  customStyles = {}
}) => {
  return (
    <Grid 
      container 
      spacing={{ xs: 3, md: 4, lg: 6 }}
      sx={{ 
        mb: { xs: "3rem", md: "4rem", lg: "6rem" },
        alignItems: "center",
        py: {
          xs: "3rem",
          sm: "3.125rem",
          md: "3.25rem",
          lg: "3.5rem",
          xl: "3.75rem"
        },
        ...customStyles
      }}
    >
      <Grid item xs={12} md={6} sx={{ order: { xs: reverseOrder ? 2 : 1, md: reverseOrder ? 2 : 1 } }}>
        <Box
          component="img"
          src={image}
          alt={imageAlt}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: {
              xs: "1rem",
              md: "1.5rem"
            },
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)"
            }
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ order: { xs: reverseOrder ? 1 : 2, md: reverseOrder ? 1 : 2 } }}>
        <Box sx={{ pl: { xs: 0, md: reverseOrder ? 0 : "2rem" }, pr: { xs: 0, md: reverseOrder ? "2rem" : 0 } }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              fontSize: {
                xs: "clamp(1.4rem, 4vw, 1.8rem)",
                sm: "clamp(1.6rem, 3.5vw, 2rem)",
                md: "clamp(1.8rem, 3vw, 2.2rem)",
                lg: "clamp(2rem, 2.5vw, 2.4rem)",
                xl: "clamp(2.2rem, 2vw, 2.6rem)"
              },
              color: "#00bfff",
              mb: { xs: "1rem", md: "1.5rem" },
              lineHeight: 1.2
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 400,
              fontSize: {
                xs: "clamp(0.9rem, 3.2vw, 1.1rem)",
                sm: "clamp(1rem, 2.8vw, 1.2rem)",
                md: "clamp(1.05rem, 2.5vw, 1.25rem)",
                lg: "clamp(1.1rem, 2.2vw, 1.3rem)",
                xl: "clamp(1.15rem, 2vw, 1.35rem)"
              },
              color: "#ffffff",
              lineHeight: { xs: 1.5, md: 1.6 },
              whiteSpace: "pre-line"
            }}
          >
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
