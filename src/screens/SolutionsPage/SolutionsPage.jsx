import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StandardSection } from "../../components/StandardSection";
import { ImageAndTextCard } from "../../components/ImageAndTextCard";
import { SolutionCard } from "../../components/SolutionCard";
import { PartnerCard } from "../../components/PartnerCard";
import { TestimonialCard } from "../../components/TestimonialCard";
import BackgroundImage from "../../assets/background-gradient.png";
import PlaceHolderImg from "../../assets/PlaceHolderImg.png";
import GraphicIcon from "../../assets/GraphicIcon.png";
import HeartIcon from "../../assets/HeartIcon.png";
import PorcentageIcon from "../../assets/PorcentageIcon.png";
import ALEA from "../../assets/ALEA (2).png";
import AXION from "../../assets/AXION (2).png";
import ULTA from "../../assets/ULTA PLUS (2) 1.png";
import NEXT from "../../assets/NEXT STEPS (2).png";

export const SolutionsPage = () => {
  const { t } = useTranslation();

  const productsData = [
    { id: "casino", name: "Casino", icon: "🎰" },
    { id: "live-casino", name: "Live Casino", icon: "🎲" },
    { id: "sportsbook", name: "Sportsbook", icon: "⚽" },
    { id: "scratchcards", name: "Scratchcards", icon: "🎫" },
    { id: "lotto", name: "Lotto", icon: "🎱" }
  ];

  const solutionsData = [
    {
      id: "solution-1",
      icon: GraphicIcon,
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools for comprehensive player insights and performance optimization."
    },
    {
      id: "solution-2", 
      icon: HeartIcon,
      title: "Player Engagement",
      description: "Innovative engagement solutions designed to enhance player retention and satisfaction."
    },
    {
      id: "solution-3",
      icon: PorcentageIcon,
      title: "Revenue Optimization",
      description: "Strategic tools and insights to maximize revenue potential across all gaming verticals."
    },
    {
      id: "solution-4",
      icon: GraphicIcon,
      title: "Risk Management",
      description: "Comprehensive risk assessment and fraud prevention systems for secure operations."
    },
    {
      id: "solution-5",
      icon: HeartIcon,
      title: "Compliance Solutions",
      description: "Regulatory compliance tools ensuring adherence to local and international gaming laws."
    },
    {
      id: "solution-6",
      icon: PorcentageIcon,
      title: "Payment Integration",
      description: "Seamless payment gateway integration supporting multiple currencies and methods."
    },
    {
      id: "solution-7",
      icon: GraphicIcon,
      title: "Mobile Optimization",
      description: "Mobile-first solutions ensuring optimal performance across all devices and platforms."
    },
    {
      id: "solution-8",
      icon: HeartIcon,
      title: "API Integration",
      description: "Robust API solutions for seamless integration with existing systems and third-party services."
    }
  ];

  const partnersData = [
    {
      id: "alea",
      logo: ALEA,
      name: "ALEA",
      description: "Leading provider of innovative gaming solutions and technology platforms for the iGaming industry."
    },
    {
      id: "axion",
      logo: AXION,
      name: "AXION", 
      description: "Specialized in advanced payment processing and financial services for gaming operators."
    },
    {
      id: "ulta",
      logo: ULTA,
      name: "ULTA PLUS",
      description: "Premium sports betting and casino platform provider with global market expertise."
    },
    {
      id: "next",
      logo: NEXT,
      name: "NEXT STEPS",
      description: "Strategic consulting and business development services for emerging gaming markets."
    }
  ];

  const testimonialsData = [
    {
      id: "testimonial-solutions-1",
      name: "Elena Rodriguez",
      testimonial: "The solutions provided by BlueBull have transformed our platform capabilities. Their technical expertise and innovative approach have significantly improved our operational efficiency and player satisfaction."
    },
    {
      id: "testimonial-solutions-2",
      name: "Marcus Thompson", 
      testimonial: "BlueBull's comprehensive solutions suite has been instrumental in our market expansion. Their deep understanding of regulatory requirements and local market dynamics made our launch seamless."
    },
    {
      id: "testimonial-solutions-3",
      name: "Sofia Chen",
      testimonial: "Working with BlueBull's solutions team has elevated our gaming platform to new heights. Their data-driven approach and cutting-edge technology have dramatically increased our player engagement metrics."
    }
  ];

  const handleReadMore = (testimonialId) => {
    console.log(`Read more clicked for: ${testimonialId}`);
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
        <StandardSection
          title="Our Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ImageAndTextCard
          image={PlaceHolderImg}
          imageAlt="Our Services"
          title="Mexico is the second largest iGaming market in Latin America, after Brazil."
          description={`Estimated to generate over $1.5 billion USD annually, combining land-based and online operations.
Over 75% of online bets are placed via mobile devices.
Strong demand for:
-Sports betting (football, boxing, lucha libre, NFL)
-Online slots and classic casino games
Major sporting events`}
        />

        <StandardSection
          title="Our Products"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mb: { xs: "4rem", md: "6rem", lg: "8rem" } }}
        >
          {productsData.map((product) => (
            <Grid 
              item 
              xs={6} 
              sm={4} 
              md={2.4} 
              key={product.id}
              sx={{ 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  p: { 
                    xs: "clamp(0.8rem, 3vw, 1.2rem)", 
                    sm: "clamp(1rem, 2.5vw, 1.5rem)", 
                    md: "clamp(1.2rem, 2vw, 2rem)" 
                  },
                  width: "100%",
                  maxWidth: "12rem"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "clamp(1.5rem, 5vw, 2rem)", 
                      sm: "clamp(2rem, 4vw, 2.5rem)", 
                      md: "clamp(2.2rem, 3vw, 3rem)" 
                    },
                    mb: { 
                      xs: "clamp(0.3rem, 1.5vw, 0.5rem)", 
                      md: "clamp(0.5rem, 1vw, 1rem)" 
                    }
                  }}
                >
                  {product.icon}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    fontSize: {
                      xs: "clamp(0.9rem, 3vw, 1.1rem)",
                      sm: "clamp(1rem, 2.8vw, 1.2rem)",
                      md: "clamp(1.1rem, 2.5vw, 1.3rem)",
                      lg: "clamp(1.2rem, 2.2vw, 1.4rem)"
                    },
                    color: "#ffffff",
                    textAlign: "center",
                    lineHeight: 1.2
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <StandardSection
          title="Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", md: "6rem", lg: "8rem" }
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }} 
            justifyContent="center"
            alignItems="stretch"
            sx={{ 
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%", xl: "80rem" },
              px: { xs: "1rem", sm: "2rem", md: "3rem" }
            }}
          >
            {solutionsData.map((solution) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}
                lg={3} 
                key={solution.id} 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "stretch"
                }}
              >
                <SolutionCard
                  id={solution.id}
                  icon={solution.icon}
                  iconAlt={solution.title}
                  title={solution.title}
                  description={solution.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <StandardSection
          title="Strategic Partners"
          description=""
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", md: "6rem", lg: "8rem" }
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{ 
              maxWidth: { xs: "100%", sm: "95%", md: "85%", lg: "75%", xl: "60rem" },
              px: { xs: "1rem", sm: "2rem", md: "3rem" }
            }}
          >
            {partnersData.map((partner) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}
                lg={3} 
                key={partner.id} 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "stretch"
                }}
              >
                <PartnerCard
                  id={partner.id}
                  logo={partner.logo}
                  name={partner.name}
                  description={partner.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <StandardSection
          title="Testimonials"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", md: "6rem", lg: "8rem" }
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{ 
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
              px: { xs: "1rem", sm: "2rem" }
            }}
          >
            {testimonialsData.map((testimonial) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4} 
                key={testimonial.id}
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "stretch"
                }}
              >
                <TestimonialCard
                  id={testimonial.id}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  onReadMore={handleReadMore}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
