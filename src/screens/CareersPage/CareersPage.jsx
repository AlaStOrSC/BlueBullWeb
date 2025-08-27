import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StandardSection } from "../../components/StandardSection";
import { SolutionCard } from "../../components/SolutionCard";
import { ReadMoreButton } from "../../components/ReadMoreButton";
import BackgroundImage from "../../assets/background-gradient.png";
import PlaceHolderImg from "../../assets/PlaceHolderImg.png";
import BlueTick from "../../assets/BlueTick.png";

export const CareersPage = () => {
  const { t } = useTranslation();

  const cultureValues = [
    {
      id: "curious",
      icon: BlueTick,
      title: "Curious",
      description: "You're eager to learn, experiment, and find smarter ways to work"
    },
    {
      id: "collaborative",
      icon: BlueTick,
      title: "Collaborative",
      description: "You thrive in a team and communicate with honesty and respect."
    },
    {
      id: "agile",
      icon: BlueTick,
      title: "Agile",
      description: "You welcome change, solve problems fast, and stay positive in a dynamic environment."
    },
    {
      id: "creative",
      icon: BlueTick,
      title: "Creative",
      description: "You bring fresh ideas to the table and aren't afraid to challenge the status quo."
    }
  ];

  const handleSeeOpenRoles = () => {
    // Redirect to Personio job board
    window.open("https://blue-bull-technology.jobs.personio.com/", "_blank");
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
        {/* Section 1: Working with BlueBull */}
        <StandardSection
          title="Working with BlueBull"
          description="Working at Blue Bull Tech means being part of a bold, fast-moving team that thrives on creativity, innovation, and collaboration. We're a growing company with big ambitions, and every person who joins us has a direct impact on our success.

Here, your ideas matter, your voice is heard, and your work shapes the future of iGaming and digital marketing across LATAM and beyond."
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: { xs: "4rem", md: "6rem", lg: "8rem" }
          }}
        >
          <ReadMoreButton
            onClick={handleSeeOpenRoles}
            text="SEE OPEN ROLES"
            sx={{
              mb: { xs: "2rem", md: "3rem", lg: "4rem" }
            }}
          />
          
          <Box
            component="img"
            src={PlaceHolderImg}
            alt="Working at BlueBull"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
              height: "auto",
              borderRadius: "clamp(0.5rem, 2vw, 1rem)",
              objectFit: "cover"
            }}
          />
        </Box>

        {/* Section 2: Our Culture */}
        <StandardSection
          title="Our Culture"
          description="Our culture is built on diversity, trust, and growth. We embrace different perspectives and believe our variety of backgrounds makes us stronger and sharper.

We move quickly, support each other, and celebrate wins as a team. Work-life balance matters to us: flexibility, autonomy, and well-being are part of how we operate every day."
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
            sx={{ 
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
              px: { xs: "1rem", sm: "2rem" }
            }}
          >
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={PlaceHolderImg}
                alt="Our Culture - Team Collaboration"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: { xs: "200px", sm: "250px", md: "300px", lg: "350px" },
                  borderRadius: "clamp(0.5rem, 2vw, 1rem)",
                  objectFit: "cover"
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={PlaceHolderImg}
                alt="Our Culture - Work Environment"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: { xs: "200px", sm: "250px", md: "300px", lg: "350px" },
                  borderRadius: "clamp(0.5rem, 2vw, 1rem)",
                  objectFit: "cover"
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Section 3: You need to be... */}
        <StandardSection
          title="You need to be..."
          description="If you thrive in a fast-paced, dynamic environment and love solving challenges with bold ideas, you'll fit right in."
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
            {cultureValues.map((value) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={6}
                lg={3} 
                key={value.id} 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "stretch"
                }}
              >
             <Box 
  sx={{
    "& .solution-card": {
      "&::before": {
        display: "none",
      },
      border: "none",
      background: "transparent",
    },
    "& .solution-card img": { 
      width: "2rem ",
      height: "2rem ",
    }
  }}
>
  <SolutionCard
    id={value.id}
    icon={value.icon}
    iconAlt={value.title}
    title={value.title}
    description={value.description}
  />
</Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 4: Ready to make your mark */}
        <StandardSection
          title="Ready to make your mark & take charge?"
          description="Check out our open roles and join the charge at Blue Bull Tech."
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: "2rem", md: "3rem", lg: "4rem" }
          }}
        >
          <ReadMoreButton
            onClick={handleSeeOpenRoles}
            text="SEE OPEN ROLES"
          />
        </Box>
      </Container>
    </Box>
  );
};
