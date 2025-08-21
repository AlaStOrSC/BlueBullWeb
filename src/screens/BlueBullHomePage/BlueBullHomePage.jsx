import React from "react";
import { Box, Container } from "@mui/material";
import { AboutHeaderInfo } from "./sections/AboutHeaderInfo";
import { Footer } from "./sections/Footer";
import { SolutionsSection } from "./sections/SolutionsSection";
import { WhoWeAreSection } from "./sections/WhoWeAreSection";
import { WhyBlueBullTech } from "./sections/WhyBlueBullTech";
import { WorldMapImage } from "./sections/WorldMapImage";
import { StrategicPartners } from "./sections/StrategicPartners";
import { HeroImageContent } from "./sections/HeroImageContent";
import { MainMarketsSection } from "./sections/MainMarketsSection/MainMarketsSection";
import backgroundGradient from "../../assets/background-gradient.png";

export const BlueBullHomePage = () => {
  return (
    <Box
      className="blue-bull-home-page"
      sx={{
        background: `url(${backgroundGradient})`,
        backgroundSize: '100%', // Tamaño original
        backgroundPosition: 'top center', // Muestra la parte superior
        backgroundRepeat: 'no-repeat',
        // Mantiene el fondo fijo al hacer scroll
        backgroundColor: '#010815', // Fallback color
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
            left: "5%",
            transform: "rotate(165deg)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(79, 172, 254, 0.08)",
            borderRadius: "50%",
            filter: "blur(12rem)",
            width: { xs: "55vw", md: "35vw", lg: "25vw" },
            height: { xs: "55vw", md: "35vw", lg: "25vw" },
            top: "8%",
            right: "8%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(30, 58, 138, 0.12)",
            borderRadius: "50%",
            filter: "blur(15rem)",
            width: { xs: "65vw", md: "45vw", lg: "30vw" },
            height: { xs: "30vh", md: "22vh", lg: "18vh" },
            top: "12%",
            left: "-8%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(99, 102, 241, 0.06)",
            borderRadius: "50%",
            filter: "blur(10rem)",
            width: { xs: "45vw", md: "30vw", lg: "20vw" },
            height: { xs: "45vw", md: "30vw", lg: "20vw" },
            top: "2%",
            right: "2%",
          }}
        />
      </Box>

      {/* Navigation */}
      <WorldMapImage />

      {/* Main Content */}
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          pt: { xs: 3, md: 4 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "flex-start", lg: "center" },
            minHeight: { xs: "auto", lg: "80vh" },
            gap: { xs: 4, lg: 8 },
            mb: { xs: 12, md: 20 },
          }}
        >
          <AboutHeaderInfo />
          <HeroImageContent />
        </Box>

        {/* Who We Are Section */}
        <Box sx={{ mb: { xs: 12, md: 20 }, mt: { xs: -8, md: -16 } }}>
          <WhoWeAreSection />
        </Box>

        {/* Solutions Section */}
        <Box sx={{ mb: { xs: 12, md: 20 } }}>
          <SolutionsSection />
        </Box>

        {/* Why BlueBull Tech Section */}
        <Box sx={{ mb: { xs: 12, md: 20 } }}>
          <WhyBlueBullTech />
        </Box>
          <Box>
          <MainMarketsSection />
        </Box>

        {/* Strategic Partners Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <StrategicPartners />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
