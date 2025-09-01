import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { ReadMoreButton } from "../ReadMoreButton";

export const TestimonialCard = ({ 
  id,
  name, 
  testimonial, 
  onReadMore 
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "none",
        border: "none",
        borderRadius: {
          xs: "1rem",
          md: "1.5rem"
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none"
      }}
    >
      <CardContent
        sx={{
          p: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem"
          },
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        {/* Name */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            fontSize: {
              xs: "clamp(1.1rem, 4vw, 1.4rem)",
              sm: "clamp(1.2rem, 3.5vw, 1.5rem)",
              md: "clamp(1.3rem, 3vw, 1.6rem)",
              lg: "clamp(1.4rem, 2.5vw, 1.8rem)",
              xl: "clamp(1.5rem, 2vw, 2rem)"
            },
            color: "#00bfff",
            mb: {
              xs: "1rem",
              md: "1.5rem"
            },
            textAlign: "center"
          }}
        >
          {name}
        </Typography>

        {/* Testimonial */}
        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.85rem, 3vw, 1rem)",
              sm: "clamp(0.9rem, 2.8vw, 1.1rem)",
              md: "clamp(0.95rem, 2.5vw, 1.15rem)",
              lg: "clamp(1rem, 2.2vw, 1.25rem)",
              xl: "clamp(1.05rem, 2vw, 1.3rem)"
            },
            color: "#ffffff",
            lineHeight: {
              xs: 1.5,
              md: 1.6
            },
            mb: {
              xs: "1.5rem",
              md: "2rem"
            },
            flex: 1,
            textAlign: "center"
          }}
        >
          "{testimonial}"
        </Typography>

        {/* Read More Button */}
        <Box sx={{ textAlign: "center" }}>
          <ReadMoreButton
            text="Read More"
            onClick={() => onReadMore && onReadMore(id)}
            sx={{
              width: { xs: "12rem", sm: "14rem", md: "12rem" },
              height: { xs: "3rem", sm: "3.5rem", md: "3rem" }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
