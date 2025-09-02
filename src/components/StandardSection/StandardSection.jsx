import React from "react";
import { Box, Typography } from "@mui/material";
import SeparatorImage from "../../assets/Separator.png";

export const StandardSection = ({ 
  title, 
  description, 
  titleColor = "#ffffff",
  descriptionColor = "#ffffff",
  showSeparator = true,
  customStyles = {},
  id
}) => {
  return (
    <Box
      id={id}
      sx={{
        textAlign: "center",
        mb: {
          xs: "3rem",
          sm: "4rem", 
          md: "5rem",
          lg: "6rem",
          xl: "8rem"
        },
        ...customStyles
      }}
    >
      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 700,
          fontSize: {
            xs: "clamp(1.8rem, 5vw, 2.5rem)",
            sm: "clamp(2rem, 4.5vw, 2.8rem)",
            md: "clamp(2.5rem, 4vw, 3.2rem)",
            lg: "clamp(3rem, 3.5vw, 4rem)",
            xl: "clamp(3.5rem, 3vw, 4.5rem)"
          },
          color: titleColor,
        //   textTransform: "uppercase" lo comentamos por ahora, no se si me interesara a futuro,
          letterSpacing: {
            xs: "0.05em",
            md: "0.08em"
          },
          mb: {
            xs: "1.5rem",
            md: "2rem",
            lg: "2.5rem"
          },
          lineHeight: {
            xs: 1.2,
            md: 1.1
          }
        }}
      >
        {title}
      </Typography>

      {/* Separator */}
      {showSeparator && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: {
              xs: "1.5rem",
              md: "2rem",
              lg: "2.5rem"
            }
          }}
        >
          <Box
            component="img"
            src={SeparatorImage}
            alt="Section Separator"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
              opacity: 0.9
            }}
          />
        </Box>
      )}

      {/* Description */}
      {description && (
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.9rem, 3.5vw, 1.2rem)",
              sm: "clamp(1rem, 3vw, 1.3rem)",
              md: "clamp(1.1rem, 2.5vw, 1.4rem)",
              lg: "clamp(1.2rem, 2vw, 1.6rem)",
              xl: "clamp(1.3rem, 1.8vw, 1.8rem)"
            },
            color: descriptionColor,
            lineHeight: {
              xs: 1.4,
              md: 1.5
            },
            maxWidth: {
              xs: "95%",
              sm: "85%",
              md: "75%",
              lg: "70%",
              xl: "65%"
            },
            mx: "auto",
            px: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem"
            }
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
