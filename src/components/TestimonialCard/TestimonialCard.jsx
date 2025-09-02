import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { ReadMoreButton } from "../ReadMoreButton";

export const TestimonialCard = ({ 
  id,
  name, 
  testimonial, 
  avatar,    // Nueva propiedad para la imagen de la persona
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
        {/* Avatar Circle */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: {
              xs: "1rem",
              md: "1.5rem"
            }
          }}
        >
          <Box
            sx={{
              width: {
                xs: "4rem",
                sm: "4.5rem", 
                md: "5rem",
                lg: "5.5rem",
                xl: "6rem"
              },
              height: {
                xs: "4rem",
                sm: "4.5rem",
                md: "5rem", 
                lg: "5.5rem",
                xl: "6rem"
              },
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #00bfff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1a1a1a"
            }}
          >
            {avatar ? (
              <Box
                component="img"
                src={avatar}
                alt={name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            ) : (
              <Typography
                sx={{
                  color: "#00bfff",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.8rem",
                    md: "2rem",
                    lg: "2.2rem",
                    xl: "2.5rem"
                  },
                  fontWeight: 600
                }}
              >
                {name ? name.charAt(0).toUpperCase() : "?"}
              </Typography>
            )}
          </Box>
        </Box>

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
            textAlign: "center",
            // Altura fija para alinear todos los nombres (reducida porque ahora hay avatar)
            height: {
              xs: "2.4rem",    // Reducido para compensar el avatar
              sm: "2.6rem",    // Reducido para compensar el avatar
              md: "2.8rem",    // Reducido para compensar el avatar
              lg: "3rem",      // Reducido para compensar el avatar
              xl: "3.2rem"     // Reducido para compensar el avatar
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1.2
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
              xs: "clamp(0.595rem, 2.1vw, 0.7rem)",    // 30% menos que los valores originales
              sm: "clamp(0.63rem, 1.96vw, 0.77rem)",   // 30% menos que los valores originales
              md: "clamp(0.665rem, 1.75vw, 0.805rem)", // 30% menos que los valores originales
              lg: "clamp(0.7rem, 1.54vw, 0.875rem)",   // 30% menos que los valores originales
              xl: "clamp(0.735rem, 1.4vw, 0.91rem)"    // 30% menos que los valores originales
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
