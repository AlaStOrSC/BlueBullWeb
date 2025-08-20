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

export const BlueBullHomePage = () => {
  return (
    <Box
      className="blue-bull-home-page"
      sx={{
        backgroundColor: "#010815",
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
        {/* Gradient Ellipses */}
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#040622",
            borderRadius: "50%",
            filter: "blur(10rem)",
            width: { xs: "80vw", md: "60vw", lg: "40vw" },
            height: { xs: "40vh", md: "30vh", lg: "20vh" },
            top: "60%",
            left: "10%",
            transform: "rotate(168deg)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#1955d866",
            borderRadius: "50%",
            filter: "blur(25rem)",
            width: { xs: "60vw", md: "40vw", lg: "30vw" },
            height: { xs: "60vw", md: "40vw", lg: "30vw" },
            top: "5%",
            right: "5%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#414bb666",
            borderRadius: "50%",
            filter: "blur(25rem)",
            width: { xs: "70vw", md: "50vw", lg: "35vw" },
            height: { xs: "40vh", md: "30vh", lg: "25vh" },
            top: "10%",
            left: "-10%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#8f41b666",
            borderRadius: "50%",
            filter: "blur(25rem)",
            width: { xs: "60vw", md: "40vw", lg: "30vw" },
            height: { xs: "60vw", md: "40vw", lg: "30vw" },
            top: "0%",
            right: "0%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#87f3ff99",
            borderRadius: "50%",
            filter: "blur(9rem)",
            width: { xs: "40vw", md: "25vw", lg: "15vw" },
            height: { xs: "60vh", md: "40vh", lg: "30vh" },
            top: "2%",
            right: "8%",
            transform: "rotate(-115deg)",
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
          pt: { xs: 12, md: 15 },
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
        <Box sx={{ mb: { xs: 12, md: 20 } }}>
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
