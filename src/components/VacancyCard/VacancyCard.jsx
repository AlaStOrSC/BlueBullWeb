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
        height: "100%",
        borderRadius: "1.09rem",
        marginBottom: "1rem",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.85rem",
        }}
      >
        {/* Título con altura fija */}
        <Box
          sx={{
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
            flexShrink: 0,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              fontSize: "1.25rem",
              lineHeight: 1.2,
              color: "#00bfff",
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {name}
          </Typography>
        </Box>

        {/* Separador con altura fija */}
        <Box
          sx={{
            height: "0rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 0.5,
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={Separator}
            alt="Separator"
            sx={{
              width: "2.5rem",
              height: "0.25rem",
            }}
          />
        </Box>

        {/* Área de contenido flexible */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.8rem",
            flex: 1,
            justifyContent: "center",
            mb: 3.5,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: 1.3,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {recruitingCategory} • {schedule}
          </Typography>

          <Box
            component="img"
            src={Separator}
            alt="Separator"
            sx={{
              width: "1.25rem",
              height: "0.125rem",
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: 1.3,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {office}
          </Typography>

          <Box
            component="img"
            src={Separator}
            alt="Separator"
            sx={{
              width: "1.25rem",
              height: "0.125rem",
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: 1.3,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Years of experience: {yearsOfExperience}
          </Typography>
        </Box>

        {/* Botón con altura fija */}
        <Box
          sx={{
            flexShrink: 0,
          }}
        >
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
