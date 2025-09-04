import React from "react";
import { Box, Typography } from "@mui/material";
import { ReadMoreButton } from "../ReadMoreButton";
import Separator from "../../assets/Separator.png";

export const VacancyCard = ({ 
  id,
  name,
  recruitingCategory,
  schedule,
  office,
  yearsOfExperience
}) => {
  const handleApply = () => {
    window.open(`https://blue-bull-technology.jobs.personio.com/job/${id}?language=en&display=en`, "_blank");
  };

  return (
    <Box
      className="vacancy-card"
      sx={{
        width: "100%",
        maxWidth: "280px",
        minWidth: "240px",
        height: "100%",
        minHeight: "400px",
        borderRadius: "1.09rem",
        position: "relative",
        backgroundColor: "transparent",
        transition: "color 0.3s ease",
        mx: "auto",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "1.09rem",
          padding: "3px",
          background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto auto auto 1fr 1fr 1fr auto",
          gridTemplateAreas: `
            "title"
            "separator"
            "category"
            "office"
            "experience"
            "spacer"
            "button"
          `,
          alignItems: "center",
          justifyItems: "center",
          padding: "1.25rem",
          gap: "0.8rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            gridArea: "title",
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            fontSize: {
              xs: "1.1rem",
              md: "1.25rem"
            },
            lineHeight: 1.2,
            color: "#00bfff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {name}
        </Typography>

        <Box
          component="img"
          src={Separator}
          alt="Separator"
          sx={{
            gridArea: "separator",
            width: "2.5rem",
            height: "0.25rem",
          }}
        />

        <Typography
          variant="h2"
          sx={{
            gridArea: "category",
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 600,
            fontSize: {
              xs: "0.9rem",
              md: "1rem"
            },
            lineHeight: 1.3,
            color: "#ffffff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {recruitingCategory} • {schedule}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            gridArea: "office",
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 600,
            fontSize: {
              xs: "0.9rem",
              md: "1rem"
            },
            lineHeight: 1.3,
            color: "#ffffff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {office}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            gridArea: "experience",
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 600,
            fontSize: {
              xs: "0.9rem",
              md: "1rem"
            },
            lineHeight: 1.3,
            color: "#ffffff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          Years of experience: {yearsOfExperience}
        </Typography>

        <Box sx={{ gridArea: "spacer" }} />

        <Box sx={{ gridArea: "button" }}>
          <ReadMoreButton 
            text="Apply" 
            onClick={handleApply}
            scale={1}
          />
        </Box>
      </Box>
    </Box>
  );
};
