import React from "react";
import { Box, Typography } from "@mui/material";
import { StandardSection } from "../StandardSection";

export const TitleAndImageCard = ({
  title,
  description,
  leftContent,
  rightContent,
  leftContentType = "image",
  rightContentType = "image",
  titleColor = "#ffffff",
  descriptionColor = "#ffffff",
  showSeparator = true,
  customStyles = {}
}) => {
  const renderContent = (content, type) => {
    if (type === "image") {
      return (
        <Box
          component="img"
          src={content}
          alt=""
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            borderRadius: {
              xs: "0.5rem",
              md: "0.75rem"
            },
            objectFit: "cover"
          }}
        />
      );
    } else {
      return (
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.9rem, 3.5vw, 1.2rem)",
              sm: "clamp(1rem, 3vw, 1.3rem)",
              md: "clamp(1.1rem, 2.5vw, 1.4rem)",
              lg: "clamp(1.2rem, 1vw, 0.8rem)",
              xl: "clamp(1.3rem, 1.8vw, 1.8rem)"
            },
            color: "#ffffff",
            lineHeight: {
              xs: 1.4,
              md: 1.5
            },
            textAlign: "left"
          }}
        >
          {content}
        </Typography>
      );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "95%",
          sm: "90%",
          md: "85%",
          lg: "80%",
          xl: "75%"
        },
        mx: "auto",
        mb: {
          xs: "4rem",
          sm: "5rem",
          md: "6rem",
          lg: "8rem"
        },
        px: {
          xs: "clamp(1rem, 4vw, 2rem)",
          md: "clamp(1.5rem, 3vw, 2.5rem)"
        },
        ...customStyles
      }}
    >
      {/* StandardSection for Title and Description */}
      <StandardSection
        title={title}
        description={description}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
        showSeparator={showSeparator}
      />

      {/* Content Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // Single column on mobile
            md: "1fr 1fr" // Two columns on desktop
          },
          gap: {
            xs: "2rem",
            md: "clamp(2rem, 4vw, 4rem)",
            lg: "clamp(3rem, 5vw, 5rem)"
          },
          alignItems: "center",
          mt: {
            xs: "2rem",
            md: "3rem"
          }
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: leftContentType === "text" ? "flex-start" : "center",
            order: { xs: 1, md: 1 }
          }}
        >
          {leftContent && renderContent(leftContent, leftContentType)}
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: rightContentType === "text" ? "flex-start" : "center",
            order: { xs: 2, md: 2 }
          }}
        >
          {rightContent && renderContent(rightContent, rightContentType)}
        </Box>
      </Box>
    </Box>
  );
};
