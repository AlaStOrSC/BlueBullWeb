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
import ALEA from "../../assets/PartnersIcons/AleaIcon.png";
import AXION from "../../assets/PartnersIcons/AxionGamingIcon.png";
import ULTA from "../../assets/PartnersIcons/UltraPlusIcon.png";
import NEXT from "../../assets/PartnersIcons/NextStepIcon.png";
// Solution Icons
import CasinoIcon from "../../assets/SolutionIcons/CasinoIcon.png";
import LiveCasinoIcon from "../../assets/SolutionIcons/LiveCasinoIcon.png";
import SportBookIcon from "../../assets/SolutionIcons/SportBookIcon.png";
import ScratchCardIcon from "../../assets/SolutionIcons/ScratchCardIcon.png";
import LottoIcon from "../../assets/SolutionIcons/LottoIcon.png";
import GraphicIcon from "../../assets/SolutionIcons/GraphicIcon.png";
import HeartIcon from "../../assets/SolutionIcons/HeartIcon.png";
import PorcentageIcon from "../../assets/SolutionIcons/PorcentageIcon.png";
import BuzonIcon from "../../assets/SolutionIcons/BuzonIcon.png";
import TickIcon from "../../assets/SolutionIcons/TickIcon.png";
import PaymentIcon from "../../assets/SolutionIcons/PaymentIcon.png";
import MobileIcon from "../../assets/SolutionIcons/MobileIcon.png";
import ApiIcon from "../../assets/SolutionIcons/ApiIcon.png";

export const SolutionsPage = () => {
  const { t } = useTranslation();

  const productsData = [
    { id: "casino", name: "Casino", icon: CasinoIcon },
    { id: "live-casino", name: "Live Casino", icon: LiveCasinoIcon },
    { id: "sportsbook", name: "Sportsbook", icon: SportBookIcon },
    { id: "scratchcards", name: "Scratchcards", icon: ScratchCardIcon },
    { id: "lotto", name: "Lotto", icon: LottoIcon }
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
      icon: BuzonIcon,
      title: "Risk Management",
      description: "Comprehensive risk assessment and fraud prevention systems for secure operations."
    },
    {
      id: "solution-5",
      icon: TickIcon,
      title: "Compliance Solutions",
      description: "Regulatory compliance tools ensuring adherence to local and international gaming laws."
    },
    {
      id: "solution-6",
      icon: PaymentIcon,
      title: "Payment Integration",
      description: "Seamless payment gateway integration supporting multiple currencies and methods."
    },
    {
      id: "solution-7",
      icon: MobileIcon,
      title: "Mobile Optimization",
      description: "Mobile-first solutions ensuring optimal performance across all devices and platforms."
    },
    {
      id: "solution-8",
      icon: ApiIcon,
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
      avatar: PlaceHolderImg,
      testimonial: "The solutions provided by BlueBull have transformed our platform capabilities. Their technical expertise and innovative approach have significantly improved our operational efficiency and player satisfaction."
    },
    {
      id: "testimonial-solutions-2",
      name: "Marcus Thompson", 
      avatar: PlaceHolderImg,
      testimonial: "BlueBull's comprehensive solutions suite has been instrumental in our market expansion. Their deep understanding of regulatory requirements and local market dynamics made our launch seamless."
    },
    {
      id: "testimonial-solutions-3",
      name: "Sofia Chen",
      avatar: PlaceHolderImg,
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
          description=""
          id="our-services"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", sm: "5rem", md: "6rem", lg: "8rem", xl: "10rem" }
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 5 }} // Reducido spacing para dar más espacio a las cards
            justifyContent="center"
            alignItems="stretch"
            sx={{ 
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "90%", xl: "85rem" }, // Aumentado maxWidth
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
          title="Our Products"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mb: { xs: "4rem", sm: "5rem", md: "6rem", lg: "8rem", xl: "10rem" } }}
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
                <Box
                  component="img"
                  src={product.icon}
                  alt={product.name}
                  sx={{
                    width: { 
                      xs: "clamp(2.5rem, 8vw, 4rem)", 
                      sm: "clamp(3rem, 6vw, 4.5rem)", 
                      md: "clamp(3.5rem, 5vw, 5rem)" 
                    },
                    height: { 
                      xs: "clamp(2.5rem, 8vw, 4rem)", 
                      sm: "clamp(3rem, 6vw, 4.5rem)", 
                      md: "clamp(3.5rem, 5vw, 5rem)" 
                    },
                    mb: { 
                      xs: "clamp(0.3rem, 1.5vw, 0.5rem)", 
                      md: "clamp(0.5rem, 1vw, 1rem)" 
                    },
                    objectFit: "contain"
                  }}
                />
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
          title="Strategic Partners"
          description=""
          id="strategic-partners"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: { xs: "4rem", sm: "5rem", md: "6rem", lg: "8rem", xl: "10rem" }
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
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
            mb: { xs: "4rem", sm: "5rem", md: "6rem", lg: "8rem", xl: "10rem" }
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{ 
              maxWidth: "100%",
              px: { xs: "0.5rem", sm: "1rem" }
            }}
          >
            {testimonialsData.map((testimonial) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}
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
                  avatar={testimonial.avatar}
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
