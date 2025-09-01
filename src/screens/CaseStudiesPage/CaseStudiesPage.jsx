import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StandardSection } from "../../components/StandardSection";
import { TestimonialCard } from "../../components/TestimonialCard";
import { MarketInfoSection } from "../../components/MarketInfoSection";
import BackgroundImage from "../../assets/background-gradient.png";
import YoapuestoBanner from "../../assets/Banners/YoapuestoBanner.png";
import NvivoBanner from "../../assets/Banners/24nvivoBanner.png";

export const CaseStudiesPage = () => {
  const { t } = useTranslation();

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Carlos Rodriguez",
      testimonial: "BlueBull's innovative approach to iGaming technology has transformed our platform's performance. Their expertise in data-driven solutions and player engagement strategies has significantly boosted our business growth."
    },
    {
      id: "testimonial-2", 
      name: "Maria Santos",
      testimonial: "The team at BlueBull delivered exceptional results for our Latin American expansion. Their deep understanding of local markets and regulatory compliance made our launch seamless and successful."
    },
    {
      id: "testimonial-3",
      name: "Diego Martinez",
      testimonial: "Working with BlueBull has been a game-changer for our mobile gaming platform. Their technical excellence and creative storytelling have elevated our brand and increased player retention dramatically."
    }
  ];

  const handleReadMore = (testimonialId) => {
    console.log(`Read more clicked for: ${testimonialId}`);
    // Aquí implementarías la lógica para mostrar más detalles
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
            xs: "4vw",
            sm: "3.5vw",
            md: "3vw", 
            lg: "2.5vw",
            xl: "2vw"
          },
          pt: {
            xs: "8rem",
            sm: "9rem",
            md: "10rem",
            lg: "11rem",
            xl: "12rem"
          },
          pb: {
            xs: "4rem",
            sm: "5rem",
            md: "6rem",
            lg: "8rem",
            xl: "10rem"
          }
        }}
      >
        {/* SECTION 1: Case Studies Overview */}
        <StandardSection
          title="Case Studies"
          description="Discover how our innovative solutions have transformed gaming experiences and driven exceptional results for our partners across diverse markets."
          customStyles={{
            mb: {
              xs: "3.6rem",    // 3rem * 1.2 = 3.6rem
              sm: "4.8rem",    // 4rem * 1.2 = 4.8rem
              md: "6rem",      // 5rem * 1.2 = 6rem
              lg: "7.2rem",    // 6rem * 1.2 = 7.2rem
              xl: "9.6rem"     // 8rem * 1.2 = 9.6rem
            }
          }}
        />

        {/* Case Study Items */}
        <Box sx={{ mb: { xs: "4rem", md: "6rem", lg: "8rem" } }}>
          {/* Case Study 1 */}
          <Grid 
            container 
            spacing={{ xs: 3, md: 4, lg: 6.9 }}
            sx={{ 
              mb: { xs: "3rem", md: "4rem", lg: "6rem" },
              alignItems: "center",
              py: {
                xs: "3rem",      // ~48px
                sm: "3.125rem",  // ~50px
                md: "3.25rem",   // ~52px
                lg: "3.5rem",    // ~56px
                xl: "3.75rem"    // ~60px
              }
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={YoapuestoBanner}
                alt="Yoapuesto Case Study"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: {
                    xs: "1rem",
                    md: "1.5rem"
                  },
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)"
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { xs: 0, md: "2rem" } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    fontSize: {
                      xs: "clamp(1.4rem, 4vw, 1.8rem)",
                      sm: "clamp(1.6rem, 3.5vw, 2rem)",
                      md: "clamp(1.8rem, 3vw, 2.2rem)",
                      lg: "clamp(2rem, 2.5vw, 2.4rem)",
                      xl: "clamp(2.2rem, 2vw, 2.6rem)"
                    },
                    color: "#00bfff",
                    mb: { xs: "1rem", md: "1.5rem" },
                    lineHeight: 1.2
                  }}
                >
                  Yoapuesto Platform Revolution
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 400,
                    fontSize: {
                      xs: "clamp(0.9rem, 3.2vw, 1.1rem)",
                      sm: "clamp(1rem, 2.8vw, 1.2rem)",
                      md: "clamp(1.05rem, 2.5vw, 1.25rem)",
                      lg: "clamp(1.1rem, 2.2vw, 1.3rem)",
                      xl: "clamp(1.15rem, 2vw, 1.35rem)"
                    },
                    color: "#ffffff",
                    lineHeight: { xs: 1.5, md: 1.6 }
                  }}
                >
                  We revolutionized Yoapuesto's gaming platform with cutting-edge technology and user-centric design. Our comprehensive solution included advanced analytics, real-time betting systems, and seamless mobile integration, resulting in a 300% increase in user engagement and 250% growth in revenue within the first six months of implementation.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Case Study 2 */}
          <Grid 
            container 
            spacing={{ xs: 3, md: 4, lg: 6.9 }}
            sx={{ 
              alignItems: "center",
              py: {
                xs: "3rem",      // ~48px
                sm: "3.125rem",  // ~50px
                md: "3.25rem",   // ~52px
                lg: "3.5rem",    // ~56px
                xl: "3.75rem"    // ~60px
              }
            }}
          >
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ pr: { xs: 0, md: "2rem" } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    fontSize: {
                      xs: "clamp(1.4rem, 4vw, 1.8rem)",
                      sm: "clamp(1.6rem, 3.5vw, 2rem)",
                      md: "clamp(1.8rem, 3vw, 2.2rem)",
                      lg: "clamp(2rem, 2.5vw, 2.4rem)",
                      xl: "clamp(2.2rem, 2vw, 2.6rem)"
                    },
                    color: "#00bfff",
                    mb: { xs: "1rem", md: "1.5rem" },
                    lineHeight: 1.2
                  }}
                >
                  Secret Digital Transformation
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 400,
                    fontSize: {
                      xs: "clamp(0.9rem, 3.2vw, 1.1rem)",
                      sm: "clamp(1rem, 2.8vw, 1.2rem)",
                      md: "clamp(1.05rem, 2.5vw, 1.25rem)",
                      lg: "clamp(1.1rem, 2.2vw, 1.3rem)",
                      xl: "clamp(1.15rem, 2vw, 1.35rem)"
                    },
                    color: "#ffffff",
                    lineHeight: { xs: 1.5, md: 1.6 }
                  }}
                >
                  Our partnership with Secret focused on creating a next-generation live gaming experience. We developed innovative real-time streaming technology, interactive betting features, and AI-powered recommendation systems. The result was a 400% increase in live session duration and 180% growth in active daily users.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                component="img"
                src={NvivoBanner}
                alt="24nvivo Case Study"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: {
                    xs: "1rem",
                    md: "1.5rem"
                  },
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)"
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* SECTION 2: Testimonials */}
        <StandardSection
          title="Testimonials"
          description="We combine data-driven strategy, creative storytelling and performance tech to drive player engagement and business growth"
        />

        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 4, lg: 6 }}
          sx={{ mb: { xs: "4rem", md: "6rem", lg: "8rem" } }}
        >
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} lg={4} key={testimonial.id}>
              <TestimonialCard
                id={testimonial.id}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                onReadMore={handleReadMore}
              />
            </Grid>
          ))}
        </Grid>

        {/* SECTION 3: Markets */}
        <StandardSection
          title="Markets"
          description="We combine data-driven strategy, creative storytelling and performance tech to drive player engagement and business growth"
        />

        {/* Mexico Market Info */}
        <MarketInfoSection
          id="mexico-market"
          title="iGaming in Mexico - Current Legal Status"
          subtitle="Partially Regulated Market"
          description="Governed by the Federal Gaming and Raffles Law (1947) and its regulation (2004). Only allowed with a license issued by SEGOB (Ministry of the Interior). Key Insights on the Mexican iGaming Market"
          rightContent={`Mexico is the second largest iGaming market in Latin America, after Brazil.
Estimated to generate over $1.5 billion USD annually, combining land-based and online operations.

Over 75% of online bets are placed via mobile devices.
Strong demand for:
-Sports betting (football, boxing, lucha libre, NFL)
-Online slots and classic casino games
Major sporting events`}
        />

        {/* Argentina Market Info */}
        <MarketInfoSection
          id="argentina-market"
          title="iGaming in Argentina - Current Legal Status"
          subtitle="Fragmented and provincially regulated market"
          description="No national iGaming law — each province regulates independently. Licences are issued by local gambling authorities, not at federal level. The City and Province of Buenos Aires have the most advanced online gambling frameworks"
          rightContent={`Top 3 iGaming market in LATAM, with high engagement in regulated provinces.
Buenos Aires (City & Province) account for over 80% of licensed activity.
Mobile-first: ~70% of bets placed via smartphones; desktop still used for casino games.
Strong player loyalty and repeated betting patterns.
Popular verticals: Football betting (Liga Profesional, Copa de la Liga, national team), slots with local themes and live casino.
Preferred payment methods: Mercado Pago, bank transfers, cash vouchers.
Traffic peaks during Superclásicos, Libertadores, and Argentina NT matches.`}
        />
      </Container>
    </Box>
  );
};
