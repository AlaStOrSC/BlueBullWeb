import React from "react";
import { Box, Container } from "@mui/material";
import { TitleAndImageCard } from "../../components/TitleAndImageCard";
import backgroundGradient from "../../assets/background-gradient.png";
import Lucasbb1 from "../../assets/Lucasbb1.png";
import BbMission1 from "../../assets/BbMission1.png";
import BbMission2 from "../../assets/BbMission2.png";
import BbVision1 from "../../assets/BbVision1.png";
import BbVision2 from "../../assets/BbVision2.png";

export const AboutUsPage = () => {
  return (
    <Box
      className="about-us-page"
      sx={{
        background: `url(${backgroundGradient})`,
        backgroundSize: '100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#010815',
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        {/* Subtle additional gradients for depth */}
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(8rem)",
            width: { xs: "70vw", md: "50vw", lg: "35vw" },
            height: { xs: "35vh", md: "25vh", lg: "18vh" },
            top: "65%",
            left: "10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(16, 185, 129, 0.08)",
            borderRadius: "50%",
            filter: "blur(6rem)",
            width: { xs: "60vw", md: "40vw", lg: "30vw" },
            height: { xs: "30vh", md: "20vh", lg: "15vh" },
            top: "80%",
            right: "15%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </Box>

      {/* Content Container */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          px: 0,
          pt: {
            xs: "6rem",
            sm: "7rem",
            md: "8rem",
            lg: "9rem"
          },
          pb: {
            xs: "4rem",
            sm: "5rem",
            md: "6rem",
            lg: "8rem"
          }
        }}
      >
        {/* Section 1: About Us */}
        <TitleAndImageCard
          title="About us"
          description="We combine data-driven strategy, creative storytelling and performance tech to drive player engagement and business growth"
          leftContent={Lucasbb1}
          leftContentType="image"
          rightContent="Blue Bull Technology was born in 2025 with over 50 years of combined marketing and iGaming expertise already on board. 

Headquartered in southern Spain, we are a bold, fast-growing digital marketing and iGaming venture with a powerful presence across LATAM markets.

We deliver 360° marketing solutions that bring together data-driven strategy, creative storytelling, and performance technology to drive player engagement and accelerate business growth."
          rightContentType="text"
        />

        {/* Section 2: Our Mission */}
        <TitleAndImageCard
          title="Our mission"
          description="Our mission is to engage, retain, and excite players through personalised, innovative campaigns that make every experience count."
          leftContent={BbMission1}
          leftContentType="image"
          rightContent={BbMission2}
          rightContentType="image"
        />

        {/* Section 3: Vision */}
        <TitleAndImageCard
          title="Vision"
          description="To become a leading force in iGaming and digital marketing, powered by creativity, data, and a people-first culture."
          leftContent={BbVision1}
          leftContentType="image"
          rightContent={BbVision2}
          rightContentType="image"
          customStyles={{
            mb: 0 // Remove bottom margin for last section
          }}
        />
      </Container>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </Box>
  );
};
