import React, { useState, useRef } from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { StandardSection } from "../../components/StandardSection";
import { ReadMoreButton } from "../../components/ReadMoreButton";
import BackgroundImage from "../../assets/background-gradient.png";
import BBLogoCharity from "../../assets/BBLogoCharity.png";
import PlusIcon from "../../assets/PlusIcon.png";
import FundOlivares from "../../assets/FundOlivares.png";
import ArrowSeparator from "../../assets/ArrowSeparator.png";

export const CharityPage = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images for merch carousel (using Lorem Picsum)
  const merchImages = [
    { id: 1, src: "https://picsum.photos/300/300?random=1", alt: "BlueBull Merch 1" },
    { id: 2, src: "https://picsum.photos/300/300?random=2", alt: "BlueBull Merch 2" },
    { id: 3, src: "https://picsum.photos/300/300?random=3", alt: "BlueBull Merch 3" },
    { id: 4, src: "https://picsum.photos/300/300?random=4", alt: "BlueBull Merch 4" },
    { id: 5, src: "https://picsum.photos/300/300?random=5", alt: "BlueBull Merch 5" },
    { id: 6, src: "https://picsum.photos/300/300?random=6", alt: "BlueBull Merch 6" }
  ];

  const handleVisitWebsite = () => {
    window.open("https://www.fundacionolivares.org/", "_blank");
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Width of each item + gap
      const newPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      // Update current slide for visual feedback
      const maxSlides = merchImages.length - 3; // Show 3 items at once
      setCurrentSlide(prev => {
        if (direction === 'left') {
          return Math.max(0, prev - 1);
        } else {
          return Math.min(maxSlides, prev + 1);
        }
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1
        }
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1650px",
          px: {
            xs: "clamp(1rem, 4vw, 2rem)",
            sm: "clamp(1.5rem, 3.5vw, 2.5rem)",
            md: "clamp(2rem, 3vw, 3rem)", 
            lg: "clamp(2.5rem, 2.5vw, 3.5rem)",
            xl: "clamp(3rem, 2vw, 4rem)"
          },
          pt: {
            xs: "clamp(6rem, 15vw, 8rem)",
            sm: "clamp(7rem, 12vw, 9rem)",
            md: "clamp(8rem, 10vw, 10rem)",
            lg: "clamp(9rem, 8vw, 11rem)",
            xl: "clamp(10rem, 6vw, 12rem)"
          },
          pb: {
            xs: "clamp(3rem, 8vw, 4rem)",
            sm: "clamp(4rem, 7vw, 5rem)",
            md: "clamp(5rem, 6vw, 6rem)",
            lg: "clamp(6rem, 5vw, 8rem)",
            xl: "clamp(8rem, 4vw, 10rem)"
          }
        }}
      >
        {/* Section 1: Our charity causes */}
        <StandardSection
          title="Our charity causes"
          description="We combine data-driven strategy, creative storytelling and performance tech to drive player engagement and business growth"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", md: "6rem", lg: "8rem" }
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              gap: { xs: "2rem", md: "3rem", lg: "4rem" }
            }}
          >
            {/* Left half - Images with separator */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "1rem", md: "1.5rem", lg: "2rem" }
              }}
            >
              <Box
                component="img"
                src={BBLogoCharity}
                alt="BlueBull Charity Logo"
                sx={{
                  width: { xs: "8rem", sm: "10rem", md: "12rem", lg: "18rem" },
                  height: "auto",
                  objectFit: "contain"
                }}
              />
              
              <Box
                component="img"
                src={PlusIcon}
                alt="Plus separator"
                sx={{
                  width: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                  height: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                  objectFit: "contain"
                }}
              />
              
              <Box
                component="img"
                src={FundOlivares}
                alt="Fundación Olivares"
                sx={{
                  width: { xs:"8rem", sm: "10rem", md: "12rem", lg: "18rem"  },
                  height: "auto",
                  objectFit: "contain"
                }}
              />
            </Box>

            {/* Arrow Separator */}
            <Box
              component="img"
              src={ArrowSeparator}
              alt="Arrow separator"
              sx={{
                  width: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                  height: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                objectFit: "contain",
                transform: { xs: "rotate(90deg)", lg: "rotate(0deg)" }
              }}
            />

            {/* Right half - Text content */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", lg: "left" },
                maxWidth: { xs: "100%", lg: "50%" }
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 700,
                  fontSize: {
                    xs: "clamp(1.8rem, 6vw, 2.5rem)",
                    sm: "clamp(2rem, 5vw, 2.8rem)",
                    md: "clamp(2.2rem, 4vw, 3rem)",
                    lg: "clamp(2.5rem, 3.5vw, 3.5rem)"
                  },
                  color: "#ffffff",
                  mb: { xs: "1rem", md: "1.5rem", lg: "2rem" },
                  lineHeight: 1.2
                }}
              >
                Giving back to a great cause
              </Typography>
              
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: {
                    xs: "clamp(1rem, 4vw, 1.3rem)",
                    sm: "clamp(1.1rem, 3.5vw, 1.4rem)",
                    md: "clamp(1.2rem, 3vw, 1.5rem)",
                    lg: "clamp(1.3rem, 2.5vw, 1.6rem)"
                  },
                  color: "#ffffff",
                  mb: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                  lineHeight: 1.5
                }}
              >
                To ensure that children with cancer remain children.
              </Typography>
              
              <ReadMoreButton
                onClick={handleVisitWebsite}
                text="VISIT WEBSITE"
                sx={{
                  mx: { xs: "auto", lg: 0 }
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Section 2: Merch */}
        <StandardSection
          title="Merch"
          description="We dedicate 100% of the proceeds from our merch sales to our charitable cause. Every purchase you make contributes directly to making a difference."
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", md: "6rem", lg: "8rem" }
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
              position: "relative"
            }}
          >
            {/* Carousel Controls */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: { xs: "1rem", md: "1.5rem" }
              }}
            >
              <IconButton
                onClick={() => scrollCarousel('left')}
                disabled={currentSlide === 0}
                sx={{
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:disabled": {
                    color: "rgba(255, 255, 255, 0.3)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }
                }}
              >
                <ArrowBackIos />
              </IconButton>

              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 500
                }}
              >
                {currentSlide + 1} / {merchImages.length - 2}
              </Typography>

              <IconButton
                onClick={() => scrollCarousel('right')}
                disabled={currentSlide >= merchImages.length - 3}
                sx={{
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:disabled": {
                    color: "rgba(255, 255, 255, 0.3)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </Box>

            {/* Carousel Container */}
            <Box
              ref={carouselRef}
              sx={{
                display: "flex",
                gap: { xs: "1rem", md: "1.5rem", lg: "2rem" },
                overflowX: "auto",
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                  display: "none"
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none"
              }}
            >
              {merchImages.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    flexShrink: 0,
                    width: { xs: "250px", sm: "280px", md: "300px" },
                    height: { xs: "250px", sm: "280px", md: "300px" },
                    borderRadius: "clamp(0.5rem, 2vw, 1rem)",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
